import React from 'react';
import { Star, Heart, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-radial opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-screen bg-gradient-conic opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="mb-6">
              <h2 className="text-xl font-body text-accent mb-2 animate-float">Our Story</h2>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                <span className="gradient-text">Meet Aneta</span>
              </h1>
            </div>
            <p className="text-lg text-cosmic/80 mb-8 font-body">
              Born and raised in Poland, Aneta brought her European sense of style and fashion expertise to the heart of Minnesota. 
              Her journey from Warsaw to Pequot Lakes is a story of passion, determination, and the pursuit of making women feel beautiful.
            </p>
            <p className="text-lg text-cosmic/80 mb-8 font-body">
              With over 15 years of experience in fashion retail, Aneta carefully curates each piece in the store, 
              bringing together the best of European elegance and Minnesota charm.
            </p>
            <blockquote className="relative">
              <div className="absolute -left-4 -top-4 text-primary/20">
                <Sparkles size={32} />
              </div>
              <p className="relative z-10 text-xl font-accent italic text-cosmic/90 pl-8 border-l-2 border-primary">
                "Fashion is not just about clothes, it's about feeling confident and beautiful in your own skin."
              </p>
              <footer className="mt-4 text-sm text-cosmic/60 pl-8">- Aneta, Founder</footer>
            </blockquote>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-pink-500/30 rounded-2xl opacity-30 blur-md group-hover:opacity-40 transition duration-500"></div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              {/* Owner's image with boutique background */}
              <div className="absolute inset-0 w-full h-full">
                {/* Boutique background */}
                <div className="absolute inset-0 bg-gradient-to-b from-lavender/30 to-cloud/50"></div>
                <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay"></div>
                
                {/* Soft vignette overlay */}
                <div className="absolute inset-0 bg-radial-gradient opacity-60"></div>
                
                {/* Stylized photo of Aneta */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-4/5 h-4/5 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
                    <div className="absolute inset-0 bg-primary/5"></div>
                    <img
                      src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3"
                      alt="Aneta, Founder of Bella Dresser"
                      className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-105 filter saturate-110 brightness-105 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent mix-blend-overlay"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-6 right-6">
                  <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                    <p className="text-xs font-medium text-cosmic">Founder & Fashion Curator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              <span className="gradient-text">Our Values</span>
            </h2>
            <p className="text-lg text-cosmic/80 max-w-2xl mx-auto">
              At Bella Dresser, we believe in creating an experience that goes beyond shopping. 
              Our values reflect our commitment to style, quality, and personal connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Quality First",
                description: "We carefully select each piece for its quality, ensuring our collection meets the highest standards."
              },
              {
                icon: Heart,
                title: "Personal Touch",
                description: "Every customer receives personalized attention and styling advice tailored to their unique style."
              },
              {
                icon: Sparkles,
                title: "European Flair",
                description: "We bring the latest European fashion trends to Minnesota, creating a unique shopping experience."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="relative group p-8 rounded-2xl bg-gradient-to-br from-cloud to-lavender hover-glow"
              >
                <div className="absolute inset-0 bg-noise opacity-5"></div>
                <div className="relative">
                  <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-r from-primary to-accent p-2 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4">{value.title}</h3>
                  <p className="text-cosmic/70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
