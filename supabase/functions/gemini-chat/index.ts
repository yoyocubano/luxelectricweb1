// ============================================
// 🔐 SUPABASE EDGE FUNCTION: GEMINI CHAT PROXY
// ============================================
// This function acts as a secure proxy between the
// Angular client and the Google Gemini API.
// The API key is stored securely in Supabase secrets.
// ============================================

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

// CORS headers for Angular client
const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// System prompt for the Cuban Trainer personality
const SYSTEM_PROMPT = `
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

interface ChatMessage {
    role: "user" | "model";
    content: string;
}

interface RequestBody {
    messages: ChatMessage[];
}

serve(async (req: Request) => {
    // Handle CORS preflight
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        // Get API key from Supabase secrets (secure, not exposed to client)
        const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");

        if (!GEMINI_API_KEY) {
            throw new Error("GEMINI_API_KEY not configured in Supabase secrets");
        }

        // Parse request body
        const { messages }: RequestBody = await req.json();

        if (!messages || !Array.isArray(messages)) {
            throw new Error("Invalid request: messages array required");
        }

        // Transform messages to Gemini format
        const contents = messages.map((m) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }],
        }));

        // Build Gemini API request
        const geminiBody = {
            system_instruction: {
                parts: [{ text: SYSTEM_PROMPT }],
            },
            contents: contents,
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 800,
            },
        };

        // Call Gemini API (server-side, API key is secure)
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(geminiBody),
        });

        const data = await response.json();

        // Handle Gemini API errors
        if (data.error) {
            console.error("Gemini API Error:", data.error);
            return new Response(
                JSON.stringify({
                    error: true,
                    message: "¡Asere, tengo un cortocircuito en los servidores! Inténtalo de nuevo.",
                }),
                {
                    status: 500,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
                }
            );
        }

        // Extract response text
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "Oye, se me cayó la fase... Revisa tu conexión.";

        return new Response(
            JSON.stringify({
                success: true,
                response: responseText
            }),
            {
                status: 200,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
        );

    } catch (error) {
        console.error("Edge Function Error:", error);
        return new Response(
            JSON.stringify({
                error: true,
                message: error instanceof Error ? error.message : "Error interno del servidor",
            }),
            {
                status: 500,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
        );
    }
});
