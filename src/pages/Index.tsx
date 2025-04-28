import { ArrowRight, Code2, Terminal, Database, Laptop, BrainCircuit, Server, Cpu, Globe, Code, ChevronDown, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Users, Heart } from "lucide-react";
import { Star, Briefcase, Book } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import ProjectSection  from "@/components/ProjectSection";
import CodeAnimation from "@/components/CodeAnimation";
import FeatureFlipCard from "@/components/FeatureFlipCard";
import { Wand2, Smartphone, Smile } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Services from "@/components/ServiceSection";
import HeroCarousel from "@/components/HeroCarousel";
const pastelGradients = [
  "from-pastel-blue via-pastel-purple to-pastel-pink",
  "from-pastel-pink via-pastel-yellow to-pastel-peach",
  "from-pastel-green via-pastel-blue to-pastel-purple"
];

const featureIcons = [
  <Wand2 className="h-8 w-8 text-primary" />,
  <Smartphone className="h-8 w-8 text-primary" />,
  <Smile className="h-8 w-8 text-primary" />
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1
    }
  })
};


const features = [
  {
    icon: featureIcons[0],
    title: "Beautiful Design",
    description:
      "Visually stunning websites with attention to every detail, ensuring your brand stands out.",
    color: "bg-gradient-to-tr from-pastel-blue via-pastel-purple to-pastel-pink",
    delay: 0
  },
  {
    icon: featureIcons[1],
    title: "Responsive Development",
    description:
      "Websites that look perfect on any device, from desktop computers to mobile phones.",
    color: "bg-gradient-to-tr from-pastel-pink via-pastel-yellow to-pastel-peach",
    delay: 0.1
  },
  {
    icon: featureIcons[2],
    title: "User Experience",
    description:
      "Intuitive interfaces and smooth interactions that keep your visitors engaged.",
    color: "bg-gradient-to-tr from-pastel-green via-pastel-blue to-pastel-purple",
    delay: 0.2
  },
];

