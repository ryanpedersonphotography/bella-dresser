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

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useInterval(() => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  }, 5000);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-2xl font-semibold mb-2">{slide.subtitle}</h2>
              <h1 className="text-6xl font-script mb-6">{slide.title}</h1>
              <p className="text-xl mb-8 text-gray-100">
                {slide.description}
              </p>
              <div className="flex gap-4">
                <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors">
                  Shop Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;