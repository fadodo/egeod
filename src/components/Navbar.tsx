import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  const NavLinks = () => (
    <>
      <Link to="/about" className="hover:text-primary transition-colors">
        {t("nav.about")}
      </Link>
      <Link to="/services" className="hover:text-primary transition-colors">
        {t("nav.services")}
      </Link>
      <Link to="/expertise" className="hover:text-primary transition-colors">
        {t("nav.expertise")}
      </Link>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent">
          {t("nav.news")}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-3 p-4 w-[400px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Link to="/blog" className="block p-2 hover:bg-accent rounded-md transition-colors">
              {t("nav.blog")}
            </Link>
            <Link to="/events" className="block p-2 hover:bg-accent rounded-md transition-colors">
              {t("nav.events")}
            </Link>
            <Link to="/resources" className="block p-2 hover:bg-accent rounded-md transition-colors">
              {t("nav.resources")}
            </Link>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <Link to="/contact" className="hover:text-primary transition-colors">
        {t("nav.contact")}
      </Link>
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
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
              <NavigationMenuList className="gap-6">
                <NavLinks />
              </NavigationMenuList>
            </NavigationMenu>
            <LanguageSelector />
            <Button asChild>
              <Link to="/contact">{t("nav.contactUs")}</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};