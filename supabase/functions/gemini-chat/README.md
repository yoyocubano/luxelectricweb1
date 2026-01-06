# 🔐 Supabase Edge Function: gemini-chat

## Descripción
Esta Edge Function actúa como proxy seguro entre el cliente Angular y la API de Google Gemini. 
La API key de Gemini se almacena en Supabase Secrets y nunca se expone al cliente.

## Despliegue

### Prerequisitos
1. Instalar Supabase CLI: `npm install -g supabase`
2. Iniciar sesión: `supabase login`
3. Vincular proyecto: `supabase link --project-ref cbklczlvhnrnsayqycwi`

### Configurar API Key como Secret
```bash
# Añadir la API key de Gemini como secret seguro
supabase secrets set GEMINI_API_KEY=AIzaSyDkEt5W1oAI7gYQu8A-cmSLkDbdwj5UpA8
```

### Desplegar la función
```bash
# Desde la raíz del proyecto
supabase functions deploy gemini-chat
```

### Verificar despliegue
```bash
# Listar funciones desplegadas
supabase functions list
```

## Uso desde el Cliente

Una vez desplegada, actualizar `ai.service.ts`:
```typescript
// Cambiar de:
private useFallback = true;

// A:
private useFallback = false;
```

## Endpoint
```
POST https://cbklczlvhnrnsayqycwi.supabase.co/functions/v1/gemini-chat
```

### Headers
```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer YOUR_SUPABASE_ANON_KEY"
}
```

### Body
```json
{
  "messages": [
    { "role": "user", "content": "Explícame qué es un diferencial" }
  ]
}
```

### Response
```json
{
  "success": true,
  "response": "¡Asere! El diferencial es un dispositivo..."
}
```

## Seguridad

✅ API key de Gemini almacenada en Supabase Secrets (nunca expuesta)
✅ CORS configurado para permitir peticiones del cliente
✅ Validación de estructura de mensajes
✅ Manejo de errores con mensajes amigables

---
*Última actualización: 2026-01-06*
