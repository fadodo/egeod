import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ContactFormFields } from "./ContactFormFields";
import { ContactFormData } from "./types";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

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
      console.log("Starting form submission...");
      
      // Verify reCAPTCHA
      const recaptchaValue = await recaptchaRef.current?.executeAsync();
      if (!recaptchaValue) {
        throw new Error("Veuillez valider le reCAPTCHA");
      }
      console.log("reCAPTCHA validated");

      // Insert into Supabase
      const { error: supabaseError } = await supabase
        .from("Contacts")
        .insert(values);

      if (supabaseError) throw supabaseError;
      console.log("Data saved to Supabase");

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('contact-notification', {
        body: values
      });

      if (emailError) throw emailError;
      console.log("Email notification sent");

      setIsSuccess(true);
      
      // Redirect after 5 seconds
      setTimeout(() => {
        navigate("/");
      }, 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: t("contact.error"),
        description: t("contact.errorDetail"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
    );
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-6 animate-fade-in"
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
  );
};