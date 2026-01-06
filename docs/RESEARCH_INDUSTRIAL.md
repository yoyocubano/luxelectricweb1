# Investigación de Simulación Industrial y KNX

A partir de la petición del usuario, se han clonado y analizado diversas librerías y repositorios de simulación eléctrica e industrial para extraer lógica e inspiración para **LuxElectro**.

## Repositorios Clonados Localmente
Todos los repositorios se encuentran en el directorio: 
`/Users/yoyocubano/Desktop/École - trabajo /agentegravity/simulacion_industrial/`

| Proyecto | Descripción | Lenguaje/Stack | Ubicación Local |
| :------- | :---------- | :------------- | :-------------- |
| **CADe_SIMU-Linux** | Port para Linux de CADe_SIMU (usando Wine). | Binario / Wrapper | `.../CADe_SIMU-Linux` |
| **KNX Tiny Serial** | Acceso de bajo nivel al bus KNX. | C++11 | `.../knxtinyserial` |
| **KNX Simulator** | Simulador de dispositivos y lógica KNX. | Python / JSON | `.../simulator-knx` |
| **BAOS SDK** | SDK para protocolo binario KNX BAOS. | C++ | `.../baos` |
| **QElectroTech (Source)** | Código fuente de QET. | C++ / Qt | `.../qet-source` |
| **QET Elements** | Colección masiva de símbolos eléctricos. | XML (.elmt) | `.../qelectrotech-elements` |

## Hallazgos Clave para Adaptación

### 1. QElectroTech Elements (Simbología)
Los archivos `.elmt` son esencialmente XML que describen formas geométricas (`line`, `rect`, `polygon`, `circle`). 
- **Oportunidad:** Podemos crear un convertidor de `.elmt` a **SVG** para alimentar dinámicamente nuestra biblioteca de teoría y práctica con símbolos industriales estándar (IEC/ANSI).

### 2. KNX Simulator (Lógica de Direccionamiento)
El simulador de KNX utiliza archivos JSON para definir la estructura de la vivienda y las asociaciones de direcciones de grupo.
- **Inspiración:** Implementar un sistema de "Telegramas" interno en nuestro `PracticeComponent` para que las validaciones no sean solo comparaciones de strings, sino eventos simulados en un bus virtual.

### 3. CADe_SIMU (Interfaz y Flujo)
Aunque el código es cerrado, su flujo de trabajo (Cableado -> Simulación -> Test) es el estándar de la industria.
- **Acción:** Hemos adaptado el sistema de "Bornes" en la Cabina A siguiendo este principio de "Conexionado Realista".

## Inspiración en Steam (Electricidad y Simulación)

| Juego | Inspiración para LuxElectro |
| :---- | :--------------------------- |
| **Electrician Simulator** | Estética de montaje en primera persona y reparación de cuadros eléctricos. |
| **CRUMB Circuit Simulator** | Visualización 3D de breadboards y análisis con osciloscopio virtual. |
| **Wired - The Game** | Lógica de puzzles basada en leyes físicas de la electricidad. |
| **Shenzhen I/O** | Diseño de circuitos lógicos y microcontroladores (útil para Cabina D). |

---
*Documento generado por Antigravity para el equipo de desarrollo.*
