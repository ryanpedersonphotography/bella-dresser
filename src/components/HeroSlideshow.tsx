import React, { useState } from 'react';
import useInterval from 'use-interval';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3",
    title: "Dress to Impress",
    subtitle: "Your Style Journey Begins Here",
    description: "Step into a world of curated fashion where European elegance meets Minnesota charm. Find your perfect look for every occasion."
  },
  {
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3",
    title: "Lakeside Luxury",
    subtitle: "Fashion That Fits Your Lifestyle",
    description: "From casual weekend wear to elegant evening attire, discover pieces that seamlessly blend sophistication with comfort."
  },
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3",
    title: "Uniquely You",
    subtitle: "Personalized Style Experience",
    description: "Let our expert stylists help you create a wardrobe that reflects your personality and enhances your confidence."
  }
];

const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useInterval(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  }, 5000);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000"></div>
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          } ${isTransitioning ? 'transform blur-sm' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic/70 to-transparent z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center z-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-body mb-2 text-highlight animate-float">
                {slide.subtitle}
              </h2>
              <h1 className="text-7xl font-heading font-bold mb-6 leading-tight">
                <span className="gradient-text">
                  {slide.title}
                </span>
              </h1>
              <p className="text-xl mb-8 text-cloud font-body">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:shadow-neon transform hover:scale-105 transition-all duration-300">
                  Shop Now
                </button>
                <button className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative px-8 py-3 bg-cloud rounded-full text-cosmic hover:text-primary transition-colors">
                    Learn More
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Decorative wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-24 text-cloud"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.44,118.92,150.61,104.34,214.34,87.9c36.58-9.4,71.64-20.56,107.05-31.46Z"></path>
        </svg>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`w-12 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-primary to-secondary w-20' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
