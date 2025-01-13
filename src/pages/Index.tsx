import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ValuesSection } from "@/components/home/ValuesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ValuesSection />
      <Footer />
    </div>
  );
};

export default Index;