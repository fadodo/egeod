import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, ShieldCheck, Users, Leaf, Building2, Wheat, GraduationCap, HeartHandshake, Shield, CloudRain } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ValueCard = ({ title, description }: { title: string, description: string }) => (
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

const SectorCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
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

const Expertise = () => {
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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {t("expertise.title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("expertise.subtitle")}
            </p>
          </div>

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
        </section>

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
      </main>

      <Footer />
    </div>
  );
};

export default Expertise;