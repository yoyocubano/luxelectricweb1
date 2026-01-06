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

    async fetchQuestions(year?: string) {
        let query = this.supabase.client
            .from('exam_questions')
            .select('*');

        if (year && year !== 'Todos') {
            query = query.eq('year', year);
        }

        const { data, error } = await query;
        if (error) throw error;

        this.questions.set(data as ExamQuestion[]);
        return data;
    }

    // Método para sembrar los datos iniciales (Limpia la basura vieja primero)
    async seedInitialData(questions: ExamQuestion[]) {
        // 1. Purgar todo lo que haya (Ciclos del agua y demás basura)
        const { error: deleteError } = await this.supabase.client
            .from('exam_questions')
            .delete()
            .neq('id', 0); // Hack para borrar todo

        if (deleteError) {
            console.error('Error limpiando tabla:', deleteError);
            throw deleteError;
        }

        // 2. Insertar las 50+ preguntas reales de PIFQU
        const { data, error } = await this.supabase.client
            .from('exam_questions')
            .insert(questions);

        if (error) throw error;
        return data;
    }
}
