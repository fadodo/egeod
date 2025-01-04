import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Globe, LineChart, Map, Search, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Expertise = () => {
  const expertises = [
    {
      title: "Acquisition de données",
      description: "Collecte précise de données géospatiales avec des technologies de pointe.",
      icon: Search,
      details: [
        "Relevés topographiques",
        "Photogrammétrie",
        "Scanner laser 3D",
        "Drones et télédétection"
      ]
    },
    {
      title: "Traitement et analyse",
      description: "Transformation des données brutes en informations exploitables.",
      icon: LineChart,
      details: [
        "Analyse spatiale",
        "Modélisation 3D",
        "Big Data géospatial",
        "Intelligence artificielle"
      ]
    },
    {
      title: "Cartographie",
      description: "Création de cartes et visualisations géographiques personnalisées.",
      icon: Map,
      details: [
        "Cartographie thématique",
        "SIG web",
        "Visualisation 3D",
        "Atlas interactifs"
      ]
    },
    {
      title: "Gestion de données",
      description: "Solutions complètes pour la gestion de vos données géographiques.",
      icon: Database,
      details: [
        "Base de données spatiales",
        "Infrastructure SIG",
        "Intégration de données",
        "Maintenance"
      ]
    },
    {
      title: "R&D",
      description: "Innovation continue dans le domaine de la géomatique.",
      icon: Settings,
      details: [
        "Recherche appliquée",
        "Développement d'outils",
        "Prototypage",
        "Veille technologique"
      ]
    },
    {
      title: "Expertise internationale",
      description: "Accompagnement de projets à l'échelle mondiale.",
      icon: Globe,
      details: [
        "Projets internationaux",
        "Collaboration multi-pays",
        "Standards internationaux",
        "Réseau mondial"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nos expertises</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Découvrez notre gamme complète de services en géomatique et données géospatiales,
          conçue pour répondre à vos besoins les plus exigeants.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertises.map((expertise, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <expertise.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>{expertise.title}</CardTitle>
              <CardDescription>{expertise.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {expertise.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Prêt à démarrer votre projet ?
        </h2>
        <Button asChild size="lg">
          <Link to="/contact">
            Contactez-nous
            <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Expertise;