import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoplaySpeed?: number;
  className?: string;
  imagesPerView?: number; // New prop to control images per view
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoplaySpeed = 5000,
  className = '',
  imagesPerView = 1 // Default to 1 image per view
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      perView: imagesPerView,
      spacing: 16
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 }
      },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: { perView: 2, spacing: 10 }
      }
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  }, [
    // Add auto-play plugin if autoplaySpeed is provided
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
        }, autoplaySpeed);
      }
      
      slider.on("created", () => {
        if (autoplaySpeed > 0) {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        }
      });
      
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  ]);
  
  if (images.length === 0) return null;
  
  return (
    <div className={`relative rounded-2xl overflow-visible shadow-multi ${className} px-6`}>
      {/* Keen Slider container */}
      <div ref={sliderRef} className="keen-slider h-full w-full">
        {images.map((image, index) => (
          <div key={index} className="keen-slider__slide px-3">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-sm">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      {loaded && instanceRef.current && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.prev();
            }}
            className="slider-arrow-simple slider-arrow-left absolute top-1/2 -translate-y-1/2 -left-6 z-20 text-purple-900"
            aria-label="Previous image"
          >
            <ArrowLeft size={24} />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.next();
            }}
            className="slider-arrow-simple slider-arrow-right absolute top-1/2 -translate-y-1/2 -right-6 z-20 text-purple-900"
            aria-label="Next image"
          >
            <ArrowRight size={24} />
          </button>
        </>
      )}
      
      {/* Indicator dots */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center gap-2 py-2">
          {Array.from({ length: Math.ceil(instanceRef.current.track.details.slides.length / Math.max(1, imagesPerView)) }).map((_, index) => (
            <button
              key={index}
              onClick={() => instanceRef.current?.moveToIdx(index * Math.max(1, imagesPerView))}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                Math.floor(currentSlide / Math.max(1, imagesPerView)) === index
                  ? 'bg-primary-saturated scale-125'
                  : 'bg-cloud/50 hover:bg-cloud/70'
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;