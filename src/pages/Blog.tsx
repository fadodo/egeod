import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlogSearch } from "@/components/BlogSearch";
import { BlogCategories } from "@/components/BlogCategories";
import { BlogShareButtons } from "@/components/BlogShareButtons";

const Blog = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const posts = Object.entries(t("blog.posts", { returnObjects: true })).map(
    ([id, post]: [string, any]) => ({
      id,
      ...post,
    })
  );

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === null || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Get the current base URL for sharing
  const baseUrl = window.location.origin;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            >
              {t("blog.title")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg"
            >
              {t("blog.description")}
            </motion.p>
          </div>

          <motion.div variants={itemVariants}>
            <BlogSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <BlogCategories
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </motion.div>

          {filteredPosts.length === 0 ? (
            <motion.p
              variants={itemVariants}
              className="text-center text-muted-foreground"
            >
              {t("blog.noResults")}
            </motion.p>
          ) : (
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">
                          {t(`blog.categories.${post.category}`)}
                        </Badge>
                        <BlogShareButtons 
                          title={post.title} 
                          url={`${baseUrl}/blog/${post.id}`}
                        />
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {post.description}
                      </p>
                      <Button
                        variant="default"
                        className="w-full mt-auto"
                        onClick={() => {
                          console.log(`Navigating to blog post: ${post.id}`);
                        }}
                      >
                        {t("blog.readMore")}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
