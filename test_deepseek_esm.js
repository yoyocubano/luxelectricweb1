import https from 'https';

const apiKey = "sk-ee8de57e3144456aa0b13285ada8c0eb";

const data = JSON.stringify({
    model: "deepseek-chat",
    messages: [{ role: "user", content: "Hola, responde solo 'CONECTADO'." }],
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

console.log("🚀 Probando conexión con DeepSeek (ESM)...");

const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
        if (res.statusCode === 200) {
            const json = JSON.parse(body);
            console.log("✅ ¡ÉXITO! Respuesta de la IA:", json.choices[0].message.content);
        } else {
            console.log("❌ ERROR:", res.statusCode);
            console.log("Cuerpo del error:", body);
        }
    });
});

req.on('error', (error) => {
    console.error("❌ ERROR DE RED:", error);
});

req.write(data);
req.end();
