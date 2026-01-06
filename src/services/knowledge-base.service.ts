import { Injectable } from '@angular/core';
import { DatabaseService, ExamQuestion } from './database.service';

@Injectable({
    providedIn: 'root'
})
export class KnowledgeBaseService {

    constructor(private db: DatabaseService) { }

    /**
     * Search for an answer in the local database (Mock Questions)
     * Returns a formatted response string or null if no good match is found.
     */
    async search(query: string): Promise<string | null> {
        const normalize = (text: string) => text.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove accents

        const normalizedQuery = normalize(query);
        // Filter out generic words to avoid noise
        const stopWords = ['que', 'como', 'para', 'donde', 'cual', 'cuando', 'porque', 'es', 'un', 'una', 'el', 'la', 'los', 'las'];
        const keywords = normalizedQuery.split(' ')
            .filter(w => w.length > 2 && !stopWords.includes(w));

        if (keywords.length === 0) return null;

        // Fetch questions (force local mock check via the service logic we know exists)
        // We can access the mock data directly if exposed, or call fetchQuestions
        // Since we want to be fast and offline, we'll assume fetchQuestions handles the fallback
        // effectively or access the private MOCK_QUESTIONS if we had access, but better to use the public API.
        // However, fetchQuestions is async and might try DB first. 
        // Optimization: Access the 'questions' signal if already populated, or trigger a fetch.

        let questions = this.db.questions();

        // If empty, try to fetch (will use mock if offline)
        if (questions.length === 0) {
            try {
                const data = await this.db.fetchQuestions('Todos');
                if (data) questions = data as ExamQuestion[];
            } catch (e) {
                console.warn('KB: Could not fetch questions', e);
                return null;
            }
        }

        let bestMatch: ExamQuestion | null = null;
        let maxScore = 0;
        const COVERAGE_THRESHOLD = 0.6; // 🛡️ Require 60% of keywords to match

        for (const q of questions) {
            const qText = normalize(q.question);
            const contentText = normalize((q.options?.join(' ') || '') + ' ' + q.explanation + ' ' + q.correct_answer);

            let score = 0;
            let matchedKeywordsCount = 0;

            for (const word of keywords) {
                let foundInThisQuestion = false;

                // 🎯 High priority: Match in the Question itself
                if (qText.includes(word)) {
                    score += 5; // Increased weight
                    foundInThisQuestion = true;
                }
                // 📖 Low priority: Match in explanation/answers
                else if (contentText.includes(word)) {
                    score += 1;
                    foundInThisQuestion = true;
                }

                if (foundInThisQuestion) {
                    matchedKeywordsCount++;
                }
            }

            // Calculate Coverage Ratio (Keywords matched / Total keywords in query)
            const coverageRatio = matchedKeywordsCount / keywords.length;

            // 🏆 Boost for exact phrase match
            if (qText.includes(normalizedQuery)) {
                score += 20;
            }

            // 🛡️ Filter: Must meet coverage AND minimum score
            if (coverageRatio >= COVERAGE_THRESHOLD && score > maxScore) {
                maxScore = score;
                bestMatch = q;
            }
        }

        // 🛡️ Final Threshold: Minimum absolute score 5 (at least one key term in question)
        if (bestMatch && maxScore >= 5) {
            console.info(`🎯 KB Match Found: "${bestMatch.question.substring(0, 30)}..." | Score: ${maxScore}`);
            return this.formatResponse(bestMatch);
        }

        return null;
    }

    private formatResponse(q: ExamQuestion): string {
        return `¡Oye asere! Esa me la sé. Es de los exámenes del ${q.year}.\n\n` +
            `**Pregunta:** ${q.question}\n` +
            `**Respuesta Correcta:** ${q.correct_answer}\n\n` +
            `*Explicación del Entrenador:* ${q.explanation}`;
    }
}
