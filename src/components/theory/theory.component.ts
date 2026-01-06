import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { I18nService, Language } from '../../services/i18n.service';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, I18nPipe],
})
export class TheoryComponent {
  activeTab = signal('general');
  activeTopic = signal('dashboard');
  isLangMenuOpen = signal(false);

  constructor(public i18n: I18nService) { }

  selectTab(tab: string) {
    this.activeTab.set(tab);
  }

  selectTopic(topic: string) {
    this.activeTopic.set(topic);
    // Reset to the first tab of that topic
    if (topic === 'motors') this.activeTab.set('general');
    if (topic === 'formulas') this.activeTab.set('resistance');
    if (topic === 'installations') this.activeTab.set('voltageDrop');
    if (topic === 'schematics') this.activeTab.set('powerControl');
  }

  changeLang(lang: Language) {
    this.i18n.setLang(lang);
    this.isLangMenuOpen.set(false);
  }

  toggleLangMenu() {
    this.isLangMenuOpen.update(v => !v);
  }
}
