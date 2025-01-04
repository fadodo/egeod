import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Map from "@/components/Map";
import { ArrowRight, Globe2, LineChart, Map as MapIcon, Satellite } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Satellite,
    title: "Acquisition de données",
    description: "Collecte de données satellite, drone et terrain adaptée à vos besoins."
  },
  {
    icon: LineChart,
    title: "Traitement et analyse",
    description: "Analyse approfondie avec des outils SIG et de télédétection avancés."
  },
  {
    icon: MapIcon,
    title: "Cartographie",
    description: "Création de cartes personnalisées et visualisations interactives."
  },
  {
    icon: Globe2,
    title: "Conseils experts",
    description: "Accompagnement personnalisé dans vos projets géospatiaux."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center pt-20 pb-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Vos données géospatiales,<br />notre expertise
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg border bg-card hover:bg-accent/10 transition-colors"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;