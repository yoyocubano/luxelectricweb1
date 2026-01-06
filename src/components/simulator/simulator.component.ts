import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatabaseService, ExamQuestion } from '../../services/database.service';
import { INITIAL_QUESTIONS } from '../../data/initial-questions';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, FormsModule],
})
export class SimulatorComponent {
  exams = signal<ExamQuestion[]>([]);
  isLoading = signal(false);

  currentQuestionIndex = signal(0);
  showAnswer = signal(false);
  selectedYear = signal('Todos');

  userAnswer = signal('');
  isCorrect = signal<boolean | null>(null);
  hasChecked = signal(false);


  // Public for template access
  constructor(private db: DatabaseService, public i18n: I18nService) {
    this.loadData();
  }

  async loadData() {
    this.isLoading.set(true);
    try {
      const data = await this.db.fetchQuestions(this.selectedYear());
      this.exams.set(data as ExamQuestion[]);
    } catch (e) {
      console.error('Error cargando preguntas:', e);
    } finally {
      this.isLoading.set(false);
    }
  }

  availableYears = computed(() => {
    return ['Todos', '2017-2018', '2018-2019', '2019-2020', '2020-2021', '2023-2024'];
  });

  filteredExams = computed(() => {
    return this.exams().filter(q =>
      !q.question.toLowerCase().includes('agua') &&
      !q.question.toLowerCase().includes('ciclo')
    );
  });

  currentQuestion = computed(() => this.exams()?.[this.currentQuestionIndex()]);

  // Barajar opciones cada vez que cambia la pregunta
  questionOptions = computed(() => {
    const q = this.currentQuestion();
    if (!q) return [];

    // Si la pregunta ya tiene opciones definidas, las usamos
    if (q.options && q.options.length > 0) {
      return [...q.options].sort(() => Math.random() - 0.5);
    }

    // Si no tiene opciones, creamos un set por defecto basado en la respuesta correcta
    // (Esto es temporal hasta que actualicemos toda la data)
    return [
      q.correct_answer,
      "Opción de prueba incorrecta A",
      "Opción de prueba incorrecta B"
    ].sort(() => Math.random() - 0.5);
  });

  // 🔐 SECURITY: syncInitialData removed. Development-only action.

  nextQuestion() {
    const total = this.exams().length;
    if (total === 0) return;
    this.currentQuestionIndex.update(index => (index + 1) % total);
    this.resetVerification();
  }

  previousQuestion() {
    const total = this.exams().length;
    if (total === 0) return;
    this.currentQuestionIndex.update(index => (index - 1 + total) % total);
    this.resetVerification();
  }

  toggleAnswer() {
    this.showAnswer.update(value => !value);
  }

  checkAnswer() {
    const user = this.userAnswer().trim();
    const correct = this.currentQuestion()?.correct_answer.trim() || '';

    this.isCorrect.set(user === correct);
    this.hasChecked.set(true);
    this.showAnswer.set(true);
  }

  selectOption(option: string) {
    if (this.hasChecked()) return;
    this.userAnswer.set(option);
    this.checkAnswer();
  }

  selectQuestion(index: number) {
    this.currentQuestionIndex.set(index);
    this.resetVerification();
  }

  private resetVerification() {
    this.userAnswer.set('');
    this.hasChecked.set(false);
    this.isCorrect.set(null);
    this.showAnswer.set(false);
  }

  async selectYear(year: string) {
    this.selectedYear.set(year);
    this.currentQuestionIndex.set(0);
    this.resetVerification();
    await this.loadData();
  }
}
