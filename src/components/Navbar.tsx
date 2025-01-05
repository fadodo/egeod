import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
      <NavigationMenuItem>
        <NavigationMenuTrigger>Actualités</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-3 p-4 w-[400px]">
            <NavigationMenuLink asChild>
              <Link to="/blog" className="block p-2 hover:bg-accent rounded-md">
                Blog
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link to="/events" className="block p-2 hover:bg-accent rounded-md">
                Événements
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link to="/resources" className="block p-2 hover:bg-accent rounded-md">
                Ressources gratuites
              </Link>
            </NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <Link to="/contact" className="hover:text-primary transition-colors">
        Contact
      </Link>
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logoEGEOD1.png" alt="EGEOD Logo" className="h-8" />
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
                <LanguageSelector />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavLinks />
              </NavigationMenuList>
            </NavigationMenu>
            <LanguageSelector />
            <Button>Contactez-nous</Button>
          </div>
        )}
      </div>
    </nav>
  );
};