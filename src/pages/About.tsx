import { Award, Lightbulb, Heart, Users, Globe2, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Fifi ADODO",
      role: t("about.team.role.ceo"),
      skills: [
        t("about.team.skills.satellite"),
        t("about.team.skills.gis"),
        t("about.team.skills.python"),
        t("about.team.skills.deepLearning"),
        t("about.team.skills.projectManagement")
      ],
      image: "/avatarFA.png",
      social: {
        linkedin: "https://www.linkedin.com/",
        email: "contact@egeod.com"
      }
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: t("about.values.innovation"),
      description: t("about.values.innovationDesc")
    },
    {
      icon: Award,
      title: t("about.values.excellence"),
      description: t("about.values.excellenceDesc")
    },
    {
      icon: Heart,
      title: t("about.values.engagement"),
      description: t("about.values.engagementDesc")
    },
    {
      icon: Users,
      title: t("about.values.collaboration"),
      description: t("about.values.collaborationDesc")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Histoire */}
        <section className="space-y-6 animate-fade-in">
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {t("about.title")}
          </h1>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              {t("about.description")}
            </p>
            <p className="text-lg text-muted-foreground">
              {t("about.mission")}
            </p>
          </div>
        </section>

        {/* Équipe */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">{t("about.team.title")}</h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-lg text-muted-foreground">
              {t("about.team.description")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="group hover:shadow-lg transition-all duration-300 animate-fade-in">
                <CardHeader className="text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
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
                className="text-center group hover:shadow-lg transition-all duration-300 animate-fade-in"
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
          <h2 className="text-3xl font-bold text-center mb-8">{t("about.vision.title")}</h2>
          <Card className="max-w-4xl mx-auto animate-fade-in">
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