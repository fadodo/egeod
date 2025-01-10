import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Satellite, LineChart, Map, Globe2, ArrowRight, Database, Microscope, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Satellite,
    title: "Acquisition de données",
    description: "Collecte de données satellite, drone et terrain adaptée à vos besoins spécifiques.",
    details: [
      "Imagerie satellite haute résolution",
      "Acquisitions par drone",
      "Relevés terrain",
      "Données multi-temporelles"
    ]
  },
  {
    icon: LineChart,
    title: "Traitement et analyse",
    description: "Analyse approfondie avec des outils SIG et de télédétection avancés.",
    details: [
      "Analyse spectrale",
      "Classification d'images",
      "Détection de changements",
      "Modélisation spatiale"
    ]
  },
  {
    icon: Map,
    title: "Cartographie",
    description: "Création de cartes personnalisées et visualisations interactives.",
    details: [
      "Cartographie thématique",
      "Visualisation 3D",
      "Webmapping",
      "Atlas personnalisés"
    ]
  },
  {
    icon: Users2,
    title: "Conseils experts",
    description: "Accompagnement personnalisé dans vos projets géospatiaux.",
    details: [
      "Audit et diagnostic",
      "Formation sur mesure",
      "Support technique",
      "Veille technologique"
    ]
  }
];

const specializedServices = [
  {
    icon: Database,
    title: "Gestion de données",
    description: "Organisation et structuration de vos données géospatiales."
  },
  {
    icon: Microscope,
    title: "R&D",
    description: "Innovation et développement de solutions sur mesure."
  },
  {
    icon: Globe2,
    title: "Expertise internationale",
    description: "Intervention sur des projets à l'échelle mondiale."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Nos Services
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8">
            Des solutions complètes pour l'acquisition, le traitement et l'analyse de données géospatiales
          </p>
        </div>
      </section>

      {/* Services principaux */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services spécialisés */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Services spécialisés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedServices.map((service) => (
              <Card key={service.title} className="text-center group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col items-center gap-4">
                    <service.icon className="h-12 w-12 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez nos experts pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Contactez-nous
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;