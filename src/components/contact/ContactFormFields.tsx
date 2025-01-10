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

  const formFields = [
    {
      name: "name",
      label: t("contact.form.name"),
      type: "text",
    },
    {
      name: "email",
      label: t("contact.form.email"),
      type: "email",
    },
    {
      name: "subject",
      label: t("contact.form.subject"),
      type: "text",
    },
  ];

  return (
    <>
      {formFields.map((field, index) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <FormField
            control={form.control}
            name={field.name as keyof ContactFormData}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input {...formField} type={field.type} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.service")}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t("contact.form.selectService")} />
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.message")}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="min-h-[150px] resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </motion.div>
    </>
  );
};