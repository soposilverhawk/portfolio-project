import developerData from "@/data/developerData";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

i18next
.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            aboutText: developerData.aboutText.en
        },
      },
      ka: {
        translation: {
            aboutText: developerData.aboutText.ka
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
