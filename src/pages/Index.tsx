import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { ArrowRight, Globe2, Database, Map as MapIcon, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { HeroCarousel } from "@/components/HeroCarousel";

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group relative p-8 glass-card hover:shadow-colored hover:border-primary/30 transition-all duration-500 overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const ValueCard = ({ title, description }: { title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
    className="group p-6 glass-card hover:shadow-glow hover:border-accent/30 transition-all duration-300 cursor-pointer"
  >
    <div className="h-2 w-12 bg-gradient-secondary rounded-full mb-4 group-hover:w-16 transition-all duration-300" />
    <h3 className="text-lg font-heading font-semibold mb-3 group-hover:text-secondary transition-colors">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <SEO 
        title="EGEOD - Expert en Données Géospatiales et Observation Terrestre"
        description="EGEOD transforme les données géospatiales en solutions innovantes. Expertise en télédétection, SIG, analyse d'images satellite et consultation géomatique."
        keywords="géospatial, télédétection, SIG, observation terrestre, données satellite, géomatique, cartographie"
      />
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen">
        <HeroCarousel />
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-black/40 via-black/30 to-black/50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
                🌍 Expert en Données Géospatiales
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-heading font-bold text-center mb-8 text-white leading-tight"
            >
              {t("home.hero.title")}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed"
            >
              {t("home.hero.subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg font-semibold">
                <Link to="/contact" className="flex items-center">
                  {t("home.hero.contact")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg font-semibold">
                <Link to="/services">
                  {t("home.hero.cta")}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
              {t("home.services.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos solutions expertes en géomatique et observation terrestre
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Values Section */}
      <section className="py-24 bg-muted/20 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
              {t("home.values.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les valeurs qui guident notre expertise et notre engagement
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      <Footer />
    </div>
  );
};

export default Index;
