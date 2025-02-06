import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, FileType } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Resources = () => {
  const { t } = useTranslation();

  const resources = [
    {
      id: "guide",
      title: t("resources.guide.title"),
      description: t("resources.guide.description"),
      type: t("resources.types.guide"),
      format: "PDF",
      size: "2.5 MB",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: "template",
      title: t("resources.template.title"),
      description: t("resources.template.description"),
      type: t("resources.types.template"),
      format: "XLSX",
      size: "1.2 MB",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
    },
    {
      id: "technical",
      title: t("resources.technical.title"),
      description: t("resources.technical.description"),
      type: t("resources.types.technical"),
      format: "PDF",
      size: "3.1 MB",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
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
                      <span>{resource.size}</span>
                    </div>
                    <Button className="w-full gap-2" asChild>
                      <Link to={`/resources/${resource.id}`}>
                        <Download className="h-4 w-4" />
                        {t("resources.download")}
                      </Link>
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