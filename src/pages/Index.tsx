import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Map from "@/components/Map";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Map />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t("home.hero.title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            {t("home.hero.subtitle")}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" variant="default">
              <Link to="/contact">
                {t("home.hero.contact")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/services">
                {t("home.hero.cta")}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;