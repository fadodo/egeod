import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const ContactInfo = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-card rounded-lg p-8 space-y-8 border border-border shadow-lg"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {t("contact.info.title")}
        </h2>
        <p className="text-muted-foreground">
          {t("contact.info.description")}
        </p>
      </div>
      
      <motion.div variants={itemVariants} className="flex items-start gap-4 group">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          <MapPin className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium text-foreground">{t("contact.info.address")}</h3>
          <p className="text-muted-foreground">
            4 Rue Hubertine Auclert<br />
            31400 Toulouse, France
          </p>
          <a 
            href="https://maps.google.com/?q=4+Rue+Hubertine+Auclert+31400+Toulouse+France" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary hover:underline mt-2"
          >
            Ouvrir dans Google Maps <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          <Phone className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium text-foreground">{t("contact.info.phone")}</h3>
          <a 
            href="tel:+33758011183" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            +33 (0)7 58 01 11 83
          </a>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          <Mail className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium text-foreground">{t("contact.info.email")}</h3>
          <a 
            href="mailto:fidel999@yahoo.fr" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            fidel999@yahoo.fr
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};