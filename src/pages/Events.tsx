import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Events = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {t("events.title")}
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="p-12 backdrop-blur-sm bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex justify-center mb-6"
                >
                  <div className="p-4 rounded-full bg-primary/10">
                    <Calendar className="h-12 w-12 text-primary" />
                  </div>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-3xl font-bold text-foreground mb-4"
                >
                  {t("events.comingSoon.title")}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                  {t("events.comingSoon.description")}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{t("events.comingSoon.stayTuned")}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="gap-2 hover:bg-primary/10"
                    asChild
                  >
                    <a href="mailto:contact@egeod.com">
                      <Mail className="h-4 w-4" />
                      {t("events.comingSoon.notify")}
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-muted-foreground text-sm"
          >
            {t("events.comingSoon.footer")}
          </motion.p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;