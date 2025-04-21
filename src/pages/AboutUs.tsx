import Layout from "@/components/Layout";
import GraphicElement from "@/components/GraphicElement";

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
