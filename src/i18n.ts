import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    backend: {
      loadPath:
        process.env.NODE_ENV === 'development'
          ? '/public/locales/{{lng}}/translation.json'
          : './locales/{{lng}}/translation.json',
    },
    debug: process.env.NODE_ENV === 'development',
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
