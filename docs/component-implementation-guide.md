# Component Implementation Guide

This guide provides specific implementation details for enhancing the Bella Dresser UI components as part of the design upgrade. Each component includes code examples and styling details.

## Button Components

### Primary Button Enhancement

```jsx
// Enhanced Primary Button Component
const PrimaryButton = ({ children, onClick, size = "md" }) => {
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`
        ${sizes[size]} 
        font-heading font-semibold
        bg-gradient-to-r from-primary to-secondary
        text-white rounded-full
        transform transition-all duration-300
        hover:scale-[1.08] hover:-rotate-1
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        shadow-[0_4px_20px_rgba(255,0,255,0.3)]
        hover:shadow-[0_8px_25px_rgba(255,0,255,0.5)]
      `}
    >
      {children}
    </button>
  );
};
```

### Secondary Button Enhancement

```jsx
// Enhanced Secondary Button Component
const SecondaryButton = ({ children, onClick, size = "md" }) => {
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`
        ${sizes[size]} 
        relative group overflow-hidden
        font-heading font-semibold
        rounded-full
        transform transition-all duration-300
        hover:scale-[1.05] hover:rotate-1
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
      `}
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
      
      {/* Button content */}
      <div className="relative px-8 py-3 bg-cloud rounded-full text-cosmic hover:text-primary transition-colors">
        {children}
      </div>
    </button>
  );
};
```

### CSS-Only Button Implementation

```css
/* Add to src/index.css */

.btn-primary {
  padding: 1rem 2.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 9999px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  color: white;
  letter-spacing: 0.02em;
  position: relative;
  transition: all 0.4s var(--ease-bounce);
  box-shadow: 0 4px 20px rgba(255, 0, 255, 0.3);
}

.btn-primary:hover {
  transform: scale(1.08) rotate(-1deg);
  box-shadow: 0 8px 25px rgba(255, 0, 255, 0.5);
}

.btn-secondary {
  position: relative;
  padding: 1rem 2.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 9999px;
  background: var(--color-cloud);
  color: var(--color-cosmic);
  letter-spacing: 0.02em;
  transition: all 0.4s var(--ease-bounce);
  border: 2px solid transparent;
  background-clip: padding-box;
}

.btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -2px;
  border-radius: inherit;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
}

.btn-secondary:hover {
  color: var(--color-primary);
  transform: scale(1.05) rotate(1deg);
}
```

## Card Components

### Product Card Enhancement

```jsx
// Enhanced Product Card Component
const ProductCard = ({ image, title, price, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.02]">
      {/* Top accent border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-highlight z-10"></div>
      
      {/* Card content */}
      <div className="bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] group-hover:shadow-[0_15px_35px_rgba(91,62,150,0.2),0_0_0_1px_rgba(91,62,150,0.09)]">
        {/* Image container with overlay */}
        <div className="relative mb-5 overflow-hidden rounded-md aspect-square">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cosmic/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Category tag */}
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-lavender/30 text-secondary rounded-full">
            {category}
          </span>
        </div>
        
        {/* Product info */}
        <h3 className="font-heading text-xl mb-1 transition-colors duration-300 group-hover:text-primary">{title}</h3>
        <p className="font-body text-2xl font-bold text-cosmic">${price}</p>
        
        {/* Hidden quick-shop button that appears on hover */}
        <div className="mt-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium">
            Quick Shop
          </button>
        </div>
      </div>
    </div>
  );
};
```

### Content Card Enhancement

```jsx
// Enhanced Content Card Component
const ContentCard = ({ title, description, image, link }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 group">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 bg-noise"></div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
      
      {/* Floating decorative blob */}
      <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-primary/20 mix-blend-multiply filter blur-3xl animate-float-slow"></div>
      
      {/* Card content */}
      <div className="relative p-8">
        <img 
          src={image} 
          alt={title}
          className="aspect-video w-full object-cover rounded-md mb-6 shadow-md"
        />
        <h3 className="font-heading text-2xl mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="font-body text-gray-600 mb-6">{description}</p>
        <a 
          href={link} 
          className="inline-flex items-center font-medium text-primary transition-all duration-300 hover:translate-x-1"
        >
          Learn More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
      
      {/* Bottom decorative accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};
```

### CSS-Only Card Implementation

```css
/* Add to src/index.css */

.card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background-color: white;
  transition: all 0.5s;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(to right, var(--color-primary), var(--color-accent), var(--color-highlight));
  z-index: 10;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 15px 35px rgba(91, 62, 150, 0.2), 0 0 0 1px rgba(91, 62, 150, 0.09);
}

.card-content {
  padding: 1.5rem;
}

.card-image {
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  aspect-ratio: 1 / 1;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s;
}

.card:hover .card-image img {
  transform: scale(1.1);
}

.card-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

.card:hover .card-title {
  color: var(--color-primary);
}
```

## Section Layout Components

### Hero Section Enhancement

