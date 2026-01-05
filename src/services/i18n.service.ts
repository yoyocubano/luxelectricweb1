import { Injectable, signal, effect } from '@angular/core';
import { ES_TRANSLATIONS } from '../i18n/es';
import { FR_TRANSLATIONS } from '../i18n/fr';
import { EN_TRANSLATIONS } from '../i18n/en';
import { DE_TRANSLATIONS } from '../i18n/de';
import { PT_TRANSLATIONS } from '../i18n/pt';
import { LB_TRANSLATIONS } from '../i18n/lb';

export type Language = 'es' | 'fr' | 'en' | 'de' | 'pt' | 'lb';

const translations: Record<Language, any> = {
  es: ES_TRANSLATIONS,
  fr: FR_TRANSLATIONS,
  en: EN_TRANSLATIONS,
  de: DE_TRANSLATIONS,
  pt: PT_TRANSLATIONS,
  lb: LB_TRANSLATIONS,
};

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  readonly supportedLangs: { code: Language; name: string }[] = [
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'pt', name: 'Português' },
    { code: 'lb', name: 'Lëtzebuergesch' },
  ];

  lang = signal<Language>('es');
  
  private translations = signal<any>(translations[this.lang()]);

  constructor() {
    effect(() => {
      this.translations.set(translations[this.lang()]);
    });
  }

  setLang(lang: Language) {
    if (this.supportedLangs.some(l => l.code === lang)) {
      this.lang.set(lang);
    }
  }

  t(key: string): string {
    const keys = key.split('.');
    let result = this.translations();
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        return key; // Return the key if not found
      }
    }
    return result;
  }
}
