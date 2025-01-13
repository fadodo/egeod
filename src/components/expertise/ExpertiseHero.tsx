import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const ExpertiseHero = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      >
        {t("expertise.title")}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-muted-foreground max-w-2xl mx-auto"
      >
        {t("expertise.subtitle")}
      </motion.p>
    </div>
  );
};