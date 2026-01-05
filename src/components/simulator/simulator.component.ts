
import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ExamQuestion {
  id: number;
  year: string;
  question: string;
  answer: string;
  explanation: string;
}

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class SimulatorComponent {
  
  exams = signal<ExamQuestion[]>([
    {
      id: 1,
      year: '2017-2018',
      question: 'Indique los colores normalizados de los conductores siguientes según la norma vigente: a) Conductor de protección (PE) b) Conductor neutro (N) c) Conductor de fase (L1)',
      answer: 'a) Verde-Amarillo b) Azul claro c) Marrón (o Negro/Gris en cables multipolares, pero Marrón es el preferido para L1)',
      explanation: 'La norma europea HD 308 S2 y las reglamentaciones locales (RGIE/NIBT) establecen estos colores obligatorios para la identificación de conductores en instalaciones fijas para garantizar la seguridad y evitar errores de conexión. El bicolo verde-amarillo es exclusivo para protección. El azul es exclusivo para el neutro.'
    },
    {
      id: 2,
      year: '2017-2018',
      question: 'Cite tres (3) medidas de protección contra los contactos directos.',
      answer: "1. Aislamiento de las partes activas (ej. recubrimiento de cables).\n2. Interposición de barreras o envolventes (ej. cajas de derivación con tapa, grado IP XXB como mínimo).\n3. Alejamiento de las partes activas (fuera del volumen de accesibilidad).",
      explanation: 'Los contactos directos ocurren al tocar partes que normalmente están bajo tensión. Las medidas principales buscan impedir físicamente ese contacto. El DDR de 30mA es una medida complementaria crucial, pero no sustituye a las medidas básicas.'
    },
    {
      id: 3,
      year: '2017-2018',
      question: 'En un régimen de neutro TN-C, ¿cómo se llaman los conductores que aseguran la función de neutro y de protección?',
      answer: 'Conductor PEN.',
      explanation: 'En el esquema TN-C, las funciones de Neutro (N) y Protección (PE) se combinan en un solo conductor llamado PEN (Protecteur-Neutre) a lo largo de la instalación de distribución.'
    },
    {
      id: 4,
      year: '2017-2018',
      question: '¿Cuál es la tensión de ensayo para realizar la medida de resistencia de aislamiento en una instalación de tensión nominal 230V/400V y cuál es el valor mínimo aceptable de resistencia?',
      answer: 'Tensión de ensayo: 500 V DC (Corriente Continua). Valor mínimo aceptable: ≥ 1,0 MΩ (Megaohmio).',
      explanation: 'Para asegurar que no hay fugas peligrosas entre conductores activos o entre activos y tierra, se aplica una tensión continua superior a la de servicio (500V DC para redes de hasta 500V AC). La normativa actual exige una resistencia mínima de 1 Megaohmio en circuitos nuevos.'
    },
    {
      id: 5,
      year: '2017-2018',
      question: 'Defina la función de un dispositivo de protección contra sobrecorrientes (disyuntor magnetotérmico).',
      answer: 'Proteger los conductores de la instalación contra sobrecargas (función térmica) y cortocircuitos (función magnética).',
      explanation: 'El disyuntor tiene dos mecanismos: una lámina bimetálica que se curva con el calor de una sobrecarga lenta pero sostenida, y una bobina magnética que dispara instantáneamente ante un pico de corriente muy alto (cortocircuito), evitando daños al cableado por exceso de temperatura.'
    },
    {
      id: 6,
      year: '2017-2018',
      question: 'En un cuarto de baño, ¿en qué volúmenes está prohibida la instalación de interruptores y tomas de corriente estándar (230V)?',
      answer: 'En los volúmenes 0, 1 y 2.',
      explanation: 'Debido al alto riesgo de electrocución en zonas húmedas, la norma restringe severamente la instalación de aparatos eléctricos cerca de la bañera o ducha (Volumen 0), encima de ella (Volumen 1) y en el área inmediata circundante (Volumen 2, 60 cm alrededor del Vol. 1).'
    },
    {
      id: 7,
      year: '2017-2018',
      question: '¿Qué significan las siglas DDR?',
      answer: 'Dispositivo Diferencial Residual.',
      explanation: 'Es el nombre técnico del dispositivo que mide la diferencia vectorial entre la corriente que entra (fase) y la que sale (neutro). Si hay una diferencia (corriente residual o de fuga a tierra), el dispositivo dispara.'
    },
    {
      id: 8,
      year: '2017-2018',
      question: 'Calcule la intensidad nominal que circula por un circuito de calefacción monofásico de 230 V que alimenta un radiador de 2500 W.',
      answer: '10,87 A (Aproximadamente 11 A).',
      explanation: 'Se utiliza la fórmula de la potencia activa en monofásico: P = U · I · cos φ. Para una resistencia de calefacción, cos φ = 1. Por lo tanto, I = P / U = 2500 W / 230 V = 10,869... A.'
    },
    {
      id: 9,
      year: '2017-2018',
      question: '¿Qué tipo de cable se utiliza habitualmente para la instalación fija empotrada o en superficie en locales domésticos secos, que consta de conductores de cobre rígido aislados en PVC y cubierta exterior de PVC?',
      answer: 'NYM-J (o la denominación equivalente normalizada VDE/Europea).',
      explanation: "NYM-J es la designación alemana muy extendida en Luxemburgo para el cable de instalación estándar con cubierta de PVC para interiores. La 'J' indica que incluye el conductor de protección verde-amarillo."
    },
    {
      id: 10,
      year: '2017-2018',
      question: '¿Cuál es la finalidad de la conexión equipotencial principal en un edificio?',
      answer: 'Poner al mismo potencial (generalmente el potencial de tierra) todas las masas metálicas conductoras importantes del edificio (tuberías de agua, gas, calefacción, estructuras metálicas) conectándolas al borne principal de tierra.',
      explanation: 'Esto evita que aparezcan diferencias de potencial peligrosas entre diferentes elementos metálicos accesibles dentro del edificio en caso de un fallo eléctrico o una descarga atmosférica, reduciendo el riesgo de choque eléctrico.'
    },
    {
      id: 11,
      year: '2023-2024',
      question: '¿Cuál es la máxima corriente nominal (In) permitida para un disyuntor que protege un circuito de tomas de corriente doméstico cableado con conductores de 2,5 mm²?',
      answer: 'Generalmente 20 A (aunque en algunos reglamentos específicos o condiciones de instalación puede limitarse a 16 A). La norma general admite 20A para 2,5 mm².',
      explanation: 'La capacidad de transporte de corriente de un conductor de 2,5 mm² en instalación bajo tubo empotrado suele rondar los 24A. Un disyuntor de 20A protege adecuadamente este cable contra sobrecargas.'
    },
    {
      id: 12,
      year: '2023-2024',
      question: 'Defina qué es una "masa" en una instalación eléctrica.',
      answer: 'Parte conductora (generalmente metálica) de un equipo eléctrico, que puede ser tocada y que normalmente no está bajo tensión, pero que puede ponerse bajo tensión en caso de fallo del aislamiento principal.',
      explanation: 'Ejemplos son la carcasa de una lavadora, el chasis de un motor o la envoltura metálica de un cuadro eléctrico. Estas partes deben conectarse a tierra.'
    },
    {
      id: 13,
      year: '2023-2024',
      question: 'En el esquema TN-C-S, ¿en qué punto se divide el conductor PEN en PE y N?',
      answer: 'Generalmente en el punto de entrada de la instalación del usuario (caja general de protección o cuadro general de mando y protección).',
      explanation: 'La red de distribución llega como TN-C (4 hilos: 3 Fases + PEN). En el cuadro principal del usuario, el PEN se conecta a una barra de la que salen dos conductores separados: el Neutro (N) para los circuitos y el de Protección (PE) que se conecta también a la toma de tierra local. A partir de este punto, el esquema es TN-S y nunca deben volver a unirse.'
    },
    {
      id: 14,
      year: '2023-2024',
      question: '¿Qué aparato de medida utilizaría para comprobar el disparo de un interruptor diferencial (DDR)?',
      answer: 'Un comprobador de instalaciones multifunción o un comprobador específico de diferenciales (RCD tester).',
      explanation: 'Este aparato inyecta una corriente de fuga controlada (calibrada a 1/2 IΔn, 1 IΔn, 5 IΔn, etc.) y mide el tiempo exacto que tarda el diferencial en disparar, verificando si cumple con los tiempos y corrientes de la norma.'
    },
    {
      id: 15,
      year: '2023-2024',
      question: '¿Cuál es el significado del primer dígito en el código IP (ej. IP4X)?',
      answer: 'Protección contra la penetración de cuerpos sólidos extraños y contra el acceso a partes peligrosas.',
      explanation: "El número va de 0 (sin protección) a 6 (totalmente estanco al polvo). Por ejemplo, '4' significa protegido contra cuerpos sólidos mayores de 1 mm (ej. un alambre fino o herramienta pequeña)."
    },
    {
      id: 16,
      year: '2023-2024',
      question: 'Calcule la resistencia equivalente de dos resistencias de 20 Ω y 30 Ω conectadas en serie.',
      answer: '50 Ω.',
      explanation: 'En serie, las resistencias se suman: Req = R1 + R2 = 20 + 30 = 50 Ω.'
    },
    {
      id: 17,
      year: '2023-2024',
      question: 'Calcule la resistencia equivalente de las mismas dos resistencias (20 Ω y 30 Ω) conectadas en paralelo.',
      answer: '12 Ω.',
      explanation: 'En paralelo, la inversa de la resistencia equivalente es la suma de las inversas: 1/Req = 1/R1 + 1/R2. O la fórmula para dos resistencias: Req = (R1 * R2) / (R1 + R2) = (20 * 30) / (20 + 30) = 600 / 50 = 12 Ω.'
    },
    {
      id: 18,
      year: '2023-2024',
      question: '¿Qué medida de seguridad se utiliza habitualmente para la alimentación de herramientas portátiles en entornos muy conductores (ej. interior de una caldera metálica)?',
      answer: 'Muy Baja Tensión de Seguridad (MBTS) o separación eléctrica de circuitos (mediante transformador de separación).',
      explanation: 'La MBTS utiliza tensiones tan bajas (ej. 12V o 24V) que no son peligrosas. La separación eléctrica mediante un transformador 1:1 aísla el circuito secundario de la tierra, de modo que un primer contacto accidental con una fase no cierra circuito a tierra a través del cuerpo.'
    },
    {
      id: 19,
      year: '2023-2024',
      question: 'En una instalación trifásica, si desea invertir el sentido de giro de un motor asíncrono trifásico, ¿qué operación debe realizar en el cableado de alimentación?',
      answer: 'Intercambiar dos de las tres fases de alimentación entre sí (ej. L1 por L2, o L2 por L3).',
      explanation: 'Al intercambiar dos fases, se invierte la secuencia de fases (de L1-L2-L3 a L2-L1-L3, por ejemplo), lo que invierte el sentido del campo magnético giratorio del estátor y, consecuentemente, el sentido de giro del rotor.'
    },
    {
      id: 20,
      year: '2023-2024',
      question: '¿Cuál es la función principal del circuito de mando en un automatismo con contactores?',
      answer: 'Controlar la alimentación de la bobina del contactor (circuito de potencia) mediante elementos de mando (pulsadores, finales de carrera, sensores) generalmente a una tensión menor o igual que la de potencia, permitiendo el arranque, paro y seguridad de la máquina.',
      explanation: 'El circuito de mando es el "cerebro" que decide cuándo activar o desactivar la "fuerza" (circuito de potencia) que alimenta al motor o carga principal.'
    },
    {
      id: 21,
      year: '2018-2019',
      question: 'Explique la diferencia entre un contacto directo y un contacto indirecto.',
      answer: 'Contacto directo: Es el contacto con una parte activa (un conductor que normalmente tiene tensión).\nContacto indirecto: Es el contacto con una masa (carcasa metálica) puesta accidentalmente en tensión por un fallo de aislamiento.',
      explanation: 'Las medidas de protección son diferentes: el contacto directo se evita aislando o alejando las partes activas, mientras que el indirecto se combate con la puesta a tierra de las masas y un dispositivo de corte automático (DDR).'
    },
    {
      id: 22,
      year: '2018-2019',
      question: '¿Qué dispositivo es obligatorio en la cabeza de una instalación para corte general y protección?',
      answer: 'Un interruptor automático general (disyuntor general).',
      explanation: 'Este dispositivo permite desconectar toda la instalación de la red y protege la línea principal contra sobrecargas y cortocircuitos.'
    },
    {
      id: 23,
      year: '2018-2019',
      question: 'En el sistema TN-S, ¿dónde se separan el conductor neutro (N) y el de protección (PE)?',
      answer: 'En el origen de la instalación (en el punto de entrega del distribuidor o en el transformador).',
      explanation: 'En TN-S, N y PE son dos conductores separados a lo largo de toda la instalación, garantizando un conductor de protección limpio.'
    },
    {
      id: 24,
      year: '2018-2019',
      question: 'Cite las cinco reglas de oro para trabajar sin tensión.',
      answer: '1. Desconectar.\n2. Bloquear y señalizar.\n3. Verificar ausencia de tensión (VAT).\n4. Poner a tierra y en cortocircuito.\n5. Proteger y delimitar la zona de trabajo.',
      explanation: 'Son los 5 pasos secuenciales y obligatorios para garantizar la seguridad antes de intervenir en cualquier instalación eléctrica.'
    },
    {
      id: 25,
      year: '2018-2019',
      question: '¿Cuál es la sección mínima de cobre para: a) Circuito de alumbrado b) Circuito de tomas de corriente?',
      answer: 'a) Alumbrado: 1,5 mm²\nb) Tomas de corriente: 2,5 mm²',
      explanation: 'Las normas establecen estas secciones mínimas para garantizar la seguridad y el correcto funcionamiento, evitando sobrecalentamientos.'
    },
    {
      id: 26,
      year: '2018-2019',
      question: '¿Qué significa "Tipo A" en un interruptor diferencial?',
      answer: 'Que detecta corrientes de fuga alternas y también continuas pulsantes.',
      explanation: 'Es necesario para proteger circuitos con aparatos electrónicos (ordenadores, lavadoras modernas) que pueden generar este tipo de fugas no sinusoidales.'
    },
    {
      id: 27,
      year: '2018-2019',
      question: 'En una red trifásica de 400V entre fases, ¿qué tensión hay entre una fase y el neutro?',
      answer: '230 V.',
      explanation: 'La tensión simple (fase-neutro) es la tensión compuesta (fase-fase) dividida por √3. (400V / 1,732 ≈ 230V).'
    },
    {
      id: 28,
      year: '2018-2019',
      question: '¿Qué es la selectividad entre dos disyuntores en serie?',
      answer: 'Es la coordinación para que, ante un fallo, solo dispare el disyuntor más cercano al defecto (aguas abajo), manteniendo el resto de la instalación con servicio.',
      explanation: 'Se logra usando disyuntores con diferentes tiempos de retardo o umbrales de disparo, asegurando que el más pequeño o rápido actúe primero.'
    },
    {
      id: 29,
      year: '2018-2019',
      question: '¿Qué función cumple la puesta a tierra de las masas (Clase I)?',
      answer: 'Derivar a tierra las corrientes de fuga por fallo de aislamiento, permitiendo que el diferencial actúe y corte la alimentación para proteger de contactos indirectos.',
      explanation: 'Sin la tierra, la carcasa quedaría en tensión, representando un peligro mortal hasta que alguien la tocase.'
    },
    {
      id: 30,
      year: '2018-2019',
      question: '¿Qué indica un resultado de 230V (F-N), 230V (F-T) y 0V (N-T) al medir en una toma?',
      answer: 'Que la instalación es correcta y segura (en un régimen TT o TN).',
      explanation: 'Confirma la tensión de servicio, la correcta conexión a tierra y que el neutro está correctamente referenciado al potencial de tierra.'
    },
    {
      id: 31,
      year: '2019-2020',
      question: 'En un circuito serie R-L en CA, ¿cómo está la corriente respecto a la tensión?',
      answer: 'La corriente está retrasada respecto a la tensión.',
      explanation: 'La bobina (L) se opone a los cambios de corriente, haciendo que su onda vaya "detrás" de la onda de tensión.'
    },
    {
      id: 32,
      year: '2019-2020',
      question: '¿Qué es la impedancia (Z) en un circuito de CA?',
      answer: 'Es la oposición total al paso de la corriente alterna, combinando la resistencia (R) y la reactancia (X).',
      explanation: 'Es el equivalente a la resistencia en corriente continua, pero para CA. Se calcula como Z = √(R² + X²) y se mide en Ohmios (Ω).'
    },
    {
      id: 33,
      year: '2019-2020',
      question: 'Calcule la corriente para una resistencia de 50 Ω con una tensión de 100 V DC.',
      answer: '2 A.',
      explanation: 'Ley de Ohm: I = U / R = 100 V / 50 Ω = 2 A.'
    },
    {
      id: 34,
      year: '2019-2020',
      question: 'Si la misma resistencia de 50 Ω se conecta a 230 V AC, ¿cuál es la corriente eficaz?',
      answer: '4,6 A.',
      explanation: 'Para una resistencia pura, la Ley de Ohm se aplica igual con valores eficaces: I = U / R = 230 V / 50 Ω = 4,6 A.'
    },
    {
      id: 35,
      year: '2019-2020',
      question: '¿Qué es un "esquema unifilar"?',
      answer: 'Una representación gráfica simplificada de una instalación donde cada circuito se representa por una única línea.',
      explanation: 'Permite una visión clara de la estructura del cuadro eléctrico, mostrando protecciones, secciones y número de conductores de forma rápida.'
    },
    {
      id: 36,
      year: '2019-2020',
      question: '¿Qué es la "conexión estrella" en un motor trifásico?',
      answer: 'Unir los tres finales de las bobinas (U2, V2, W2) en un punto común, conectando los principios (U1, V1, W1) a las fases de la red.',
      explanation: 'En esta conexión, cada bobina recibe la tensión simple (U_red / √3). Es ideal para arrancar motores en redes de alta tensión.'
    },
    {
      id: 37,
      year: '2019-2020',
      question: '¿Qué es la "conexión triángulo" en un motor trifásico?',
      answer: 'Conectar el final de cada bobina con el principio de la siguiente (U2-V1, V2-W1, W2-U1), conectando las fases a los vértices.',
      explanation: 'En esta conexión, cada bobina recibe la tensión compuesta total de la red. Es la conexión de trabajo normal para máxima potencia.'
    },
    {
      id: 38,
      year: '2019-2020',
      question: '¿Cuándo se puede conectar un motor 230/400V en triángulo?',
      answer: 'Cuando la tensión compuesta de la red trifásica sea de 230 V.',
      explanation: 'La tensión menor de la placa (230V) indica la tensión máxima que soporta una bobina, lo cual corresponde a la conexión en triángulo.'
    },
    {
      id: 39,
      year: '2019-2020',
      question: '¿Cuál es la función de un "interruptor crepuscular"?',
      answer: 'Conectar o desconectar un circuito (generalmente de iluminación) según el nivel de luz ambiente.',
      explanation: 'Utiliza una fotocélula para encender las luces al anochecer y apagarlas al amanecer, automatizando y ahorrando energía.'
    },
    {
      id: 40,
      year: '2019-2020',
      question: '¿Qué es la "caída de tensión" y por qué es importante limitarla?',
      answer: 'Es la pérdida de voltaje en un cable debido a su longitud y sección. Se limita para asegurar que los aparatos reciban la tensión correcta para funcionar bien.',
      explanation: 'Una caída de tensión excesiva (norma: >3% en alumbrado, >5% en fuerza) puede causar que las luces brillen menos o que los motores se sobrecalienten.'
    },
    {
      id: 41,
      year: '2020-2021',
      question: '¿Cuál es la máxima tensión de contacto (UL) admitida en locales secos para CA?',
      answer: '50 V AC.',
      explanation: 'Es el umbral de tensión considerado seguro que una persona puede soportar indefinidamente en condiciones secas sin riesgo vital.'
    },
    {
      id: 42,
      year: '2020-2021',
      question: '¿Qué régimen de neutro tiene la tierra del transformador y la tierra de las masas de la instalación separadas?',
      answer: 'Régimen TT.',
      explanation: 'La primera T significa tierra en el neutro de la fuente, la segunda T significa tierra independiente en las masas de la instalación.'
    },
    {
      id: 43,
      year: '2020-2021',
      question: '¿Para qué sirve la prueba de continuidad de los conductores de protección (PE)?',
      answer: 'Para verificar que hay un camino continuo y de baja resistencia desde todas las partes metálicas de la instalación hasta la toma de tierra.',
      explanation: 'Asegura que, en caso de fallo, la corriente de fuga pueda circular y hacer disparar las protecciones, evitando así el riesgo de electrocución.'
    },
    {
      id: 44,
      year: '2020-2021',
      question: '¿Qué curva de disparo se usa para disyuntores de alumbrado y tomas en viviendas?',
      answer: 'Curva C.',
      explanation: 'La curva C (disparo magnético entre 5 y 10 In) es un estándar polivalente para cargas generales con arranques moderados.'
    },
    {
      id: 45,
      year: '2020-2021',
      question: '¿Qué se necesita para conmutar una luz desde tres puntos?',
      answer: 'Dos conmutadores (vaivén) y un conmutador de cruzamiento.',
      explanation: 'Los conmutadores se colocan en los extremos y el cruzamiento en el medio, permitiendo invertir la polaridad de los hilos viajeros.'
    },
    {
      id: 46,
      year: '2020-2021',
      question: '¿Qué indica el código IP?',
      answer: 'Indica el grado de protección de una envolvente contra la entrada de cuerpos sólidos (1er dígito) y agua (2º dígito).',
      explanation: 'Es un estándar internacional para clasificar la robustez de los equipos frente a agentes externos.'
    },
    {
      id: 47,
      year: '2020-2021',
      question: 'Calcule la potencia total de tres lámparas de 60 W, 75 W y 100 W en paralelo.',
      answer: '235 W.',
      explanation: 'En paralelo, las potencias de las cargas resistivas se suman directamente: 60 + 75 + 100 = 235 W.'
    },
    {
      id: 48,
      year: '2020-2021',
      question: '¿Cuál es la función de la conexión equipotencial suplementaria (local)?',
      answer: 'Unir todas las partes metálicas accesibles en una zona de riesgo (ej. un baño) para evitar diferencias de potencial peligrosas entre ellas.',
      explanation: 'Es una seguridad extra que garantiza que, aunque falle algo, todo esté al mismo potencial de tierra en zonas húmedas.'
    },
    {
      id: 49,
      year: '2020-2021',
      question: '¿Qué instrumento se usa para medir la resistencia de la toma de tierra?',
      answer: 'Telurómetro.',
      explanation: 'Es el único aparato diseñado específicamente para medir la resistencia de un electrodo de tierra respecto al terreno circundante.'
    },
    {
      id: 50,
      year: '2020-2021',
      question: '¿Qué indica un resultado de 230V (F-N), 230V (F-T) y 0V (N-T) al medir en una toma?',
      answer: 'Que la instalación es correcta y segura (en un régimen TT o TN).',
      explanation: 'Confirma la tensión de servicio, la correcta conexión a tierra y que el neutro está correctamente referenciado al potencial de tierra.'
    }
  ]);

  currentQuestionIndex = signal(0);
  showAnswer = signal(false);
  selectedYear = signal('Todos');

  availableYears = computed(() => ['Todos', ...new Set(this.exams().map(e => e.year).sort().reverse())]);

  filteredExams = computed(() => {
    const year = this.selectedYear();
    if (year === 'Todos') {
      return this.exams();
    }
    return this.exams().filter(exam => exam.year === year);
  });

  currentQuestion = computed(() => this.filteredExams()?.[this.currentQuestionIndex()]);

  nextQuestion() {
    const total = this.filteredExams().length;
    if (total === 0) return;
    this.currentQuestionIndex.update(index => (index + 1) % total);
    this.showAnswer.set(false);
  }

  previousQuestion() {
    const total = this.filteredExams().length;
    if (total === 0) return;
    this.currentQuestionIndex.update(index => (index - 1 + total) % total);
    this.showAnswer.set(false);
  }

  toggleAnswer() {
    this.showAnswer.update(value => !value);
  }

  selectQuestion(index: number) {
    this.currentQuestionIndex.set(index);
    this.showAnswer.set(false);
  }

  selectYear(year: string) {
    this.selectedYear.set(year);
    this.currentQuestionIndex.set(0);
    this.showAnswer.set(false);
  }
}
