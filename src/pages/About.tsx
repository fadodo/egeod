import { Award, Lightbulb, Heart, Users, Globe2, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

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
        <section className="space-y-6 animate-fade-in pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            {t("about.title")}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <p className="text-lg text-muted-foreground">
              {t("about.description")}
            </p>
            <p className="text-lg text-muted-foreground">
              {t("about.mission")}
            </p>
          </motion.div>
        </section>

        {/* Équipe */}
        <section className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8"
          >
            {t("about.team.title")}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-8"
          >
            <p className="text-lg text-muted-foreground">
              {t("about.team.description")}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
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
              </motion.div>
            ))}
          </div>
        </section>

        {/* Valeurs */}
        <section className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8"
          >
            {t("about.values.title")}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8"
          >
            {t("about.vision.title")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
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
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;