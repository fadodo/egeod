import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { Flag } from "lucide-react";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = {
    fr: { name: "Français", flag: "🇫🇷" },
    en: { name: "English", flag: "🇬🇧" },
  };

  return (
    <Select
      value={i18n.language}
      onValueChange={(value) => i18n.changeLanguage(value)}
    >
      <SelectTrigger className="w-[140px] bg-background/50">
        <SelectValue placeholder="Language">
          <span className="flex items-center gap-2">
            <span>{languages[i18n.language as keyof typeof languages].flag}</span>
            <span>{languages[i18n.language as keyof typeof languages].name}</span>
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