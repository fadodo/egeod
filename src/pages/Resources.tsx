import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8 font-heading">Ressources gratuites</h1>
        <p className="text-muted-foreground mb-8">
          Téléchargez nos guides et fiches techniques pour approfondir vos connaissances.
        </p>
        {/* Contenu des ressources à implémenter */}
      </main>
      <Footer />
    </div>
  );
};

export default Resources;