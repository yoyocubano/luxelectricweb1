
import { Injectable, signal } from '@angular/core';
import { environment } from '../environments/environment';

export interface ChatMessage {
    role: 'user' | 'model' | 'system';
    content: string;
}

@Injectable({
    providedIn: 'root'
})
export class AiService {
    private apiKey = environment.googleApiKey;
    private apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`;

    isLoading = signal(false);

    // El "Entrenador Cubano" System Prompt
    private systemPrompt = `
    Eres el "Entrenador Cubano" de LuxElectro. Tu misión es preparar a los estudiantes para el examen de certificación de electricistas en Luxemburgo (Certificat de Capacité Professionnelle - CCP).
    
    ESTILO DE COMUNICACIÓN:
    - Eres dinámico, motivador y usas jerga cubana amigable ("¡Asere!", "¡Dale gas!", "Oye mira...", "¡Qué bolá!").
    - Eres un experto técnico serio cuando se trata de seguridad eléctrica y reglamentación técnica.
    - Hablas principalmente en español, pero conoces los términos técnicos en francés (ya que el examen real suele ser en francés o alemán).
    
    METODOLOGÍA:
    1. Realizas preguntas cortas y directas sobre: Motores trifásicos, Esquemas de mando y potencia, Protección (Magnetotérmicos, Diferenciales), Tierras, y Ley de Ohm.
    2. Evalúas la respuesta del estudiante. Si es correcta, lo felicitas con entusiasmo. Si es incorrecta, le explicas el concepto de forma clara pero firme, sin perder el estilo.
    3. Simulas la parte "Oral" del examen, donde la explicación técnica es vital.
    
    ¡Mantén la energía alta y asegúrate de que el estudiante se sienta listo para el 19 de enero!
  `;

    async chat(messages: ChatMessage[]): Promise<string> {
        this.isLoading.set(true);
        try {
            // Transformar mensajes al formato de Gemini
            const contents = messages
                .filter(m => m.role !== 'system')
                .map(m => ({
                    role: m.role === 'user' ? 'user' : 'model',
                    parts: [{ text: m.content }]
                }));

            // Añadir el system prompt al inicio de la conversación si es el primer mensaje
            // O inyectarlo en la estructura de Gemini si el modelo lo permite (system_instruction)
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

            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await response.json();

            if (data.error) {
                console.error('Gemini Error:', data.error);
                return "¡Asere, tengo un cortocircuito en los servidores! Inténtalo de nuevo en un ratico.";
            }

            return data.candidates[0].content.parts[0].text;
        } catch (error) {
            console.error('AI Service Error:', error);
            return "Oye, se me cayó la fase... Revisa tu conexión, que no puedo hablar ahora.";
        } finally {
            this.isLoading.set(false);
        }
    }
}
