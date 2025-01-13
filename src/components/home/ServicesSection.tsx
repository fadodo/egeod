import { Globe2, Database, Map as MapIcon, HeartHandshake } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-muted/50 backdrop-blur-sm rounded-lg hover:bg-muted/70 transition-colors"
  >
    <Icon className="w-10 h-10 text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

export const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          {t("home.services.title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            icon={Globe2}
            title={t("home.services.acquisition.title")}
            description={t("home.services.acquisition.description")}
          />
          <ServiceCard 
            icon={Database}
            title={t("home.services.processing.title")}
            description={t("home.services.processing.description")}
          />
          <ServiceCard 
            icon={MapIcon}
            title={t("home.services.mapping.title")}
            description={t("home.services.mapping.description")}
          />
          <ServiceCard 
            icon={HeartHandshake}
            title={t("home.services.consulting.title")}
            description={t("home.services.consulting.description")}
          />
        </div>
      </div>
    </section>
  );
};