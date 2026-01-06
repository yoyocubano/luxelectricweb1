import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatabaseService, ExamQuestion } from '../../services/database.service';
import { INITIAL_QUESTIONS } from '../../data/initial-questions';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink],
})
export class SimulatorComponent {
  exams = signal<ExamQuestion[]>([]);
  isLoading = signal(false);

  currentQuestionIndex = signal(0);
  showAnswer = signal(false);
  selectedYear = signal('Todos');

  constructor(private db: DatabaseService) {
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

  filteredExams = computed(() => this.exams());

  currentQuestion = computed(() => this.exams()?.[this.currentQuestionIndex()]);

  // Sincronizar las 50 preguntas de ayer con la base de datos
  async syncInitialData() {
    this.isLoading.set(true);
    try {
      await this.db.seedInitialData(INITIAL_QUESTIONS);
      alert('¡Listo asere! Las 50 preguntas de PIFQU ya están en la nube. ☁️⚡');
      await this.loadData();
    } catch (e) {
      alert('Error: Asegúrate de pegar el SQL en Supabase primero.');
      console.error(e);
    } finally {
      this.isLoading.set(false);
    }
  }

  nextQuestion() {
    const total = this.exams().length;
    if (total === 0) return;
    this.currentQuestionIndex.update(index => (index + 1) % total);
    this.showAnswer.set(false);
  }

  previousQuestion() {
    const total = this.exams().length;
    if (total === 0) return;
    this.currentQuestionIndex.update(index => (index - 1 + total) % total);
    this.showAnswer.set(false);
  }

  toggleAnswer() {
    this.showAnswer.update(value => !value);
  }

  async selectYear(year: string) {
    this.selectedYear.set(year);
    this.currentQuestionIndex.set(0);
    this.showAnswer.set(false);
    await this.loadData();
  }
}
