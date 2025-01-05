import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = {
    fr: { name: "Français", flag: "🇫🇷" },
    en: { name: "English", flag: "🇬🇧" },
  };

  // S'assurer que la langue actuelle existe dans notre objet languages
  const currentLanguage = i18n.language.split('-')[0]; // Gérer les cas comme 'fr-FR'
  const defaultLanguage = 'fr';
  
  const getCurrentLanguage = () => {
    return languages[currentLanguage as keyof typeof languages] 
      ? currentLanguage 
      : defaultLanguage;
  };

  return (
    <Select
      value={getCurrentLanguage()}
      onValueChange={(value) => i18n.changeLanguage(value)}
    >
      <SelectTrigger className="w-[140px] bg-background/50">
        <SelectValue placeholder="Language">
          <span className="flex items-center gap-2">
            <span>{languages[getCurrentLanguage() as keyof typeof languages].flag}</span>
            <span>{languages[getCurrentLanguage() as keyof typeof languages].name}</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <SelectItem
            key={code}
            value={code}
            className="flex items-center gap-2"
          >
            <span>{flag}</span>
            <span>{name}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};