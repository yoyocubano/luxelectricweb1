# 📚 CONTENIDO COMPLETO NOTEBOOKLM PIFQU (2017-2024)

**Resumen exhaustivo para examen de Electricidad Industrial y Automatización - Luxemburgo**

---

## 1. LEYES FUNDAMENTALES Y CONCEPTOS DE CA

### Ley de Ohm
| Fórmula | Descripción |
|---------|-------------|
| `V = I × R` | Voltaje = Corriente × Resistencia |
| `I = V / R` | Corriente en Amperios |
| `R = V / I` | Resistencia en Ohmios |

### Ley de Watt
- **P = V × I** (Potencia en Vatios)

### Valores RMS (Eficaces)
- Representan el valor equivalente en CC que produce la misma potencia
- **V_RMS = V_pico / √2**
- Ejemplo: Para 127 V RMS, el valor pico es ≈ 179 V
- **True RMS**: Esencial para ondas distorsionadas (variadores, soldadoras)

### Impedancia (Z)
- Oposición total en circuitos CA
- **Z = √(R² + (X_L - X_C)²)**
- Reactancia Inductiva: `X_L = 2πfL`
- Reactancia Capacitiva: `X_C = 1/(2πfC)`

---

## 2. ELECTRICIDAD TRIFÁSICA

### Generación
- Tres ondas senoidales desfasadas **120°** entre sí

### Ventajas
- Transporte eficiente
- Ahorro de conductores
- Alimentación de motores económicos

### Tensiones en Luxemburgo
| Tipo | Valor | Descripción |
|------|-------|-------------|
| Tensión de Línea (U_L) | 400 V | Entre fases |
| Tensión de Fase (U_ph) | 230 V | Fase-Neutro |

### Conexión Estrella (Y)
- **U_L = √3 × U_ph**
- **I_L = I_ph**
- Neutro (I_N) = 0 si carga equilibrada
- **Uso**: Arranque de motores, tensiones altas

### Conexión Triángulo (Δ)
- **U_L = U_ph**
- **I_L = √3 × I_ph**
- **Uso**: Trabajo normal del motor

### Relación de Potencia
> ⚡ **P_Δ = 3 × P_Y** (Triángulo = 3 veces Estrella)

### Triángulo de Potencias
| Potencia | Fórmula | Unidad |
|----------|---------|--------|
| Activa (P) | `√3 × U_L × I_L × cos φ` | W |
| Aparente (S) | `√3 × U_L × I_L` | VA |
| Reactiva (Q) | `√(S² - P²)` | VAr |

---

## 3. MOTORES Y TRANSFORMADORES

### Corriente en Motores
- **Monofásico**: `I = P / (V × η × cos φ)`
- **Trifásico**: `I = P / (√3 × V × η × cos φ)`

> Donde η = eficiencia del motor

### Velocidad Síncrona
- **n = (60 × f) / p**
- n = RPM, f = frecuencia (Hz), p = pares de polos

### Conversión de Potencia
| De | A | Factor |
|----|---|--------|
| HP | kW | × 0.746 |
| kW | HP | × 1.341 |

### Transformadores
- **Monofásico**: `I = VA / V`
- **Trifásico**: `I = KVA / (√3 × KV)`
- Ejemplo: 2500 KVA (34.5 kV / 440 V) → 41.85 A alta / 3285 A baja

---

## 4. INSTALACIONES, SEGURIDAD Y NORMATIVA

### Regla de Coordinación de Protecciones
> 🔴 **Ib ≤ In ≤ Iz**
> - Ib = Corriente de carga
> - In = Corriente del disyuntor
> - Iz = Capacidad máxima del cable

### Caída de Tensión (ΔU)
| Circuito | Límite máximo |
|----------|---------------|
| Alumbrado | 3% |
| Fuerza/Otros | 5% |

**Fórmulas:**
- Monofásico: `ΔU = (2 × L × I × cos φ) / S`
- Simplificada cobre: `ΔU = 0.036 × (L × I) / S`

### Grados IP
| Ejemplo | Significado |
|---------|-------------|
| IP20 | Protección dedos, sin agua |
| IP44 | Sólidos >1mm, salpicaduras |
| IP68 | Estanco polvo, sumergible |

