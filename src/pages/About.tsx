import { Award, Lightbulb, Heart, Users, Globe2, Linkedin, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const teamMembers = [
  {
    name: "Fifi ADODO",
    role: "CEO & Teledetection and Data Analyst",
    skills: ["Analyse d'images satellite", "SIG", "Python", "Deep Learning","Gestion de projet"],
    image: "/public/avatarFA.png",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous explorons constamment de nouvelles technologies et méthodologies."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet et livrable."
  },
  {
    icon: Heart,
    title: "Engagement",
    description: "Nous sommes dévoués à la réussite de nos clients."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Nous travaillons en étroite collaboration avec nos clients et partenaires."
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Histoire */}
        <section className="space-y-6 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">Notre Histoire</h2>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              Fondée en 2025, EGEOD est née de la vision d'experts passionnés par les données géospatiales et l'observation de la Terre. Notre mission est de rendre les données géospatiales accessibles et exploitables pour tous.
            </p>
            <p className="text-lg text-muted-foreground">
              Depuis notre création, nous avons accompagné de nombreuses organisations dans leur transformation numérique et leur compréhension des enjeux territoriaux.
            </p>
          </div>
        </section>

        {/* Équipe */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">Notre Équipe</h2>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              Chez EGEOD, notre force réside dans notre équipe multidisciplinaire, composée d'experts passionnés par la data et l'innovation animés par un objectif commun : transformer les données utilisateurs et les données géospatiales en outils stratégiques au service de nos clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Valeurs */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card 
                key={value.title}
                className="text-center hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="pt-6">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">Notre Vision</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6 text-center space-y-4">
              <Globe2 className="w-16 h-16 mx-auto text-primary mb-4" />
              <p className="text-lg text-muted-foreground">
                Chez EGEOD, nous croyons en un monde où les données géospatiales sont au service du développement durable et de l'intelligence territoriale. Notre vision est de démocratiser l'accès à ces données et de les transformer en solutions concrètes pour répondre aux défis environnementaux et sociétaux de demain.
              </p>
              <p className="text-lg text-muted-foreground">
                À travers notre expertise et nos innovations, nous contribuons à construire un avenir où la technologie spatiale et l'observation de la Terre sont des leviers essentiels pour la prise de décision et la préservation de notre planète.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
