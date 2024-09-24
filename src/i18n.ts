import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import pt from "./locales/pt.json";

// Function to detect the user's preferred language
const getUserLocale = () => {
  const language = navigator.language || navigator.userLanguage; // Get the user's browser language
  const supportedLocales = ["en", "pt"]; // List of supported locales

  // Extract the first two characters to match the language (e.g., 'en' from 'en-US')
  const shortLang = language.substring(0, 2);

  // Return the detected locale if supported, otherwise default to English
  return supportedLocales.includes(shortLang) ? shortLang : "en";
};

// Create the i18n instance with the detected locale
const i18n = createI18n({
  locale: getUserLocale(), // Automatically set the locale
  fallbackLocale: "en", // Fallback to English if the user's language is not supported
  messages: {
    en,
    pt,
  },
});

export default i18n;