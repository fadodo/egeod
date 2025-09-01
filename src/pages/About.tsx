import { Award, Lightbulb, Heart, Users, Globe2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Fifi ADODO",
      role: t("about.team.member.role"),
      skills: t("about.team.member.skills", { returnObjects: true }) as string[],
      image: "/public/avatarFA.png",
      website: "http://fadodo.github.io",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "innovation",
    },
    {
      icon: Award,
      title: "excellence",
    },
    {
      icon: Heart,
      title: "engagement",
    },
    {
      icon: Users,
      title: "collaboration",
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title={t("about.title")}
        description={t("about.description")}
        keywords="équipe EGEOD, histoire entreprise, valeurs, experts géomatique, Fifi ADODO"
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Histoire */}
        <section className="space-y-6 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">{t("about.title")}</h2>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              {t("about.description")}
            </p>
            <p className="text-lg text-muted-foreground">
              {t("about.mission")}
            </p>
            <p className="text-lg text-muted-foreground">
              {t("about.journey")}
            </p>
            <p className="text-lg text-muted-foreground">
              {t("about.recognition")}
            </p>
          </div>
        </section>

        {/* Équipe */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">{t("about.team.title")}</h2>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              {t("about.team.description")}
            </p>
            <p className="text-lg text-muted-foreground">
              {t("about.team.commitment")}
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
                  <CardTitle className="flex items-center justify-center gap-2">
                    {member.name}
                    {member.website && (
                      <a 
                        href={member.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`Visit ${member.name}'s website`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </CardTitle>
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
          <h2 className="text-3xl font-bold text-center mb-8">{t("about.values.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card 
                key={value.title}
                className="text-center hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="pt-6">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{t(`about.values.${value.title}.title`)}</h3>
                  <p className="text-muted-foreground">{t(`about.values.${value.title}.description`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">{t("about.vision.title")}</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6 text-center space-y-4">
              <Globe2 className="w-16 h-16 mx-auto text-primary mb-4" />
              <p className="text-lg text-muted-foreground">
                {t("about.vision.description")}
              </p>
              <p className="text-lg text-muted-foreground">
                {t("about.vision.future")}
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