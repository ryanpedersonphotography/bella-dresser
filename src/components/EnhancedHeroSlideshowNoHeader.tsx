import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ParticleBackground from './ParticleBackground';

// Define the slide data with improved images and creative copy
const slides = [
  {
    image: "/images/hero/1wide.png",
  },
  {
    image: "/images/hero/2wide.png",
  },
  {
    image: "/images/hero/1narrow.png",
  },
  {
    image: "/images/hero/1wide.png",
  }
];

const EnhancedHeroSlideshowNoHeader: React.FC = () => {
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
            
            {/* Empty content container - no header text */}
            <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center z-20">
              {/* No content here */}
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

export default EnhancedHeroSlideshowNoHeader;