import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-card rounded-lg p-6 space-y-6">
      <h2 className="text-2xl font-semibold mb-4">{t("contact.info.title")}</h2>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <MapPin className="w-5 h-5 mt-1 text-primary" />
          <div>
            <h3 className="font-medium">{t("contact.info.address")}</h3>
            <p className="text-muted-foreground">
              4 Rue Hubertine Auclert<br />
              31400 Toulouse, France
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="w-5 h-5 mt-1 text-primary" />
          <div>
            <h3 className="font-medium">{t("contact.info.phone")}</h3>
            <p className="text-muted-foreground">+33 (0)7 58 01 11 83</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="w-5 h-5 mt-1 text-primary" />
          <div>
            <h3 className="font-medium">{t("contact.info.email")}</h3>
            <p className="text-muted-foreground">fidel999@yahoo.fr</p>
          </div>
        </div>
      </div>
    </div>
  );
};