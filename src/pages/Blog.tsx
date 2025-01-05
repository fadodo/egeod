import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8 font-heading">Blog</h1>
        <p className="text-muted-foreground mb-8">
          Découvrez nos derniers articles sur la géomatique, la télédétection et l'environnement.
        </p>
        {/* Contenu du blog à implémenter */}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;