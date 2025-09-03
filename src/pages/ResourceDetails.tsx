import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, FileText, FileType } from "lucide-react";
import { motion } from "framer-motion";

const ResourceDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulate fetching resource data based on ID
  const getResource = () => {
    const resources = {
      "guide": {
        title: t("resources.guide.title"),
        description: t("resources.guide.description"),
        type: t("resources.types.guide"),
        format: "PDF",
        size: "2.5 MB",
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      },
      "template": {
        title: t("resources.template.title"),
        description: t("resources.template.description"),
        type: t("resources.types.template"),
        format: "XLSX",
        size: "1.2 MB",
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
        image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
      },
      "technical": {
        title: t("resources.technical.title"),
        description: t("resources.technical.description"),
        type: t("resources.types.technical"),
        format: "PDF",
        size: "3.1 MB",
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
      }
    };
    
    return resources[id as keyof typeof resources];
  };

  const resource = getResource();

  if (!resource) {
    navigate("/projects-tutorials");
    return null;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/projects-tutorials")}
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
            <img 
              src={resource.image} 
              alt={resource.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 right-4 bg-primary/10 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2">
              <FileType className="h-4 w-4" />
              {resource.format}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>

            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {resource.title}
            </h1>

            <div className="flex items-center justify-between text-sm text-muted-foreground mb-8">
              <span>{resource.type}</span>
              <span>{resource.size}</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                {resource.description}
              </p>
              <div className="whitespace-pre-line">
                {resource.content}
              </div>
            </div>

            <Button className="mt-8 w-full md:w-auto gap-2" size="lg">
              <Download className="h-4 w-4" />
              {t("resources.download")}
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourceDetails;