import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = {
    fr: { name: "Français", flag: "🇫🇷" },
    en: { name: "English", flag: "🇬🇧" },
  };

  const currentLanguage = i18n.language.split('-')[0];
  const defaultLanguage = 'fr';
  
  const getCurrentLanguage = () => {
    return languages[currentLanguage as keyof typeof languages] 
      ? currentLanguage 
      : defaultLanguage;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Globe className="h-5 w-5" />
          <span className="absolute -bottom-1 -right-1 text-xs">
            {languages[getCurrentLanguage() as keyof typeof languages].flag}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => i18n.changeLanguage(code)}
            className="flex items-center gap-2"
          >
            <span>{flag}</span>
            <span>{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};