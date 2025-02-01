import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  type: "image" | "video";
  src: string;
  caption: string;
}

const slides: Slide[] = [
  {
    type: "image",
    src: "/world.jpg",
    caption: "Cartographie mondiale",
  },
  {
    type: "image",
    src: "/hurricane.jpg",
    caption: "Suivi des phénomènes météorologiques",
  },
  {
    type: "image",
    src: "/hero-background.jpg",
    caption: "Navigation maritime",
  },
  {
    type: "image",
    src: "/data.jpg",
    caption: "Analyse de données géospatiales",
  },
  {
    type: "video",
    src: "/ocean_small.mp4",
    caption: "Océan large",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <Carousel
        className="w-full h-full"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="absolute inset-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0.5,
                  zIndex: currentSlide === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "relative w-full h-full transition-opacity",
                  currentSlide === index ? "opacity-100" : "opacity-50"
                )}
              >
                {slide.type === "video" ? (
                  <video
                    autoPlay={currentSlide === index}
                    muted
                    loop
                    playsInline
                    controls={currentSlide === index}
                    className="w-full h-full object-cover"
                  >
                    <source src={slide.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.caption}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-lg md:text-xl text-center font-medium">
                    {slide.caption}
                  </p>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
          aria-label="Slide précédent"
          onClick={() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setIsPlaying(false);
          }}
        />
        <CarouselNext
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
          aria-label="Slide suivant"
          onClick={() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsPlaying(false);
          }}
        />
      </Carousel>
    </div>
  );
};
