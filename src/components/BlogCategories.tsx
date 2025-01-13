import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

interface BlogCategoriesProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export const BlogCategories = ({
  selectedCategory,
  setSelectedCategory,
}: BlogCategoriesProps) => {
  const { t } = useTranslation();

  const categories = [
    "technology",
    "sustainability",
    "caseStudies",
    "education",
    "tips",
    "news",
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      <Badge
        variant={selectedCategory === null ? "default" : "outline"}
        className="cursor-pointer hover:bg-primary/90 transition-colors"
        onClick={() => setSelectedCategory(null)}
      >
        {t("blog.categories.all")}
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className="cursor-pointer hover:bg-primary/90 transition-colors"
          onClick={() => setSelectedCategory(category)}
        >
          {t(`blog.categories.${category}`)}
        </Badge>
      ))}
    </div>
  );
};