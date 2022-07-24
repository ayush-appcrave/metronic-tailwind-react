import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LANGUAGE } from '../config';
import enLocales from './en';

let lng = DEFAULT_LANGUAGE.value;

if (typeof window !== 'undefined') {
  lng = localStorage.getItem('i18nextLng') || DEFAULT_LANGUAGE.value;
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: enLocales },
    },
    lng,
    fallbackLng: DEFAULT_LANGUAGE.value,
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;