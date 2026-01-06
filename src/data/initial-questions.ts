import { ExamQuestion } from '../services/database.service';

export const INITIAL_QUESTIONS: ExamQuestion[] = [
    // 2017-2018
    {
        year: '2017-2018',
        category: 'Normativa',
        question: 'Indique los colores normalizados de los conductores: PE, N y L1.',
        correct_answer: 'PE: Verde-Amarillo, N: Azul claro, L1: Marrón.',
        explanation: 'Norma HD 308 S2. El verde-amarillo es exclusivo para protección. El azul es para el neutro.',
        question_fr: 'Indiquez les couleurs normalisées des conducteurs : PE, N et L1.',
        correct_answer_fr: 'PE : Vert-Jaune, N : Bleu clair, L1 : Marron.',
        explanation_fr: 'Norme HD 308 S2. Le vert-jaune est exclusif pour la protection. Le bleu est pour le neutre.'
    },
    {
        year: '2017-2018',
        category: 'Protección',
        question: 'Cite tres medidas de protección contra contactos directos.',
        correct_answer: '1. Aislamiento, 2. Barreras/Envolventes, 3. Alejamiento.',
        explanation: 'Buscan impedir físicamente el contacto con partes que normalmente están bajo tensión.',
        question_fr: 'Citez trois mesures de protection contre les contacts directs.',
        correct_answer_fr: '1. Isolation, 2. Barrières/Enveloppes, 3. Éloignement.',
        explanation_fr: 'Elles visent à empêcher physiquement le contact avec des parties normalement sous tension.'
    },
    {
        year: '2017-2018',
        category: 'Regímenes de Neutro',
        question: 'En un régimen TN-C, ¿cómo se llama el conductor que une Neutro y Protección?',
        correct_answer: 'Conductor PEN.',
        explanation: 'Protecteur-Neutre combinados en un solo cable.',
        question_fr: 'En régime TN-C, comment s\'appelle le conducteur qui unit Neutre et Protection ?',
        correct_answer_fr: 'Conducteur PEN.',
        explanation_fr: 'Protecteur-Neutre combinés en un seul câble.'
    },
    {
        year: '2017-2018',
        category: 'Medidas',
        question: 'Tensión de ensayo y valor mínimo para resistencia de aislamiento en red 230/400V.',
        correct_answer: '500 V DC | ≥ 1,0 MΩ',
        explanation: 'Se usa tensión continua superior para verificar la integridad del aislamiento.',
        question_fr: 'Tension d\'essai et valeur minimale pour la résistance d\'isolement sur réseau 230/400V.',
        correct_answer_fr: '500 V DC | ≥ 1,0 MΩ',
        explanation_fr: 'Une tension continue supérieure est utilisée pour vérifier l\'intégrité de l\'isolation.'
    },
    {
        year: '2017-2018',
        category: 'Protección',
        question: '¿Qué funciones cumple un disyuntor magnetotérmico?',
        correct_answer: 'Protección contra sobrecargas (térmica) y cortocircuitos (magnética).',
        explanation: 'La parte térmica protege el cable; la magnética reacciona ante fallos graves instantáneos.',
        question_fr: 'Quelles fonctions remplit un disjoncteur magnétothermique ?',
        correct_answer_fr: 'Protection contre les surcharges (thermique) et les courts-circuits (magnétique).',
        explanation_fr: 'La partie thermique protège le câble ; la magnétique réagit aux défauts graves instantanés.'
    },
    {
        year: '2017-2018',
        category: 'Locales Húmedos',
        question: '¿En qué volúmenes de un baño está prohibido instalar tomas de 230V?',
        correct_answer: 'Volúmenes 0, 1 y 2.',
        explanation: 'Solo se permiten tomas en el Volumen 3 (fuera de los 60cm de la bañera) y protegidas por DDR 30mA.',
        question_fr: 'Dans quels volumes d\'une salle de bain est-il interdit d\'installer des prises 230V ?',
        correct_answer_fr: 'Volumes 0, 1 et 2.',
        explanation_fr: 'Les prises ne sont autorisées que dans le Volume 3 (hors des 60cm de la baignoire) et protégées par un DDR 30mA.'
    },
    {
        year: '2017-2018',
        category: 'Protección',
        question: '¿Qué significan las siglas DDR?',
        correct_answer: 'Dispositivo Diferencial Residual.',
        explanation: 'Protección fundamental contra contactos indirectos y fugas a tierra.',
        question_fr: 'Que signifient les initiales DDR ?',
        correct_answer_fr: 'Dispositif Différentiel Résiduel.',
        explanation_fr: 'Protection fondamentale contre les contacts indirects et les fuites à la terre.'
    },
    {
        year: '2017-2018',
        category: 'Cálculo',
        question: 'Calcule la intensidad de un radiador de 2500W a 230V.',
        correct_answer: '10,87 A.',
        explanation: 'I = P / V = 2500 / 230. El cos φ para calefacción resistiva es 1.',
        question_fr: 'Calculez l\'intensité d\'un radiateur de 2500W à 230V.',
        correct_answer_fr: '10,87 A.',
        explanation_fr: 'I = P / V = 2500 / 230. Le cos φ pour le chauffage résistif est de 1.'
    },
    {
        year: '2017-2018',
        category: 'Materiales',
        question: '¿Qué cable se usa para instalación fija doméstica seca (con protección)?',
        correct_answer: 'NYM-J',
        explanation: "Designación estándar en Luxemburgo. 'J' indica que incluye conductor PE.",
        question_fr: 'Quel câble est utilisé pour une installation fixe domestique sèche (avec protection) ?',
        correct_answer_fr: 'NYM-J',
        explanation_fr: "Désignation standard au Luxembourg. 'J' indique qu'il inclut le conducteur PE."
    },
    {
        year: '2017-2018',
        category: 'Seguridad',
        question: '¿ Finalidad de la conexión equipotencial principal?',
        correct_answer: 'Unir todas las masas metálicas (agua, gas, estructura) al borne de tierra.',
        explanation: 'Evita diferencias de potencial peligrosas entre objetos metálicos accesibles.',
        question_fr: 'But de la liaison équipotentielle principale ?',
        correct_answer_fr: 'Relier toutes les masses métalliques (eau, gaz, structure) à la borne de terre.',
        explanation_fr: 'Évite les différences de potentiel dangereuses entre des objets métalliques accessibles.'
    },

    // 2018-2019
    {
        year: '2018-2019',
        category: 'Seguridad',
        question: 'Diferencia entre contacto directo e indirecto.',
        correct_answer: 'Directo: tocar fase. Indirecto: tocar carcasa que ha fallado.',
        explanation: 'La protección contra indirectos requiere puesta a tierra + DDR.',
        question_fr: 'Différence entre contact direct et indirect.',
        correct_answer_fr: 'Direct : toucher la phase. Indirect : toucher une carcasse en défaut.',
        explanation_fr: 'La protection contre les contacts indirects nécessite une mise à la terre + DDR.'
    },
    {
        year: '2018-2019',
        category: 'Protección',
        question: '¿Qué dispositivo es obligatorio en la cabeza de la instalación?',
        correct_answer: 'Interruptor Automático General (Disyuntor General).',
        explanation: 'Corte general y protección de la línea de acometida.',
        question_fr: 'Quel dispositif est obligatoire en tête d\'installation ?',
        correct_answer_fr: 'Interrupteur Automatique Général (Disjoncteur Général).',
        explanation_fr: 'Coupure générale et protection de la ligne d\'alimentation.'
    },
    {
        year: '2018-2019',
        category: 'Regímenes de Neutro',
        question: 'En TN-S, ¿dónde se separan el Neutro y la Protección?',
        correct_answer: 'En el origen de la instalación.',
        explanation: 'A partir de ahí viajan como conductores independientes.',
        question_fr: 'En TN-S, où sont séparés le Neutre et la Protection ?',
        correct_answer_fr: 'À l\'origine de l\'installation.',
        explanation_fr: 'À partir de là, ils voyagent comme des conducteurs indépendants.'
    },
    {
        year: '2018-2019',
        category: 'Seguridad',
        question: 'Cite las 5 reglas de oro.',
        correct_answer: '1. Desconectar, 2. Bloquear, 3. VAT, 4. Poner a tierra, 5. Delimitar.',
        explanation: 'Procedimiento obligatorio para trabajar sin tensión.',
        question_fr: 'Citez les 5 règles d\'or.',
        correct_answer_fr: '1. Séparer, 2. Condamner, 3. VAT, 4. Mettre à la terre, 5. Délimiter.',
        explanation_fr: 'Procédure obligatoire pour travailler hors tension.'
    },
    {
        year: '2018-2019',
        category: 'Instalaciones',
        question: 'Sección mínima para Alumbrado y Tomas.',
        correct_answer: 'Alumbrado: 1,5 mm² | Tomas: 2,5 mm².',
        explanation: 'Estándares de seguridad para evitar sobrecalentamientos.',
        question_fr: 'Section minimale pour l\'Éclairage et les Prises.',
        correct_answer_fr: 'Éclairage : 1,5 mm² | Prises : 2,5 mm².',
        explanation_fr: 'Normes de sécurité pour éviter les surchauffes.'
    },
    {
        year: '2018-2019',
        category: 'Protección',
        question: '¿Qué significa un DDR "Tipo A"?',
        correct_answer: 'Detecta fugas AC y continuas pulsantes.',
        explanation: 'Esencial para cargadores, lavadoras y electrónica moderna.',
        question_fr: 'Que signifie un DDR "Type A" ?',
        correct_answer_fr: 'Détecte les fuites AC et continues pulsées.',
        explanation_fr: 'Essentiel pour les chargeurs, machines à laver et l\'électronique moderne.'
    },
    {
        year: '2018-2019',
        category: 'Cálculo',
        question: 'Tensión fase-neutro en red de 400V.',
        correct_answer: '230 V.',
        explanation: 'U_simple = 400 / √3.',
        question_fr: 'Tension phase-neutre sur un réseau de 400V.',
        correct_answer_fr: '230 V.',
        explanation_fr: 'U_simple = 400 / √3.'
    },
    {
        year: '2018-2019',
        category: 'Protección',
        question: '¿Qué es la selectividad?',
        correct_answer: 'Que solo dispare el disyuntor afectado, no el general.',
        explanation: 'Garantiza la continuidad del servicio en el resto de la casa.',
        question_fr: 'Qu\'est-ce que la sélectivité ?',
        correct_answer_fr: 'Que seul le disjoncteur concerné déclenche, pas le général.',
        explanation_fr: 'Garantit la continuité du service dans le reste de la maison.'
    },
    {
        year: '2018-2019',
        category: 'Seguridad',
        question: 'Función de la puesta a tierra en Clase I.',
        correct_answer: 'Permitir que la corriente de fuga escape a tierra para activar el DDR.',
        explanation: 'Sin la tierra, la carcasa quedaría bajo tensión esperando que alguien la toque.',
        question_fr: 'Fonction de la mise à la terre en Classe I.',
        correct_answer_fr: 'Permettre au courant de fuite de s\'échapper vers la terre pour activer le DDR.',
        explanation_fr: 'Sans la terre, la carcasse resterait sous tension en attendant que quelqu\'un la touche.'
    },
    {
        year: '2018-2019',
        category: 'Medidas',
        question: 'Valor correcto en toma: F-N: 230V, F-T: 230V, N-T: 0V.',
        correct_answer: 'Instalación correcta.',
        explanation: 'Indica buen neutro y buena tierra.',
        question_fr: 'Valeur correcte sur une prise: F-N: 230V, F-T: 230V, N-T: 0V.',
        correct_answer_fr: 'Installation correcte.',
        explanation_fr: 'Indique un bon neutre et une bonne terre.'
    },

    // 2019-2020
    {
        year: '2019-2020',
        category: 'Teoría CA',
        question: 'En circuito R-L, ¿cómo está la corriente?',
        correct_answer: 'Retrasada respecto a la tensión.',
        explanation: 'El desfase es provocado por la autoinducción de la bobina.',
        question_fr: 'Dans un circuit R-L, comment est le courant ?',
        correct_answer_fr: 'En retard par rapport à la tension.',
        explanation_fr: 'Le déphasage est causé par l\'auto-induction de la bobine.'
    },
    {
        year: '2019-2020',
        category: 'Teoría CA',
        question: '¿Qué es la impedancia Z?',
        correct_answer: 'Oposición total: √(R² + X²).',
        explanation: 'Es la suma vectorial de la resistencia y la reactancia.',
        question_fr: 'Qu\'est-ce que l\'impédance Z ?',
        correct_answer_fr: 'Opposition totale : √(R² + X²).',
        explanation_fr: 'C\'est la somme vectorielle de la résistance et de la réactance.'
    },
    {
        year: '2019-2020',
        category: 'Cálculo',
        question: 'Corriente en R=50Ω con 100V DC.',
        correct_answer: '2 A.',
        explanation: 'I = 100 / 50.',
        question_fr: 'Courant dans R=50Ω avec 100V DC.',
        correct_answer_fr: '2 A.',
        explanation_fr: 'I = 100 / 50.'
    },
    {
        year: '2019-2020',
        category: 'Cálculo',
        question: 'Corriente eficaz en R=50Ω con 230V AC.',
        correct_answer: '4,6 A.',
        explanation: 'I = 230 / 50.',
        question_fr: 'Courant efficace dans R=50Ω avec 230V AC.',
        correct_answer_fr: '4,6 A.',
        explanation_fr: 'I = 230 / 50.'
    },
    {
        year: '2019-2020',
        category: 'Planos',
        question: '¿Qué es un esquema unifilar?',
        correct_answer: 'Representación simplificada con una sola línea por circuito.',
        explanation: 'Muestra de forma clara la estructura del cuadro eléctrico.',
        question_fr: 'Qu\'est-ce qu\'un schéma unifilaire ?',
        correct_answer_fr: 'Représentation simplifiée avec une seule ligne par circuit.',
        explanation_fr: 'Montre clairement la structure du tableau électrique.'
    },
    {
        year: '2019-2020',
        category: 'Motores',
        question: 'Conexión estrella (Y) en motor trifásico.',
        correct_answer: 'Unión de finales (U2, V2, W2) en un punto común.',
        explanation: 'Cada bobina recibe 230V en una red de 400V.',
        question_fr: 'Connexion étoile (Y) sur moteur triphasé.',
        correct_answer_fr: 'Union des fins (U2, V2, W2) en un point commun.',
        explanation_fr: 'Chaque bobine reçoit 230V sur un réseau de 400V.'
    },
    {
        year: '2019-2020',
        category: 'Motores',
        question: 'Conexión triángulo (Δ) en motor trifásico.',
        correct_answer: 'Final-Principio sucesivos (U2-V1, V2-W1, W2-U1).',
        explanation: 'Cada bobina recibe 400V completos.',
        question_fr: 'Connexion triangle (Δ) sur moteur triphasé.',
        correct_answer_fr: 'Fin-Début successifs (U2-V1, V2-W1, W2-U1).',
        explanation_fr: 'Chaque bobine reçoit 400V complets.'
    },
    {
        year: '2019-2020',
        category: 'Motores',
        question: '¿Cuándo conectar un motor 230/400V en Δ?',
        correct_answer: 'Cuando la red sea trifásica 230V.',
        explanation: 'Asegura que la bobina no reciba más de sus 230V nominales.',
        question_fr: 'Quand connecter un moteur 230/400V en Δ ?',
        correct_answer_fr: 'Quand le réseau est triphasé 230V.',
        explanation_fr: 'Assure que la bobine ne reçoit pas plus de ses 230V nominaux.'
    },
    {
        year: '2019-2020',
        category: 'Automatismos',
        question: 'Función del interruptor crepuscular.',
        correct_answer: 'Controlar luces según nivel de luminosidad exterior.',
        explanation: 'Ahorro energético en alumbrado público o jardines.',
        question_fr: 'Fonction de l\'interrupteur crépusculaire.',
        correct_answer_fr: 'Contrôler les lumières selon le niveau de luminosité extérieure.',
        explanation_fr: 'Économie d\'énergie dans l\'éclairage public ou les jardins.'
    },
    {
        year: '2019-2020',
        category: 'Cálculo de Líneas',
        question: 'Caída de tensión máxima permitida en Alumbrado y Fuerza.',
        correct_answer: 'Alumbrado: 3% | Fuerza: 5%.',
        explanation: 'Evita fallos por falta de voltaje en el receptor.',
        question_fr: 'Chute de tension maximale autorisée pour l\'Éclairage et la Force.',
        correct_answer_fr: 'Éclairage : 3% | Force : 5%.',
        explanation_fr: 'Évite les pannes dues au manque de tension au récepteur.'
    },

    // 2020-2021
    {
        year: '2020-2021',
        category: 'Seguridad',
        question: 'Máxima tensión de contacto en locales secos (AC).',
        correct_answer: '50 V AC.',
        explanation: 'Límite de seguridad para evitar paros cardíacos.',
        question_fr: 'Tension de contact maximale dans des locaux secs (AC).',
        correct_answer_fr: '50 V AC.',
        explanation_fr: 'Limite de sécurité pour éviter les arrêts cardiaques.'
    },
    {
        year: '2020-2021',
        category: 'Regímenes de Neutro',
        question: 'Tierra de transformador e instalación separadas.',
        correct_answer: 'Régimen TT.',
        explanation: 'Instalación típica en redes públicas.',
        question_fr: 'Terre du transformateur et installation séparées.',
        correct_answer_fr: 'Régime TT.',
        explanation_fr: 'Installation typique sur les réseaux publics.'
    },
    {
        year: '2020-2021',
        category: 'Verificación',
        question: '¿Para qué sirve la prueba de continuidad del PE?',
        correct_answer: 'Verificar camino de baja resistencia a tierra.',
        explanation: 'Garantiza que el diferencial saltará ante un fallo.',
        question_fr: 'À quoi sert le test de continuité du PE ?',
        correct_answer_fr: 'Vérifier le chemin de faible résistance vers la terre.',
        explanation_fr: 'Garantit que le différentiel se déclenchera en cas de défaut.'
    },
    {
        year: '2020-2021',
        category: 'Protección',
        question: 'Curva de disparo para disyuntores domésticos.',
        correct_answer: 'Curva C.',
        explanation: 'Polivalente para iluminación y pequeños motores.',
        question_fr: 'Courbe de déclenchement pour disjoncteurs domestiques.',
        correct_answer_fr: 'Courbe C.',
        explanation_fr: 'Polyvalent pour l\'éclairage et les petits moteurs.'
    },
    {
        year: '2020-2021',
        category: 'Instalaciones',
        question: '¿Qué se necesita para conmutar luz de 3 puntos?',
        correct_answer: '2 vaivén + 1 cruzamiento.',
        explanation: 'El cruzamiento se coloca siempre entre los dos vaivén.',
        question_fr: 'Que faut-il pour commuter la lumière de 3 points ?',
        correct_answer_fr: '2 va-et-vient + 1 permutateur.',
        explanation_fr: 'Le permutateur est toujours placé entre les deux va-et-vient.'
    },
    {
        year: '2020-2021',
        category: 'Protección',
        question: '¿Qué indica el código IP?',
        correct_answer: 'Grado de protección: Sólidos (1er nro), Agua (2do nro).',
        explanation: 'Ejemplo: IP44 es para exteriores protegidos.',
        question_fr: 'Que signifie le code IP ?',
        correct_answer_fr: 'Degré de protection : Solides (1er ch.), Eau (2e ch.).',
        explanation_fr: 'Exemple : IP44 est pour les extérieurs protégés.'
    },
    {
        year: '2020-2021',
        category: 'Cálculo',
        question: 'Potencia total de 60W, 75W y 100W en paralelo.',
        correct_answer: '235 W.',
        explanation: 'En paralelo puros, las potencias se suman.',
        question_fr: 'Puissance totale de 60W, 75W et 100W en parallèle.',
        correct_answer_fr: '235 W.',
        explanation_fr: 'En parallèle pur, les puissances s\'additionnent.'
    },
    {
        year: '2020-2021',
        category: 'Seguridad',
        question: 'Función de la equipotencial suplementaria.',
        correct_answer: 'Unir masas metálicas en zonas húmedas (baños).',
        explanation: 'Seguridad extra contra contactos indirectos.',
        question_fr: 'Fonction de la liaison équipotentielle supplémentaire.',
        correct_answer_fr: 'Relier les masses métalliques dans les zones humides (salles de bain).',
        explanation_fr: 'Sécurité supplémentaire contre les contacts indirects.'
    },
    {
        year: '2020-2021',
        category: 'Medidas',
        question: '¿Qué mide el telurómetro?',
        correct_answer: 'La resistencia de la toma de tierra.',
        explanation: 'Vital para asegurar que el sistema TT funcione.',
        question_fr: 'Que mesure le telluromètre ?',
        correct_answer_fr: 'La résistance de la prise de terre.',
        explanation_fr: 'Vital pour assurer que le système TT fonctionne.'
    },
    {
        year: '2020-2021',
        category: 'Medidas',
        question: '¿Es correcto 0V entre Neutro y Tierra?',
        correct_answer: 'Sí, es el valor ideal.',
        explanation: 'Indica que el neutro no tiene retorno de carga excesivo.',
        question_fr: 'Est-il correct d\'avoir 0V entre Neutre et Terre ?',
        correct_answer_fr: 'Oui, c\'est la valeur idéale.',
        explanation_fr: 'Indique que le neutre n\'a pas de retour de charge excessif.'
    },

    // 2023-2024
    {
        year: '2023-2024',
        category: 'Instalaciones',
        question: 'In máxima para disyuntor en circuito de 2,5 mm².',
        correct_answer: '20 A.',
        explanation: 'Bajo condiciones normales de instalación empotrada.',
        question_fr: 'In maximale pour un disjoncteur dans un circuit de 2,5 mm².',
        correct_answer_fr: '20 A.',
        explanation_fr: 'Dans des conditions normales d\'installation encastrée.'
    },
    {
        year: '2023-2024',
        category: 'Teoría',
        question: 'Defina "masa".',
        correct_answer: 'Parte conductora accesible que no debería tener tensión.',
        explanation: 'Carcasas, chasis de motores, etc.',
        question_fr: 'Définissez « masse ».',
        correct_answer_fr: 'Partie conductrice accessible qui ne devrait pas être sous tension.',
        explanation_fr: 'Carcasses, châssis de moteurs, etc.'
    },
    {
        year: '2023-2024',
        category: 'Regímenes de Neutro',
        question: '¿Dónde se divide el PEN en el esquema TN-C-S?',
        correct_answer: 'En el punto de entrada (cuadro general).',
        explanation: 'Nunca debe volverse a unir después de la división.',
        question_fr: 'Où le PEN est-il divisé dans le schéma TN-C-S ?',
        correct_answer_fr: 'Au point d\'entrée (tableau général).',
        explanation_fr: 'Il ne doit jamais être réuni après la division.'
    },
    {
        year: '2023-2024',
        category: 'Verificación',
        question: '¿Cómo se comprueba un DDR?',
        correct_answer: 'Con un RCD Tester (Inyector de corriente).',
        explanation: 'Mide el tiempo de disparo y la corriente de fuga real.',
        question_fr: 'Comment vérifie-t-on un DDR ?',
        correct_answer_fr: 'Avec un testeur RCD (Injecteur de courant).',
        explanation_fr: 'Mesure le temps de déclenchement et le courant de fuite réel.'
    },
    {
        year: '2023-2024',
        category: 'Normativa',
        question: 'Significado de IP4X.',
        correct_answer: 'Protección contra objetos > 1mm.',
        explanation: 'Seguridad contra cables finos o herramientas pequeñas.',
        question_fr: 'Signification de IP4X.',
        correct_answer_fr: 'Protection contre les objets > 1mm.',
        explanation_fr: 'Sécurité contre les fils fins ou les petits outils.'
    },
    {
        year: '2023-2024',
        category: 'Cálculo',
        question: 'Resistencia de 20Ω y 30Ω en serie.',
        correct_answer: '50 Ω.',
        explanation: 'R_total = R1 + R2.',
        question_fr: 'Résistance de 20Ω et 30Ω en série.',
        correct_answer_fr: '50 Ω.',
        explanation_fr: 'R_total = R1 + R2.'
    },
    {
        year: '2023-2024',
        category: 'Cálculo',
        question: 'Resistencia de 20Ω y 30Ω en paralelo.',
        correct_answer: '12 Ω.',
        explanation: 'R_total = (R1*R2) / (R1+R2).',
        question_fr: 'Résistance de 20Ω et 30Ω en parallèle.',
        correct_answer_fr: '12 Ω.',
        explanation_fr: 'R_total = (R1*R2) / (R1+R2).'
    },
    {
        year: '2023-2024',
        category: 'Seguridad',
        question: 'Medida para entornos muy conductores (ej. cisternas).',
        correct_answer: 'Muy Baja Tensión de Seguridad (MBTS).',
        explanation: 'Tensiones < 24V o 12V para evitar choque eléctrico.',
        question_fr: 'Mesure pour environnements très conducteurs (ex. réservoirs).',
        correct_answer_fr: 'Très Basse Tension de Sécurité (TBTS).',
        explanation_fr: 'Tensions < 24V ou 12V pour éviter les chocs électriques.'
    },
    {
        year: '2023-2024',
        category: 'Motores',
        question: 'Invertir giro en trifásico.',
        correct_answer: 'Cruzar dos fases cualesquiera.',
        explanation: 'Cambia el sentido del campo magnético giratorio.',
        question_fr: 'Inverser la rotation en triphasé.',
        correct_answer_fr: 'Croiser deux phases quelconques.',
        explanation_fr: 'Change le sens du champ magnétique tournant.'
    },
    {
        year: '2023-2024',
        category: 'Automatismos',
        question: 'Función del circuito de mando.',
        correct_answer: 'Gobernar la bobina del contactor de potencia.',
        explanation: 'Aísla el control de la fuerza por seguridad.',
        question_fr: 'Fonction du circuit de commande.',
        correct_answer_fr: 'Piloter la bobine du contacteur de puissance.',
        explanation_fr: 'Isole le contrôle de la force par sécurité.'
    },

    // JUEGO: Voltaje Veloz (GAME_VV)
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'El color del conductor de protección (PE) es...',
        options: ['Azul claro', 'Marrón', 'Verde-Amarillo', 'Negro'],
        correct_answer: 'Verde-Amarillo',
        explanation: 'Norma HD 308 S2.',
        question_fr: 'La couleur du conducteur de protection (PE) est...',
        options_fr: ['Bleu clair', 'Marron', 'Vert-Jaune', 'Noir'],
        correct_answer_fr: 'Vert-Jaune',
        explanation_fr: 'Norme HD 308 S2.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: '¿Qué sección mínima se exige para un circuito de tomas de corriente en una vivienda?',
        options: ['1 mm²', '1,5 mm²', '2,5 mm²', '4 mm²'],
        correct_answer: '2,5 mm²',
        explanation: 'Estándar para tomas de 16A.',
        question_fr: 'Quelle est la section minimale exigée pour un circuit de prises de courant dans un logement ?',
        options_fr: ['1 mm²', '1,5 mm²', '2,5 mm²', '4 mm²'],
        correct_answer_fr: '2,5 mm²',
        explanation_fr: 'Standard pour les prises 16A.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'Un disyuntor con curva "C" se usa generalmente para...',
        options: ['Motores grandes', 'Circuitos de alumbrado y tomas', 'Equipos sensibles', 'Transformadores'],
        correct_answer: 'Circuitos de alumbrado y tomas',
        explanation: 'Uso general doméstico.',
        question_fr: 'Un disjoncteur avec courbe "C" est généralement utilisé pour...',
        options_fr: ['Gros moteurs', 'Circuits d\'éclairage et prises', 'Équipements sensibles', 'Transformateurs'],
        correct_answer_fr: 'Circuits d\'éclairage et prises',
        explanation_fr: 'Usage général domestique.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: '¿Cuál es la tensión de seguridad (UL) en locales secos?',
        options: ['12 V', '24 V', '50 V', '230 V'],
        correct_answer: '50 V',
        explanation: 'Límite no peligroso en ambiente seco.',
        question_fr: 'Quelle est la tension de sécurité (UL) dans les locaux secs ?',
        options_fr: ['12 V', '24 V', '50 V', '230 V'],
        correct_answer_fr: '50 V',
        explanation_fr: 'Limite non dangereuse en environnement sec.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'En el baño, ¿en qué volumen está prohibido instalar una toma de 230V?',
        options: ['Volumen 3', 'Volumen 2', 'Volumen Oculto', 'En ninguno'],
        correct_answer: 'Volumen 2',
        explanation: 'Volumen 0, 1 y 2 son zonas prohibidas para tomas.',
        question_fr: 'Dans la salle de bain, dans quel volume est-il interdit d\'installer une prise 230V ?',
        options_fr: ['Volume 3', 'Volume 2', 'Volume Caché', 'Dans aucun'],
        correct_answer_fr: 'Volume 2',
        explanation_fr: 'Les volumes 0, 1 et 2 sont des zones interdites aux prises.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'Para invertir el giro de un motor trifásico, debes intercambiar...',
        options: ['Las tres fases', 'Dos de las tres fases', 'La fase y el neutro', 'No se puede'],
        correct_answer: 'Dos de las tres fases',
        explanation: 'Invierte la secuencia de fases.',
        question_fr: 'Pour inverser la rotation d\'un moteur triphasé, vous devez échanger...',
        options_fr: ['Les trois phases', 'Deux des trois phases', 'La phase et le neutre', 'Impossible'],
        correct_answer_fr: 'Deux des trois phases',
        explanation_fr: 'Inverse la séquence des phases.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'Un diferencial (DDR) Tipo "A" detecta fugas de corriente alterna y...',
        options: ['Solo alterna', 'Continua pura', 'Continua pulsante', 'De alta frecuencia'],
        correct_answer: 'Continua pulsante',
        explanation: 'Típico de electrónica moderna.',
        question_fr: 'Un différentiel (DDR) Type "A" détecte les fuites de courant alternatif et...',
        options_fr: ['Seulement alternatif', 'Continu pur', 'Continu pulsé', 'Haute fréquence'],
        correct_answer_fr: 'Continu pulsé',
        explanation_fr: 'Typique de l\'électronique moderne.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'La primera regla de oro para trabajar sin tensión es...',
        options: ['Verificar tensión', 'Bloquear', 'Desconectar', 'Poner a tierra'],
        correct_answer: 'Desconectar',
        explanation: 'Corte visible o efectivo.',
        question_fr: 'La première règle d\'or pour travailler hors tension est...',
        options_fr: ['Vérifier la tension', 'Condamner', 'Séparer', 'Mettre à la terre'],
        correct_answer_fr: 'Séparer',
        explanation_fr: 'Coupure visible ou effective.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'La caída de tensión máxima para alumbrado en Luxemburgo es del...',
        options: ['1%', '3%', '5%', '10%'],
        correct_answer: '3%',
        explanation: 'Norma ILNAS.',
        question_fr: 'La chute de tension maximale pour l\'éclairage au Luxembourg est de...',
        options_fr: ['1%', '3%', '5%', '10%'],
        correct_answer_fr: '3%',
        explanation_fr: 'Norme ILNAS.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'El instrumento para medir la resistencia de la toma de tierra se llama...',
        options: ['Multímetro', 'Pinza', 'Megóhmetro', 'Telurómetro'],
        correct_answer: 'Telurómetro',
        explanation: 'Mide la resistividad del terreno.',
        question_fr: 'L\'instrument pour mesurer la résistance de la prise de terre s\'appelle...',
        options_fr: ['Multimètre', 'Pince', 'Mégohmmètre', 'Telluromètre'],
        correct_answer_fr: 'Telluromètre',
        explanation_fr: 'Mesure la résistivité du terrain.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'En un régimen de neutro TN-C, el conductor que une neutro y protección se llama...',
        options: ['TNC', 'PE', 'PEN', 'N-PE'],
        correct_answer: 'PEN',
        explanation: 'Protective Earth Neutral.',
        question_fr: 'En régime de neutre TN-C, le conducteur qui unit neutre et protection s\'appelle...',
        options_fr: ['TNC', 'PE', 'PEN', 'N-PE'],
        correct_answer_fr: 'PEN',
        explanation_fr: 'Protective Earth Neutral.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'La tensión de ensayo para medir el aislamiento en una red 230/400V es...',
        options: ['230 V DC', '400 V DC', '500 V DC', '1000 V DC'],
        correct_answer: '500 V DC',
        explanation: 'Debe ser superior a la tensión de red.',
        question_fr: 'La tension d\'essai pour mesurer l\'isolement sur un réseau 230/400V est...',
        options_fr: ['230 V DC', '400 V DC', '500 V DC', '1000 V DC'],
        correct_answer_fr: '500 V DC',
        explanation_fr: 'Doit être supérieure à la tension du réseau.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'Un motor 230/400V en una red de 400V debe conectarse en...',
        options: ['Triángulo', 'Estrella', 'Serie', 'Paralelo'],
        correct_answer: 'Estrella',
        explanation: 'Para que cada bobina reciba 230V.',
        question_fr: 'Un moteur 230/400V sur un réseau de 400V doit être connecté en...',
        options_fr: ['Triangle', 'Étoile', 'Série', 'Parallèle'],
        correct_answer_fr: 'Étoile',
        explanation_fr: 'Pour que chaque bobine reçoive 230V.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: '¿Qué significa IP4X?',
        options: ['Protegido agua', 'Protegido polvo fino', 'Protegido cuerpos > 1mm', 'Estanco'],
        correct_answer: 'Protegido cuerpos > 1mm',
        explanation: 'El primer dígito 4 indica sólidos > 1mm.',
        question_fr: 'Que signifie IP4X ?',
        options_fr: ['Protégé eau', 'Protégé poussière fine', 'Protégé corps > 1mm', 'Étanche'],
        correct_answer_fr: 'Protégé corps > 1mm',
        explanation_fr: 'Le premier chiffre 4 indique solides > 1mm.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'Para conmutar una luz desde tres puntos, necesitas dos conmutadores y un...',
        options: ['Pulsador', 'Telerruptor', 'Conmutador de cruzamiento', 'Otro conmutador'],
        correct_answer: 'Conmutador de cruzamiento',
        explanation: 'Permite cruzar las líneas viajeras.',
        question_fr: 'Pour commuter une lumière de trois points, il faut deux va-et-vient et un...',
        options_fr: ['Bouton-poussoir', 'Télérupteur', 'Permutateur', 'Autre va-et-vient'],
        correct_answer_fr: 'Permutateur',
        explanation_fr: 'Permet de croiser les navettes.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: '¿Cuál es la altura de montaje estándar recomendada para interruptores en viviendas?',
        options: ['90 cm', '105-110 cm', '125-130 cm', '150 cm'],
        correct_answer: '105-110 cm',
        explanation: 'Altura ergonómica moderna.',
        question_fr: 'Quelle est la hauteur de montage standard recommandée pour les interrupteurs ?',
        options_fr: ['90 cm', '105-110 cm', '125-130 cm', '150 cm'],
        correct_answer_fr: '105-110 cm',
        explanation_fr: 'Hauteur ergonomique moderne.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'La distancia mínima de separación entre una tubería de gas y una conducción eléctrica es...',
        options: ['1 cm', '3 cm', '5 cm', '10 cm'],
        correct_answer: '3 cm',
        explanation: 'Para evitar arcos o calentamiento.',
        question_fr: 'La distance minimale de séparation entre une conduite de gaz et une ligne électrique est...',
        options_fr: ['1 cm', '3 cm', '5 cm', '10 cm'],
        correct_answer_fr: '3 cm',
        explanation_fr: 'Pour éviter les arcs ou l\'échauffement.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: '¿Qué dispositivo es esencial para proteger contra rayos (sobretensiones transitorias)?',
        options: ['Magnetotérmico', 'Diferencial', 'SPD (Descargador)', 'Relé de fase'],
        correct_answer: 'SPD (Descargador)',
        explanation: 'Surge Protection Device.',
        question_fr: 'Quel dispositif est essentiel pour protéger contre la foudre (surtensions transitoires) ?',
        options_fr: ['Disjoncteur', 'Différentiel', 'SPD (Parafoudre)', 'Relais de phase'],
        correct_answer_fr: 'SPD (Parafoudre)',
        explanation_fr: 'Surge Protection Device.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: 'En un plano unifilar, ¿qué indican las pequeñas líneas oblicuas sobre un conductor?',
        options: ['Longitud del cable', 'Tipo de aislamiento', 'Número de conductores', 'Corriente máxima'],
        correct_answer: 'Número de conductores',
        explanation: 'Cada barra es un hilo.',
        question_fr: 'Sur un schéma unifilaire, que indiquent les petites barres obliques sur un conducteur ?',
        options_fr: ['Longueur du câble', 'Type d\'isolation', 'Nombre de conducteurs', 'Courant maximum'],
        correct_answer_fr: 'Nombre de conducteurs',
        explanation_fr: 'Chaque barre est un fil.'
    },
    {
        year: 'GAME_VV',
        category: 'Juego',
        question: '¿Cuál es la sección mínima obligatoria para el conductor de conexión equipotencial principal?',
        options: ['2,5 mm²', '4 mm²', '6 mm²', '10 mm²'],
        correct_answer: '6 mm²',
        explanation: 'Normativa de seguridad básica.',
        question_fr: 'Quelle est la section minimale obligatoire pour le conducteur de liaison équipotentielle principale ?',
        options_fr: ['2,5 mm²', '4 mm²', '6 mm²', '10 mm²'],
        correct_answer_fr: '6 mm²',
        explanation_fr: 'Norme de sécurité de base.'
    }
];
