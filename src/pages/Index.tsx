
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import GraphicElement from "@/components/GraphicElement";

const Index = () => {
  return (
    <Layout fullWidth>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-gradient-to-b from-white via-pastel-blue/5 to-white">
        {/* Decorative graphic elements */}
        <div className="absolute top-20 left-10 opacity-50 hidden md:block">
          <GraphicElement type="dots" color="pink" size="lg" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-50 hidden md:block">
          <GraphicElement type="dots" color="blue" size="lg" />
        </div>
        <div className="absolute top-40 right-20 opacity-50 hidden md:block">
          <GraphicElement type="circle" color="yellow" size="md" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-50 hidden md:block">
          <GraphicElement type="square" color="green" size="md" />
        </div>
        
        {/* Subtle background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(211,228,253,0.15)_0%,rgba(255,255,255,0)_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,222,226,0.15)_0%,rgba(255,255,255,0)_50%)]"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-newsreader text-4xl md:text-6xl font-semibold mb-6 fade-in">
              We create <span className="bg-gradient-to-r from-primary via-pastel-pink to-pastel-blue bg-clip-text text-transparent">beautiful</span> digital experiences
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 slide-up" style={{ animationDelay: "0.2s" }}>
              Modern, sleek, and visually appealing websites with a touch of pastel elegance.
              Professional designs that make your brand stand out.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 slide-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                <Link to="/projects">
                  View Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-pastel-blue hover:bg-pastel-blue/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-pastel-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="font-newsreader text-3xl font-semibold mb-4">What We Offer</h2>
            <p className="text-gray-600">
              We combine beautiful design with powerful functionality to create
              websites that not only look great but also perform exceptionally well.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Beautiful Design",
                description:
                  "Visually stunning websites with attention to every detail, ensuring your brand stands out.",
                color: "bg-pastel-blue",
                delay: 0
              },
              {
                title: "Responsive Development",
                description:
                  "Websites that look perfect on any device, from desktop computers to mobile phones.",
                color: "bg-pastel-pink",
                delay: 0.1
              },
              {
                title: "User Experience",
                description:
                  "Intuitive interfaces and smooth interactions that keep your visitors engaged.",
                color: "bg-pastel-green",
                delay: 0.2
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-sm hover-lift slide-up"
                style={{ animationDelay: `${feature.delay + 0.5}s` }}
              >
                <div className={`h-12 w-12 rounded-full ${feature.color} mb-4 flex items-center justify-center`}>
                  <span className="text-primary text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="font-newsreader text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="font-newsreader text-3xl font-semibold mb-2">Our Latest Projects</h2>
              <p className="text-gray-600">Some of our recent work that we're proud of</p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pastel Bloom",
                category: "E-commerce Website",
                image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071",
                delay: 0
              },
              {
                title: "Minty Fresh",
                category: "Brand Identity",
                image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d",
                delay: 0.1
              },
              {
                title: "Soft Palette",
                category: "Mobile App",
                image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0",
                delay: 0.2
              },
            ].map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-sm hover-lift slide-up"
                style={{ animationDelay: `${project.delay + 0.5}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="font-newsreader text-xl text-white font-medium">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
