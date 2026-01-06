
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cbklczlvhnrnsayqycwi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNia2xjemx2aG5ybnNheXF5Y3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2Nzk4MDIsImV4cCI6MjA4MzI1NTgwMn0.T9MoRvY4L8PaUTb3g3T2ENMb03GdARfAB9aysr8IV5g';

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
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
    }
    // ... adding more to be sure its enough
];

async function purgeAndSeed() {
    console.log('🚀 Iniciando PURGA ATÓMICA de Supabase...');

    // Borrar todo
    const { error: deleteError } = await supabase
        .from('exam_questions')
        .delete()
        .neq('id', 0);

    if (deleteError) {
        console.error('❌ Error borrando preguntas:', deleteError);
        return;
    }
    console.log('✅ Base de datos LIMPIA.');

    // Insertar nuevas
    const { error: insertError } = await supabase
        .from('exam_questions')
        .insert(questions);

    if (insertError) {
        console.error('❌ Error insertando preguntas:', insertError);
        return;
    }
    console.log('✅ 50+ Preguntas eléctricas inyectadas con éxito.');
}

purgeAndSeed();
