import { Injectable, signal } from '@angular/core';
import { SupabaseService } from './supabase.service';

export interface ExamQuestion {
    id?: number;
    year: string;
    question: string;
    correct_answer: string;
    explanation: string;
    category: string;
    options?: string[]; // Opcional para preguntas de opción múltiple
    question_fr?: string;
    correct_answer_fr?: string;
    explanation_fr?: string;
    options_fr?: string[]; // Opciones en francés
}

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    questions = signal<ExamQuestion[]>([]);

    constructor(private supabase: SupabaseService) { }


    // Mock Data for Offline Mode
    private readonly MOCK_QUESTIONS: ExamQuestion[] = [
        {
            id: 1, year: 'GAME_VV', category: 'Seguridad',
            question: '¿Cuál es la regla de oro al trabajar con electricidad?',
            correct_answer: 'Cortar la corriente y bloquear el disyuntor',
            explanation: 'Siempre se debe desenergizar y asegurar el corte antes de manipular.',
            options: ['Usar guantes de lana', 'Cortar la corriente y bloquear el disyuntor', 'Trabajar rápido', 'Tocar con el dorso de la mano']
        },
        {
            id: 2, year: 'GAME_VV', category: 'Normativa',
            question: 'En un sistema trifásico, ¿qué color tiene el conductor neutro?',
            correct_answer: 'Azul',
            explanation: 'Según la normativa IEC, el neutro siempre es azul.',
            options: ['Marrón', 'Negro', 'Gris', 'Azul']
        },
        {
            id: 3, year: 'GAME_VV', category: 'Fundamentos',
            question: '¿Qué mide la Ley de Ohm?',
            correct_answer: 'Relación entre tensión, corriente y resistencia',
            explanation: 'V = I * R es la ecuación fundamental de la electricidad.',
            options: ['La velocidad de los electrones', 'La potencia del motor', 'Relación entre tensión, corriente y resistencia', 'El calor disipado']
        },
        {
            id: 4, year: 'GAME_VV', category: 'Protecciones',
            question: '¿Para qué sirve un interruptor diferencial?',
            correct_answer: 'Proteger a las personas contra contactos indirectos',
            explanation: 'Detecta fugas de corriente a tierra y desconecta el circuito.',
            options: ['Proteger contra cortocircuitos', 'Proteger motores', 'Proteger a las personas contra contactos indirectos', 'Ahorrar energía']
        },
        {
            id: 5, year: 'GAME_VV', category: 'Motores',
            question: '¿Cómo se conectan las bobinas en un arranque Estrella?',
            correct_answer: 'Uniendo los finales (U2, V2, W2) en un punto común',
            explanation: 'Esto reduce la tensión en cada bobina a 230V en una red de 400V.',
            options: ['En serie con la línea', 'Uniendo los finales (U2, V2, W2) en un punto común', 'Directamente a L1, L2, L3', 'No se conectan']
        },
        {
            id: 6, year: 'GAME_VV', category: 'Herramientas',
            question: '¿Qué herramienta se usa para pelar cables sin dañar el cobre?',
            correct_answer: 'Pelacables automático',
            explanation: 'Ajusta la profundidad de corte para no marcar el conductor.',
            options: ['Tijeras de cocina', 'Alicate de corte', 'Pelacables automático', 'Cuchillo cartonero']
        },
        {
            id: 7, year: 'GAME_theory', category: 'Teoría',
            question: '¿Qué significa AC en electricidad?',
            correct_answer: 'Corriente Alterna',
            explanation: 'La corriente cambia de dirección 50 o 60 veces por segundo.',
            options: ['Antes de Cristo', 'Corriente Alta', 'Corriente Alterna', 'Amperios Contínuos']
        },
        {
            id: 8, year: 'GAME_theory', category: 'Teoría',
            question: '¿Cuál es la unidad de la Resistencia?',
            correct_answer: 'Ohmio (Ω)',
            explanation: 'Se mide en Ohmios.',
            options: ['Voltio', 'Amperio', 'Watt', 'Ohmio (Ω)']
        },
        {
            id: 9, year: 'GAME_VV', category: 'Seguridad',
            question: '¿Qué EPI es obligatorio para comprobar ausencia de tensión?',
            correct_answer: 'Pantalla facial y guantes dieléctricos',
            explanation: 'Protegen contra arco eléctrico y choque eléctrico.',
            options: ['Gafas de sol', 'Pantalla facial y guantes dieléctricos', 'Guantes de cuero', 'Casco de obra']
        },
        {
            id: 10, year: 'GAME_VV', category: 'Protecciones',
            question: '¿Qué curva de disparo se usa para proteger cables largos?',
            correct_answer: 'Curva B',
            explanation: 'Dispara entre 3 y 5 veces la In, protegiendo generadores y cables largos.',
            options: ['Curva C', 'Curva D', 'Curva B', 'Curva K']
        },
        {
            id: 11, year: 'GAME_VV', category: 'Herramientas',
            question: '¿Qué mide un polímetro en posición de continuidad?',
            correct_answer: 'Si un circuito está cerrado (pita) o abierto',
            explanation: 'Es fundamental para comprobar fusibles y cables rotos.',
            options: ['La temperatura del cable', 'Si un circuito está cerrado (pita) o abierto', 'La potencia consumida', 'La frecuencia de red']
        },
        {
            id: 12, year: 'GAME_VV', category: 'Fundamentos',
            question: '¿Si sube la resistencia manteniendo el voltaje, qué pasa con la corriente?',
            correct_answer: 'Baja',
            explanation: 'Por Ley de Ohm (I=V/R), resistencia y corriente son inversamente proporcionales.',
            options: ['Sube', 'Se mantiene igual', 'Baja', 'Se vuelve alterna']
        },
        {
            id: 13, year: 'GAME_VV', category: 'Teoría',
            question: '¿Qué es un contactor?',
            correct_answer: 'Un interruptor controlado por electricidad (bobina)',
            explanation: 'Permite controlar potencias altas con una señal de mando pequeña.',
            options: ['Un fusible rearmable', 'Un interruptor manual', 'Un interruptor controlado por electricidad (bobina)', 'Un tipo de motor']
        },
        {
            id: 14, year: 'GAME_VV', category: 'Seguridad',
            question: '¿Qué color indica el conductor de Tierra (PE)?',
            correct_answer: 'Verde-Amarillo',
            explanation: 'Es el color universal para el conductor de protección.',
            options: ['Negro', 'Azul', 'Verde-Amarillo', 'Rojo']
        },
        {
            id: 15, year: 'GAME_VV', category: 'Potencia',
            question: '¿En qué unidad se mide la Potencia Eléctrica?',
            correct_answer: 'Vatios (W)',
            explanation: 'P = V * I. Se mide en Vatios o Watts.',
            options: ['Julios', 'Vatios (W)', 'Voltios', 'Newton']
        },
        {
            id: 16, year: 'GAME_VV', category: 'Normativa',
            question: '¿Cuál es la tensión monofásica estándar en Europa?',
            correct_answer: '230 V',
            explanation: 'La tensión entre fase y neutro es nominaalmente 230 V.',
            options: ['110 V', '400 V', '230 V', '12 V']
        },
        {
            id: 17, year: 'GAME_VV', category: 'Circuitos',
            question: 'En un circuito serie, ¿cómo es la corriente?',
            correct_answer: 'La misma en todos los componentes',
            explanation: 'Sólo hay un camino, por lo que los electrones no pueden desviarse.',
            options: ['Se divide entre las cargas', 'La misma en todos los componentes', 'Es cero', 'Depende del voltaje']
        },
        {
            id: 18, year: 'GAME_VV', category: 'Motores',
            question: '¿Qué hace un guardamotor?',
            correct_answer: 'Protege contra cortocircuitos y sobrecargas',
            explanation: 'Es un dispositivo todo-en-uno para protección de motores.',
            options: ['Solo arranca el motor', 'Protege contra cortocircuitos y sobrecargas', 'Mide las revoluciones', 'Enfría el motor']
        },
        {
            id: 19, year: 'GAME_VV', category: 'Seguridad',
            question: '¿Qué significa IP en una caja eléctrica (ej. IP65)?',
            correct_answer: 'Índice de Protección (Polvo y Agua)',
            explanation: 'El primer dígito es sólidos (polvo) y el segundo líquidos (agua).',
            options: ['Índice de Potencia', 'Internet Protocol', 'Índice de Protección (Polvo y Agua)', 'Intensidad Pico']
        },
        {
            id: 20, year: 'GAME_VV', category: 'Teoría',
            question: '¿Qué es un cortocircuito?',
            correct_answer: 'Unión directa de fase y neutro sin resistencia',
            explanation: 'Provoca una corriente infinita instantánea.',
            options: ['Un cable cortado', 'Unión directa de fase y neutro sin resistencia', 'Un apagón programado', 'Una bajada de tensión']
        },
        // 🛡️ SEGURIDAD AVANZADA
        {
            id: 21, year: 'GAME_VV', category: 'Seguridad',
            question: '¿Cuál es la tensión máxima de seguridad en corriente alterna (lugar seco)?',
            correct_answer: '50 V',
            explanation: 'Por encima de 50 VCA se considera peligroso en ambientes secos (25 VCA en húmedos).',
            options: ['12 V', '24 V', '50 V', '110 V']
        },
        {
            id: 22, year: 'GAME_VV', category: 'Seguridad',
            question: '¿Qué significan las siglas IP en protección? (ej. IP20)',
            correct_answer: 'Ingress Protection (Protección contra sólidos y líquidos)',
            explanation: 'El primer dígito indica sólidos (polvo/dedos) y el segundo líquidos (agua).',
            options: ['Input Power', 'Ingress Protection', 'Internal Protocol', 'Ionic Polarization']
        },
        {
            id: 23, year: 'GAME_VV', category: 'Seguridad',
            question: '¿Qué es el contacto indirecto?',
            correct_answer: 'Tocar una masa metálica puesta accidentalmente bajo tensión',
            explanation: 'Ocurre cuando falla el aislamiento interno (ej. carcasa de lavadora). Se protege con Diferencial + Tierra.',
            options: ['Tocar un cable pelado', 'Tocar una masa metálica puesta accidentalmente bajo tensión', 'Tocar dos fases', 'Tocar el neutro']
        },
        // 📏 NORMATIVA E INSTALACIONES
        {
            id: 24, year: 'GAME_VV', category: 'Normativa',
            question: '¿Qué colores identifican las tres fases (L1, L2, L3) en Europa?',
            correct_answer: 'Marrón, Negro, Gris',
            explanation: 'Es el código de colores estándar IEC para sistemas trifásicos.',
            options: ['Rojo, Amarillo, Azul', 'Marrón, Negro, Gris', 'Negro, Marrón, Negro', 'Azul, Marrón, Verde']
        },
        {
            id: 25, year: 'GAME_VV', category: 'Normativa',
            question: '¿Dónde se debe instalar un interruptor magnetotérmico?',
            correct_answer: 'Al principio del circuito que protege',
            explanation: 'Debe proteger la línea desde su origen contra sobrecargas y cortocircuitos.',
            options: ['Al final del circuito', 'Al principio del circuito que protege', 'En el medio', 'Solo en el neutro']
        },
        {
            id: 26, year: 'GAME_VV', category: 'Instalaciones',
            question: '¿Qué es la selectividad entre protecciones?',
            correct_answer: 'Que dispare solo la protección más cercana al fallo',
            explanation: 'Evita que un corto en un enchufe apague todo el edificio.',
            options: ['Que disparen todos a la vez', 'Que dispare solo la protección más cercana al fallo', 'Elegir la marca más cara', 'Usar fusibles de vidrio']
        },
        // ⚡ TEORÍA ELÉCTRICA
        {
            id: 27, year: 'GAME_theory', category: 'Teoría',
            question: '¿Qué es la potencia reactiva?',
            correct_answer: 'Potencia que crean los campos magnéticos (motores/trafos)',
            explanation: 'Se mide en VAR. No produce trabajo útil pero carga la red.',
            options: ['Potencia de la luz', 'Potencia que crean los campos magnéticos (motores/trafos)', 'Potencia de las resistencias', 'Potencia nuclear']
        },
        {
            id: 28, year: 'GAME_theory', category: 'Teoría',
            question: '¿Qué pasa si conectas dos resistencias iguales en paralelo?',
            correct_answer: 'La resistencia total es la mitad de una de ellas',
            explanation: 'Rt = R / 2. En paralelo, la resistencia total siempre disminuye.',
            options: ['La resistencia se duplica', 'La resistencia total es la mitad de una de ellas', 'Se queman', 'La resistencia es cero']
        },
        {
            id: 29, year: 'GAME_theory', category: 'Calculos',
            question: 'Fórmula de la Ley de Joule (Calor)',
            correct_answer: 'Q = I² * R * t',
            explanation: 'Explica por qué los cables se calientan y por qué protegemos contra sobrecargas.',
            options: ['Q = V * I', 'Q = I² * R * t', 'Q = R / V', 'Q = m * c * Δt']
        },
        // 🏭 AUTOMATIZACIÓN (Nivel Experto)
        {
            id: 30, year: 'GAME_pro', category: 'Automatización',
            question: '¿Qué es un contacto NO (Normalmente Abierto)?',
            correct_answer: 'Un contacto que no deja pasar corriente en reposo',
            explanation: 'Se cierra solo cuando activamos el pulsador o relé.',
            options: ['Un contacto que siempre pasa corriente', 'Un contacto que no deja pasar corriente en reposo', 'Un contacto roto', 'Un contacto a tierra']
        },
        {
            id: 31, year: 'GAME_pro', category: 'Automatización',
            question: '¿Qué es el enclavamiento (o realimentación) en un contactor?',
            correct_answer: 'Usar un contacto auxiliar NO en paralelo con el pulsador de marcha',
            explanation: 'Mantiene el contactor activo después de soltar el botón de marcha.',
            options: ['Ponerle un candado', 'Usar un contacto auxiliar NO en paralelo con el pulsador de marcha', 'Atornillarlo fuerte', 'Usar un temporizador']
        },
        {
            id: 32, year: 'GAME_pro', category: 'Automatización',
            question: '¿Qué función cumple un relé térmico?',
            correct_answer: 'Protege el motor contra calentamiento lento (sobrecarga)',
            explanation: 'No protege contra cortocircuitos (eso lo hace el magnético o fusibles).',
            options: ['Arranca el motor', 'Protege contra rayos', 'Protege el motor contra calentamiento lento (sobrecarga)', 'Regula la velocidad']
        },
        {
            id: 33, year: 'GAME_pro', category: 'Automatización',
            question: '¿Qué es un PLC?',
            correct_answer: 'Controlador Lógico Programable',
            explanation: 'El cerebro de la automatización industrial (Autómata).',
            options: ['Power Line Communication', 'Controlador Lógico Programable', 'Polymer Lithium Cell', 'Pequeña Luz Controlada']
        },
        // 🧪 COMPONENTES
        {
            id: 34, year: 'GAME_VV', category: 'Componentes',
            question: '¿Símbolo de un condensador?',
            correct_answer: 'Dos líneas paralelas separadas',
            explanation: 'Almacena carga eléctrica. En alterna desfasa la corriente.',
            options: ['Una bobina', 'Un zig-zag', 'Dos líneas paralelas separadas', 'Un círculo con una X']
        },
        {
            id: 35, year: 'GAME_VV', category: 'Componentes',
            question: '¿Qué diferencia hay entre un seccionador y un interruptor?',
            correct_answer: 'El seccionador no puede abrir bajo carga',
            explanation: 'El seccionador crea un corte visible de seguridad, pero no apaga el arco eléctrico.',
            options: ['Son lo mismo', 'El seccionador no puede abrir bajo carga', 'El interruptor es más barato', 'El seccionador es automático']
        },
        {
            id: 36, year: 'GAME_pro', category: 'Motores',
            question: '¿Cuál es el deslizamiento en un motor asíncrono?',
            correct_answer: 'La diferencia de velocidad entre el campo magnético y el rotor',
            explanation: 'El rotor siempre gira un poco más lento que el campo magnético giratorio.',
            options: ['Cuando patina la correa', 'La diferencia de velocidad entre el campo magnético y el rotor', 'La grasa del eje', 'La velocidad síncrona']
        },
        {
            id: 37, year: 'GAME_theory', category: 'Calculos',
            question: '¿Unidad de la Capacidad de una batería?',
            correct_answer: 'Amperios-hora (Ah)',
            explanation: 'Indica cuánta corriente puede entregar durante una hora.',
            options: ['Voltios', 'Vatios', 'Amperios-hora (Ah)', 'Faradios']
        },
        {
            id: 38, year: 'GAME_pro', category: 'Seguridad',
            question: '¿Qué son las 5 reglas de oro?',
            correct_answer: 'Los 5 pasos obligatorios para trabajar sin tensión',
            explanation: '1. Corte 2. Bloqueo 3. Verificar ausencia tensión 4. Puesta a tierra 5. Señalizar.',
            options: ['Reglas para ganar dinero', 'Normas de etiqueta', 'Los 5 pasos obligatorios para trabajar sin tensión', 'Tipos de cables de oro']
        },
        {
            id: 39, year: 'GAME_VV', category: 'Instalaciones',
            question: '¿Altura estándar de los interruptores de luz?',
            correct_answer: 'Entre 100 cm y 120 cm del suelo',
            explanation: 'Para accesibilidad universal y ergonomía.',
            options: ['30 cm', 'Entre 100 cm y 120 cm del suelo', '180 cm', 'En el techo']
        },
        {
            id: 40, year: 'GAME_VV', category: 'Instalaciones',
            question: '¿Sección mínima para circuitos de alumbrado (vivienda)?',
            correct_answer: '1.5 mm²',
            explanation: 'Protegido normalmente con magnetotérmico de 10A o 16A.',
            options: ['0.75 mm²', '1.5 mm²', '2.5 mm²', '4 mm²']
        },
        {
            id: 41, year: 'GAME_VV', category: 'Instalaciones',
            question: '¿Sección mínima para enchufes de fuerza (usos varios)?',
            correct_answer: '2.5 mm²',
            explanation: 'Protegido normalmente con magnetotérmico de 16A o 20A.',
            options: ['1.5 mm²', '2.5 mm²', '4 mm²', '6 mm²']
        },
        {
            id: 42, year: 'GAME_pro', category: 'Componentes',
            question: '¿Qué es un telerruptor?',
            correct_answer: 'Un relé biestable que cambia de estado con cada pulso',
            explanation: 'Ideal para encender luces desde muchos puntos con pulsadores.',
            options: ['Un interruptor de TV', 'Un temporizador de escalera', 'Un relé biestable que cambia de estado con cada pulso', 'Un fusible']
        },
        {
            id: 43, year: 'GAME_theory', category: 'Física',
            question: '¿Qué es la frecuencia (Hz)?',
            correct_answer: 'Número de ciclos por segundo',
            explanation: 'En Europa es 50Hz, en América suele ser 60Hz.',
            options: ['Velocidad de internet', 'Voltaje pico', 'Número de ciclos por segundo', 'Resistencia al cambio']
        },
        {
            id: 44, year: 'GAME_pro', category: 'Seguridad',
            question: '¿Qué es la tensión de paso?',
            correct_answer: 'La diferencia de potencial entre los pies al caminar cerca de una falla a tierra',
            explanation: 'Suele ser peligrosa en subestaciones o caída de rayos. Se evita dando pasos cortos.',
            options: ['Tensión para caminar', 'La diferencia de potencial entre los pies al caminar cerca de una falla a tierra', 'Tensión de una pila', 'Un tipo de baile']
        },
        {
            id: 45, year: 'GAME_theory', category: 'Motores',
            question: '¿Cómo se invierte el giro de un motor trifásico?',
            correct_answer: 'Intercambiando dos de sus tres fases',
            explanation: 'Al cambiar L1 por L2 (por ejemplo), el campo magnético gira al revés.',
            options: ['Dando la vuelta al motor', 'Intercambiando dos de sus tres fases', 'No se puede', 'Cambiando el neutro']
        },
        {
            id: 46, year: 'GAME_pro', category: 'Instrumentación',
            question: '¿Qué es una pinza amperimétrica?',
            correct_answer: 'Mide la intensidad abrazando el cable sin cortarlo',
            explanation: 'Funciona por inducción magnética. Solo debe abrazar UN conductor (fase), no la manguera entera.',
            options: ['Una pinza de ropa', 'Mide voltaje', 'Mide la intensidad abrazando el cable sin cortarlo', 'Mide resistencia']
        },
        {
            id: 47, year: 'GAME_VV', category: 'Simbología',
            question: '¿Símbolo de Tierra?',
            correct_answer: 'Línea vertical con tres líneas horizontales decrecientes abajo',
            explanation: 'Indica conexión al potencial cero (terreno).',
            options: ['Un triángulo', 'Un círculo', 'Línea vertical con tres líneas horizontales decrecientes abajo', 'Una flecha']
        },
        {
            id: 48, year: 'GAME_pro', category: 'Materiales',
            question: '¿Cuál es mejor conductor: Oro, Plata o Cobre?',
            correct_answer: 'Plata',
            explanation: 'Plata > Cobre > Oro. El oro se usa en contactos porque no se oxida, no porque conduzca mejor.',
            options: ['Oro', 'Cobre', 'Plata', 'Aluminio']
        },
        {
            id: 49, year: 'GAME_theory', category: 'Calculos',
            question: 'Factor de potencia (Cos phi) ideal',
            correct_answer: '1',
            explanation: 'Significa que toda la energía es activa (útil) y no hay reactiva.',
            options: ['0', '0.5', '1', 'Infinito']
        },
        {
            id: 50, year: 'GAME_pro', category: 'Seguridad',
            question: '¿Qué es un arco eléctrico?',
            correct_answer: 'Descarga luminosa y térmica a través del aire',
            explanation: 'Puede alcanzar 20.000°C. Es el mayor peligro para electricistas industriales.',
            options: ['Un arco iris', 'Una lámpara moderna', 'Descarga luminosa y térmica a través del aire', 'Un fusible fundido']
        }
    ];

    async fetchQuestions(year?: string) {
        // Fallback to mock data if offline or if configured to do so
        if (this.supabase.client['mockClient'] || true) { // Force mock for now to ensure game works
            console.log('⚡ Using Offline Mock Data for:', year);
            if (year && year !== 'Todos') {
                return this.MOCK_QUESTIONS.filter(q => q.year === year || q.year === 'GAME_theory');
            }
            return this.MOCK_QUESTIONS;
        }

        let query = this.supabase.client
            .from('exam_questions')
            .select('*');

        if (year && year !== 'Todos') {
            query = query.eq('year', year);
        }

        const { data, error } = await query;

        // Final fallback if DB returns empty
        if (!data || data.length === 0) {
            console.warn('⚠️ No data from DB, using Mock Data');
            if (year && year !== 'Todos') {
                return this.MOCK_QUESTIONS.filter(q => q.year === year || q.year === 'GAME_theory');
            }
            return this.MOCK_QUESTIONS;
        }

        if (error) throw error;

        this.questions.set(data as ExamQuestion[]);
        return data;
    }
}
