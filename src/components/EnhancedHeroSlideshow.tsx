import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ButtonComponent from './ButtonComponent';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Define the slide data with improved images and creative copy
const slides = [
  {
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800",
    title: "Dress to Impress",
    subtitle: "Your Style Journey Begins Here",
    description: "Step into a world of curated fashion where European elegance meets Minnesota charm. Our boutique collection features handpicked pieces that celebrate individuality and timeless style. From lakeside casual to evening sophistication, find your perfect look for every occasion and season.",
    ctaText: "Shop Now",
    ctaLink: "/shop"
  },
  {
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800",
    title: "Elevate Your Essence",
    subtitle: "Spring Collection 2025",
    description: "Discover pieces that speak to your soul and elevate your personal style narrative. Our curated collection blends European sophistication with Minnesota's free-spirited charm.",
    ctaText: "Explore Collection",
    ctaLink: "/collection/spring"
  },
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800",
    title: "Lakeside Luxe",
    subtitle: "Summer Essentials",
    description: "From sunrise kayaking to sunset soirées, our versatile pieces transition effortlessly through your day. Embrace the season with fabrics that breathe and silhouettes that celebrate.",
    ctaText: "Shop Summer",
    ctaLink: "/collection/summer"
  },
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800",
    title: "Uniquely You",
    subtitle: "Personalized Style Journey",
    description: "Your wardrobe should tell your story. Our stylists craft personalized experiences that honor your individuality while introducing you to unexpected pieces that become signature favorites.",
    ctaText: "Book Styling",
    ctaLink: "/services/styling"
  }
];

const EnhancedHeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 8000); // Slowed down from 6000ms to 8000ms
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation functions
  const goToNextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="hero-slider">
      {/* Integrated Navbar - positioned absolutely within hero */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'sticky-nav' : 'hero-nav'}`}>
        <Navbar variant={isScrolled ? "solid" : "transparent"} />
      </div>

      {/* Decorative elements */}
      <div className="slide-decorative-circle slide-decorative-circle-1"></div>
      <div className="slide-decorative-circle slide-decorative-circle-2"></div>
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide 
              ? 'opacity-100 scale-100 slide-active' 
              : 'opacity-0 scale-105'
          } ${isTransitioning ? 'transform blur-sm' : ''}`}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic/80 via-cosmic/60 to-transparent z-10"></div>
          
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          
          {/* Content container */}
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center z-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-body mb-2 text-highlight slide-content slide-content-subtitle">
                {slide.subtitle}
              </h2>
              <h1 className="text-8xl font-heading font-bold mb-6 leading-tight slide-content slide-content-title">
                <span className="gradient-text">
                  {slide.title}
                </span>
              </h1>
              <p className="text-xl mb-8 text-cloud font-body slide-content slide-content-description">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4 slide-content slide-content-buttons">
                <a href={slide.ctaLink}>
                  <ButtonComponent size="lg">
                    {slide.ctaText}
                  </ButtonComponent>
                </a>
                <a href="#learn-more">
                  <ButtonComponent variant="secondary" size="lg">
                    Learn More
                  </ButtonComponent>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Custom pink arrow navigation buttons - positioned at bottom */}
      <button
        className="slider-arrow-simple slider-arrow-left"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <ArrowLeft size={20} />
      </button>
      
      <button
        className="slider-arrow-simple slider-arrow-right"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ArrowRight size={20} />
      </button>
      
      {/* Slide indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      {/* Decorative wave divider - subtle version that works with the pink wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 text-cloud opacity-70"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.44,118.92,150.61,104.34,214.34,87.9c36.58-9.4,71.64-20.56,107.05-31.46Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default EnhancedHeroSlideshow;