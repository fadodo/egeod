import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      
      // Vérifier le reCAPTCHA
      const recaptchaValue = await recaptchaRef.current?.executeAsync();
      if (!recaptchaValue) {
        throw new Error("Veuillez valider le reCAPTCHA");
      }

      // Insérer dans Supabase
      const { error: supabaseError } = await supabase
        .from("Contacts")
        .insert([values]);

      if (supabaseError) throw supabaseError;

      // Envoyer la notification par email
      const { error: emailError } = await supabase.functions.invoke('contact-notification', {
        body: values
      });

      if (emailError) throw emailError;

      toast({
        title: t("contact.success"),
        description: t("contact.successDetail"),
      });

      form.reset();
      recaptchaRef.current?.reset();
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.name")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.email")}</FormLabel>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.service")}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t("contact.form.service")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(t("contact.form.services", { returnObjects: true })).map(
                    ([key, value]) => (
                      <SelectItem key={key} value={key}>
                        {value}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.subject")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.message")}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="min-h-[150px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey="YOUR_RECAPTCHA_SITE_KEY"
        />

        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
        </Button>
      </form>
    </Form>
  );
};