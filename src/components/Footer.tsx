import { Mail, MapPin, Phone, Linkedin, Twitter, Globe, ExternalLink, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-background to-muted/30 py-16 mt-20 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold gradient-text mb-4">EGEOD</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("footer.company.description")}
              </p>
            </div>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-secondary/10">
                <Globe className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-heading font-semibold mb-6">{t("footer.contact.title")}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium">{t("footer.contact.address")}</p>
                  <p className="text-sm text-muted-foreground">{t("footer.contact.region")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-secondary group-hover:scale-110 transition-transform" />
                <a href="tel:+33758011183" className="hover:text-secondary transition-colors">
                  +33 7 58 01 11 83
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                <a href="mailto:fidel999@yahoo.fr" className="hover:text-accent transition-colors">
                  fidel999@yahoo.fr
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-heading font-semibold mb-6">{t("footer.navigation.title")}</h3>
            <nav className="space-y-3">
              {[
                { to: "/about", label: t("nav.about") },
                { to: "/services", label: t("nav.services") },
                { to: "/expertise", label: t("nav.expertise") },
                { to: "/blog", label: t("nav.blog") },
                { to: "/events", label: t("nav.events") },
                { to: "/contact", label: t("nav.contact") }
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform group"
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Tools & Demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-heading font-semibold mb-6">{t("footer.tools.title")}</h3>
            <div className="space-y-4">
              <a 
                href="https://safecoast.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 glass-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-primary transition-colors">{t("footer.tools.safecoast.title")}</h4>
                    <p className="text-sm text-muted-foreground">{t("footer.tools.safecoast.description")}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} EGEOD. {t("footer.copyright")} | 
            <Link to="/privacy" className="hover:text-primary transition-colors ml-1">{t("footer.privacy")}</Link>
          </p>
          
          <Button
            onClick={scrollToTop}
            size="sm"
            variant="ghost"
            className="hover:bg-primary/10 group"
          >
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            <span className="ml-2">{t("footer.scrollTop")}</span>
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};