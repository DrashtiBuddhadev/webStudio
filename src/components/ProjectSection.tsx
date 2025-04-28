import React from "react";
import { Link, Code } from "lucide-react";
// Update image paths based on correct project structure
import dishsnapImg from "/images/dishsnap.png";
import moodChatImg from "/images/moodChat.png";
import image from "/images/image.png";

// Scroll reveal effect (slide + fade in)
import { useScrollReveal } from "../hooks/useScrollReveal";

const projects = [
  {
    title: "Make Media Sense",
    image: image, // Use the imported variable
    description:
      "Media Make Sense is a portfolio website for a digital marketing client, showcasing their expertise in creating impactful marketing solutions. The site highlights the client's ability to craft strategies that resonate with audiences and drive business growth. Its clean design and intuitive layout make it an effective platform for showcasing digital marketing services.",
    tech: ["React", "Recharts", "Sass"],
    live: "https://makemediasense.vercel.app/",
    // source: "#",
  },
  {
    title: "MoodChat.io-Intelligent Notes and Chat Application",
    image: moodChatImg, // Use the imported variable
    description:
      "MoodChat is a notes app similar to Google Keep, where users can create, update, delete, pin, archive, tag, and color-code their notes.Additionally, there is a chat room where users can interact with an AI that responds empathetically to their notes and messages.",
    tech: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "OpenAI",
      "python",
      "fastapi",
      "supabase",
    ],
    live: "https://pastel-web-design.vercel.app/",
    // source: "https://github.com/example/pastel-web-design",
  },
  {
    title: "DishSnap",
    image: dishsnapImg,
    description:
      "DishSnap addresses the high costs of professional photography for small cafes and cloud kitchens by generating realistic, high-quality menu images based on user-provided details like ingredients, cuisine type, and perspectives (top view, side view). Using AI, it offers an affordable, customizable solution for menu building and advertising visuals.",
    tech: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "OpenAI",
      "python",
      "Flask",
      "supabase",
    ],
    live: "https://dishsnap.vercel.app/",
    // source: "https://github.com/example/dishsnap",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF8FF] py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-14">
        <h2 className="font-newsreader text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Projects
        </h2>
        <div className="flex flex-col gap-16">
          {projects.map((p, i) => {
            const { ref, isRevealed } = useScrollReveal({
              threshold: 0.15,
              direction: i % 2 === 0 ? "left" : "right",
            });
            return (
              <div
                ref={ref}
                key={i}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 rounded-2xl shadow-sm border border-gray-100 bg-white
                  overflow-hidden transition-all w-full
                  ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                  ${
                    isRevealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }
                  duration-700 ease-cubic-bezier[.39,.575,.565,1]
                `}
                style={{
                  minHeight: "330px",
                }}
              >
                <div className="basis-[50%] w-full h-[230px] md:h-[400px] flex-shrink-0 group relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="object-cover w-full h-full rounded-2xl md:rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="basis-[50%] w-full flex flex-col justify-center gap-4 px-6 py-6 md:py-0">
                  <h3 className="font-newsreader text-2xl font-bold text-gray-900 mb-1">
                    {p.title}
                  </h3>
                  <p className="font-inter text-gray-700 text-[1.05rem] leading-relaxed mb-2">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 my-1">
                    {p.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-[#F3F0FC] text-[#7E69AB] text-xs font-medium px-3 py-1 rounded-full border border-[#ede9fe]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-2">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-inter text-sm px-4 py-1.5 rounded-full border border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition duration-300 group"
                    >
                      <Link className="w-4 h-4 transition group-hover:text-white" />{" "}
                      Live Demo
                    </a>
                    {/* <a
                        href={p.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-inter text-sm px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 transition"
                      >
                        <Code className="w-4 h-4" /> Source Code
                      </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
