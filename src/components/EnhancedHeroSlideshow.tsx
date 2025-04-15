import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ParticleBackground from './ParticleBackground';

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
  const [loaded, setLoaded] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set up Keen Slider with modified options
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      mode: "snap",
      slides: { perView: 1 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      // Add auto-play plugin
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 8000); // 8 seconds per slide
        }
        
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section className="hero-slider">
      {/* Integrated Navbar - positioned absolutely within hero */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'sticky-nav' : 'hero-nav'}`}>
        <Navbar variant={isScrolled ? "solid" : "transparent"} />
      </div>

      {/* Particle background effect */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <ParticleBackground
          count={120}
          color="#FF00FF"
          maxSpeed={0.4}
          minSize={1}
          maxSize={4}
          className="w-full h-full opacity-60"
        />
      </div>

      {/* Decorative elements */}
      <div className="slide-decorative-circle slide-decorative-circle-1"></div>
      <div className="slide-decorative-circle slide-decorative-circle-2"></div>
      
      {/* Keen Slider */}
      <div ref={sliderRef} className="keen-slider h-full w-full">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`keen-slider__slide h-full w-full ${index === currentSlide ? 'slide-active' : ''}`}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-950/95 via-purple-900/85 to-purple-800/75 z-10"></div>
            
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            
            {/* Content container */}
            <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center z-20">
              <div className="max-w-2xl">
                <h2 className={`text-2xl font-body mb-2 text-highlight slide-content slide-content-subtitle ${index === currentSlide ? 'opacity-100 transform-none' : ''}`}>
                  {slide.subtitle}
                </h2>
                <h1 className={`text-8xl font-heading font-bold mb-6 leading-tight slide-content slide-content-title ${index === currentSlide ? 'opacity-100 transform-none' : ''}`}>
                  <span className="gradient-text">
                    {slide.title}
                  </span>
                </h1>
                <p className={`text-2xl mb-8 text-cloud font-body slide-content slide-content-description ${index === currentSlide ? 'opacity-100 transform-none' : ''}`}>
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom navigation buttons */}
      {loaded && instanceRef.current && (
        <>
          <button
            className="slider-arrow-simple slider-arrow-left absolute bottom-[30px] left-6 z-30"
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.prev();
            }}
            aria-label="Previous slide"
          >
            <ArrowLeft size={20} />
          </button>
          
          <button
            className="slider-arrow-simple slider-arrow-right absolute bottom-[30px] right-6 z-30"
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.next();
            }}
            aria-label="Next slide"
          >
            <ArrowRight size={20} />
          </button>
        </>
      )}
      
      {/* Slide indicators */}
      {loaded && instanceRef.current && (
        <div className="slide-indicators">
          {Array.from({ length: instanceRef.current.track.details.slides.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => instanceRef.current?.moveToIdx(index)}
              className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
      
      {/* Decorative wave divider - simplified */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-cloud/20 to-transparent z-10"></div>
    </section>
  );
};

export default EnhancedHeroSlideshow;