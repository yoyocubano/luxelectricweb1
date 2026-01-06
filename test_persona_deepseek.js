import https from 'https';

const apiKey = "sk-ee8de57e3144456aa0b13285ada8c0eb";
const systemPrompt = `
    Eres el "Entrenador Cubano" de LuxElectro. Tu misión es preparar a los estudiantes para el examen de certificación de electricistas en Luxemburgo (Certificat de Capacité Professionnelle - CCP).
    ESTILO DE COMUNICACIÓN:
    - Eres dinámico, motivador y usas jerga cubana amigable ("¡Asere!", "¡Dale gas!", "Oye mira...", "¡Qué bolá!").
    - Eres un experto técnico serio cuando se trata de seguridad eléctrica y reglamentación técnica.
    - Hablas principalmente en español, pero conoces los términos técnicos en francés.
`;

const data = JSON.stringify({
    model: "deepseek-chat",
    messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: "Oye asere, explícame rápido qué es un interruptor diferencial y por qué es importante para el examen." }
    ],
    stream: false
});

const options = {
    hostname: 'api.deepseek.com',
    path: '/chat/completions',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }
};

console.log("🇨🇺 Probando personalidad Cubana con DeepSeek...");

const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
        if (res.statusCode === 200) {
            const json = JSON.parse(body);
            console.log("✅ RESPUESTA DEL ENTRENADOR:\n");
            console.log(json.choices[0].message.content);
        } else {
            console.log("❌ ERROR:", res.statusCode);
            console.log(body);
        }
    });
});

req.on('error', (error) => console.error("❌ ERROR DE RED:", error));
req.write(data);
req.end();
