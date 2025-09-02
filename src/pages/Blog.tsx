import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: "flood-mapper",
      title: t("blog.posts.floodMapper.title"),
      description: t("blog.posts.floodMapper.description"),
      date: "2025-07-16",
      author: "Fifi ADODO",
      category: t("blog.categories.remoteSensing"),
      image: "/projects/flood-mapper.webp",
      githubUrl: "https://github.com/fadodo/flood_mapper"
    },
    {
      id: "flood-analysis",
      title: t("blog.posts.floodAnalysis.title"),
      description: t("blog.posts.floodAnalysis.description"),
      date: "2025-05-30",
      author: "Fifi ADODO",
      category: t("blog.categories.geoAnalysis"),
      image: "/projects/flood-analysis.webp",
      githubUrl: "https://github.com/fadodo/Flood_mapping"
    },
    {
      id: "books-analysis",
      title: t("blog.posts.booksAnalysis.title"),
      description: t("blog.posts.booksAnalysis.description"),
      date: "2025-05-26",
      author: "Fifi ADODO",
      category: t("blog.categories.dataAnalysis"),
      image: "/projects/books-analysis.webp",
      githubUrl: "https://github.com/fadodo/Books_reviewers_review_Analysis"
    },
    {
      id: "landcover-supervised",
      title: t("blog.posts.landcoverSupervised.title"),
      description: t("blog.posts.landcoverSupervised.description"),
      date: "2025-05-10",
      author: "Fifi ADODO",
      category: t("blog.categories.machineLearning"),
      image: "/projects/landcover-supervised.webp",
      githubUrl: "https://github.com/fadodo/Supervised_landcover_classification"
    },
    {
      id: "landcover-unsupervised",
      title: t("blog.posts.landcoverUnsupervised.title"),
      description: t("blog.posts.landcoverUnsupervised.description"),
      date: "2025-05-03",
      author: "Fifi ADODO",
      category: t("blog.categories.machineLearning"),
      image: "/projects/landcover-unsupervised.webp",
      githubUrl: "https://github.com/fadodo/unsupervised_sentinel2__imagery_classification"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16 flex-grow">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          {t("blog.title")}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground mb-12 max-w-2xl"
        >
          {t("blog.description")}
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString()}
                    </time>
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="gap-2 hover:bg-primary/10"
                      asChild
                    >
                      <a href={post.githubUrl} target="_blank" rel="noopener noreferrer">
                        {t("blog.viewProject")} <ExternalLink className="h-4 w-4" />
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

export default Blog;