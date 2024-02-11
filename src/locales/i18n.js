import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import en from './lang/en.json'
import fr from './lang/fr.json'
import de from './lang/de.json'
import it from './lang/it.json'
import ja from './lang/ja.json'
import es from './lang/es.json'
import pt from './lang/pt.json'
import ru from './lang/ru.json'
import ar from './lang/ar.json'
import hi from './lang/hi.json'
import zh from './lang/zh.json'
import nl from './lang/nl.json'
import tr from './lang/tr.json'


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'de', 'es', 'it', 'ja', 'pt', 'ru', 'ar', 'hi', 'zh', 'tr', 'nl'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en
      },
      fr: {
        translation: fr
      },
      de: {
        translation: de
      },
      es: {
        translation: es
      },
      it: {
        translation: it
      },
      ja: {
        translation: ja
      },
      pt: {
        translation: pt
      },
      ru: {
        translation: ru
      },
      ar: {
        translation: ar
      },
      hi: {
        translation: hi
      },
      zh: {
        translation: zh
      },
      nl: {
        translation: nl
      },
      tr: {
        translation: tr
      },
    }
  });

export default i18n;
