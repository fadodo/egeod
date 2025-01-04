import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <>
      <Link to="/about" className="hover:text-primary transition-colors">
        Qui sommes-nous
      </Link>
      <Link to="/services" className="hover:text-primary transition-colors">
        Services
      </Link>
      <Link to="/expertise" className="hover:text-primary transition-colors">
        Expertise
      </Link>
      <Link to="/contact" className="hover:text-primary transition-colors">
        Contact
      </Link>
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          EGEOD
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            <NavLinks />
            <Button>Contactez-nous</Button>
          </div>
        )}
      </div>
    </nav>
  );
};