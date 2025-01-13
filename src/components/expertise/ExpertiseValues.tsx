import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard = ({ title, description }: ValueCardProps) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="p-6 border rounded-lg hover:border-primary transition-colors"
  >
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </motion.div>
);

export const ExpertiseValues = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ValueCard 
        title={t("home.values.innovation.title")}
        description={t("home.values.innovation.description")}
      />
      <ValueCard 
        title={t("home.values.quality.title")}
        description={t("home.values.quality.description")}
      />
      <ValueCard 
        title={t("home.values.proximity.title")}
        description={t("home.values.proximity.description")}
      />
    </div>
  );
};