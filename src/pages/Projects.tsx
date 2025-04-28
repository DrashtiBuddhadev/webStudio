import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import makemediasenseImg from "/images/image.png";
import moodChatImg from "/images/moodChat.png";

// Project categories
const categories = ["All", "Web Design","Web Application", "Mobile App", "E-commerce","AI web-app"];

// Project data
const projects = [
  {
    id: 1,
    title: "Pastel Bloom",
    category: "E-commerce",
    description: "A modern e-commerce platform for a boutique flower shop with online ordering.",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071",
    tags: ["Web Design", "E-commerce"]
  },
  {
    id: 2,
    title: "MoodChat.io",
    image: moodChatImg, // Use the imported variable
    category: "AI web-app",
    description:
      "A pastel-inspired site with subtle animations and refined grid layout. Prioritizes clarity and user experience.",
    tags: ["React", "TypeScript", "TailwindCSS", "Vite"],

  },
  {
    id: 3,
    title: "Gentle Waves",
    category: "Website",
    description: "A portfolio website for a photographer specializing in ocean photography.",
    image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3",
    tags: ["Web Design"]
  },
  {
    id: 4,
    title: "Pastel Plates",
    category: "Mobile App",
    description: "Website and brand identity for a high-end kitchenware company.",
    image: "https://images.unsplash.com/photo-1556910096-6f5e72db6803",
    tags: ["Mobile App"]
  },
  {
    id: 2,
    title: "Make Media Sense",
    image: makemediasenseImg, // Use the imported variable
    category: "Web Application",
    description:
      "A pastel-inspired site with subtle animations and refined grid layout. Prioritizes clarity and user experience.",
    tags: ["React", "TypeScript", "TailwindCSS", "Vite"],

  },  
  
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(projects);

  const filterProjects = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(
        projects.filter((project) => project.tags.includes(category))
      );
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-pastel-pink/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-newsreader text-4xl md:text-6xl font-semibold mb-6 fade-in">
              Our <span>Projects</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 slide-up" style={{ animationDelay: "0.2s" }}>
              Explore our portfolio of carefully crafted websites, apps, and brand identities.
              Each project is a unique blend of aesthetics and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => filterProjects(category)}
                className={`${
                  activeCategory === category ? "bg-blue-100 text-blue-700 border-blue-200" : "bg-white border-gray-200"
                } rounded-full px-6 hover:bg-blue-50`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover-lift slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-newsreader text-xl font-medium">{project.title}</h3>
                    <span className="text-xs bg-pastel-blue/30 text-primary px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pastel-green/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-newsreader text-3xl font-semibold mb-4">
              Ready to start your project?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Let's create something amazing together. Contact us to discuss your ideas.
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

export default Projects;