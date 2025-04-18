
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag, Share2, BookmarkPlus } from "lucide-react";
import { motion } from "framer-motion";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BlogPost = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulate fetching blog post data based on ID
  const getBlogPost = () => {
    const posts = {
      "trends": {
        id: "trends",
        title: t("blog.posts.trends.title"),
        description: t("blog.posts.trends.description"),
        content: `
          ## Les Tendances Géospatiales en 2024

          L'année 2024 marque un tournant décisif dans le domaine de la géomatique et de l'analyse spatiale. Voici les principales tendances qui façonnent notre industrie :

          ### 1. Intelligence Artificielle et Analyse Spatiale

          L'IA révolutionne l'analyse des données géospatiales :
          - Détection automatique des changements dans les images satellites
          - Prédiction des phénomènes environnementaux
          - Classification automatique de l'occupation des sols
          - Optimisation des itinéraires et de la logistique urbaine

          ### 2. Technologies 3D et Jumeaux Numériques

          La modélisation 3D devient incontournable :
          - Création de jumeaux numériques urbains
          - Simulation des impacts environnementaux
          - Planification urbaine interactive
          - Gestion des infrastructures en temps réel

          ### 3. Données Temps Réel et IoT

          L'intégration des capteurs connectés transforme la collecte de données :
          - Surveillance environnementale en continu
          - Gestion intelligente du trafic urbain
          - Optimisation des ressources naturelles
          - Alertes précoces pour les risques naturels

          ### 4. Cloud Computing et Edge Computing

          L'évolution des infrastructures de traitement :
          - Analyse distribuée des données massives
          - Traitement en périphérie pour les applications critiques
          - Plateformes SaaS pour la géomatique
          - Interopérabilité accrue des services

          ### 5. Blockchain et Données Géospatiales

          Sécurisation et traçabilité des données :
          - Certification des données cadastrales
          - Traçabilité des chaînes d'approvisionnement
          - Gestion des droits d'accès aux données
          - Smart contracts géolocalisés

          ### Perspectives d'Avenir

          Ces innovations ouvrent de nouvelles perspectives :
          - Démocratisation des outils d'analyse spatiale
          - Amélioration de la prise de décision
          - Développement de solutions durables
          - Renforcement de la résilience urbaine

          L'intégration de ces technologies transforme rapidement nos métiers et crée de nouvelles opportunités pour les organisations et les territoires.
        `,
        date: "2024-01-15",
        author: "EGEOD Team",
        category: t("blog.categories.technology"),
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      },
      "case": {
        title: t("blog.posts.case.title"),
        description: t("blog.posts.case.description"),
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
        date: "2024-01-10",
        author: "EGEOD Team",
        category: t("blog.categories.caseStudy"),
        image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
      },
      "tutorial": {
        title: t("blog.posts.tutorial.title"),
        description: t("blog.posts.tutorial.description"),
        content: `
          ## Guide Pratique: Analyse de Données Spatiales

          L'analyse de données spatiales est devenue un outil incontournable dans de nombreux domaines tels que l'urbanisme, l'environnement, la santé publique et le marketing territorial. Ce guide vous présente les fondamentaux et les meilleures pratiques pour exploiter efficacement vos données géolocalisées.

          ### Les bases de l'analyse spatiale

          L'analyse spatiale repose sur l'étude des relations géographiques entre différentes entités. Elle permet de répondre à des questions complexes comme:
          
          - Comment les phénomènes se distribuent-ils dans l'espace?
          - Existe-t-il des corrélations entre la localisation et certaines caractéristiques?
          - Quelles sont les zones d'influence de certains points d'intérêt?

          ### Outils recommandés

          Plusieurs outils permettent de réaliser des analyses spatiales de qualité:
          
          1. **QGIS** - Solution open-source complète pour l'analyse SIG
          2. **R (packages sf, sp)** - Pour les analyses statistiques avancées
          3. **Python (GeoPandas, PySAL)** - Pour l'automatisation et le machine learning spatial
          4. **PostgreSQL/PostGIS** - Pour le stockage et l'analyse de données spatiales massives

          ### Méthodologie d'analyse

          Une analyse spatiale efficace suit généralement ces étapes:
          
          1. **Préparation des données** - Nettoyage, géocodage, transformation de projections
          2. **Exploration visuelle** - Cartographie thématique pour identifier les tendances
          3. **Analyse statistique** - Tests d'autocorrélation spatiale, clustering
          4. **Modélisation** - Régression spatiale, interpolation, analyse de réseau

          ### Visualisation des résultats

          La communication de vos résultats est cruciale. Privilégiez:
          
          - Des cartes claires avec légendes explicites
          - Des échelles de couleurs adaptées (divergentes, séquentielles)
          - Des cartes interactives pour les présentations web
          - Des infographies combinant cartes et graphiques statistiques

          ### Étude de cas: Optimisation de réseau

          Une entreprise de logistique a utilisé l'analyse spatiale pour optimiser ses tournées de livraison en zone urbaine. L'analyse a permis de:
          
          - Identifier les zones de congestion récurrentes
          - Optimiser les horaires de livraison selon les quartiers
          - Réduire de 18% les temps de parcours et de 15% les émissions de CO2
          
          Cette approche montre comment l'analyse spatiale peut avoir un impact direct sur l'efficacité opérationnelle et environnementale.
        `,
        date: "2024-01-05",
        author: "EGEOD Team",
        category: t("blog.categories.tutorial"),
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
        relatedPosts: ["trends", "case"]
      }
    };
    
    return posts[id as keyof typeof posts];
  };

  const post = getBlogPost();

  if (!post) {
    navigate("/blog");
    return null;
  }

  const formatContent = (content: string) => {
    // Simple markdown-like processing
    return content.split('###').map((section, index) => {
      if (index === 0) return <div key={index} dangerouslySetInnerHTML={{ __html: section.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n\n/g, '<br/><br/>').replace(/\n-\s(.*)/g, '<br/>• $1') }} />;
      
      const [title, ...contentParts] = section.split('\n');
      const sectionContent = contentParts.join('\n');
      
      return (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{title.trim()}</h3>
          <div dangerouslySetInnerHTML={{ 
            __html: sectionContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\n\n/g, '<br/><br/>')
              .replace(/\n-\s(.*)/g, '<br/>• $1')
          }} />
        </div>
      );
    });
  };

  // Get the related posts for the navigation
  const allPosts = {
    "trends": t("blog.posts.trends.title"),
    "case": t("blog.posts.case.title"),
    "tutorial": t("blog.posts.tutorial.title")
  };

  // Determine next and previous post
  const postKeys = Object.keys(allPosts);
  const currentIndex = postKeys.findIndex(key => key === id);
  const prevPost = currentIndex > 0 ? postKeys[currentIndex - 1] : null;
  const nextPost = currentIndex < postKeys.length - 1 ? postKeys[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/blog")}
          className="mb-8 hover:bg-primary/10 flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("blog.backToBlog")}
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <div className="aspect-video relative overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <Button size="sm" variant="secondary" className="rounded-full bg-white/70 backdrop-blur-sm hover:bg-white/90">
                <Share2 className="h-4 w-4 mr-1" />
                {t("blog.share")}
              </Button>
              <Button size="sm" variant="secondary" className="rounded-full bg-white/70 backdrop-blur-sm hover:bg-white/90">
                <BookmarkPlus className="h-4 w-4 mr-1" />
                {t("blog.save")}
              </Button>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <time dateTime={post.date} className="text-xs text-muted-foreground flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(post.date).toLocaleDateString()}
              </time>
              <span className="text-xs text-muted-foreground flex items-center">
                <User className="h-3 w-3 mr-1" />
                {post.author}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {post.title}
            </h1>

            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {post.description}
              </p>
              <div className="text-gray-700 leading-relaxed">
                {formatContent(post.content)}
              </div>
            </div>
            
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-semibold mb-4">{t("blog.relatedPosts")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {post.relatedPosts.map((relatedId) => {
                    const relatedPosts = {
                      "trends": {
                        title: t("blog.posts.trends.title"),
                        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                      },
                      "case": {
                        title: t("blog.posts.case.title"),
                        image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                      },
                      "tutorial": {
                        title: t("blog.posts.tutorial.title"),
                        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
                      }
                    };
                    const related = relatedPosts[relatedId as keyof typeof relatedPosts];
                    
                    return (
                      <Card key={relatedId} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={related.image} 
                            alt={related.title}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardDescription className="text-base font-medium">
                            {related.title}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="hover:bg-primary/10 p-0"
                            asChild
                          >
                            <a href={`/blog/${relatedId}`}>
                              {t("blog.readMore")}
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </motion.div>
        
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              {prevPost ? (
                <PaginationItem>
                  <PaginationPrevious href={`/blog/${prevPost}`} />
                </PaginationItem>
              ) : (
                <PaginationItem>
                  <PaginationPrevious className="pointer-events-none opacity-50" />
                </PaginationItem>
              )}
              
              {postKeys.map((key) => (
                <PaginationItem key={key} className="hidden md:inline-block">
                  <PaginationLink
                    href={`/blog/${key}`}
                    isActive={key === id}
                  >
                    {key === "trends" ? "1" : key === "case" ? "2" : "3"}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              {nextPost ? (
                <PaginationItem>
                  <PaginationNext href={`/blog/${nextPost}`} />
                </PaginationItem>
              ) : (
                <PaginationItem>
                  <PaginationNext className="pointer-events-none opacity-50" />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
