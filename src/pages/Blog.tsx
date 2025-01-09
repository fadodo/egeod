import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: "trends",
      title: t("blog.posts.trends.title"),
      description: t("blog.posts.trends.description"),
      date: "2024-01-15",
      author: "EGEOD Team",
      category: t("blog.categories.technology"),
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: "case",
      title: t("blog.posts.case.title"),
      description: t("blog.posts.case.description"),
      date: "2024-01-10",
      author: "EGEOD Team",
      category: t("blog.categories.caseStudy"),
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
    },
    {
      id: "tutorial",
      title: t("blog.posts.tutorial.title"),
      description: t("blog.posts.tutorial.description"),
      date: "2024-01-05",
      author: "EGEOD Team",
      category: t("blog.categories.tutorial"),
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
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
                      <Link to={`/blog/${post.id}`}>
                        {t("blog.readMore")} <BookOpen className="h-4 w-4" />
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

export default Blog;