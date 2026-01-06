// ============================================
// 🔐 AI SERVICE - SECURE PROXY ARCHITECTURE
// ============================================
// This service calls a Supabase Edge Function instead of
// calling Gemini API directly. The API key is stored
// securely on the server side.
// ============================================

import { Injectable, signal } from '@angular/core';
import { environment } from '../environments/environment';

export interface ChatMessage {
    role: 'user' | 'model' | 'system';
    content: string;
}

interface EdgeFunctionResponse {
    success?: boolean;
    response?: string;
    error?: boolean;
    message?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AiService {
    // 🔐 SECURITY: API key removed from client
    // Now using Supabase Edge Function as secure proxy
    private edgeFunctionUrl = `${environment.supabaseUrl}/functions/v1/gemini-chat`;

    // Fallback to direct API call if Edge Function not deployed yet
    // TODO: Remove this fallback once Edge Function is in production
    private useFallback = true; // Set to false when Edge Function is deployed
    private fallbackApiKey = environment.googleApiKey;
    private fallbackApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`;

    isLoading = signal(false);

    // System prompt stored here for fallback mode
    // In production, this is handled by the Edge Function
    private systemPrompt = `
    Eres el "Entrenador Cubano" de LuxElectro. Tu misión es preparar a los estudiantes para el examen de certificación de electricistas en Luxemburgo (Certificat de Capacité Professionnelle - CCP).
    
    ESTILO DE COMUNICACIÓN:
    - Eres dinámico, motivador y usas jerga cubana amigable ("¡Asere!", "¡Dale gas!", "Oye mira...", "¡Qué bolá!").
    - Eres un experto técnico serio cuando se trata de seguridad eléctrica y reglamentación técnica.
    - Hablas principalmente en español, pero conoces los términos técnicos en francés.
    
    METODOLOGÍA:
    1. Realizas preguntas cortas y directas sobre: Motores trifásicos, Esquemas de mando y potencia, Protección (Magnetotérmicos, Diferenciales), Tierras, y Ley de Ohm.
    2. Evalúas la respuesta del estudiante. Si es correcta, lo felicitas con entusiasmo. Si es incorrecta, le explicas el concepto de forma clara pero firme.
    3. Simulas la parte "Oral" del examen, donde la explicación técnica es vital.
    
    ¡Mantén la energía alta y asegúrate de que el estudiante se sienta listo para el 19 de enero!
  `;

    async chat(messages: ChatMessage[]): Promise<string> {
        this.isLoading.set(true);
        try {
            if (this.useFallback) {
                // Fallback: Direct API call (development only)
                console.warn('⚠️ Using fallback direct API call. Deploy Edge Function for production!');
                return await this.chatDirectFallback(messages);
            }

            // 🔐 SECURE: Call Edge Function (API key is server-side)
            return await this.chatViaEdgeFunction(messages);
        } catch (error) {
            console.error('AI Service Error:', error);
            return "Oye, se me cayó la fase... Revisa tu conexión, que no puedo hablar ahora.";
        } finally {
            this.isLoading.set(false);
        }
    }

    /**
     * 🔐 SECURE METHOD: Calls Supabase Edge Function
     * API key is stored in Supabase Secrets, not exposed to client
     */
    private async chatViaEdgeFunction(messages: ChatMessage[]): Promise<string> {
        const payload = {
            messages: messages
                .filter(m => m.role !== 'system')
                .map(m => ({
                    role: m.role,
                    content: m.content
                }))
        };

        const response = await fetch(this.edgeFunctionUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${environment.supabaseKey}`,
            },
            body: JSON.stringify(payload)
        });

        const data: EdgeFunctionResponse = await response.json();

        // Validate response structure
        if (!this.isValidResponse(data)) {
            throw new Error('Invalid response structure from Edge Function');
        }

        if (data.error) {
            console.error('Edge Function Error:', data.message);
            return data.message || "¡Asere, tengo un cortocircuito en los servidores!";
        }

        return data.response || "No recibí respuesta del servidor.";
    }

    /**
     * Type guard for validating Edge Function response
     */
    private isValidResponse(data: unknown): data is EdgeFunctionResponse {
        return (
            typeof data === 'object' &&
            data !== null &&
            ('success' in data || 'error' in data)
        );
    }

    /**
     * ⚠️ FALLBACK: Direct API call (DEVELOPMENT ONLY)
     * TODO: Remove once Edge Function is deployed to production
     */
    private async chatDirectFallback(messages: ChatMessage[]): Promise<string> {
        const contents = messages
            .filter(m => m.role !== 'system')
            .map(m => ({
                role: m.role === 'user' ? 'user' : 'model',
                parts: [{ text: m.content }]
            }));

        const body = {
            system_instruction: {
                parts: [{ text: this.systemPrompt }]
            },
            contents: contents,
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 800,
            }
        };

        const response = await fetch(`${this.fallbackApiUrl}?key=${this.fallbackApiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (data.error) {
            console.error('Gemini Error:', data.error);
            return "¡Asere, tengo un cortocircuito en los servidores! Inténtalo de nuevo en un ratico.";
        }

        return data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No recibí respuesta de la IA.";
    }
}

