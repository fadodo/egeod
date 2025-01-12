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
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    turnstile: any;
  }
}

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
  const turnstileWidgetId = useRef<string | null>(null);

  useEffect(() => {
    setMounted(true);

    // Load Turnstile script
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      setMounted(false);
      if (turnstileWidgetId.current) {
        window.turnstile?.remove(turnstileWidgetId.current);
      }
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.turnstile && mounted) {
      console.log("Rendering Turnstile widget...");
      turnstileWidgetId.current = window.turnstile.render('#turnstile-widget', {
        sitekey: "0x4AAAAAAA5IwiG-gmX6v_mh",
        callback: function(token: string) {
          console.log("Turnstile token received:", token);
          setTurnstileToken(token);
        },
      });
    }
  }, [mounted]);

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
      
      // Validate Turnstile
      if (!turnstileToken) {
        console.error("Turnstile validation required");
        toast({
          title: "Erreur de validation",
          description: "Veuillez compléter la validation de sécurité",
          variant: "destructive",
        });
        return;
      }

      // Save to Supabase
      console.log("Saving to Supabase...");
      const { error: supabaseError } = await supabase
        .from("Contacts")
        .insert(values);

      if (supabaseError) {
        console.error("Supabase error:", supabaseError);
        throw new Error(`Erreur lors de l'enregistrement: ${supabaseError.message}`);
      }
      console.log("Successfully saved to Supabase");

      // Send email notification with Turnstile token
      console.log("Sending email notification...");
      const { data, error: emailError } = await supabase.functions.invoke('contact-notification', {
        body: { ...values, turnstileToken }
      });

      if (emailError) {
        console.error("Email notification error:", emailError);
        throw new Error(`Erreur lors de l'envoi de l'email: ${emailError.message}`);
      }
      console.log("Email notification response:", data);

      // Show success message
      setIsSuccess(true);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      // Redirect after delay
      setTimeout(() => {
        navigate("/");
      }, 5000);

    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Erreur lors de l'envoi",
        description: error.message || "Une erreur est survenue lors de l'envoi du message",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      // Reset Turnstile
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
        >
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="space-y-6"
              aria-label="Formulaire de contact"
            >
              <ContactFormFields form={form} />
              
              <div className="flex justify-center my-4">
                <div id="turnstile-widget"></div>
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