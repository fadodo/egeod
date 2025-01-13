import { Badge } from "@/components/ui/badge";
import { BlogCategories } from "@/components/BlogCategories";
import { BlogSearch } from "@/components/BlogSearch";
import { BlogShareButtons } from "@/components/BlogShareButtons";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  
  // Mock blog posts data
  const posts = [
    {
      id: 1,
      title: "Understanding Geospatial Data",
      excerpt: "An introduction to working with geographic information...",
      category: "Education",
      date: "2024-01-10",
    },
    {
      id: 2,
      title: "Advanced Remote Sensing Techniques",
      excerpt: "Exploring modern approaches to satellite imagery analysis...",
      category: "Technical",
      date: "2024-01-08",
    },
    {
      id: 3,
      title: "The Future of Geospatial Technology",
      excerpt: "Innovations that are shaping the future of geospatial data...",
      category: "Innovation",
      date: "2024-01-05",
    },
    {
      id: 4,
      title: "Data Visualization in Geospatial Analysis",
      excerpt: "Techniques for effectively visualizing geospatial data...",
      category: "Education",
      date: "2024-01-02",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{t("blog.title")}</h1>
          <p className="text-muted-foreground">{t("blog.description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <BlogShareButtons 
                      title={post.title} 
                      url={`${window.location.origin}/blog/${post.id}`}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <BlogSearch />
            <BlogCategories />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
