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
    title: "Digital Marketing platform",
    description: "A modern e-commerce solution with real-time inventory management and streamlined checkout process.",
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=1000&auto=format&fit=crop",
    tags: ["React","TypeScript", "Node.js"],
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
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center transition-colors"
                    >
                      <span className="inline-block p-2 rounded-full mr-1">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path d="M14 3h7v7" />
                          <path d="M5 19l16-16" />
                        </svg>
                      </span>
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center transition-colors"
                    >
                      <span className="inline-block p-2 rounded-full mr-1">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483v-1.693c-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.341 1.089 2.91.834.091-.647.35-1.089.636-1.34-2.221-.253-4.555-1.111-4.555-4.945 0-1.091.39-1.984 1.03-2.684-.104-.253-.447-1.273.098-2.654 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 8.844a9.57 9.57 0 0 1 2.506.338c1.909-1.296 2.748-1.026 2.748-1.026.546 1.381.203 2.401.1 2.654.64.7 1.028 1.593 1.028 2.684 0 3.842-2.337 4.688-4.565 4.936.359.309.679.919.679 1.852v2.747c0 .268.181.578.688.48C19.134 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
                        </svg>
                      </span>
                      Source Code
                    </a>
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