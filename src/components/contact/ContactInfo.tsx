import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const ContactInfo = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: MapPin,
      title: t("contact.info.address"),
      content: "4 Rue Hubertine Auclert\n31400 Toulouse, France"
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      content: "+33 (0)7 58 01 11 83"
    },
    {
      icon: Mail,
      title: t("contact.info.email"),
      content: "fidel999@yahoo.fr"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-lg p-6 space-y-6 shadow-md hover:shadow-lg transition-shadow"
    >
      <h2 className="text-2xl font-semibold mb-4">{t("contact.info.title")}</h2>
      
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <item.icon className="w-5 h-5 mt-1 text-primary" />
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {item.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};