```jsx
// Enhanced Hero Section Component
const EnhancedHeroSection = ({ title, subtitle, description, image, ctaText, ctaLink }) => {
  return (
    <section className="relative h-[100vh] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic/80 to-cosmic/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
            
      {/* Content container */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center z-20">
        <div className="max-w-2xl">
          {/* Animated text elements */}
          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-body mb-2 text-highlight animate-float">
              {subtitle}
            </h2>
          </div>
          
          <div className="fade-in" style={{ animationDelay: "0.5s" }}>
            <h1 className="text-9xl font-heading font-extrabold leading-none mb-6 tracking-tightest text-shadow-dimensional">
              <span className="gradient-text">
                {title}
              </span>
            </h1>
          </div>
          
          <div className="fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="text-xl mb-8 text-cloud font-body max-w-xl">
              {description}
            </p>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-wrap gap-6 fade-in" style={{ animationDelay: "1.1s" }}>
            <a href={ctaLink} className="btn-primary">
              {ctaText}
            </a>
            <a href="#learn-more" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-36 text-cloud"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.44,118.92,150.61,104.34,214.34,87.9c36.58-9.4,71.64-20.56,107.05-31.46Z"></path>
        </svg>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 fade-in animate-bounce" style={{ animationDelay: "1.5s" }}>
        <a href="#content" aria-label="Scroll down">
          <svg className="w-10 h-10 text-cloud" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};
```

### Featured Section with Asymmetrical Layout

```jsx
// Enhanced Featured Section with Asymmetrical Layout
const AsymmetricalFeaturedSection = ({ title, description, image, features }) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/20 mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-primary/15 mix-blend-multiply filter blur-3xl"></div>
      
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 bg-noise"></div>
      
      {/* Content container with asymmetrical layout */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content area - takes up 7 of 12 columns */}
          <div className="lg:col-span-7 lg:pr-10">
            <h2 className="text-7xl font-heading font-bold tracking-tight leading-tight mb-6">
              <span className="gradient-text">{title}</span>
            </h2>
            
            <p className="text-xl mb-10 max-w-2xl">
              {description}
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
                    {/* Feature icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-heading font-semibold mb-2">{feature.title}</h3>
                    <p className="text-plum">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right image area - takes up 5 of 12 columns */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative shape behind image */}
              <div className="absolute -top-10 -left-10 right-10 bottom-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl -z-10"></div>
              
              {/* Image with bordered frame */}
              <div className="relative overflow-hidden rounded-lg border-[3px] border-cloud shadow-multi-layer">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-auto"
                />
                
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-highlight"></div>
              </div>
              
              {/* Floating decorative element */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-highlight to-tangerine p-6 rounded-full shadow-lg">
                <svg className="w-10 h-10 text-cosmic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

## Interactive Elements

### Animated Section Divider

```jsx
// Animated Diagonal Divider Component
const DiagonalDivider = ({ fromColor = "primary", toColor = "accent" }) => {
  return (
    <div className="relative h-36 overflow-hidden">
      <div 
        className={`absolute -inset-x-10 h-40 transform -rotate-3 -translate-y-1/2 bg-gradient-to-r from-${fromColor} to-${toColor}`}
      ></div>
    </div>
  );
};
```

### Scroll-Triggered Reveal Component

```jsx
// Scroll-Triggered Reveal Component
import { useState, useEffect, useRef } from 'react';

const RevealOnScroll = ({ children, threshold = 0.1, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  
  return (
    <div 
      ref={ref} 
      className={`
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
```

### Enhanced Navbar with Animation

```jsx
// Enhanced Navbar Component with Animation
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${isScrolled ? 'py-3 bg-cloud/95 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="logo">
          Bella Dresser
        </a>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Collections', 'Lookbook', 'Contact'].map(item => (
            <a 
              key={item} 
              href={`/${item.toLowerCase()}`}
              className="relative font-medium text-cosmic hover:text-primary transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
        
        {/* CTA Button */}
        <a 
          href="/shop" 
          className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:shadow-neon transform hover:scale-105 transition-all duration-300"
        >
          Shop Now
        </a>
        
        {/* Mobile Menu Button (shown on small screens) */}
        <button className="md:hidden text-cosmic hover:text-primary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
```

## Implementation CSS Variables

Add these CSS variables to your root styles for consistent component implementation:

```css
:root {
  /* Colors */
  --color-primary: #FF00FF;
  --color-secondary: #5B3E96;
  --color-accent: #00E5E5;
  --color-highlight: #FFDD00;
  --color-peach: #FF7E79;
  --color-lavender: #E2D5F8;
  --color-mint: #DEFFF2;
  --color-tangerine: #FF8C42;
  --color-cosmic: #121212;
  --color-cloud: #F8F5FF;
  --color-plum: #796E89;
  
  /* Typography */
  --font-heading: "Clash Display", sans-serif;
  --font-body: "Cabinet Grotesk", "DM Sans", sans-serif;
  --font-accent: "Playfair Display", serif;
  
  /* Transitions */
  --transition-fast: 200ms;
  --transition-base: 300ms;
  --transition-slow: 500ms;
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 15px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.04);
  --shadow-neon: 0 0 15px rgba(255, 0, 255, 0.5);
  --shadow-multi: 0 5px 15px rgba(0, 0, 0, 0.1), 0 15px 35px rgba(91, 62, 150, 0.25);
}
```

This guide provides comprehensive implementation details for the enhanced components in the Bella Dresser design system. These components can be implemented incrementally as part of the phased approach outlined in the design enhancement roadmap.