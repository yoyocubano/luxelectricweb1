# SIMULACIÓN DE EXAMEN: ÉTUDE TECHNIQUE ÉLECTRIQUE (ETE)
## LUXEMBURGO - ANÁLISIS INDUSTRIAL

**Basado en el análisis de archivos PIF 2019-2024**  
*Interpretación de Patrones y Predicción de Escenarios*

---

### 1. CONTEXTO DEL EXAMEN (L'ENONCÉ)

**Proyecto:** Instalación eléctrica de un "Atelier de Mécanique" (Taller Mecánico) en Esch-sur-Alzette.
**Suministro:** Red pública Creos. 3x400V + N + PE. $f = 50\text{Hz}$.
**Régimen de Neutro:** TN-C-S (Terre Neutre - Combiné/Séparé).

#### Cargas Instaladas (Bilan de Puissance):
1.  **Grupo Motor-Compresor ($M_1$):**
    *   Motor asíncrono trifásico.
    *   Datos de placa: $P_{nom} = 15 \text{ kW}$, $\cos \phi = 0.82$, $\eta = 0.91$.
    *   Tensión: 400V/690V.

2.  **Horno de Tratamiento ($R_{four}$):**
    *   Resistencias puras. Conexión Trifásica.
    *   Potencia: $12 \text{ kW}$.

3.  **Iluminación y Tomas de Corriente ($Aux$):**
    *   Repartido equilibradamente en las 3 fases.
    *   Potencia total: $P_{aux} = 4.5 \text{ kW}$.
    *   $\cos \phi \approx 1$.

---

### 2. PREGUNTAS Y EJERCICIOS (QUESTIONNAIRE)

#### PARTE A: Motores y Conexión (Moteurs)
1.  **Determinación de Acoplamiento:**
    *   Dada la red de 400V y el motor 400/690V, ¿cómo debe conectarse el estator del motor $M_1$? (Étoile $Y$ o Triangle $\Delta$?).
    *   *Respuesta esperada:* La tensión de bobina es 400V. La red línea-línea es 400V. Se debe conectar en **Triángulo ($\Delta$)**. (Justificar con esquema).

2.  **Corriente Nominal:**
    *   Calcule la corriente nominal consumida por el motor $M_1$.
    *   *Fórmula:* $I_n = \frac{P_{nom}}{\sqrt{3} \cdot U \cdot \cos \phi \cdot \eta}$

#### PARTE B: Balance de Potencias (Bilan de Puissance)
3.  **Cálculos Totales:**
    *   Calcule para *toda* la instalación funcionando simultáneamente:
        *   Potencia Activa Total ($P_{tot}$).
        *   Potencia Reactiva Total ($Q_{tot}$). (Recuerde: Resistencias $Q=0$).
        *   Potencia Aparente Total ($S_{tot}$).
        *   Factor de potencia global ($\cos \phi_{global}$).

#### PARTE C: Compensación (Amélioration du Facteur de Puissance)
4.  **Batería de Condensadores:**
    *   El proveedor impone un $\cos \phi_{obj} \geq 0.94$.
    *   Calcule la potencia reactiva ($Q_c$) necesaria para la batería de condensadores.
    *   *Fórmula:* $Q_c = P_{tot} \cdot (\tan \phi_{actual} - \tan \phi_{obj})$.

#### PARTE D: Dimensionamiento de Cables (Dimensionnement)
5.  **Sección de Cable:**
    *   El cable que alimenta el cuadro principal tiene una longitud de $L = 45 \text{m}$.
    *   Material: Cobre ($\rho = 0.0225 \ \Omega \text{mm}^2/\text{m}$).
    *   Aceptamos una caída de tensión máxima del $3\%$.
    *   Calcule la sección mínima ($S$) requerida usando la corriente total $I_{tot}$ (calculada con $S_{tot}$).
    *   *Fórmula aproximada:* $\Delta U = \sqrt{3} \cdot I \cdot L \cdot (R \cos \phi + X \sin \phi)$ o simplificada según norma.

---

### 3. FÓRMULAS CLAVE IDENTIFICADAS EN LOS ARCHIVOS

*   **Potencia Activa (3-fases):** $P = \sqrt{3} \cdot U \cdot I \cdot \cos \phi$
*   **Potencia Reactiva:** $Q = \sqrt{3} \cdot U \cdot I \cdot \sin \phi$
*   **Potencia Aparente:** $S = \sqrt{P^2 + Q^2}$
*   **Corriente Neutro (Cargas desequilibradas):** Suma vectorial o descomposición fasorial.

---

*Generado por Asistente de IA para preparación de Examen PIF/BTS.*
