// utils/translate.js
import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import {translate} from '@vitalets/google-translate-api';

const supportedLanguages = ['en', 'ar']; // Add more languages as needed

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  supportedLngs: supportedLanguages,
  lng: 'en', // Set default language
});

export const getTranslation = async (key, targetLang) => {
  try {
    const translation = await translate(key, {to: targetLang});
    return translation.text;
  } catch (error) {
    console.error('Error fetching translation:', error);
    return key; // Return the original key if translation fails
  }
};

export default i18n;
