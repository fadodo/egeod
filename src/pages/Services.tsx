import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Satellite, LineChart, Map, Globe2, ArrowRight, Database, Microscope, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Satellite,
      title: t("services.data.title"),
      description: t("services.data.description"),
      details: [
        t("services.data.details.satellite"),
        t("services.data.details.drone"),
        t("services.data.details.field"),
        t("services.data.details.temporal")
      ]
    },
    {
      icon: LineChart,
      title: t("services.processing.title"),
      description: t("services.processing.description"),
      details: [
        t("services.processing.details.spectral"),
        t("services.processing.details.classification"),
        t("services.processing.details.change"),
        t("services.processing.details.modeling")
      ]
    },
    {
      icon: Map,
      title: t("services.mapping.title"),
      description: t("services.mapping.description"),
      details: [
        t("services.mapping.details.thematic"),
        t("services.mapping.details.visualization"),
        t("services.mapping.details.webmapping"),
        t("services.mapping.details.atlas")
      ]
    },
    {
      icon: Users2,
      title: t("services.consulting.title"),
      description: t("services.consulting.description"),
      details: [
        t("services.consulting.details.audit"),
        t("services.consulting.details.training"),
        t("services.consulting.details.support"),
        t("services.consulting.details.monitoring")
      ]
    }
  ];

  const specializedServices = [
    {
      icon: Database,
      title: t("services.specialized.data.title"),
      description: t("services.specialized.data.description")
    },
    {
      icon: Microscope,
      title: t("services.specialized.rd.title"),
      description: t("services.specialized.rd.description")
    },
    {
      icon: Globe2,
      title: t("services.specialized.international.title"),
      description: t("services.specialized.international.description")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            {t("services.title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            {t("services.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Services principaux */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <service.icon className="h-8 w-8 text-primary" />
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-lg mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services spécialisés */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            {t("services.specialized.title")}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col items-center gap-4">
                      <service.icon className="h-12 w-12 text-primary" />
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6"
          >
            {t("services.cta.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {t("services.cta.description")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button asChild size="lg">
              <Link to="/contact">
                {t("services.cta.button")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;