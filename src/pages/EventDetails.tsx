import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const EventDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulate fetching event data based on ID
  const getEvent = () => {
    const events = {
      "webinar": {
        title: t("events.webinar.title"),
        description: t("events.webinar.description"),
        date: "2024-02-15",
        time: "14:00",
        location: t("events.online"),
        type: t("events.types.webinar"),
        maxParticipants: 100,
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      },
      "workshop": {
        title: t("events.workshop.title"),
        description: t("events.workshop.description"),
        date: "2024-03-01",
        time: "09:30",
        location: "Paris",
        type: t("events.types.workshop"),
        maxParticipants: 20,
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
        image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
      },
      "conference": {
        title: t("events.conference.title"),
        description: t("events.conference.description"),
        date: "2024-04-10",
        time: "10:00",
        location: "Lyon",
        type: t("events.types.conference"),
        maxParticipants: 200,
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      }
    };
    
    return events[id as keyof typeof events];
  };

  const event = getEvent();

  if (!event) {
    return navigate("/events");
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/events")}
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
            <img 
              src={event.image} 
              alt={event.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
              {event.type}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {event.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <time dateTime={event.date}>
                    {new Date(event.date).toLocaleDateString()}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{event.time}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>{t("events.maxParticipants", { count: event.maxParticipants })}</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                {event.description}
              </p>
              <div className="whitespace-pre-line">
                {event.content}
              </div>
            </div>

            <Button className="mt-8 w-full md:w-auto" size="lg">
              {t("events.register")}
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails;