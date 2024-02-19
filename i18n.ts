import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

const resources = {
  en: enTranslations,
  ar: arTranslations,
};

// const languageDetector = {
//   type: 'languageDetector',
//   async: true,
//   detect: callback => {
//     const {languageTag} = RNLocalize.findBestAvailableLanguage(
//       Object.keys(resources),
//     );
//     callback(languageTag || 'en');
//   },
//   init: () => {},
//   cacheUserLanguage: () => {},
// };

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  //   .use(languageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for React Native
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
