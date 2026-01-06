# 📘 DOCUMENTACIÓN DEL SISTEMA: LUXELECTRICO (UNIT-01) 🇱🇺

## 🚀 Visión General
LuxEléctrico es una plataforma educativa avanzada diseñada para preparar a alumnos para el examen **PIFQU (Brevet de Maîtrise)** en Luxemburgo. Combina teoría, simuladores industriales (KNX, CADe SIMU) y gamificación para un aprendizaje acelerado.

## 🛠️ Stack Tecnológico
- **Frontend**: Angular 18+ (Signals, Standalone Components).
- **Styling**: Tailwind CSS + Glassmorphism Premium.
- **Backend**: Supabase (PostgreSQL + RLS + Realtime).
- **IA**: Google Gemini (vía Edge Functions en Supabase).
- **Simulación**: Lógica de Bus KNX personalizada, SimcirJS (planeado).

## 📂 Arquitectura de Archivos (Claves)
- `/src/components/dashboard`: Panel de control principal con indicadores de progreso.
- `/src/components/games/simulador-logico`: El "corazón" industrial. Simula compuertas lógicas, contactores, relés y el monitor de bus KNX.
- `/src/services/progress.service`: Gestor de estado de usuario y sincronización con la nube.
- `/src/environments/environment.ts`: Configuración de conexión a Supabase.
- `/docs/TAREAS_DESARROLLO.md`: Roadmap maestro del proyecto.
- `/docs/SUPABASE_CONFIG_FINAL.md`: Bóveda de credenciales y APIs.

## 🚌 El Sistema KNX Integrado
El simulador lógico emula el software ETS de KNX:
- **Telegramas**: Muestra tramas de datos `GroupValueWrite`.
- **Direcciones**: Soporta estructura `1/1/1` (Direcciones de Grupo).
- **Monitor de Bus**: Consola en tiempo real para debugging de la instalación virtual.

## 🔬 Enfoque STEM
El laboratorio incluye un "Visor de Potencial" que muestra la tensión (230V / 0V) al pasar el ratón, permitiendo a los alumnos visualizar el flujo eléctrico sin riesgos.

## 🔐 Mantenimiento y Seguridad
1. **Credenciales**: Todas las claves se encuentran centralizadas en `/docs/SUPABASE_CONFIG_FINAL.md`.
2. **Base de Datos**: Usa el script SQL en Supabase para recrear las tablas si es necesario.
3. **Despliegue**: Compatible con Vercel, Netlify o Cloudflare Pages.

---
*Documentación generada por Antigravity AI.*
