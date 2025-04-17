import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import GraphicElement from "@/components/GraphicElement";
import { ProjectsSection } from "@/components/ProjectsSection";

const Index = () => {
  return (
    <Layout fullWidth>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-gradient-to-b from-white via-pastel-blue/5 to-white">
        {/* Animated background layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(ellipse_at_top_left,rgba(211,228,253,0.1)_0%,transparent_50%)] animate-[pulse_15s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 right-0 left-0 h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,222,226,0.1)_0%,transparent_50%)] animate-[pulse_18s_ease-in-out_infinite_1s]"></div>
          
          {/* Floating blob animations */}
          <div className="absolute top-[15%] left-[10%] w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] rounded-full bg-pastel-purple/[0.03] blur-3xl animate-[floating_20s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-[20%] right-[15%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] rounded-full bg-pastel-blue/[0.03] blur-3xl animate-[floating_25s_ease-in-out_infinite_2s]"></div>
          <div className="absolute top-[40%] right-[10%] w-[15vw] h-[15vw] max-w-[250px] max-h-[250px] rounded-full bg-pastel-pink/[0.03] blur-3xl animate-[floating_18s_ease-in-out_infinite_1s]"></div>
          
          {/* Additional geometric backgrounds */}
          <div className="absolute top-[30%] left-[20%] w-32 h-32 bg-pastel-yellow/[0.02] rounded-full mix-blend-multiply filter blur-xl animate-[floating_22s_ease-in-out_infinite_0.5s]"></div>
          <div className="absolute bottom-[10%] left-[30%] w-40 h-40 bg-pastel-green/[0.02] rounded-full mix-blend-multiply filter blur-xl animate-[floating_26s_ease-in-out_infinite_1.2s]"></div>
          <div className="absolute top-[25%] right-[25%] w-36 h-36 bg-pastel-peach/[0.02] rounded-full mix-blend-multiply filter blur-xl animate-[floating_23s_ease-in-out_infinite_0.7s]"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMS41IiBjeT0iMS41IiByPSIxLjUiLz48Y2lyY2xlIGN4PSIzMS41IiBjeT0iMS41IiByPSIxLjUiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iMTYuNSIgcj0iMS41Ii8+PGNpcmNsZSBjeD0iNDYuNSIgY3k9IjE2LjUiIHI9IjEuNSIvPjwvZz48L2c+PC9zdmc+')] animate-[pulse_10s_ease-in-out_infinite_alternate]"></div>
        </div>

        {/* Decorative graphic elements */}
        <div className="absolute top-20 left-10 opacity-40 hidden md:block animate-[floating_6s_ease-in-out_infinite]">
          <GraphicElement type="dots" color="pink" size="lg" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-40 hidden md:block animate-[floating_8s_ease-in-out_infinite_0.5s]">
          <GraphicElement type="dots" color="blue" size="lg" />
        </div>
        <div className="absolute top-40 right-20 opacity-40 hidden md:block animate-[floating_7s_ease-in-out_infinite_1s]">
          <GraphicElement type="circle" color="yellow" size="md" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-40 hidden md:block animate-[floating_9s_ease-in-out_infinite_1.5s]">
          <GraphicElement type="square" color="green" size="md" />
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-60 left-1/2 opacity-30 hidden md:block animate-[floating_11s_ease-in-out_infinite_0.8s]">
          <GraphicElement type="triangle" color="peach" size="sm" />
        </div>
        <div className="absolute bottom-60 right-1/3 opacity-30 hidden md:block animate-[floating_10s_ease-in-out_infinite_1.3s]">
          <GraphicElement type="circle" color="purple" size="sm" />
        </div>
        <div className="absolute top-[70%] left-1/4 opacity-30 hidden md:block animate-[floating_12s_ease-in-out_infinite_0.2s]">
          <GraphicElement type="square" color="pink" size="sm" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-newsreader text-4xl md:text-6xl font-semibold mb-6 fade-in">
              We create <span className="bg-gradient-to-r from-primary via-pastel-pink to-pastel-blue bg-clip-text text-transparent">beautiful</span> digital experiences
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 slide-up" style={{ animationDelay: "0.2s" }}>
              Modern, sleek, and visually appealing websites with a touch of pastel elegance.
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

      {/* Projects Preview - Replace with new ProjectsSection */}
      <ProjectsSection />

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
