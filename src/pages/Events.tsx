import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8 font-heading">Événements</h1>
        <p className="text-muted-foreground mb-8">
          Participez à nos webinaires et événements pour rester à jour sur les dernières tendances.
        </p>
        {/* Contenu des événements à implémenter */}
      </main>
      <Footer />
    </div>
  );
};

export default Events;