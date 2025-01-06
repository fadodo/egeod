import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Map from "@/components/Map";
import { ArrowRight, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsSection } from "@/components/NewsSection";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center pt-20 pb-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Vos données,<br />notre expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Nous transformons vos données en informations stratégiques pour des décisions éclairées.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contactez nos experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/services">
                  Découvrir nos solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="container mx-auto px-4 py-10">
          <Map />
        </div>
      </section>

      {/* Section Actualités */}
      <NewsSection />

      {/* Map Section */}
      <div className="container mx-auto px-4 py-10">
        <Map />
      </div>

      <Footer />
    </div>
  );
};

export default Index;