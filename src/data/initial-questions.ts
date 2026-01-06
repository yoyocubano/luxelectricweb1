import { ExamQuestion } from '../services/database.service';

export const INITIAL_QUESTIONS: ExamQuestion[] = [
    // 2017-2018
    {
        year: '2017-2018',
        category: 'Normativa',
        question: 'Indique los colores normalizados de los conductores: PE, N y L1.',
        correct_answer: 'PE: Verde-Amarillo, N: Azul claro, L1: Marrón.',
        explanation: 'Norma HD 308 S2. El verde-amarillo es exclusivo para protección. El azul es para el neutro.'
    },
    {
        year: '2017-2018',
        category: 'Protección',
        question: 'Cite tres medidas de protección contra contactos directos.',
        correct_answer: '1. Aislamiento, 2. Barreras/Envolventes, 3. Alejamiento.',
        explanation: 'Buscan impedir físicamente el contacto con partes que normalmente están bajo tensión.'
    },
    {
        year: '2017-2018',
        category: 'Regímenes de Neutro',
        question: 'En un régimen TN-C, ¿cómo se llama el conductor que une Neutro y Protección?',
        correct_answer: 'Conductor PEN.',
        explanation: 'Protecteur-Neutre combinados en un solo cable.'
    },
    {
        year: '2017-2018',
        category: 'Medidas',
        question: 'Tensión de ensayo y valor mínimo para resistencia de aislamiento en red 230/400V.',
        correct_answer: '500 V DC | ≥ 1,0 MΩ',
        explanation: 'Se usa tensión continua superior para verificar la integridad del aislamiento.'
    },
    {
        year: '2017-2018',
        category: 'Protección',
        question: '¿Qué funciones cumple un disyuntor magnetotérmico?',
        correct_answer: 'Protección contra sobrecargas (térmica) y cortocircuitos (magnética).',
        explanation: 'La parte térmica protege el cable; la magnética reacciona ante fallos graves instantáneos.'
    },
    {
        year: '2017-2018',
        category: 'Locales Húmedos',
        question: '¿En qué volúmenes de un baño está prohibido instalar tomas de 230V?',
        correct_answer: 'Volúmenes 0, 1 y 2.',
        explanation: 'Solo se permiten tomas en el Volumen 3 (fuera de los 60cm de la bañera) y protegidas por DDR 30mA.'
    },
    {
        year: '2017-2018',
        category: 'Protección',
        question: '¿Qué significan las siglas DDR?',
        correct_answer: 'Dispositivo Diferencial Residual.',
        explanation: 'Protección fundamental contra contactos indirectos y fugas a tierra.'
    },
    {
        year: '2017-2018',
        category: 'Cálculo',
        question: 'Calcule la intensidad de un radiador de 2500W a 230V.',
        correct_answer: '10,87 A.',
        explanation: 'I = P / V = 2500 / 230. El cos φ para calefacción resistiva es 1.'
    },
    {
        year: '2017-2018',
        category: 'Materiales',
        question: '¿Qué cable se usa para instalación fija doméstica seca (con protección)?',
        correct_answer: 'NYM-J',
        explanation: "Designación estándar en Luxemburgo. 'J' indica que incluye conductor PE."
    },
    {
        year: '2017-2018',
        category: 'Seguridad',
        question: '¿ Finalidad de la conexión equipotencial principal?',
        correct_answer: 'Unir todas las masas metálicas (agua, gas, estructura) al borne de tierra.',
        explanation: 'Evita diferencias de potencial peligrosas entre objetos metálicos accesibles.'
    },

    // 2018-2019
    {
        year: '2018-2019',
        category: 'Seguridad',
        question: 'Diferencia entre contacto directo e indirecto.',
        correct_answer: 'Directo: tocar fase. Indirecto: tocar carcasa que ha fallado.',
        explanation: 'La protección contra indirectos requiere puesta a tierra + DDR.'
    },
    {
        year: '2018-2019',
        category: 'Protección',
        question: '¿Qué dispositivo es obligatorio en la cabeza de la instalación?',
        correct_answer: 'Interruptor Automático General (Disyuntor General).',
        explanation: 'Corte general y protección de la línea de acometida.'
    },
    {
        year: '2018-2019',
        category: 'Regímenes de Neutro',
        question: 'En TN-S, ¿dónde se separan el Neutro y la Protección?',
        correct_answer: 'En el origen de la instalación.',
        explanation: 'A partir de ahí viajan como conductores independientes.'
    },
    {
        year: '2018-2019',
        category: 'Seguridad',
        question: 'Cite las 5 reglas de oro.',
        correct_answer: '1. Desconectar, 2. Bloquear, 3. VAT, 4. Poner a tierra, 5. Delimitar.',
        explanation: 'Procedimiento obligatorio para trabajar sin tensión.'
    },
    {
        year: '2018-2019',
        category: 'Instalaciones',
        question: 'Sección mínima para Alumbrado y Tomas.',
        correct_answer: 'Alumbrado: 1,5 mm² | Tomas: 2,5 mm².',
        explanation: 'Estándares de seguridad para evitar sobrecalentamientos.'
    },
    {
        year: '2018-2019',
        category: 'Protección',
        question: '¿Qué significa un DDR "Tipo A"?',
        correct_answer: 'Detecta fugas AC y continuas pulsantes.',
        explanation: 'Esencial para cargadores, lavadoras y electrónica moderna.'
    },
    {
        year: '2018-2019',
        category: 'Cálculo',
        question: 'Tensión fase-neutro en red de 400V.',
        correct_answer: '230 V.',
        explanation: 'U_simple = 400 / √3.'
    },
    {
        year: '2018-2019',
        category: 'Protección',
        question: '¿Qué es la selectividad?',
        correct_answer: 'Que solo dispare el disyuntor afectado, no el general.',
        explanation: 'Garantiza la continuidad del servicio en el resto de la casa.'
    },
    {
        year: '2018-2019',
        category: 'Seguridad',
        question: 'Función de la puesta a tierra en Clase I.',
        correct_answer: 'Permitir que la corriente de fuga escape a tierra para activar el DDR.',
        explanation: 'Sin la tierra, la carcasa quedaría bajo tensión esperando que alguien la toque.'
    },
    {
        year: '2018-2019',
        category: 'Medidas',
        question: 'Valor correcto en toma: F-N: 230V, F-T: 230V, N-T: 0V.',
        correct_answer: 'Instalación correcta.',
        explanation: 'Indica buen neutro y buena tierra.'
    },

    // 2019-2020
    {
        year: '2019-2020',
        category: 'Teoría CA',
        question: 'En circuito R-L, ¿cómo está la corriente?',
        correct_answer: 'Retrasada respecto a la tensión.',
        explanation: 'El desfase es provocado por la autoinducción de la bobina.'
    },
    {
        year: '2019-2020',
        category: 'Teoría CA',
        question: '¿Qué es la impedancia Z?',
        correct_answer: 'Oposición total: √(R² + X²).',
        explanation: 'Es la suma vectorial de la resistencia y la reactancia.'
    },
    {
        year: '2019-2020',
        category: 'Cálculo',
        question: 'Corriente en R=50Ω con 100V DC.',
        correct_answer: '2 A.',
        explanation: 'I = 100 / 50.'
    },
    {
        year: '2019-2020',
        category: 'Cálculo',
        question: 'Corriente eficaz en R=50Ω con 230V AC.',
        correct_answer: '4,6 A.',
        explanation: 'I = 230 / 50.'
    },
    {
        year: '2019-2020',
        category: 'Planos',
        question: '¿Qué es un esquema unifilar?',
        correct_answer: 'Representación simplificada con una sola línea por circuito.',
        explanation: 'Muestra de forma clara la estructura del cuadro eléctrico.'
    },
    {
        year: '2019-2020',
        category: 'Motores',
        question: 'Conexión estrella (Y) en motor trifásico.',
        correct_answer: 'Unión de finales (U2, V2, W2) en un punto común.',
        explanation: 'Cada bobina recibe 230V en una red de 400V.'
    },
    {
        year: '2019-2020',
        category: 'Motores',
        question: 'Conexión triángulo (Δ) en motor trifásico.',
        correct_answer: 'Final-Principio sucesivos (U2-V1, V2-W1, W2-U1).',
        explanation: 'Cada bobina recibe 400V completos.'
    },
    {
        year: '2019-2020',
        category: 'Motores',
        question: '¿Cuándo conectar un motor 230/400V en Δ?',
        correct_answer: 'Cuando la red sea trifásica 230V.',
        explanation: 'Asegura que la bobina no reciba más de sus 230V nominales.'
    },
    {
        year: '2019-2020',
        category: 'Automatismos',
        question: 'Función del interruptor crepuscular.',
        correct_answer: 'Controlar luces según nivel de luminosidad exterior.',
        explanation: 'Ahorro energético en alumbrado público o jardines.'
    },
    {
        year: '2019-2020',
        category: 'Cálculo de Líneas',
        question: 'Caída de tensión máxima permitida en Alumbrado y Fuerza.',
        correct_answer: 'Alumbrado: 3% | Fuerza: 5%.',
        explanation: 'Evita fallos por falta de voltaje en el receptor.'
    },

    // 2020-2021
    {
        year: '2020-2021',
        category: 'Seguridad',
        question: 'Máxima tensión de contacto en locales secos (AC).',
        correct_answer: '50 V AC.',
        explanation: 'Límite de seguridad para evitar paros cardíacos.'
    },
    {
        year: '2020-2021',
        category: 'Regímenes de Neutro',
        question: 'Tierra de transformador e instalación separadas.',
        correct_answer: 'Régimen TT.',
        explanation: 'Instalación típica en redes públicas.'
    },
    {
        year: '2020-2021',
        category: 'Verificación',
        question: '¿Para qué sirve la prueba de continuidad del PE?',
        correct_answer: 'Verificar camino de baja resistencia a tierra.',
        explanation: 'Garantiza que el diferencial saltará ante un fallo.'
    },
    {
        year: '2020-2021',
        category: 'Protección',
        question: 'Curva de disparo para disyuntores domésticos.',
        correct_answer: 'Curva C.',
        explanation: 'Polivalente para iluminación y pequeños motores.'
    },
    {
        year: '2020-2021',
        category: 'Instalaciones',
        question: '¿Qué se necesita para conmutar luz de 3 puntos?',
        correct_answer: '2 vaivén + 1 cruzamiento.',
        explanation: 'El cruzamiento se coloca siempre entre los dos vaivén.'
    },
    {
        year: '2020-2021',
        category: 'Protección',
        question: '¿Qué indica el código IP?',
        correct_answer: 'Grado de protección: Sólidos (1er nro), Agua (2do nro).',
        explanation: 'Ejemplo: IP44 es para exteriores protegidos.'
    },
    {
        year: '2020-2021',
        category: 'Cálculo',
        question: 'Potencia total de 60W, 75W y 100W en paralelo.',
        correct_answer: '235 W.',
        explanation: 'En paralelo puros, las potencias se suman.'
    },
    {
        year: '2020-2021',
        category: 'Seguridad',
        question: 'Función de la equipotencial suplementaria.',
        correct_answer: 'Unir masas metálicas en zonas húmedas (baños).',
        explanation: 'Seguridad extra contra contactos indirectos.'
    },
    {
        year: '2020-2021',
        category: 'Medidas',
        question: '¿Qué mide el telurómetro?',
        correct_answer: 'La resistencia de la toma de tierra.',
        explanation: 'Vital para asegurar que el sistema TT funcione.'
    },
    {
        year: '2020-2021',
        category: 'Medidas',
        question: '¿Es correcto 0V entre Neutro y Tierra?',
        correct_answer: 'Sí, es el valor ideal.',
        explanation: 'Indica que el neutro no tiene retorno de carga excesivo.'
    },

    // 2023-2024
    {
        year: '2023-2024',
        category: 'Instalaciones',
        question: 'In máxima para disyuntor en circuito de 2,5 mm².',
        correct_answer: '20 A.',
        explanation: 'Bajo condiciones normales de instalación empotrada.'
    },
    {
        year: '2023-2024',
        category: 'Teoría',
        question: 'Defina "masa".',
        correct_answer: 'Parte conductora accesible que no debería tener tensión.',
        explanation: 'Carcasas, chasis de motores, etc.'
    },
    {
        year: '2023-2024',
        category: 'Regímenes de Neutro',
        question: '¿Dónde se divide el PEN en el esquema TN-C-S?',
        correct_answer: 'En el punto de entrada (cuadro general).',
        explanation: 'Nunca debe volverse a unir después de la división.'
    },
    {
        year: '2023-2024',
        category: 'Verificación',
        question: '¿Cómo se comprueba un DDR?',
        correct_answer: 'Con un RCD Tester (Inyector de corriente).',
        explanation: 'Mide el tiempo de disparo y la corriente de fuga real.'
    },
    {
        year: '2023-2024',
        category: 'Normativa',
        question: 'Significado de IP4X.',
        correct_answer: 'Protección contra objetos > 1mm.',
        explanation: 'Seguridad contra cables finos o herramientas pequeñas.'
    },
    {
        year: '2023-2024',
        category: 'Cálculo',
        question: 'Resistencia de 20Ω y 30Ω en serie.',
        correct_answer: '50 Ω.',
        explanation: 'R_total = R1 + R2.'
    },
    {
        year: '2023-2024',
        category: 'Cálculo',
        question: 'Resistencia de 20Ω y 30Ω en paralelo.',
        correct_answer: '12 Ω.',
        explanation: 'R_total = (R1*R2) / (R1+R2).'
    },
    {
        year: '2023-2024',
        category: 'Seguridad',
        question: 'Medida para entornos muy conductores (ej. cisternas).',
        correct_answer: 'Muy Baja Tensión de Seguridad (MBTS).',
        explanation: 'Tensiones < 24V o 12V para evitar choque eléctrico.'
    },
    {
        year: '2023-2024',
        category: 'Motores',
        question: 'Invertir giro en trifásico.',
        correct_answer: 'Cruzar dos fases cualesquiera.',
        explanation: 'Cambia el sentido del campo magnético giratorio.'
    },
    {
        year: '2023-2024',
        category: 'Automatismos',
        question: 'Función del circuito de mando.',
        correct_answer: 'Gobernar la bobina del contactor de potencia.',
        explanation: 'Aísla el control de la fuerza por seguridad.'
    }
];
