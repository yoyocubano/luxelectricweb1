# 📋 Lista de Tareas - LuxEléctrico Web App

**Fecha de creación:** 2026-01-06  
**Fecha del examen:** 19 de enero  
**Estado del proyecto:** En desarrollo activo

---

## 🎯 Visión General

La aplicación LuxEléctrico es un asistente de preparación para el examen de certificación de electricistas en Luxemburgo. Incluye teoría, práctica, juegos interactivos y simulador de exámenes, con un "entrenador cubano" que hace el aprendizaje más dinámico.

---

## ✅ Estado Actual - Lo que YA funciona

| Componente | Estado | Descripción |
|------------|--------|-------------|
| Dashboard | ✅ Funcional | Cuenta regresiva, plan de estudio diario, progreso |
| Teoría | ✅ Funcional | Módulos de motores, fórmulas, instalaciones, esquemas |
| Simulador | ✅ Funcional | 50+ preguntas de exámenes (2017-2024) con filtro por año |
| Práctica | ✅ Funcional | Taller Virtual con 4 cabinas interactivas (A, B, C, D) |
| Juegos - Voltaje Veloz | ✅ Funcional | Preguntas bajo presión de tiempo |
| Juegos - Maestro Montaje | ✅ Funcional | Integrado en Cabina C (Cuadro de Distribución) |
| Juegos - Cableado Maestro | ✅ Funcional | Integrado en Cabinas A y B (Motores y KNX) |
| Sistema i18n | ✅ Funcional | 6 idiomas (ES, FR, EN, DE, PT, LB) |
| ProgressService | ✅ Funcional | localStorage para persistencia |

---

## 📝 LISTA DE TAREAS (Por orden de prioridad)

### 🔴 FASE 1: Correcciones Críticas (Día 1)

- [ ] **T1.1** Verificar que la app compila sin errores
  - Ejecutar `npm install && npm run dev`
  - Corregir errores de compilación si los hay

- [x] **T1.2** Corregir bloqueos en los juegos ✅
  - Revisar Cableado Maestro (se reportó que se bloquea)
  - Añadir botones de reinicio y navegación a TODOS los juegos
  - Mejorar el manejo de errores

- [x] **T1.3** Verificar la cuenta regresiva del examen ✅
  - Confirmar que calcula correctamente días hasta el 19 de enero
  - Ajustar para el año correcto (2026)

### 🟠 FASE 2: Contenido y Recursos (Días 2-3)

- [ ] **T2.1** Organizar recursos en carpetas
  ```
  /assets
    /images
      /schematics    (esquemas de potencia y mando)
      /components    (fotos de componentes)
      /exams         (imágenes de exámenes pasados)
    /pdfs
      /exams         (PDFs de exámenes)
      /theory        (material de teoría)
  ```

- [ ] **T2.2** Integrar imágenes de esquemas reales
  - Esquema de potencia para arranque estrella-triángulo
  - Esquema de mando para arranque estrella-triángulo
  - Esquema de inversión de giro
  - Diagramas de instalación de cuadros eléctricos

- [x] **T2.3** Actualizar URLs de imágenes en el código ✅
  - Reemplazar URLs externas de Google por imágenes locales
  - Asegurar que todas las imágenes cargan correctamente

### 🟡 FASE 3: Mejoras de Juegos (Días 4-5)

- [x] **T3.1** Mejorar "Voltaje Veloz" ✅
  - Añadir más preguntas de los exámenes pasados
  - Desbloquear logro "Voltaje Perfecto" al obtener 10/10
  - Añadir efectos visuales y sonidos

- [ ] **T3.2** Completar "Maestro del Montaje"
  - Implementar drag-and-drop de componentes
  - Añadir validación de orden correcto
  - Integrar medidor de limpieza
  - Conectar con ProgressService

- [x] **T3.3** Mejorar "Cableado Maestro" ✅
  - Añadir visualización de cables conectados (líneas SVG)
  - Feedback visual más claro para conexiones correctas/incorrectas
  - Mostrar nombres de terminales en hover
  - Esquema de referencia al lado

### 🟢 FASE 4: Sección Práctica Interactiva (Días 6-7)

- [x] **T4.1** Convertir guía de práctica en checklist interactivo ✅
  - Cada paso se puede marcar como completado
  - Al completar paso, sumar progreso
  - Animación de check ✓

- [x] **T4.2** Añadir más guías prácticas ✅
  - Cabina A: Motores (Arranque estrella-triángulo)
  - Cabina B: Domótica KNX (Bus Verde)
  - Cabina C: Cuadro de Distribución (DIN Rail)
  - Cabina D: Lógica Programada (LOGO!)

- [ ] **T4.3** Integrar imágenes paso a paso
  - Fotos reales de cada etapa del montaje
  - Diagramas explicativos

### 🔵 FASE 5: Traducciones Completas (Día 8)

- [x] **T5.1** Completar traducciones de teoría ✅
  - Traducir todo el contenido de theory.component.html
  - Actualizar archivos i18n para cada idioma

- [x] **T5.2** Traducir preguntas del simulador ✅
  - Crear versión francesa de las 50+ preguntas
  - Integrar selector de idioma en simulador (Usa I18nService global)

- [x] **T5.3** Traducir textos de juegos ✅
  - Mensajes de instrucciones
  - Mensajes de feedback
  - Pantalla de resultados

