import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, FileType, ExternalLink, Calendar, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import floodMapperTutorial from "@/assets/flood-mapper-tutorial.jpg";

const ProjectTutorials = () => {
  const { t } = useTranslation();

  // Define types for better TypeScript support
  type ProjectItem = {
    id: string;
    title: string;
    description: string;
    type: string;
    format: string;
    url: string;
    icon: any;
    image: string;
    category: string;
    date?: string;
    author?: string;
  };

  // Combine both resources (tutorials) and projects (blog posts)
  const resources: ProjectItem[] = [
    {
      id: "flood-mapper-guide",
      title: t("resources.floodMapperGuide.title"),
      description: t("resources.floodMapperGuide.description"),
      type: t("resources.types.tutorial"),
      format: "Tutorial",
      url: "https://fadodo.github.io/event/flood_mapper_documentation/",
      icon: FileText,
      image: floodMapperTutorial,
      category: "tutorial"
    },
    {
      id: "academic-website",
      title: t("resources.academicWebsite.title"),
      description: t("resources.academicWebsite.description"),
      type: t("resources.types.guide"),
      format: "Guide",
      url: "https://fadodo.github.io/event/academic_cv_website/",
      icon: FileText,
      image: "/tutorials/academic-website.webp",
      category: "tutorial"
    },
    {
      id: "flood-mapper-package",
      title: t("resources.floodMapperPackage.title"),
      description: t("resources.floodMapperPackage.description"),
      type: t("resources.types.tool"),
      format: "Python",
      url: "https://github.com/fadodo/flood_mapper",
      icon: FileText,
      image: "/projects/flood-mapper.webp",
      category: "tool"
    },
    {
      id: "temperature-dashboard",
      title: t("resources.temperatureDashboard.title"),
      description: t("resources.temperatureDashboard.description"),
      type: t("resources.types.dashboard"),
      format: "Interactive",
      url: "https://lookerstudio.google.com/reporting/6df4d148-e15f-4f14-a09b-1b2749857956",
      icon: FileText,
      image: "/projects/temperature-dashboard.webp",
      category: "dashboard"
    }
  ];

  const projects: ProjectItem[] = [
    {
      id: "flood-mapper",
      title: t("blog.posts.floodMapper.title"),
      description: t("blog.posts.floodMapper.description"),
      date: "2025-07-16",
      author: "Fifi ADODO",
      type: t("blog.categories.remoteSensing"),
      format: "Project",
      url: "https://github.com/fadodo/flood_mapper",
      icon: BookOpen,
      image: "/projects/flood-mapper.webp",
      category: "project"
    },
    {
      id: "flood-analysis",
      title: t("blog.posts.floodAnalysis.title"),
      description: t("blog.posts.floodAnalysis.description"),
      date: "2025-05-30",
      author: "Fifi ADODO",
      type: t("blog.categories.geoAnalysis"),
      format: "Project",
      url: "https://github.com/fadodo/Flood_mapping",
      icon: BookOpen,
      image: "/projects/flood-analysis.webp",
      category: "project"
    },
    {
      id: "books-analysis",
      title: t("blog.posts.booksAnalysis.title"),
      description: t("blog.posts.booksAnalysis.description"),
      date: "2025-05-26",
      author: "Fifi ADODO",
      type: t("blog.categories.dataAnalysis"),
      format: "Project",
      url: "https://github.com/fadodo/Books_reviewers_review_Analysis",
      icon: BookOpen,
      image: "/projects/books-analysis.webp",
      category: "project"
    },
    {
      id: "landcover-supervised",
      title: t("blog.posts.landcoverSupervised.title"),
      description: t("blog.posts.landcoverSupervised.description"),
      date: "2025-05-10",
      author: "Fifi ADODO",
      type: t("blog.categories.machineLearning"),
      format: "Project",
      url: "https://github.com/fadodo/Supervised_landcover_classification",
      icon: BookOpen,
      image: "/projects/landcover-supervised.webp",
      category: "project"
    },
    {
      id: "landcover-unsupervised",
      title: t("blog.posts.landcoverUnsupervised.title"),
      description: t("blog.posts.landcoverUnsupervised.description"),
      date: "2025-05-03",
      author: "Fifi ADODO",
      type: t("blog.categories.machineLearning"),
      format: "Project",
      url: "https://github.com/fadodo/unsupervised_sentinel2__imagery_classification",
      icon: BookOpen,
      image: "/projects/landcover-unsupervised.webp",
      category: "project"
    }
  ];

  // Combine all items
  const allItems = [...resources, ...projects];

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
          {t("projectTutorials.title")}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground mb-12 max-w-2xl"
        >
          {t("projectTutorials.description")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary/10 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <FileType className="h-4 w-4" />
                    {item.format}
                  </div>
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  {item.category === "project" && item.date && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={item.date}>
                        {new Date(item.date).toLocaleDateString()}
                      </time>
                      <span className="mx-2">•</span>
                      <User className="h-4 w-4" />
                      <span>{item.author}</span>
                    </div>
                  )}
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{item.type}</span>
                      <span>{item.format}</span>
                    </div>
                    <Button className="w-full gap-2" asChild>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {item.category === "project" ? t("blog.viewProject") : t("resources.viewResource")}
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

export default ProjectTutorials;