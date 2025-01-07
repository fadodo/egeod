import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      title: t("blog.posts.trends.title"),
      description: t("blog.posts.trends.description"),
      date: "2024-01-15",
      author: "EGEOD Team",
      category: t("blog.categories.technology")
    },
    {
      title: t("blog.posts.case.title"),
      description: t("blog.posts.case.description"),
      date: "2024-01-10",
      author: "EGEOD Team",
      category: t("blog.categories.caseStudy")
    },
    {
      title: t("blog.posts.tutorial.title"),
      description: t("blog.posts.tutorial.description"),
      date: "2024-01-05",
      author: "EGEOD Team",
      category: t("blog.categories.tutorial")
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold mb-8 font-heading">{t("blog.title")}</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          {t("blog.description")}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
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
                  <Button variant="ghost" size="sm" className="gap-2">
                    {t("blog.readMore")} <BookOpen className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;