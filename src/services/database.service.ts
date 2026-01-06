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

    // 🔐 SECURITY: seedInitialData removed from frontend.
    // Massive data management should be done via Supabase Dashboard or secure backend scripts.
    // This prevents unauthorized users from wiping the database via the browser console.
}
