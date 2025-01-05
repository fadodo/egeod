import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Met à jour la balise lang de l'HTML
    document.documentElement.lang = i18n.language;
    
    // Met à jour les meta descriptions
    const metaDescriptions = document.querySelectorAll('meta[name="description"]');
    metaDescriptions.forEach((meta) => {
      if (meta.getAttribute('lang') === i18n.language) {
        meta.setAttribute('content', meta.getAttribute('content') || '');
      }
    });
  }, [i18n.language]);

  return {
    currentLanguage: i18n.language,
    changeLanguage: i18n.changeLanguage,
    languages: {
      fr: { name: "Français", flag: "🇫🇷" },
      en: { name: "English", flag: "🇬🇧" }
    }
  };
};