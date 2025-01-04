import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EGEOD</h3>
            <p className="text-muted-foreground">
              Expert of Geospatial and Earth Observation Data
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Toulouse, France</span>
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+33 7 58 01 11 83</span>
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@egeod.com</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                Qui sommes-nous
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/expertise" className="block text-muted-foreground hover:text-primary transition-colors">
                Expertise
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EGEOD. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};