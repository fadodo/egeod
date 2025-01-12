import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ContactFormFields } from "./ContactFormFields";
import { ContactFormData } from "./types";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    turnstile: any;
  }
}

const TURNSTILE_SCRIPT_ID = 'turnstile-script';
const TURNSTILE_SITE_KEY = "0x4AAAAAAA5IwiG-gmX6v_mh";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileError, setTurnstileError] = useState<string | null>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  useEffect(() => {
    console.log("Mounting ContactForm component...");
    setMounted(true);

    const loadTurnstile = () => {
      if (!document.getElementById(TURNSTILE_SCRIPT_ID)) {
        console.log("Creating new Turnstile script...");
        const script = document.createElement("script");
        script.id = TURNSTILE_SCRIPT_ID;
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";

        script.onload = () => {
          console.log("Turnstile script loaded successfully");
          if (window.turnstile && mounted) {
            initializeTurnstile();
          }
        };

        script.onerror = (error) => {
          console.error("Failed to load Turnstile script:", error);
          setTurnstileError("Erreur lors du chargement du widget de sécurité");
        };

        document.head.appendChild(script);
      } else if (window.turnstile && mounted) {
        console.log("Turnstile script already exists, initializing widget...");
        initializeTurnstile();
      }
    };

    loadTurnstile();

    return () => {
      console.log("Unmounting ContactForm component...");
      if (turnstileWidgetId.current) {
        console.log("Removing Turnstile widget...");
        window.turnstile?.remove(turnstileWidgetId.current);
      }
      setMounted(false);
    };
  }, [mounted]);

  const initializeTurnstile = () => {
    console.log("Initializing Turnstile widget...");
    try {
      if (turnstileWidgetId.current) {
        window.turnstile?.remove(turnstileWidgetId.current);
      }
      
      turnstileWidgetId.current = window.turnstile.render('#turnstile-widget', {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "light",
        callback: function(token: string) {
          console.log("Turnstile token received");
          setTurnstileToken(token);
          setTurnstileError(null);
        },
        "error-callback": function() {
          console.error("Turnstile widget error");
          setTurnstileError("Erreur de validation, veuillez réessayer");
          setTurnstileToken(null);
        },
        "expired-callback": function() {
          console.log("Turnstile token expired");
          setTurnstileToken(null);
          setTurnstileError("La validation a expiré, veuillez réessayer");
        }
      });
      console.log("Turnstile widget rendered successfully");
    } catch (error) {
      console.error("Error rendering Turnstile widget:", error);
      setTurnstileError("Erreur lors de l'initialisation du widget de sécurité");
    }
  };

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormData) => {
    try {
      setIsSubmitting(true);
      console.log("Starting form submission with values:", values);
      
      if (!turnstileToken) {
        console.error("Turnstile validation required");
        setTurnstileError("Veuillez compléter la validation de sécurité");
        return;
      }

      console.log("Saving to Supabase...");
      const { error: supabaseError } = await supabase
        .from("Contacts")
        .insert(values);

      if (supabaseError) {
        console.error("Supabase error:", supabaseError);
        throw new Error(`Erreur lors de l'enregistrement: ${supabaseError.message}`);
      }
      console.log("Successfully saved to Supabase");

      console.log("Sending email notification...");
      const { data, error: emailError } = await supabase.functions.invoke('contact-notification', {
        body: JSON.stringify({ ...values, turnstileToken })
      });

      if (emailError) {
        console.error("Email notification error:", emailError);
        throw new Error(`Erreur lors de l'envoi de l'email: ${emailError.message}`);
      }
      console.log("Email notification response:", data);

      setIsSuccess(true);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      setTimeout(() => {
        navigate("/");
      }, 5000);

    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Erreur lors de l'envoi",
        description: error.message || "Une erreur est survenue lors de l'envoi du message",
      });
    } finally {
      setIsSubmitting(false);
      if (turnstileWidgetId.current) {
        window.turnstile?.reset(turnstileWidgetId.current);
      }
      setTurnstileToken(null);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Alert className="bg-green-50 border-green-200">
            <AlertTitle className="text-green-800 text-lg font-heading">
              Message envoyé avec succès !
            </AlertTitle>
            <AlertDescription className="text-green-700 mt-2">
              Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.
              <br />
              Vous allez être redirigé vers la page d'accueil dans quelques secondes...
            </AlertDescription>
          </Alert>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="space-y-6"
              aria-label="Formulaire de contact"
            >
              <ContactFormFields form={form} />
              
              <div className="flex flex-col items-center gap-4">
                <div 
                  id="turnstile-widget" 
                  className="overflow-hidden rounded-lg shadow-sm min-h-[65px] w-full max-w-[300px] mx-auto"
                ></div>
                
                {turnstileError && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Erreur de validation</AlertTitle>
                    <AlertDescription>{turnstileError}</AlertDescription>
                  </Alert>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full transition-all duration-200 hover:scale-[1.02]"
                disabled={isSubmitting || !turnstileToken}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("contact.form.sending")}
                  </>
                ) : (
                  t("contact.form.send")
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};