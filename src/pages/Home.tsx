import React from 'react';
import HeroSlideshow from '../components/HeroSlideshow';
import { Star, Sparkles, Heart } from 'lucide-react';

const Home: React.FC = () => {
  console.log("Home component rendering");
  
  // Create test element to check gradient-text class
  React.useEffect(() => {
    const testElement = document.createElement('span');
    testElement.className = 'gradient-text';
    testElement.style.position = 'absolute';
    testElement.style.visibility = 'hidden';
    testElement.textContent = 'Test';
    document.body.appendChild(testElement);
    
    const styles = window.getComputedStyle(testElement);
    console.log("Gradient text class check:", {
      backgroundImage: styles.backgroundImage,
      backgroundClip: styles.backgroundClip,
      textFillColor: styles.webkitTextFillColor || styles.color,
      elementCreated: !!testElement
    });
    
    // Clean up
    document.body.removeChild(testElement);
  }, []);
  
  return (
    <div className="relative">
      {/* Hero Section with Decorative Elements */}
      <div className="relative">
        {/* Top-right decorative orb */}
        <div className="absolute -top-20 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse-slow"></div>
        <HeroSlideshow />
      </div>

      {/* Featured Collection */}
      <section className="py-20 relative overflow-hidden">
        {/* Background texture and decorative elements */}
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse-slow animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            <span className="gradient-text">Latest Arrivals</span>
          </h2>
          <p className="text-cosmic/70 text-center max-w-2xl mx-auto mb-12 font-body">
            Discover our newest collection of carefully curated pieces that blend European elegance with Minnesota charm.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3"
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img src={image} alt="Fashion item" className="w-full h-96 object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">Summer Collection</p>
                    <p className="text-sm">Shop Now →</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* European Elegance Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background texture and decorative elements */}
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        <div className="absolute -top-32 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-4">
                <span className="gradient-text">European Elegance Meets Minnesota Charm</span>
              </h2>
              <p className="text-cosmic/70 mb-8 font-body">
                Experience our carefully curated collection of unique pieces that blend sophisticated European style with comfortable 
                lakeside living. Each item is selected to make you feel confident and beautiful.
              </p>
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:shadow-neon transform hover:scale-105 transition-all duration-300">
                View Collections
              </button>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-50 blur-xl group-hover:opacity-75 transition duration-500"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3"
                  alt="Boutique interior"
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Town Style Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background texture and decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-highlight rounded-2xl opacity-50 blur-xl group-hover:opacity-75 transition duration-500"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3"
                  alt="Boutique collection"
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-heading font-bold mb-4">
                <span className="gradient-text">Small Town Boutique, Big City Style</span>
              </h2>
              <p className="text-cosmic/70 mb-8 font-body">
                Discover our handpicked selection of contemporary fashion that brings the latest trends to Pequot Lakes. 
                From casual lakeside wear to elegant evening attire, we offer styles that perfectly blend sophistication with comfort.
              </p>
              <button className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative px-8 py-3 bg-cloud rounded-full text-cosmic hover:text-primary transition-colors">
                  Explore Store
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Boutique Experience Section */}
      <section className="relative py-24 mt-20 overflow-hidden">
        {/* Background texture and decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        <div className="absolute -top-32 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              <span className="gradient-text">Our Boutique Experience</span>
            </h2>
            <p className="text-cosmic/70 font-body">
              Step into a world where fashion meets personal attention. Our boutique offers a curated shopping experience 
              with personalized styling advice and unique pieces you won't find anywhere else.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Personal Styling",
                description: "One-on-one attention to help you find the perfect pieces for your style and occasion."
              },
              {
                icon: Star,
                title: "Unique Selection",
                description: "Carefully curated collection featuring both European and local designers."
              },
              {
                icon: Sparkles,
                title: "Lakeside Fashion",
                description: "Styles that transition seamlessly from beach to evening events."
              }
            ].map((item, index) => (
              <div key={index} className="relative p-8 rounded-xl bg-gradient-to-br from-cloud to-lavender hover-glow">
                <div className="absolute inset-0 bg-noise opacity-5"></div>
                <div className="relative">
                  <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-r from-primary to-accent p-2 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
                  <p className="text-cosmic/70 font-body">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 mt-20 overflow-hidden">
        {/* Background texture and decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic to-cosmic/95"></div>
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse-slow animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-4">
              <span className="gradient-text">Join Our Fashion Family</span>
            </h2>
            <p className="text-cloud/80 mb-8 font-body">
              Subscribe to receive updates on new arrivals, special promotions, and styling tips.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-cloud/10 text-cloud placeholder:text-cloud/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:shadow-neon transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
