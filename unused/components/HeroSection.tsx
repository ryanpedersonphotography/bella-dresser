import React, { useEffect, useRef, useState } from 'react';
import ButtonComponent from './ButtonComponent';
import Navbar from './Navbar';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundImage
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        
        // Update navbar state based on scroll position
        setIsScrolled(scrolled > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic/90 via-cosmic/70 to-cosmic/40"></div>
      </div>

      {/* Integrated Navbar - positioned absolutely within hero */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'sticky-nav' : 'hero-nav'}`}>
        <Navbar variant={isScrolled ? "solid" : "transparent"} />
      </div>

      {/* Decorative elements */}
      <div className="shape-container">
        <div className="shape-circle shape-circle-xl -top-1/4 -right-1/4 bg-primary/20 animate-float-slow"></div>
        <div className="shape-circle shape-circle-lg -bottom-1/4 -left-1/4 bg-accent/20 animate-float-slow animation-delay-2000"></div>
      </div>

      {/* Content container */}
      <div className="relative h-full content-container flex items-center z-20 pt-24">
        <div className="max-w-2xl">
          {/* Animated text elements */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-body mb-2 text-highlight animate-float">
              {subtitle}
            </h2>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
            <h1 className="text-9xl font-heading font-extrabold leading-none mb-6 tracking-tightest text-shadow-dimensional">
              <span className="gradient-text">
                {title}
              </span>
            </h1>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
            <p className="text-xl mb-8 text-cloud font-body max-w-xl">
              {description}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: '1100ms' }}>
            <a href={ctaLink}>
              <ButtonComponent size="lg">
                {ctaText}
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

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 animate-fade-in animate-bounce" style={{ animationDelay: '1500ms' }}>
        <a href="#content" aria-label="Scroll down">
          <svg className="w-10 h-10 text-cloud" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-36 text-cloud"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.44,118.92,150.61,104.34,214.34,87.9c36.58-9.4,71.64-20.56,107.05-31.46Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;