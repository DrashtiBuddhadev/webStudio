
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bgimage from "/images/webdesign.jpg";
import bgimage2 from "/images/mobileapp.jpg";

type CarouselSlide = {
  image: string;
  title: string;
  description: string;
  ctaLink: string;
};

export default function HeroCarousel() {
  const slides: CarouselSlide[] = [
    {
      image: bgimage,
      title: "Web Design & Development",
      description: "Beautiful, functional websites that bring your ideas to life with elegant design and powerful functionality.",
      ctaLink: "/services#website-development"
    },
    {
      image: bgimage2,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across devices.",
      ctaLink: "/services#mobile-application"
    },
    {
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "E-commerce Solutions",
      description: "Powerful online stores with secure payment processing and intuitive shopping experiences.",
      ctaLink: "/services#ecommerce"
    },
  ];

  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 500);

    const slideTimer = setTimeout(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 500);
    }, 6000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(slideTimer);
    };
  }, [current, slides.length]);

  const nextSlide = () => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 300);
  };

  const prevSlide = () => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, 300);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides background */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === current && (
            <motion.div
              key={`bg-${index}`}
              className="absolute inset-0"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
              {/* <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/30"></div> */}
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-8">
          <div className="max-w-lg text-left">
            <AnimatePresence mode="wait">
              {textVisible && (
                <motion.div
                  key={`content-${current}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.22, 1, 0.36, 1],
                    staggerChildren: 0.1
                  }}
                  className="space-y-6"
                >
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-newsreader text-white font-bold leading-tight"
                  >
                    {slides[current].title}
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-white/90 max-w-md"
                  >
                    {slides[current].description}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-4 pt-4"
                  >
                    <Link to="/about-us">
                      <Button 
                        variant="outline"
                        className="border-white text-gray-800 hover:bg-white/10 hover:text-white px-8 py-6 text-lg btn-animated"
                      >
                        Discover More
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button 
                        variant="outline" 
                        className="border-white text-gray-800 hover:bg-white/10 hover:text-white px-8 py-6 text-lg btn-animated"
                      >
                        Get in Touch
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-12 right-12 flex space-x-4">
        <Button
          variant="outline"
          size="icon"
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 rounded-full w-12 h-12"
          onClick={prevSlide}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 rounded-full w-12 h-12"
          onClick={nextSlide}
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-12 left-12 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setTextVisible(false);
              setTimeout(() => {
                setCurrent(index);
              }, 300);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
