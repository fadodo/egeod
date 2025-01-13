import { Badge } from "./ui/badge";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface BlogCategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const BlogCategories = ({ selectedCategory, onSelectCategory }: BlogCategoriesProps) => {
  const { t } = useTranslation();

  const categories: Category[] = [
    { id: "technology", name: t("blog.categories.technology"), icon: "💻" },
    { id: "sustainability", name: t("blog.categories.sustainability"), icon: "🌱" },
    { id: "case-studies", name: t("blog.categories.caseStudies"), icon: "📊" },
    { id: "education", name: t("blog.categories.education"), icon: "📚" },
    { id: "tips", name: t("blog.categories.tips"), icon: "💡" },
    { id: "news", name: t("blog.categories.news"), icon: "📰" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <motion.div
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Badge
            variant={selectedCategory === category.id ? "default" : "outline"}
            className="cursor-pointer text-sm"
            onClick={() => onSelectCategory(selectedCategory === category.id ? null : category.id)}
          >
            <span className="mr-1">{category.icon}</span>
            {category.name}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
};