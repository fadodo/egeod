import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
}

export const SEO = ({
  title = "EGEOD - Expert en Données Géospatiales et Observation Terrestre",
  description = "EGEOD transforme les données géospatiales en solutions innovantes. Expertise en télédétection, SIG, analyse d'images satellite et consultation géomatique pour votre entreprise.",
  keywords = "géospatial, télédétection, SIG, observation terrestre, données satellite, géomatique, cartographie, analyse spatiale, EGEOD",
  image = "/og-image.png",
  url = "https://egeod.com",
  type = "website",
  siteName = "EGEOD"
}: SEOProps) => {
  const fullTitle = title === "EGEOD - Expert en Données Géospatiales et Observation Terrestre" 
    ? title 
    : `${title} | EGEOD`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="author" content="EGEOD" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EGEOD",
          "description": description,
          "url": url,
          "logo": `${url}/logo_egeod.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33758011183",
            "contactType": "Customer Service",
            "email": "fidel999@yahoo.fr",
            "areaServed": "FR"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Toulouse",
            "addressCountry": "FR"
          },
          "sameAs": [
            "https://safecoast.netlify.app"
          ]
        })}
      </script>
    </Helmet>
  );
};