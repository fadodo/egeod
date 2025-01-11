import { useTranslation } from "react-i18next";
import { UseFormReturn } from "react-hook-form";
import { ContactFormData } from "./types";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

interface ContactFormFieldsProps {
  form: UseFormReturn<ContactFormData>;
}

export const ContactFormFields = ({ form }: ContactFormFieldsProps) => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/90">
                {t("contact.form.name")}
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  aria-required="true"
                  className="transition-all duration-200 focus:scale-[1.01]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/90">
                {t("contact.form.email")}
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="email" 
                  aria-required="true"
                  className="transition-all duration-200 focus:scale-[1.01]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/90">
                {t("contact.form.service")}
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="transition-all duration-200 focus:scale-[1.01]">
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
      </motion.div>

      <motion.div variants={itemVariants}>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/90">
                {t("contact.form.subject")}
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  aria-required="true"
                  className="transition-all duration-200 focus:scale-[1.01]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/90">
                {t("contact.form.message")}
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="min-h-[150px] transition-all duration-200 focus:scale-[1.01]"
                  aria-required="true"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </motion.div>
    </motion.div>
  );
};