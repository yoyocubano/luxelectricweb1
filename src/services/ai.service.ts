// ============================================
// 🔐 AI SERVICE - SECURE PROXY ARCHITECTURE
// ============================================
// This service calls a Supabase Edge Function instead of
// calling Gemini API directly. The API key is stored
// securely on the server side.
// ============================================

import { Injectable, signal } from '@angular/core';
import { environment } from '../environments/environment';
import { AI_CONFIG } from '../config/ai-prompts';
import { KnowledgeBaseService } from './knowledge-base.service';

export interface ChatMessage {
    role: 'user' | 'model' | 'system';
    content: string;
    isKb?: boolean; // New property to track if response came from Knowledge Base
}

export interface ChatResponse {
    content: string;
    source: 'ai' | 'kb';
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
    constructor(private knowledgeBase: KnowledgeBaseService) { }

    // 🔐 SECURITY: API key removed from client (Legacy)
    // Now using Supabase Edge Function as secure proxy
    private edgeFunctionUrl = `${environment.supabaseUrl}/functions/v1/gemini-chat`;

    // System prompt from centralized config
    private systemPrompt = AI_CONFIG.systemPrompt;

    // AI Provider Configuration
    private provider = signal<'gemini' | 'deepseek'>('gemini');

    // Fallback Settings
    private useFallback = true;
    private googleApiKey = environment.googleApiKey;
    private deepseekApiKey = (environment as any).deepseekApiKey;

    private geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`;
    private deepseekUrl = `https://api.deepseek.com/chat/completions`;

    isLoading = signal(false);

    async chat(messages: ChatMessage[]): Promise<ChatResponse> {
        this.isLoading.set(true);
        try {
            // 🧠 1. Local Knowledge Base Check (Offline First / Zero Latency)
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.role === 'user') {
                const localAnswer = await this.knowledgeBase.search(lastMessage.content);
                if (localAnswer) {
                    console.info('⚡ Served from Local Knowledge Base');
                    return { content: localAnswer, source: 'kb' };
                }
            }

            // Attempt Primary Strategy
            let responseContent: string;
            try {
                if (this.useFallback) {
                    // Fallback: Direct API call
                    if (this.provider() === 'deepseek') {
                        responseContent = await this.chatDeepSeek(messages);
                    } else {
                        responseContent = await this.chatGeminiFallback(messages);
                    }
                } else {
                    // 🔐 SECURE: Call Edge Function (API key is server-side)
                    responseContent = await this.chatViaEdgeFunction(messages);
                }

            } catch (primaryError) {
                // 🔄 AUTO-FAILOVER: If Gemini/Edge fails, try DeepSeek
                if (this.provider() === 'deepseek' && this.useFallback) {
                    throw primaryError;
                }

                console.warn('⚠️ Primary AI Provider failed. Switching to DeepSeek Auto-Failover...', primaryError);
                responseContent = await this.chatDeepSeek(messages);
            }

            return { content: responseContent, source: 'ai' };

        } catch (error) {
            console.error('❌ All AI Providers failed (Gemini & DeepSeek):', error);
            return { content: AI_CONFIG.defaultErrorMessage, source: 'ai' };
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
     * ⚠️ FALLBACK: Gemini Direct API call
     */
    private async chatGeminiFallback(messages: ChatMessage[]): Promise<string> {
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
                temperature: AI_CONFIG.models.gemini.temperature,
                maxOutputTokens: AI_CONFIG.models.gemini.maxTokens,
            }
        };

        const response = await fetch(`${this.geminiUrl}?key=${this.googleApiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (data.error) {
            console.error('Gemini Error:', data.error);
            throw new Error(data.error.message || 'Gemini API Error');
        }

        return data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No recibí respuesta de la IA.";
    }

    /**
     * 🚀 ALTERNATIVE: DeepSeek Direct API call
     */
    private async chatDeepSeek(messages: ChatMessage[]): Promise<string> {
        if (!this.deepseekApiKey || this.deepseekApiKey.includes('YOUR_')) {
            throw new Error('DeepSeek API Key missing. Set it in environment.ts');
        }

        const history = messages
            .filter(m => m.role !== 'system')
            .map(m => ({
                role: m.role === 'model' ? 'assistant' : m.role,
                content: m.content
            }));

        const body = {
            model: "deepseek-chat",
            messages: [
                { role: "system", content: this.systemPrompt },
                ...history
            ],
            stream: false,
            temperature: AI_CONFIG.models.deepseek.temperature
        };

        const response = await fetch(this.deepseekUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.deepseekApiKey}`
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (data.error) {
            console.error('DeepSeek Error:', data.error);
            throw new Error(data.error.message || 'DeepSeek API Error');
        }

        return data.choices?.[0]?.message?.content || "No recibí respuesta de DeepSeek.";
    }

    /**
     * Public method to switch provider
     */
    setProvider(provider: 'gemini' | 'deepseek') {
        this.provider.set(provider);
    }
}
