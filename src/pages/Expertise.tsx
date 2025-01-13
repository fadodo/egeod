import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExpertiseHero } from "@/components/expertise/ExpertiseHero";
import { ExpertiseValues } from "@/components/expertise/ExpertiseValues";
import { SectorsSection } from "@/components/expertise/SectorsSection";

const Expertise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="mb-20">
          <ExpertiseHero />
          <ExpertiseValues />
        </section>
        <SectorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Expertise;