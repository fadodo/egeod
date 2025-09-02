import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, FileType, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import floodMapperTutorial from "@/assets/flood-mapper-tutorial.jpg";

const Resources = () => {
  const { t } = useTranslation();

  const resources = [
    {
      id: "flood-mapper-guide",
      title: t("resources.floodMapperGuide.title"),
      description: t("resources.floodMapperGuide.description"),
      type: t("resources.types.tutorial"),
      format: "Tutorial",
      url: "https://fadodo.github.io/event/flood_mapper_documentation/",
      icon: FileText,
      image: floodMapperTutorial
    },
    {
      id: "academic-website",
      title: t("resources.academicWebsite.title"),
      description: t("resources.academicWebsite.description"),
      type: t("resources.types.guide"),
      format: "Guide",
      url: "https://fadodo.github.io/event/academic_cv_website/",
      icon: FileText,
      image: "/tutorials/academic-website.webp"
    },
    {
      id: "flood-mapper-package",
      title: t("resources.floodMapperPackage.title"),
      description: t("resources.floodMapperPackage.description"),
      type: t("resources.types.tool"),
      format: "Python",
      url: "https://github.com/fadodo/flood_mapper",
      icon: FileText,
      image: "/projects/flood-mapper.webp"
    },
    {
      id: "temperature-dashboard",
      title: t("resources.temperatureDashboard.title"),
      description: t("resources.temperatureDashboard.description"),
      type: t("resources.types.dashboard"),
      format: "Interactive",
      url: "https://lookerstudio.google.com/reporting/6df4d148-e15f-4f14-a09b-1b2749857956",
      icon: FileText,
      image: "/projects/temperature-dashboard.webp"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          {t("resources.title")}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground mb-12 max-w-2xl"
        >
          {t("resources.description")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary/10 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <FileType className="h-4 w-4" />
                    {resource.format}
                  </div>
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{resource.type}</span>
                      <span>{resource.format}</span>
                    </div>
                    <Button className="w-full gap-2" asChild>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t("resources.viewResource")}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;