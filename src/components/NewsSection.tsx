import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Book, Calendar, Download } from "lucide-react";
import { Link } from "react-router-dom";

export const NewsSection = () => {
  const { t } = useTranslation();

  const newsCategories = [
    {
      icon: Book,
      title: t("news.projectsTutorials.title"),
      description: t("news.projectsTutorials.description"),
      link: "/projects-tutorials",
      items: [
        t("news.projectsTutorials.items.projects"),
        t("news.projectsTutorials.items.tutorials"),
        t("news.projectsTutorials.items.tools")
      ]
    }
  ];

  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {t("news.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsCategories.map((category) => (
            <Link to={category.link} key={category.title} className="w-full">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};