import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

interface BlogSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const BlogSearch = ({ searchQuery, setSearchQuery }: BlogSearchProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <Input
        type="text"
        placeholder={t("blog.searchPlaceholder")}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full"
      />
    </div>
  );
};