const Index = () => {
  const [showInitialAnim, setShowInitialAnim] = useState(true);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [codeDepth, setCodeDepth] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [welcomeOpacity, setWelcomeOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      const opacity = Math.max(0.1, 1 - (scrollPosition / (viewportHeight * 0.1)));
      setWelcomeOpacity(opacity);
      if (opacity === 0.1) {
        setShowInitialAnim(false);
      }
      
      const depthValue = Math.min(20, (scrollPosition / (viewportHeight * 0.05)) * 5);
      setCodeDepth(depthValue);
      
      setShowAnimation(scrollPosition > viewportHeight * 0.15);
      
      setShowTagline(scrollPosition > viewportHeight * 0.25);
      
      if (scrollPosition > 50) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout fullWidth>
      <HeroCarousel/>
      {/* <section className="relative min-h-screen flex flex-col justify-center items-center hero-pastel-bg overflow-hidden">
        {showInitialAnim && (
          <div 
            className="absolute inset-0 z-50 bg-gradient-to-br from-pastel-blue via-pastel-purple/70 to-pastel-pink flex items-center justify-center"
            style={{ opacity: welcomeOpacity, transition: 'opacity 0.3s ease-out' }}
          >
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold font-newsreader mb-4 text-primary text-glow">
                Welcome to WebStudio
              </h1>
              <p className="text-xl md:text-2xl text-primary/80">
                Your vision, our expertise
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue/40 via-pastel-purple/30 to-pastel-pink/20 z-10"></div>
        
        <div className="absolute inset-0 tech-grid-pastel"></div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
          <div className="tech-element te-1"><Code2 className="h-14 w-14 text-pastel-blue/70" /></div>
          <div className="tech-element te-2"><Terminal className="h-16 w-16 text-pastel-green/70" /></div>
          <div className="tech-element te-3"><Database className="h-12 w-12 text-pastel-purple/70" /></div>
          <div className="tech-element te-4"><Laptop className="h-16 w-16 text-pastel-pink/70" /></div>
          <div className="tech-element te-5"><BrainCircuit className="h-14 w-14 text-pastel-yellow/70" /></div>
          <div className="tech-element te-6"><Server className="h-16 w-16 text-pastel-peach/70" /></div>
          <div className="tech-element te-7"><Cpu className="h-12 w-12 text-pastel-blue/70" /></div>
          <div className="tech-element te-8"><Globe className="h-16 w-16 text-pastel-green/70" /></div>
          
          <div className="code-syntax cs-1 text-pastel-purple/70">{"<div>"}</div>
          <div className="code-syntax cs-2 text-pastel-blue/70">{"function() {"}</div>
          <div className="code-syntax cs-3 text-pastel-pink/70">{"{data: []}"}</div>
          <div className="code-syntax cs-4 text-pastel-green/70">{"</main>"}</div>
          <div className="code-syntax cs-5 text-pastel-yellow/70">{"export default"}</div>
          <div className="code-syntax cs-6 text-pastel-peach/70">{"const app = ()"}</div>
          <div className="code-syntax cs-7 text-pastel-purple/70">{"import React"}</div>
          <div className="code-syntax cs-8 text-pastel-blue/70">{"async await"}</div>
        </div>

        <div className="container mx-auto px-4 relative z-30">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div 
              className="transition-all duration-500 transform-gpu mt-16 pt-16"
              style={{ 
                transform: `perspective(1000px) translateZ(${codeDepth}px) rotateX(${codeDepth}deg)`,
              }}
            >
              <div className="inline-block bg-white/80 rounded-lg p-6 shadow-lg backdrop-blur-sm">
                <Code className="h-16 w-16 text-primary animate-pulse" />
              </div>
            </div>

            <div className={`transition-all duration-700 transform ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CodeAnimation />
            </div>

            <div className={`transition-all duration-700 transform ${showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white/80 rounded-lg p-6 shadow-lg backdrop-blur-sm">
                <p className="text-2xl font-newsreader text-primary">
                  Building the future one line at a time
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 hero-buttons-animation mt-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-md px-8 py-3 text-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                <Link to="/projects">
                  Our Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-primary/20 text-primary hover:bg-primary/5 rounded-md px-8 py-3 text-lg font-medium transition-all duration-300"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {showScrollIndicator && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40 animate-bounce flex flex-col items-center">
            <span className="text-primary mb-2 text-sm font-medium">Scroll to discover</span>
            <ChevronDown className="h-6 w-6 text-primary" />
          </div>
        )}
        
        <div className="absolute inset-0 z-10 pastel-particles"></div>
      </section> */}

      <section className="py-20 bg-gradient-to-b from-pastel-purple/10 to-pastel-blue/10 relative">
        <div className="absolute -top-16 left-1/3 w-[320px] h-[150px] bg-pastel-pink rounded-full opacity-40 blur-2xl z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="font-newsreader text-3xl font-semibold mb-4 text-primary">
              What We Offer
            </h2>
            <p className="text-gray-600">
              We combine beautiful design with powerful functionality to create
              websites that not only look great but also perform exceptionally well.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <FeatureFlipCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                delay={feature.delay}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-newsreader font-semibold  text-3xl md:text-4xl text-gray-800 mb-4">About Us</h2>
          {/* <div className="w-24 h-1 bg-pink-500 mx-auto mb-8"></div> */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're a passionate team of designers and developers creating beautiful digital experiences.
          </p>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute -z-10 w-full h-full bg-pink-100 rounded-lg -top-4 -right-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Our Team" 
                className="rounded-lg shadow-lg z-10 relative"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 mb-8 leading-relaxed">
                Founded in 2025, WebStudio began with a clear mission: to offer
                a modern, user-focused approach to web design—one that blends
                creativity with professionalism. From day one, the goal has been
                to help businesses of all sizes stand out online with clean,
                effective, and beautifully built websites.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                  <Users className="text-purple-600" size={20} />
                </div>
                <h3 className="font-medium text-lg mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">Talented professionals with years of industry experience</p>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full mb-4">
                  <Info className="text-pink-600" size={20} />
                </div>
                <h3 className="font-medium text-lg mb-2">Our Mission</h3>
                <p className="text-gray-600 text-sm">Creating designs that delight and inspire your audience</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                  <Heart className="text-blue-600" size={20} />
                </div>
                <h3 className="font-medium text-lg mb-2">Passion</h3>
                <p className="text-gray-600 text-sm">We love what we do and it shows in our work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Services/>

      <ProjectSection />

      <section className="py-16 bg-pastel-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-newsreader text-3xl md:text-4xl font-semibold mb-4">
              Ready to start your project?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Let's work together to create something beautiful that represents your brand perfectly.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
