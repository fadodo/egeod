import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    console.log('Current language:', i18n.language);
    
    // Détecte la langue du navigateur
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['fr', 'en'];
    
    // Si la langue n'est pas déjà définie, utilise celle du navigateur
    if (!localStorage.getItem('i18nextLng')) {
      const defaultLang = supportedLangs.includes(browserLang) ? browserLang : 'fr';
      i18n.changeLanguage(defaultLang);
      toast({
        title: "Langue détectée",
        description: `La langue a été automatiquement définie sur ${defaultLang === 'fr' ? 'Français' : 'English'}`
      });
    }

    // Met à jour la balise lang de l'HTML
    document.documentElement.lang = i18n.language;
    
    // Met à jour les meta descriptions
    const metaDescriptions = document.querySelectorAll('meta[name="description"]');
    metaDescriptions.forEach((meta) => {
      if (meta.getAttribute('lang') === i18n.language) {
        meta.setAttribute('content', meta.getAttribute('content') || '');
      }
    });

    // Met à jour la direction du texte si nécessaire
    document.dir = i18n.dir();
  }, [i18n.language]);

  const changeLanguage = (lang: string) => {
    console.log('Changing language to:', lang);
    i18n.changeLanguage(lang);
    toast({
      title: "Langue modifiée",
      description: `La langue a été changée en ${lang === 'fr' ? 'Français' : 'English'}`
    });
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    languages: {
      fr: { name: "Français", flag: "🇫🇷" },
      en: { name: "English", flag: "🇬🇧" }
    }
  };
};