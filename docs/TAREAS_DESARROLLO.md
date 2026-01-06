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
| Práctica | ⚠️ Básico | Guía de montaje de motor (estática) |
| Juegos - Voltaje Veloz | ✅ Funcional | Preguntas bajo presión de tiempo |
| Juegos - Maestro Montaje | ⚠️ Parcial | Lógica básica implementada |
| Juegos - Cableado Maestro | ⚠️ Parcial | Lógica de conexiones implementada |
| Sistema i18n | ✅ Funcional | 6 idiomas (ES, FR, EN, DE, PT, LB) |
| ProgressService | ✅ Funcional | localStorage para persistencia |

---

## 📝 LISTA DE TAREAS (Por orden de prioridad)

### 🔴 FASE 1: Correcciones Críticas (Día 1)

- [ ] **T1.1** Verificar que la app compila sin errores
  - Ejecutar `npm install && npm run dev`
  - Corregir errores de compilación si los hay

- [ ] **T1.2** Corregir bloqueos en los juegos
  - Revisar Cableado Maestro (se reportó que se bloquea)
  - Añadir botones de reinicio y navegación a TODOS los juegos
  - Mejorar el manejo de errores

- [ ] **T1.3** Verificar la cuenta regresiva del examen
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

- [ ] **T2.3** Actualizar URLs de imágenes en el código
  - Reemplazar URLs externas de Google por imágenes locales
  - Asegurar que todas las imágenes cargan correctamente

### 🟡 FASE 3: Mejoras de Juegos (Días 4-5)

- [ ] **T3.1** Mejorar "Voltaje Veloz"
  - Añadir más preguntas de los exámenes pasados
  - Desbloquear logro "Voltaje Perfecto" al obtener 10/10
  - Añadir efectos visuales y sonidos

- [ ] **T3.2** Completar "Maestro del Montaje"
  - Implementar drag-and-drop de componentes
  - Añadir validación de orden correcto
  - Integrar medidor de limpieza
  - Conectar con ProgressService

- [ ] **T3.3** Mejorar "Cableado Maestro"
  - Añadir visualización de cables conectados (líneas SVG)
  - Feedback visual más claro para conexiones correctas/incorrectas
  - Mostrar nombres de terminales en hover
  - Esquema de referencia al lado

### 🟢 FASE 4: Sección Práctica Interactiva (Días 6-7)

- [ ] **T4.1** Convertir guía de práctica en checklist interactivo
  - Cada paso se puede marcar como completado
  - Al completar paso, sumar progreso
  - Animación de check ✓

- [ ] **T4.2** Añadir más guías prácticas
  - Montaje de tablero eléctrico
  - Instalación de sistema de iluminación con detector
  - Configuración KNX básica
  - Instalación de timbre con transformador

- [ ] **T4.3** Integrar imágenes paso a paso
  - Fotos reales de cada etapa del montaje
  - Diagramas explicativos

### 🔵 FASE 5: Traducciones Completas (Día 8)

- [ ] **T5.1** Completar traducciones de teoría
  - Traducir todo el contenido de theory.component.html
  - Actualizar archivos i18n para cada idioma

- [ ] **T5.2** Traducir preguntas del simulador
  - Crear versión francesa de las 50+ preguntas
  - Integrar selector de idioma en simulador

- [ ] **T5.3** Traducir textos de juegos
  - Mensajes de instrucciones
  - Mensajes de feedback
  - Pantalla de resultados

### 🟣 FASE 6: Backend y Persistencia (Días 9-10)

- [ ] **T6.1** Mejorar ProgressService
  - Racha de estudio diaria
  - Historial de sesiones
  - Estadísticas detalladas

- [ ] **T6.2** Implementar sistema de logros
  - Desbloqueo de logros por acciones específicas
  - Notificaciones de logro desbloqueado
  - Vista de todos los logros en dashboard

- [ ] **T6.3** (Opcional) Integrar Supabase
  - Autenticación de usuarios
  - Sincronización de progreso en la nube
  - Leaderboard

### ⚫ FASE 7: Pulido Final (Días 11-13)

- [ ] **T7.1** Hacer todo responsive
  - Probar en móvil, tablet, desktop
  - Ajustar menú de navegación móvil
  - Optimizar layouts para pantallas pequeñas

- [ ] **T7.2** Añadir animaciones y transiciones
  - Micro-animaciones para mejor UX
  - Transiciones entre páginas
  - Efectos hover en tarjetas

- [ ] **T7.3** Optimización de rendimiento
  - Lazy loading de imágenes
  - Optimizar bundle de producción

- [ ] **T7.4** PWA (Progressive Web App)
  - Añadir manifest.json
  - Service worker para uso offline
  - Iconos de app

---

## 📚 Exámenes Integrados

| Año | Tipo | Estado |
|-----|------|--------|
| 2017-2018 | PIFQU DAP ELF | ✅ 10 preguntas |
| 2018-2019 | PIFQU DAP ELF | ✅ 10 preguntas |
| 2019-2020 | PIIQU DAP ELF | ✅ 10 preguntas |
| 2020-2021 | PIFQU DAP ELF | ✅ 10 preguntas |
| 2023-2024 | PIFQU DAP Theorie | ✅ 10 preguntas |

---

## 🎮 Estructura de Juegos

### Voltaje Veloz
- **Objetivo**: Responder preguntas de normativa bajo presión de tiempo
- **Mecánica**: 10 preguntas aleatorias, 15 segundos cada una
- **Puntuación**: 1 punto por respuesta correcta

### Maestro del Montaje
- **Objetivo**: Montar un cuadro de control paso a paso
- **Mecánica**: Seleccionar componentes en orden correcto
- **Puntuación**: Por componente correcto + bonus por limpieza

### Cableado Maestro
- **Objetivo**: Cablear un esquema de inversión de giro
- **Mecánica**: Conectar terminales haciendo clic en pares
- **Puntuación**: Porcentaje de conexiones correctas

---

## 🔧 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

---

## 📞 Próximos Pasos Inmediatos

1. **AHORA**: Ejecutar la app y verificar que funciona
2. **HOY**: Completar Fase 1 (Correcciones Críticas)
3. **MAÑANA**: Comenzar Fase 2 (Contenido y Recursos)

---

*¡A meterle candela al estudio y a ese examen!* ⚡🇨🇺