### Tensión de Seguridad
- **50 V AC** en locales secos
- **25 V AC** en locales húmedos

### 5 Reglas de Oro (Trabajo sin tensión)
1. 🔌 **Desconectar** (corte visible)
2. 🔒 **Bloquear y señalizar**
3. 📏 **Verificar ausencia de tensión** (VAT)
4. ⚡ **Poner a tierra y cortocircuitar**
5. 🚧 **Delimitar zona de trabajo**

### Esquemas de Conexión a Tierra
| Esquema | Descripción |
|---------|-------------|
| TT | Neutro y masas a tierras independientes |
| TN-S | PE y N separados desde origen |
| TN-C | PEN combinado |
| TN-C-S | PEN se separa en el cuadro del usuario |

---

## 5. AUTOMATIZACIÓN (LOGO!) Y LÓGICA DIGITAL

### Compuertas Lógicas
| Compuerta | Símbolo | Descripción | Equivalente eléctrico |
|-----------|---------|-------------|----------------------|
| AND | & | Salida 1 si TODAS = 1 | Serie |
| OR | ≥1 | Salida 1 si ALGUNA = 1 | Paralelo |
| NOT | ! | Invierte señal | Contacto NC |
| NAND | & + ! | Inversa de AND | - |
| NOR | ≥1 + ! | Inversa de OR | - |
| XOR | =1 | Salida 1 si son diferentes | - |

### Tablas de Verdad
- Número de filas = **2^n** (n = número de entradas)
- 2 entradas → 4 filas
- 3 entradas → 8 filas

### Clasificación de Resultados
| Tipo | Descripción |
|------|-------------|
| Tautología | Todos verdaderos |
| Contradicción | Todos falsos |
| Contingencia | Mixto |

### Funciones LOGO!
- **Relé RS**: Auto-mantenimiento (memoria)
- **On-delay**: Retardo a la conexión
- **Off-delay**: Retardo a la desconexión
- **Analógico**: Señales 0-10V, detectores de umbral

---

## 6. ENERGÍA RENOVABLE Y VARIADORES

### Fotovoltaica
- **Serie**: Suma voltajes
- **Paralelo**: Suma corrientes
- **Inversor**: Convierte DC a AC

### Variadores de Tensión (Dimmers)
| Tipo | Corte | Uso |
|------|-------|-----|
| Montante (Triac) | Fase ascendente | Cargas inductivas |
| Descendente (MOSFET) | Fase descendente | Capacitivas, LED |

### Vehículos Eléctricos
- Carga monofásica: hasta 16A
- Carga trifásica: Wallbox

---

## 📋 RESUMEN DE FÓRMULAS

### A. Leyes Fundamentales
```
V = I × R
P = V × I (Monofásico)
P = √3 × U × I × cos φ (Trifásico)
```

### B. Trifásico
```
U_L = √3 × U_ph
I_L = I_ph (Estrella)
I_L = √3 × I_ph (Triángulo)
```

### C. Motores
```
I_mono = P / (V × η × cos φ)
I_tri = P / (√3 × V × η × cos φ)
n = (60 × f) / p
```

### D. Instalaciones
```
ΔU = (2 × L × I × cos φ) / S
Ib ≤ In ≤ Iz
```

### E. Lógica
```
Combinaciones = 2^n
```

---

## 📂 RECURSOS DISPONIBLES

### PDFs de Exámenes
- `PIFQU_2017_2018_DAP_ELF_161_F.pdf`
- `PIFQU_2018_2019_DAP_ELF_161_F.pdf`
- `PIFQU_2019_2020_DAP_ELF_161_F.pdf`
- `PIFQU_2020_2021_DAP_ELF_161_F.pdf`
- `PIFQU_2023_2024_DAP_Theorie-a-F.pdf`
- `DC3ELF exercices 1-15_1-23.pdf`

### Imágenes de Ejercicios
- 24 imágenes de ejercicios prácticos (IMG_0930 - IMG_0955)

---

*Material extraído de NotebookLM PIFQU para el examen de Electricidad Industrial - Luxemburgo*
