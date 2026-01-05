
# LuxEléctrico - Asistente de Examen

## Descripción General

**LuxEléctrico** es una aplicación web progresiva desarrollada en Angular, diseñada para ser el compañero de estudio definitivo para los aspirantes a electricistas que se preparan para el examen de certificación en Luxemburgo.

La aplicación adopta la personalidad de un "entrenador cubano", ofreciendo una experiencia de aprendizaje amigable, motivadora y directa, ayudando a los usuarios a asimilar temas complejos de una manera más amena y efectiva.

### Características Principales

-   **Módulos de Teoría:** Contenido teórico completo, desde fundamentos de motores trifásicos hasta normativa específica de Luxemburgo, explicado de forma clara y con analogías.
-   **Simulador de Examen:** Una base de datos de preguntas de exámenes reales de años anteriores, con un sistema de tarjetas de estudio para facilitar la memorización.
-   **Guías Prácticas:** Instrucciones paso a paso para tareas prácticas clave del examen, como el montaje de un motor trifásico.
-   **Juegos Interactivos:** Minijuegos para reforzar conceptos de forma lúdica y competitiva.
-   **Panel de Control Dinámico:** Un dashboard que monitoriza el progreso, las rachas de estudio y ofrece un plan de estudio personalizado.

## Documentación y Hoja de Ruta

Este documento sirve como guía central para el desarrollo y la visión del proyecto.

### Estado Actual (Versión Actual)

-   **Dashboard:** Funcional, con seguimiento de progreso (actualmente estático en 0) y cuenta regresiva para el examen. Incluye un plan de estudio diario recomendado.
-   **Teoría:** Módulos completos sobre Motores, Fórmulas, Instalaciones y Esquemas, incluyendo el arranque Estrella-Triángulo.
-   **Simulador:** Cargado con preguntas de los exámenes desde 2017 hasta 2024. El filtrado por año y la navegación entre preguntas son funcionales.
-   **Práctica:** Contiene una guía estática para el montaje de un motor.
-   **Juegos:** Página de inicio de la sección de juegos implementada.

### Próximos Pasos (Hoja de Ruta)

1.  **Dinamizar el Progreso:**
    -   Conectar las acciones del usuario (completar un test, leer una lección) para que el "Progreso General" en el dashboard se actualice dinámicamente.
    -   Implementar la lógica para las "Rachas de Estudio" y los "Logros".
2.  **Desarrollar los Juegos:**
    -   Crear la lógica para el juego "Voltaje Veloz".
    -   Diseñar e implementar más juegos interactivos (ej. "Conecta el Circuito", "Puzzle de Esquemas").
3.  **Ampliar la Sección de Práctica:**
    -   Hacer la guía de montaje más interactiva, con checklists o pasos que el usuario pueda marcar como completados.
    -   Añadir más guías prácticas (ej. montaje de tablero eléctrico, configuración KNX).
4.  **Simulador de Entrevista Oral:**
    -   Utilizar la API de Gemini y los permisos de micrófono para crear un simulador donde el usuario pueda responder preguntas oralmente y recibir feedback.
5.  **Traducción (ES/FR):**
    -   Implementar un sistema de internacionalización (i18n) para traducir todo el contenido al francés.
6.  **Backend y Persistencia de Datos:**
    -   Actualmente, el progreso se reinicia. Se necesita un backend simple (ej. Firebase) o usar `localStorage` para que los datos del usuario persistan entre sesiones.

## Lógica de Preparación para el Examen

La aplicación integra una lógica interna para guiar al usuario hacia el éxito sin agobiarlo.

-   **Fecha del Examen:** El sistema tiene una fecha objetivo interna: **19 de enero**. La cuenta regresiva se calcula dinámicamente hacia esa fecha.
-   **Peso de las Secciones:** Se asume una ponderación basada en la estructura típica del examen:
    -   **Práctica: 65%**
    -   **Teoría: 35%**
-   **Cálculo del Plan de Estudio:**
    -   **Línea Base:** Se estima que un estudiante promedio necesita **80 horas** de estudio total para estar bien preparado.
    -   **Cálculo Diario:** La aplicación divide las horas totales (80) entre los días restantes hasta el examen para generar una recomendación de estudio diario.
        -   `Horas Diarias = 80 / Días Restantes`
    -   **Recomendación:** Esta cifra se muestra en el dashboard como un "Plan de Ataque", sugiriendo al usuario un objetivo de estudio diario alcanzable y recordando priorizar la práctica sobre la teoría.

## Stack Tecnológico

-   **Framework:** Angular (v20+)
-   **Lenguaje:** TypeScript
-   **Estilos:** Tailwind CSS
-   **Core de Angular:** Detección de cambios Zoneless para un rendimiento óptimo.
-   **Enrutamiento:** `provideRouter` con `withHashLocation`.
-   **APIs Externas:**
    -   **Google Gemini:** Planeado para el simulador de entrevista y otras funciones de IA.

## Estructura de Componentes

La aplicación está organizada en componentes autocontenidos y reutilizables:

```
/src
|-- /app.component.ts
|-- /app.routes.ts
|-- /components
|   |-- /dashboard
|   |-- /theory
|   |-- /practice
|   |-- /games
|   |-- /simulator
```
