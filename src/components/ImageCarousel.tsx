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
    <div className={`relative rounded-2xl overflow-visible shadow-multi ${className} px-2`}>
      {/* Keen Slider container */}
      <div ref={sliderRef} className="keen-slider h-full w-full">
        {images.map((image, index) => (
          <div key={index} className="keen-slider__slide px-2">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-sm p-3">
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
              // Calculate the previous group index
              const currentGroup = Math.floor(currentSlide / Math.max(1, imagesPerView));
              const prevGroup = (currentGroup - 1 + Math.ceil(images.length / Math.max(1, imagesPerView))) % Math.ceil(images.length / Math.max(1, imagesPerView));
              instanceRef.current?.moveToIdx(prevGroup * Math.max(1, imagesPerView));
            }}
            className="slider-arrow-simple slider-arrow-left carousel-arrow absolute top-1/2 -translate-y-1/2 z-20 text-primary-saturated"
            aria-label="Previous image"
          >
            <ArrowLeft size={24} />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Calculate the next group index
              const currentGroup = Math.floor(currentSlide / Math.max(1, imagesPerView));
              const nextGroup = (currentGroup + 1) % Math.ceil(images.length / Math.max(1, imagesPerView));
              instanceRef.current?.moveToIdx(nextGroup * Math.max(1, imagesPerView));
            }}
            className="slider-arrow-simple slider-arrow-right carousel-arrow absolute top-1/2 -translate-y-1/2 z-20 text-primary-saturated"
            aria-label="Next image"
          >
            <ArrowRight size={24} />
          </button>
        </>
      )}
      
      {/* Indicator dots */}
      {loaded && instanceRef.current && (
        <div className="mt-3 flex justify-center gap-2 py-3">
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