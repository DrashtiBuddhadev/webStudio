
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management and streamlined checkout process.",
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity tool for teams to manage projects with customizable workflows and analytics.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    tags: ["TypeScript", "React", "Express", "PostgreSQL"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio site built with modern web technologies showcasing projects and skills.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
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
        
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div 
                className={`overflow-hidden rounded-xl border border-border ${
                  index % 2 === 1 ? "animate-fade-in-right" : "animate-fade-in-left"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto aspect-video object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <div 
                className={`space-y-4 ${
                  index % 2 === 1 ? "animate-fade-in-left" : "animate-fade-in-right"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  {project.demoLink && (
                    <Link 
                      to={project.demoLink}
                      className="flex items-center text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link 
                      to={project.githubLink}
                      className="flex items-center text-accent hover:text-accent/80 transition-colors"
                    >
                      <Github className="mr-1 h-4 w-4" /> Source Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
