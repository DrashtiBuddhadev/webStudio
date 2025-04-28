import Layout from "@/components/Layout";
import GraphicElement from "@/components/GraphicElement";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1 }
  })
};

const AboutUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-pastel-blue/10 relative overflow-hidden">
        {/* Decorative graphic elements */}
        <div className="absolute top-24 left-10 opacity-30 hidden md:block">
          <GraphicElement type="circle" color="pink" size="lg" />
        </div>
        <div className="absolute bottom-12 right-16 opacity-30 hidden md:block">
          <GraphicElement type="square" color="purple" size="md" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-newsreader text-4xl md:text-6xl font-semibold mb-6 fade-in">
              About <span>Us</span>
            </h1>
            <p
              className="text-gray-600 text-lg mb-8 slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              We're a passionate team of designers and developers creating
              modern, sleek websites with a touch of pastel elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-newsreader text-3xl font-semibold mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2025, WebStudio began with a clear mission: to offer
                a modern, user-focused approach to web design—one that blends
                creativity with professionalism. From day one, the goal has been
                to help businesses of all sizes stand out online with clean,
                effective, and beautifully built websites.
              </p>
              <p className="text-gray-600 mb-4">
               Every line of code and design
                decision is made with the user in mind, ensuring a seamless
                experience for both clients and their audiences.
              </p>
              <p className="text-gray-600">
                We are incredibly passionate about what we do and excited about
                what’s ahead. Whether you're launching a new business,
                refreshing an old website, or building something entirely
                unique, WebStudio is here to help you create something truly
                impactful. This is just the beginning—and we areeager to keep
                leveling up with every project I take on.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=600&h=400"
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-pastel-pink rounded-lg"></div>
              <div className="absolute -top-6 -right-6 h-24 w-24 bg-pastel-blue rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-pastel-green/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-newsreader text-3xl font-semibold mb-4">
              Our Values
            </h2>
            <p className="text-gray-600">
              These core principles guide everything we do and every decision we
              make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We never compromise on quality. Every pixel, every line of code, and every interaction is crafted with care.",
                color: "bg-pastel-blue",
                delay: 0,
              },
              {
                title: "Innovation",
                description:
                  "We stay at the forefront of design and technology trends, constantly learning and evolving our craft.",
                color: "bg-pastel-pink",
                delay: 0.1,
              },
              {
                title: "Integrity",
                description:
                  "We believe in transparent communication, honest pricing, and delivering on our promises.",
                color: "bg-pastel-yellow",
                delay: 0.2,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover-lift slide-up text-center"
                style={{ animationDelay: `${value.delay + 0.5}s` }}
              >
                <div
                  className={`h-16 w-16 rounded-full ${value.color} mb-4 mx-auto flex items-center justify-center`}
                >
                  <span className="text-primary text-xl font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-newsreader text-xl font-medium mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Process Section - Enhanced */}
<section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent"></div>
    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
    <svg className="absolute right-0 top-1/4 text-blue-50" width="400" height="400" viewBox="0 0 200 200">
      <path fill="currentColor" d="M39,-65.1C49.9,-59.8,57.9,-47.4,62.9,-34.4C67.9,-21.5,69.9,-7.9,68.1,5.1C66.2,18.2,60.5,30.8,51.9,40.2C43.4,49.5,32,55.6,19.8,61.2C7.6,66.8,-5.5,72,-19.2,71.8C-32.9,71.7,-47.2,66.4,-57,56.5C-66.9,46.6,-72.2,32.1,-74.8,17.1C-77.4,2.2,-77.2,-13.1,-71.3,-26C-65.4,-38.8,-53.8,-49.3,-41,-54.2C-28.3,-59.2,-14.1,-58.6,0.5,-59.4C15.2,-60.2,30.3,-62.3,39,-65.1Z" transform="translate(100 100)" />
    </svg>
    <svg className="absolute left-0 bottom-1/4 text-green-50" width="400" height="400" viewBox="0 0 200 200">
      <path fill="currentColor" d="M48.2,-76.1C63.3,-69.2,76.9,-59,83.2,-45.3C89.6,-31.7,88.6,-14.5,85.1,1.1C81.5,16.7,75.3,30.8,67.1,43.9C58.8,57.1,48.4,69.3,35.5,76C22.5,82.8,6.9,84,-7.9,81.3C-22.8,78.5,-36.9,71.7,-46.5,61.4C-56.1,51.1,-61.2,37.3,-65.9,23.6C-70.7,9.9,-75.2,-3.7,-73.4,-16.5C-71.6,-29.4,-63.6,-41.5,-52.6,-48.7C-41.5,-55.9,-27.5,-58.2,-14.3,-65.9C-1.1,-73.7,11.3,-87,26.6,-88.9C41.9,-90.8,60.2,-81.3,76.2,-67.9" transform="translate(100 100)" />
    </svg>
  </div>
  
  <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <SectionHeading 
        title="Our Process" 
        subtitle="How we approach each project to ensure success"
        centered
      />
    </motion.div> */}
    <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-newsreader text-3xl font-semibold mb-4">
              Our Process
            </h2>
            <p className="text-gray-600">
              We approach each project with a structured process to ensure success.
            </p>
          </div>
    
    <div className="relative mt-16">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-purple-500 hidden md:block"></div>
      
      {/* Process steps */}
      <div className="space-y-24 md:space-y-0">
        {[
          {
            step: "01",
            title: "Discovery",
            description: "We begin by understanding your business, goals, target audience, and project requirements through in-depth consultations and research.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )
          },
          {
            step: "02",
            title: "Planning",
            description: "We create a detailed project plan, including timeline, deliverables, and milestones to ensure a smooth development process and clear expectations.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            )
          },
          {
            step: "03",
            title: "Design & Development",
            description: "Our team creates the design and builds the functionality based on approved concepts, ensuring quality and attention to detail at every step.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            )
          },
          {
            step: "04",
            title: "Launch & Support",
            description: "We deploy your project with thorough testing and provide ongoing support and maintenance to ensure continued success and optimization.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            )
          }
        ].map((step, index) => (
          <motion.div 
            key={index}
            custom={index * 0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className={`relative flex ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            } items-center md:items-start flex-col md:flex-row md:w-1/2 ${
              index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'
            } mb-16 md:mb-32`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 md:left-auto md:right-0 top-0 transform -translate-x-1/2 md:translate-x-1/2 md:translate-y-16 w-6 h-6 rounded-full bg-white border-4 border-blue-500 z-10 hidden md:block"></div>
            
            {/* Content */}
            <div className={`bg-white rounded-xl p-8 shadow-xl w-full md:w-[calc(100%-32px)] ${
              index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
            }`}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-0 md:mb-4">
                    {step.icon}
                  </div>
                </div>
                <div className="ml-6">
                  <span className="block text-[10px] font-bold tracking-widest text-blue-500 uppercase mb-1">Step {step.step}</span>
                  <h3 className="text-xl font-newsreader font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  </div>
</section>
      {/* Team Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-newsreader text-3xl font-semibold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              The creative minds behind our beautiful designs and powerful websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Emily Chen",
                role: "Founder & Creative Director",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                delay: 0
              },
              {
                name: "David Kim",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
                delay: 0.1
              },
              {
                name: "Sarah Johnson",
                role: "UI/UX Designer",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
                delay: 0.2
              },
              {
                name: "Michael Rodriguez",
                role: "Project Manager",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                delay: 0.3
              },
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover-lift slide-up"
                style={{ animationDelay: `${member.delay + 0.5}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-newsreader text-lg font-medium">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default AboutUs;
