# 🎉 PROYECTO SUPABASE: LUXELECTRICO (UNIT-01) ✅

Este documento hereda la configuración final y el estado del backend de producción para LuxEléctrico.

## 🔐 BÓVEDA DE APIS Y CREDENCIALES (HEREDADO)

| Servicio | Clave / Credencial |
| :--- | :--- |
| **Supabase URL** | `https://cbklczlvhnrnsayqycwi.supabase.co` |
| **Supabase Anon Key** | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNia2xjemx2aG5ybnNheXF5Y3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2Nzk4MDIsImV4cCI6MjA4MzI1NTgwMn0.T9MoRvY4L8PaUTb3g3T2ENMb03GdARfAB9aysr8IV5g` |
| **Supabase Service Key** | `sb_secret_9zNkK-PiTnUy3hnJId9pGw_RIpkR-p_` (Heredada de welux) |
| **Google API Key** | `AIzaSyDkEt5W1oAI7gYQu8A-cmSLkDbdwj5UpA8` |
| **Google Sheet ID** | `13IAFfjzd3iw9ZVbN6NuE7hzSYqGeSXVcj0lxumGbRwk` |
| **Google Service Account**| `rebeca-bot@my-project-obsidian-433908.iam.gserviceaccount.com` |
| **Resend API Key** | `re_W3T7idS4_5suWnnR5SQkRuMztkwktLfUW` |
| **DeepSeek API Key** | `sk-ee8de57e3144456aa0b13285ada8c0eb` |
| **Meta Token (WA)** | `EAATqDi8O0qIBQaNRxqO1pz0zhxPJsVagvXFNe7pKWYW8MXLpFwyGu4gID2wS11hnIDxBnJGVSZBSWKebQhwcCKUUbPbXar4VequGR5c1QqJaygVs8kO68dCxdUYEqDwgv6sGlFcabcHsMLgdtKG6nHM9a0xOIqkb6iDl6Fr7pZB5N3c4VPaEf3ZCbUa1gr1bAZDZD` |
| **User Admin** | `yoyo@welux.com` / `welux2026` |

## 📊 ESTRUCTURA DE TABLAS (CONFIGURADA)
1. **`user_progress`**: Seguimiento de logros y porcentajes por módulo.
2. **`exam_questions`**: Repositorio central de preguntas (PIFQU + NotebookLM).
3. **`interview_sessions`**: Registro de simulacros con evaluación de IA.
4. **`leaderboard`**: Ranking global de alumnos.
5. **`user_notes`**: Notas rápidas y recordatorios.
6. **`user_preferences`**: Configuración de tema e idioma.
7. **`function_logs`**: Logs de depuración para Edge Functions.

## 🛡️ SEGURIDAD Y PERFORMANCE
- **RLS (Row Level Security)**: Habilitado en las 7 tablas.
- **Realtime**: Activo para actualizaciones instantáneas en el Dashboard.

## 🚀 FASE 3: INTEGRACIÓN IA (PRÓXIMAMENTE)
- Despliegue de Edge Function `gemini-chat` para evaluación en tiempo real.
- Conexión con el simulador de entrevistas.

---
*Configuración heredada y compilada el 06 de Enero de 2026.*
