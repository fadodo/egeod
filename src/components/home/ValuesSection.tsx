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
    className="p-6 border rounded-lg hover:border-primary transition-colors backdrop-blur-sm bg-background/50"
  >
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </motion.div>
);

export const ValuesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-muted/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          {t("home.values.title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <ValueCard 
            title={t("home.values.listening.title")}
            description={t("home.values.listening.description")}
          />
        </div>
      </div>
    </section>
  );
};