import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulate fetching blog post data based on ID
  const getBlogPost = () => {
    const posts = {
      "trends": {
        title: t("blog.posts.trends.title"),
        description: t("blog.posts.trends.description"),
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
        date: "2024-01-15",
        author: "EGEOD Team",
        category: t("blog.categories.technology"),
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      },
      "case": {
        title: t("blog.posts.case.title"),
        description: t("blog.posts.case.description"),
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
        date: "2024-01-10",
        author: "EGEOD Team",
        category: t("blog.categories.caseStudy"),
        image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
      },
      "tutorial": {
        title: t("blog.posts.tutorial.title"),
        description: t("blog.posts.tutorial.description"),
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
        date: "2024-01-05",
        author: "EGEOD Team",
        category: t("blog.categories.tutorial"),
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
      }
    };
    
    return posts[id as keyof typeof posts];
  };

  const post = getBlogPost();

  if (!post) {
    navigate("/blog");
    return null;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/blog")}
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
              src={post.image} 
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>{post.category}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                {post.description}
              </p>
              <div className="whitespace-pre-line">
                {post.content}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;