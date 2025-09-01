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
  type: 'image' | 'video';
  src: string;
  caption: string;
}

const slides: Slide[] = [
  {
    type: 'image',
    src: '/hero-background.jpg',
    caption: 'Solutions géospatiales innovantes'
  },
  {
    type: 'image',
    src: '/data.jpg',
    caption: 'Analyse de données géospatiales'
  },
  {
    type: 'image',
    src: '/boat-6572384_1280.jpg',
    caption: 'Navigation et surveillance maritime'
  },
  {
    type: 'image',
    src: '/hurricane.jpg',
    caption: 'Suivi des phénomènes météorologiques'
  },
  {
    type: 'image',
    src: '/world.jpg',
    caption: 'Cartographie et observation terrestre'
  }
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
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {slides[currentSlide].type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={slides[currentSlide].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={slides[currentSlide].src}
                alt={slides[currentSlide].caption}
                className="w-full h-full object-cover"
                loading="eager"
              />
            )}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-white text-lg md:text-xl text-center font-medium max-w-2xl mx-auto"
              >
                {slides[currentSlide].caption}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
        
        {/* Navigation buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
          onClick={() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setIsPlaying(false);
          }}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
          onClick={() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsPlaying(false);
          }}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          aria-label="Next slide"
        >
          →
        </button>
        
        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsPlaying(false);
                setTimeout(() => setIsPlaying(true), 3000);
              }}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentSlide 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
    </div>
  );
};