### 🟣 FASE 6: Backend y Persistencia Remota (CRÍTICO)

- [x] **T6.1** Configuración Inicial de Supabase ✅
  - Instalar @supabase/supabase-js
  - Crear `environment.ts` con API Keys (Nuevo Proyecto: `cbklczlvhnrnsayqycwi`)
  - Crear `SupabaseService` para conexión centralizada

- [x] **T6.2** Sincronización de Progreso (Dar vida a las tarjetas) ✅
  - Hacer que las tarjetas del Dashboard consuman datos de la tabla `user_progress`
  - Implementar método `upsert` en `ProgressService` para sincronizar local -> nube
  - Validar racha y logros en tiempo real con Supabase

- [x] **T6.3** Banco de Preguntas Dinámico ✅
  - Ejecutar SQL para crear tabla `exam_questions`
  - Implementar `DatabaseService` para fetch de preguntas
  - Migrar las 50 preguntas del código al backend (Seed Data implementado en botón 'Sincronizar')
  - **Extra:** Migrar preguntas del juego "Voltaje Veloz" a Supabase (Categoría: GAME_VV) ✅

### 🧩 FASE 7: Simuladores y Experiencia Pro (Días 10-12)

- [ ] **T7.1** Simulador Lógico (KNX/PLC)
  - Crear interfaz de puertas lógicas (AND, OR, NOT)
  - Validación de tabla de verdad

- [ ] **T7.2** Pulido Visual y Feedback "Premium"
  - Integrar **GSAP** para animaciones fluidas al abrir módulos
  - Añadir feedback sensorial (vibración en móvil, sonidos suaves de clic)
  - Implementar efectos de Glassmorphism realzado y micro-interacciones

### 🤖 FASE 8: Inteligencia Artificial (Día 13-14)

- [ ] **T8.1** Integración de Google Gemini API
  - Configurar **Supabase Edge Functions** para hablar de forma segura con Gemini
  - Crear prototipo del "Entrenador Cubano" para examen oral
  - Implementar transcripción de voz a texto (STT) para la entrevista

- [ ] **T8.2** Historial de Entrevistas
  - Guardar resultados y feedback de la IA en la tabla `interview_sessions`
  - Mostrar gráfico de mejora en el Dashboard

### 📦 FASE 9: Migración de Contenido (De Maqueta a Real)

- [ ] **T9.1 "Independencia de Imágenes"**
  - Localizar URLs de `lh3.googleusercontent.com` y `storage.googleapis.com` en el código.
  - Descargar imágenes y subirlas al bucket `exercise-images` de Supabase.
  - Reemplazar enlaces en: `Dashboard`, `Games`, `Theory`, `Simulator`.

- [x] **T9.2 "Centralización de Preguntas"** ✅
  - Mover preguntas de "Voltaje Veloz" (`questions.ts`) a la base de datos Supabase.
  - Mover preguntas del simulador (`simulator.component.ts`) a la tabla `exam_questions`.

- [ ] **T9.3 "Activación de PDFs y Material"**
  - Subir PDFs de `assets/pdfs/` al bucket `exam-pdfs` de Supabase.
  - Convertir botones de "Descargar PDF" (ahora estáticos) en descargas reales desde la nube.

- [ ] **T9.4 "Desacoplamiento de Teoría"**
  - Extraer los textos largos de `theory.component.html` y `practice.component.html`.
  - Implementar carga dinámica de contenido según el tema seleccionado.

### 🏭 FASE 10: Integración Industrial (Inspirado en CADe SIMU / QElectroTech)

- [x] **T10.1 "Librería de Símbolos Pro"** ✅
  - Integrar SVGs con simbología industrial estándar.
  - Usar nomenclatura técnica (L1, L2, L3, U, V, W).

- [x] **T10.2 "Simulador de Potencia (Motor Control)"** ✅
  - Creado sistema de bornes interactivos para motores trifásicos.
  - Lógica de secuencia de fases y puente estrella.

- [ ] **T10.3 "Lectura de Planos Reales"**
  - Crear un visor que permita marcar sobre un plano real los puntos de medición de tensión.

### 🔬 FASE 12: LuxLab STEM (Aprendizaje Interactivo)

- [ ] **T12.1 "El Juego del Ohmímetro"**
  - Desafío de medir resistencias en serie/paralelo usando un multímetro virtual.
  - Basado en librerías de simulación física STEM.

- [ ] **T12.2 "Cazador de Cortocircuitos"**
  - Mapa de instalación 2D donde encontrar derivaciones a tierra usando un megger.

- [ ] **T12.3 "SandBox de Potencia"**
  - Implementar el motor de `CircuitJS1` para simulaciones complejas de alterna.

---
 
 ## 🔧 Checklist de Acción para el Usuario (Supabase)
 
1. [x] **Crear Proyecto**: Nombre "LuxElectrico" ✅ (ID: `cbklczlvhnrnsayqycwi`)
2. [x] **SQL Editor**: Pegar el script de creación de las tablas (`user_progress`, `exam_questions`, `interview_sessions`, etc.) ✅
3. [x] **API Keys**: Obtener URL y Anon Key ✅
4. [x] **Storage**: Crear buckets `exam-pdfs` y `exercise-images` como Públicos ✅
 
 ---
 
 *¡Asere, el plan está trazado. Dale gas a ese Supabase que lo demás corre por mi cuenta!* ⚡🇨🇺
