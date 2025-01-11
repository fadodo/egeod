import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";
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
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

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
      
      // Validate reCAPTCHA
      const recaptchaValue = await recaptchaRef.current?.executeAsync();
      console.log("reCAPTCHA response:", recaptchaValue);
      
      if (!recaptchaValue) {
        console.error("reCAPTCHA validation failed");
        toast({
          title: "Erreur de validation",
          description: "Veuillez valider le reCAPTCHA",
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
        throw supabaseError;
      }
      console.log("Successfully saved to Supabase");

      // Send email notification
      console.log("Sending email notification...");
      const { error: emailError } = await supabase.functions.invoke('contact-notification', {
        body: values
      });

      if (emailError) {
        console.error("Email notification error:", emailError);
        throw emailError;
      }
      console.log("Email notification sent successfully");

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

    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: t("contact.error"),
        description: error.message || t("contact.errorDetail"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
              
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="6LfWwEApAAAAAGg5RjpfQZnvBhQ5F-Vg_hHX-7_x"
              />

              <Button 
                type="submit" 
                className="w-full transition-all duration-200 hover:scale-[1.02]"
                disabled={isSubmitting}
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