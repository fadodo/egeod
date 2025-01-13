import { CloudRain, Leaf, Wheat, Building2, Shield, GraduationCap, HeartHandshake } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface SectorCardProps {
  icon: any;
  title: string;
  description: string;
}

const SectorCard = ({ icon: Icon, title, description }: SectorCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
  >
    <Icon className="w-10 h-10 text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

export const SectorsSection = () => {
  const { t } = useTranslation();

  const sectors = [
    {
      icon: CloudRain,
      title: t("expertise.sectors.climate.title"),
      description: t("expertise.sectors.climate.description")
    },
    {
      icon: Leaf,
      title: t("expertise.sectors.environment.title"),
      description: t("expertise.sectors.environment.description")
    },
    {
      icon: Wheat,
      title: t("expertise.sectors.agriculture.title"),
      description: t("expertise.sectors.agriculture.description")
    },
    {
      icon: Building2,
      title: t("expertise.sectors.urban.title"),
      description: t("expertise.sectors.urban.description")
    },
    {
      icon: Shield,
      title: t("expertise.sectors.insurance.title"),
      description: t("expertise.sectors.insurance.description")
    },
    {
      icon: GraduationCap,
      title: t("expertise.sectors.training.title"),
      description: t("expertise.sectors.training.description")
    },
    {
      icon: HeartHandshake,
      title: t("expertise.sectors.consulting.title"),
      description: t("expertise.sectors.consulting.description")
    }
  ];

  return (
    <section className="py-20 bg-muted/30 rounded-xl">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t("expertise.sectors.title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <SectorCard 
              key={index}
              icon={sector.icon}
              title={sector.title}
              description={sector.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};