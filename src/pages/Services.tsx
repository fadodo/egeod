import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Satellite, LineChart, Map, Globe2, ArrowRight, Database, Microscope, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/SEO";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Satellite,
      key: "acquisition"
    },
    {
      icon: LineChart,
      key: "processing"
    },
    {
      icon: Map,
      key: "mapping"
    },
    {
      icon: Users2,
      key: "consulting"
    }
  ];

  const specializedServices = [
    {
      icon: Database,
      key: "dataManagement"
    },
    {
      icon: Microscope,
      key: "research"
    },
    {
      icon: Globe2,
      key: "international"
    }
  ];
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={t("services.title")}
        description={t("services.subtitle")}
        keywords="services géomatique, acquisition données satellite, traitement SIG, cartographie, conseil géospatial"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {t("services.title")}
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services principaux */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.key} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">{t(`services.mainServices.${service.key}.title`)}</CardTitle>
                  </div>
                  <CardDescription className="text-lg mt-2">
                    {t(`services.mainServices.${service.key}.description`)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {(t(`services.mainServices.${service.key}.details`, { returnObjects: true }) as string[]).map((detail: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services spécialisés */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("services.specialized.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedServices.map((service) => (
              <Card key={service.key} className="text-center group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col items-center gap-4">
                    <service.icon className="h-12 w-12 text-primary" />
                    <CardTitle>{t(`services.specialized.${service.key}.title`)}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t(`services.specialized.${service.key}.description`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("services.cta.title")}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("services.cta.description")}
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              {t("services.cta.button")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;