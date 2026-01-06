import { Injectable, signal, effect } from '@angular/core';
import { SupabaseService } from './supabase.service';

const PROGRESS_KEY = 'luxelectric_progress';
const USER_ID_KEY = 'luxelectric_user_id';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

interface AppProgress {
  progresoGeneral: number;
  rachaActual: number;
  examenesAprobados: number;
  lastPlayedDate: string | null;
  completedTheoryTopics: string[];
  unlockedAchievements: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  progresoGeneral = signal(0);
  rachaActual = signal(0);
  examenesAprobados = signal(0);

  private userId: string | null = null;
  private lastPlayedDate = signal<string | null>(null);
  private completedTheoryTopics = signal<Set<string>>(new Set());

  achievements = signal<Achievement[]>([
    { id: 'perfect_score_vv', title: 'Voltaje Perfecto', description: '10/10 en Voltaje Veloz', icon: 'military_tech', unlocked: false },
    { id: 'master_wirer', title: 'Cableado Maestro', description: 'Completa el desafío de inversión de giro', icon: 'emoji_events', unlocked: false },
    { id: 'perfect_assembly', title: 'Montaje Impecable', description: '100 pts en Maestro del Montaje', icon: 'workspace_premium', unlocked: false },
    { id: 'streak_5', title: 'Constancia', description: 'Racha de 5 días seguidos', icon: 'local_fire_department', unlocked: false }
  ]);

  constructor(private supabase: SupabaseService) {
    this.initUser();
    this.loadProgress();

    effect(() => {
      this.saveProgress();
      this.syncWithSupabase();
    });
  }

  private initUser() {
    if (typeof localStorage !== 'undefined') {
      this.userId = localStorage.getItem(USER_ID_KEY);
      if (!this.userId) {
        this.userId = 'user_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem(USER_ID_KEY, this.userId);
      }
    }
  }

  private loadProgress() {
    if (typeof localStorage !== 'undefined') {
      const savedProgress = localStorage.getItem(PROGRESS_KEY);
      if (savedProgress) {
        const data: AppProgress = JSON.parse(savedProgress);
        this.progresoGeneral.set(data.progresoGeneral || 0);
        this.rachaActual.set(data.rachaActual || 0);
        this.examenesAprobados.set(data.examenesAprobados || 0);
        this.lastPlayedDate.set(data.lastPlayedDate || null);
        this.completedTheoryTopics.set(new Set(data.completedTheoryTopics || []));

        const unlockedIds = new Set(data.unlockedAchievements || []);
        this.achievements.update(achs =>
          achs.map(ach => ({ ...ach, unlocked: unlockedIds.has(ach.id) }))
        );

        this.updateStreak(); // Check streak on load
      }
    }
  }

  private saveProgress() {
    if (typeof localStorage !== 'undefined') {
      const data: AppProgress = {
        progresoGeneral: this.progresoGeneral(),
        rachaActual: this.rachaActual(),
        examenesAprobados: this.examenesAprobados(),
        lastPlayedDate: this.lastPlayedDate(),
        completedTheoryTopics: Array.from(this.completedTheoryTopics()),
        unlockedAchievements: this.achievements().filter(a => a.unlocked).map(a => a.id)
      };
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
    }
  }

  private updateStreak(forceUpdate: boolean = false) {
    const today = new Date().toISOString().split('T')[0];
    const lastPlayed = this.lastPlayedDate();

    if (lastPlayed !== today || forceUpdate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      if (lastPlayed === yesterdayStr) {
        this.rachaActual.update(r => r + 1);
      } else if (lastPlayed !== today) {
        this.rachaActual.set(1);
      }
      this.lastPlayedDate.set(today);
      this.checkAndUnlockAchievement('streak_5', this.rachaActual() >= 5);
    }
  }

  trackTheory(topic: string) {
    if (!this.completedTheoryTopics().has(topic)) {
      this.completedTheoryTopics.update(topics => topics.add(topic));
      this.progresoGeneral.update(p => Math.min(100, p + 1));
      this.updateStreak(true);
    }
  }

  completePracticeStep() {
    this.progresoGeneral.update(p => Math.min(100, p + 2));
    this.updateStreak(true);
  }

  completeGame(score: number, total: number) {
    this.progresoGeneral.update(p => Math.min(100, p + 2));
    if (score / total >= 0.7) {
      this.examenesAprobados.update(e => e + 1);
      this.progresoGeneral.update(p => Math.min(100, p + 3));
    }
    this.updateStreak(true);
  }

  checkAndUnlockAchievement(achievementId: string, condition: boolean) {
    if (!condition) return;

    this.achievements.update(achs => achs.map(ach => {
      if (ach.id === achievementId && !ach.unlocked) {
        return { ...ach, unlocked: true };
      }
      return ach;
    }));
  }

  private async syncWithSupabase() {
    if (!this.userId) return;

    const data = {
      user_local_id: this.userId,
      progreso_general: this.progresoGeneral(),
      racha_actual: this.rachaActual(),
      examenes_aprobados: this.examenesAprobados(),
      last_played_date: this.lastPlayedDate(),
      completed_theory_topics: Array.from(this.completedTheoryTopics()),
      unlocked_achievements: this.achievements().filter(a => a.unlocked).map(a => a.id),
      updated_at: new Date().toISOString()
    };

    const { error } = await this.supabase.client
      .from('user_progress')
      .upsert(data, { onConflict: 'user_local_id' });

    if (error) {
      console.error('❌ Error sincronizando con Supabase:', error.message, error.details);
    } else {
      console.log('✅ Progreso sincronizado con Supabase');
    }
  }
}
