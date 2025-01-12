import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

const YAHOO_APP_PASSWORD = Deno.env.get('YAHOO_APP_PASSWORD');
const YAHOO_EMAIL = 'fidel999@yahoo.fr';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  subject: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting contact notification function...');
    
    // Verify SMTP credentials
    if (!YAHOO_APP_PASSWORD) {
      console.error('YAHOO_APP_PASSWORD is not set');
      throw new Error('Configuration SMTP manquante');
    }

    const formData: ContactFormData = await req.json();
    console.log('Received contact form data:', formData);

    const client = new SmtpClient();

    try {
      console.log('Connecting to SMTP server...');
      await client.connectTLS({
        hostname: "smtp.mail.yahoo.com",
        port: 465,
        username: YAHOO_EMAIL,
        password: YAHOO_APP_PASSWORD,
      });
      console.log('Successfully connected to SMTP server');

      // Email pour l'administrateur
      const adminEmailHtml = `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Sujet:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `;

      console.log('Sending admin notification email...');
      await client.send({
        from: YAHOO_EMAIL,
        to: YAHOO_EMAIL,
        subject: `Nouveau message de contact: ${formData.subject}`,
        content: adminEmailHtml,
        html: adminEmailHtml,
      });
      console.log('Admin notification email sent successfully');

      // Email de confirmation pour l'utilisateur
      const userEmailHtml = `
        <h2>Confirmation de votre message</h2>
        <p>Bonjour ${formData.name},</p>
        <p>Nous avons bien reçu votre message et nous vous en remercions.</p>
        <p>Nous vous répondrons dans les meilleurs délais.</p>
        <p><strong>Récapitulatif de votre message :</strong></p>
        <p><strong>Sujet:</strong> ${formData.subject}</p>
        <p><strong>Service demandé:</strong> ${formData.service}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <p>Cordialement,<br>L'équipe EGEOD</p>
      `;

      console.log('Sending confirmation email to user...');
      await client.send({
        from: YAHOO_EMAIL,
        to: formData.email,
        subject: "Confirmation de votre message - EGEOD",
        content: userEmailHtml,
        html: userEmailHtml,
      });
      console.log('User confirmation email sent successfully');

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });

    } catch (smtpError) {
      console.error('SMTP Error:', smtpError);
      throw new Error(`Erreur d'envoi d'email: ${smtpError.message}`);
    } finally {
      await client.close();
      console.log('SMTP connection closed');
    }

  } catch (error: any) {
    console.error('Error in contact-notification function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || "Une erreur est survenue lors de l'envoi du message" 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});