export interface GameQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export const GAME_QUESTIONS: GameQuestion[] = [
  {
    question: 'El color del conductor de protección (PE) es...',
    options: ['Azul claro', 'Marrón', 'Verde-Amarillo', 'Negro'],
    correctAnswerIndex: 2
  },
  {
    question: '¿Qué sección mínima se exige para un circuito de tomas de corriente en una vivienda?',
    options: ['1 mm²', '1,5 mm²', '2,5 mm²', '4 mm²'],
    correctAnswerIndex: 2
  },
  {
    question: 'Un disyuntor con curva "C" se usa generalmente para...',
    options: ['Motores grandes', 'Circuitos de alumbrado y tomas', 'Equipos electrónicos sensibles', 'Protección de transformadores'],
    correctAnswerIndex: 1
  },
  {
    question: '¿Cuál es la tensión de seguridad (UL) en locales secos?',
    options: ['12 V', '24 V', '50 V', '230 V'],
    correctAnswerIndex: 2
  },
  {
    question: 'En el baño, ¿en qué volumen está prohibido instalar una toma de 230V?',
    options: ['Volumen 3', 'Volumen 2', 'Volumen Oculto', 'En ninguno, está permitido'],
    correctAnswerIndex: 1
  },
  {
    question: 'Para invertir el giro de un motor trifásico, debes intercambiar...',
    options: ['Las tres fases', 'Dos de las tres fases', 'La fase y el neutro', 'No se puede invertir'],
    correctAnswerIndex: 1
  },
  {
    question: 'Un diferencial (DDR) Tipo "A" detecta fugas de corriente alterna y...',
    options: ['Solo alterna', 'Continua pura', 'Continua pulsante', 'De alta frecuencia'],
    correctAnswerIndex: 2
  },
  {
    question: 'La primera regla de oro para trabajar sin tensión es...',
    options: ['Verificar ausencia de tensión', 'Bloquear', 'Desconectar', 'Poner a tierra'],
    correctAnswerIndex: 2
  },
  {
    question: 'La caída de tensión máxima para alumbrado en Luxemburgo es del...',
    options: ['1%', '3%', '5%', '10%'],
    correctAnswerIndex: 1
  },
  {
    question: 'El instrumento para medir la resistencia de la toma de tierra se llama...',
    options: ['Multímetro', 'Pinza amperimétrica', 'Megóhmetro', 'Telurómetro'],
    correctAnswerIndex: 3
  },
  {
    question: 'En un régimen de neutro TN-C, el conductor que une neutro y protección se llama...',
    options: ['TNC', 'PE', 'PEN', 'N-PE'],
    correctAnswerIndex: 2
  },
  {
    question: 'La tensión de ensayo para medir el aislamiento en una red 230/400V es...',
    options: ['230 V DC', '400 V DC', '500 V DC', '1000 V DC'],
    correctAnswerIndex: 2
  },
  {
    question: 'Un motor 230/400V en una red de 400V debe conectarse en...',
    options: ['Triángulo', 'Estrella', 'Serie', 'Paralelo'],
    correctAnswerIndex: 1
  },
  {
    question: '¿Qué significa IP4X?',
    options: ['Protegido contra chorros de agua', 'Protegido contra polvo fino', 'Protegido contra cuerpos > 1mm', 'Estanco al agua'],
    correctAnswerIndex: 2
  },
  {
    question: 'Para conmutar una luz desde tres puntos, necesitas dos conmutadores y un...',
    options: ['Pulsador', 'Telerruptor', 'Conmutador de cruzamiento', 'Otro conmutador simple'],
    correctAnswerIndex: 2
  },
  {
    question: '¿Cuál es la altura de montaje estándar recomendada para interruptores en viviendas?',
    options: ['90 cm', '105-110 cm', '125-130 cm', '150 cm'],
    correctAnswerIndex: 1
  },
  {
    question: 'La distancia mínima de separación entre una tubería de gas y una conducción eléctrica es...',
    options: ['1 cm', '3 cm', '5 cm', '10 cm'],
    correctAnswerIndex: 1
  },
  {
    question: '¿Qué dispositivo es esencial para proteger la instalación contra rayos (sobretensiones transitorias)?',
    options: ['Magnetotérmico', 'Diferencial', 'SPD (Descargador de Sobretensiones)', 'Relé de fase'],
    correctAnswerIndex: 2
  },
  {
    question: 'En un plano unifilar, ¿qué indican las pequeñas líneas oblicuas sobre un conductor?',
    options: ['La longitud del cable', 'El tipo de aislamiento', 'El número de conductores', 'La corriente máxima'],
    correctAnswerIndex: 2
  },
  {
    question: '¿Cuál es la sección mínima obligatoria para el conductor de conexión equipotencial principal?',
    options: ['2,5 mm²', '4 mm²', '6 mm²', '10 mm²'],
    correctAnswerIndex: 2
  }
];
