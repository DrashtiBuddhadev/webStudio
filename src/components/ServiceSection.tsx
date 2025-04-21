import { Palette, Code } from "lucide-react";
import ScrollReveal from "../pages/ScrollReveal";

// Use your uploaded mask image
const maskedImg = "/lovable-uploads/514d564c-47ed-4f6b-a180-9f4db47eef95.png";

const services = [
  {
    icon: <Palette className="text-primary" size={28} strokeWidth={1.4} />,
    title: "Web Design",
    description: "Minimal, clean and custom interfaces that quietly reflect your unique brand personality.",
  },
  {
    icon: <Code className="text-primary" size={28} strokeWidth={1.4} />,
    title: "Development",
    description: "Modern, maintainable codebases for apps & websites focused on speed, smoothness and reliability.",
  },
];

const Services = () => (
  <section
    id="services"
    className="relative w-full py-28 bg-gradient-to-br from-[#f8faff] to-[#ededf8]"
  >
    <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 items-center">
      {/* Left: Title/Desc */}
      <div>
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-newsreader font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
            We design & build quietly brilliant web experiences.
          </h2>
          <p className="text-lg text-gray-500 mb-3 max-w-prose">
            Focused digital solutions for teams who care about clarity and aesthetic restraint.
          </p>
        </ScrollReveal>
      </div>
      {/* Right: Image & Cards */}
      <div className="relative flex items-start justify-center">
        {/* Artistic Image mask, visually in the background */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] md:w-[370px] lg:w-[420px] -z-10 opacity-70 pointer-events-none select-none">
          <img
            src={maskedImg}
            alt="Team working"
            className="w-full object-cover"
            style={{
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'
            }}
            draggable={false}
          />
        </div>
        {/* Service cards */}
        <div className="flex flex-col gap-7 w-full max-w-md">
          {services.map((srv) => (
            <ScrollReveal key={srv.title}>
              <div className="flex items-start gap-4 px-6 py-7 bg-white/90 rounded-2xl border border-gray-100 shadow-[0_6px_18px_0_rgba(20,20,50,0.04)] hover:shadow-[0_12px_36px_0_rgba(20,20,50,0.08)] transition-all group">
                <div className="min-w-12 min-h-12 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-primary/10 transition">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="font-newsreader text-xl font-semibold mb-1 text-gray-900">{srv.title}</h3>
                  <p className="text-gray-500 text-base leading-snug">{srv.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;

