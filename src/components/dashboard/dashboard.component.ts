import { ChangeDetectionStrategy, Component, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { I18nService, Language } from '../../services/i18n.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, I18nPipe],
})
export class DashboardComponent implements OnInit {
  progresoGeneral = signal(0);
  rachaActual = signal(0);
  examenesAprobados = signal(0);
  diasRestantes = signal(0);
  recommendedDailyStudy = signal(0);
  isLangMenuOpen = signal(false);

  constructor(public i18n: I18nService) {}

  ngOnInit() {
    this.calculateDaysUntilExam();
    this.calculateStudyPlan();
  }

  private calculateDaysUntilExam() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let examDate = new Date(today.getFullYear(), 0, 19); // Month is 0-indexed, 0 = January
    examDate.setHours(0, 0, 0, 0);
    
    // If the exam date for this year has already passed, set it for next year.
    if (today > examDate) {
        examDate.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = examDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    this.diasRestantes.set(diffDays >= 0 ? diffDays : 0);
  }

  private calculateStudyPlan() {
    const totalStudyHours = 80; // Estimated hours for an average student
    const daysLeft = this.diasRestantes();

    if (daysLeft > 0) {
      const dailyHours = totalStudyHours / daysLeft;
      // Round to one decimal place for a friendly number
      this.recommendedDailyStudy.set(Math.round(dailyHours * 10) / 10);
    } else {
      this.recommendedDailyStudy.set(0);
    }
  }

  changeLang(lang: Language) {
    this.i18n.setLang(lang);
    this.isLangMenuOpen.set(false);
  }

  toggleLangMenu() {
    this.isLangMenuOpen.update(v => !v);
  }
}
