import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Map from "@/components/Map";
import { ArrowRight, Award, Rocket, Users, Building2, TreePine, Building, Factory, ChartBar } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const values = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "Solutions technologiques de pointe pour une géomatique moderne et performante.",
    details: [
      "Technologies satellitaires avancées",
      "Intelligence artificielle appliquée",
      "Traitement automatisé des données",
      "Solutions cloud innovantes"
    ]
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Résultats précis et fiables pour des décisions éclairées.",
    details: [
      "Données haute précision",
      "Méthodologies éprouvées",
      "Contrôle qualité rigoureux",
      "Certifications internationales"
    ]
  },
  {
    icon: Users,
    title: "Proximité et écoute",
    description: "Une approche personnalisée centrée sur vos besoins.",
    details: [
      "Accompagnement sur mesure",
      "Support technique dédié",
      "Formation adaptée",
      "Suivi de projet continu"
    ]
  }
];

const sectors = [
  {
    icon: TreePine,
    title: "Environnement",
    projects: "Suivi de la déforestation en Amazonie"
  },
  {
    icon: Building,
    title: "Urbanisme",
    projects: "Cartographie 3D de Paris"
  },
  {
    icon: Factory,
    title: "Agriculture",
    projects: "Optimisation des rendements agricoles"
  }
];

const projects = [
  {
    title: "Cartographie des zones inondables",
    sector: "Environnement",
    description: "Analyse par satellite et modélisation 3D pour la prévention des risques",
    results: "Identification précise des zones à risque sur 500 km²"
  },
  {
    title: "Smart City Paris",
    sector: "Urbanisme",
    description: "Création d'un jumeau numérique de la ville",
    results: "Modélisation 3D complète de 20 arrondissements"
  },
  {
    title: "Agriculture de précision",
    sector: "Agriculture",
    description: "Optimisation des cultures par drone et satellite",
    results: "Augmentation des rendements de 25%"
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
              Vos données ,<br />notre expertise
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

      {/* Valeurs Section */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg mt-2">
                    {value.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {value.details.map((detail) => (
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

      {/* Secteurs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos secteurs d'intervention
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <Card key={sector.title} className="text-center group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <sector.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{sector.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Projet phare : {sector.projects}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos réalisations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <ChartBar className="h-6 w-6 text-primary" />
                    <span className="text-sm text-muted-foreground">{project.sector}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="font-semibold text-primary">Résultats :</p>
                    <p>{project.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="container mx-auto px-4 py-10">
        <Map />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
