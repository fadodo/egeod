import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { BrandLogo } from "./BrandLogo";
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
      <NavigationMenuItem>
        <Link to="/about" className="hover:text-primary transition-colors">
          {t("nav.about")}
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/services" className="hover:text-primary transition-colors">
          {t("nav.services")}
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/expertise" className="hover:text-primary transition-colors">
          {t("nav.expertise")}
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Button asChild variant="outline" className="bg-primary/10 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <a href="https://safecoast.netlify.app" target="_blank" rel="noopener noreferrer">
            {t("nav.safecoast")}
          </a>
        </Button>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 transition-colors">
          {t("nav.news")}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-3 p-6 w-[450px] glass-card shadow-xl border-white/20">
            <Link to="/projects-tutorials" className="group block p-3 hover:bg-primary/10 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="font-medium group-hover:text-primary transition-colors">{t("nav.projectsTutorials")}</div>
              <p className="text-sm text-muted-foreground mt-1">{t("news.projectsTutorials.description")}</p>
            </Link>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Button asChild variant="default" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
          <Link to="/contact" className="font-medium">
            {t("nav.contactUs")}
          </Link>
        </Button>
      </NavigationMenuItem>
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <BrandLogo />

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <NavigationMenu>
                  <NavigationMenuList className="flex-col items-start">
                    <NavLinks />
                  </NavigationMenuList>
                </NavigationMenu>
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
          </div>
        )}
      </div>
    </nav>
  );
};