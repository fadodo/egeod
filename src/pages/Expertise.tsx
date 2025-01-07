import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, ShieldCheck, Users, Leaf, Building2, Wheat, Beaker, Factory, Car } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous développons des solutions technologiques de pointe pour répondre aux défis complexes de la géomatique moderne.",
    points: [
      "Technologies SIG avancées",
      "Intelligence artificielle appliquée",
      "Solutions cloud innovantes",
      "R&D continue"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Qualité",
    description: "Notre engagement envers l'excellence se traduit par des résultats précis et fiables.",
    points: [
      "Contrôle qualité rigoureux",
      "Méthodologies éprouvées",
      "Certifications professionnelles",
      "Outils de pointe"
    ]
  },
  {
    icon: Users,
    title: "Proximité et écoute",
    description: "Une approche personnalisée centrée sur vos besoins spécifiques.",
    points: [
      "Accompagnement personnalisé",
      "Support réactif",
      "Collaboration étroite",
      "Solutions sur mesure"
    ]
  }
];

const sectors = [
  {
    icon: Leaf,
    title: "Environnement",
    description: "Études d'impact, surveillance environnementale, gestion des ressources naturelles"
  },
  {
    icon: Building2,
    title: "Urbanisme",
    description: "Planification urbaine, cadastre, aménagement du territoire"
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description: "Agriculture de précision, gestion parcellaire, optimisation des cultures"
  },
  {
    icon: Factory,
    title: "Industrie",
    description: "Cartographie industrielle, gestion d'actifs, optimisation logistique"
  },
  {
    icon: Beaker,
    title: "Recherche",
    description: "Projets R&D, analyses spatiales avancées, modélisation"
  },
  {
    icon: Car,
    title: "Transport",
    description: "Planification d'itinéraires, gestion de flottes, infrastructure routière"
  }
];

const projects = [
  {
    title: "Cartographie environnementale",
    client: "Agence de l'Environnement",
    description: "Création d'un système de surveillance environnementale en temps réel pour le suivi des zones protégées.",
    results: [
      "Couverture de 50 000 hectares",
      "Précision de 98%",
      "Mise à jour quotidienne"
    ]
  },
  {
    title: "Smart City",
    client: "Métropole de Lyon",
    description: "Développement d'une plateforme SIG pour la gestion intelligente des infrastructures urbaines.",
    results: [
      "Réduction de 30% des interventions",
      "Économies de 2M€/an",
      "Interface intuitive"
    ]
  },
  {
    title: "Agriculture de précision",
    client: "Coopérative agricole",
    description: "Mise en place d'un système d'optimisation des cultures basé sur l'analyse spatiale.",
    results: [
      "Augmentation rendement de 25%",
      "Réduction intrants de 20%",
      "ROI en 18 mois"
    ]
  }
];

const Expertise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Section Valeurs */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Notre expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez comment notre expertise en géomatique et données géospatiales
              peut transformer vos projets grâce à nos valeurs fondamentales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {value.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section Secteurs */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos secteurs d'intervention
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <sector.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle>{sector.title}</CardTitle>
                  <CardDescription>{sector.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Section Projets */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos réalisations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="font-semibold text-primary">
                    {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center">
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
      </main>

      <Footer />
    </div>
  );
};

export default Expertise;