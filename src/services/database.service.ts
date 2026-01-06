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

    // Método para sembrar los datos iniciales (Solo ejecutar una vez)
    async seedInitialData(questions: ExamQuestion[]) {
        const { data, error } = await this.supabase.client
            .from('exam_questions')
            .insert(questions);

        if (error) throw error;
        return data;
    }
}
