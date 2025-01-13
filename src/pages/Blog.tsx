import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, User, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BlogSearch } from "@/components/BlogSearch";
import { BlogCategories } from "@/components/BlogCategories";
import { BlogShareButtons } from "@/components/BlogShareButtons";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const blogPosts = [
    {
      id: "climate-change",
      title: t("blog.posts.climateChange.title"),
      description: t("blog.posts.climateChange.description"),
      date: "2024-01-20",
      author: "EGEOD Team",
      category: "sustainability",
      image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51",
      views: 1250
    },
    {
      id: "drone-innovation",
      title: t("blog.posts.droneInnovation.title"),
      description: t("blog.posts.droneInnovation.description"),
      date: "2024-01-18",
      author: "EGEOD Team",
      category: "technology",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
      views: 890
    },
    {
      id: "urban-planning",
      title: t("blog.posts.urbanPlanning.title"),
      description: t("blog.posts.urbanPlanning.description"),
      date: "2024-01-15",
      author: "EGEOD Team",
      category: "case-studies",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
      views: 750
    }
  ];

  const filteredPosts = blogPosts
    .filter(post => 
      (!selectedCategory || post.category === selectedCategory) &&
      (!searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .sort((a, b) => b.views - a.views);

  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16 flex-grow">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-6 font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {t("blog.title")}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              {t("blog.description")}
            </p>

            <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
              <BlogSearch onSearch={setSearchQuery} />
              <BlogCategories 
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>
          </motion.div>

          {/* Popular Posts Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              {t("blog.popularPosts")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
                          {post.views} vues
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">{post.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* All Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
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
                      <BlogShareButtons 
                        title={post.title}
                        url={window.location.origin + `/blog/${post.id}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                {t("blog.noResults")}
              </p>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
