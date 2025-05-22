import React, { useState } from 'react';
import FloatingDisplay, { DressPhoto } from './FloatingDisplay';

// Sample dress photos for demonstration
const sampleDresses: DressPhoto[] = [
  {
    src: '/images/carousel/123_1.jpg',
    alt: 'Elegant Summer Dress',
    name: 'Elegant Summer Dress',
    price: '$89.99',
    featured: true
  },
  {
    src: '/images/carousel/123_1-2.jpg',
    alt: 'Casual Day Dress',
    name: 'Casual Day Dress',
    price: '$64.99'
  },
  {
    src: '/images/carousel/123_1-3.jpg',
    alt: 'Evening Gown',
    name: 'Evening Gown',
    price: '$129.99'
  },
  {
    src: '/images/carousel/123_1-4.jpg',
    alt: 'Floral Print Dress',
    name: 'Floral Print Dress',
    price: '$74.99'
  },
  {
    src: '/images/carousel/123_1-5.jpg',
    alt: 'Cocktail Dress',
    name: 'Cocktail Dress',
    price: '$99.99'
  },
  {
    src: '/images/carousel/123_1-6.jpg',
    alt: 'Maxi Dress',
    name: 'Maxi Dress',
    price: '$84.99'
  }
];

const FloatingDisplayExample: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-serif text-gray-800 mb-6">
          Enhanced FloatingDisplay Demo
        </h1>
        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          This demonstrates the enhanced FloatingDisplay component with polaroid frames, 
          reveal animations, featured cards, and responsive positioning that avoids overlapping 
          with Bella's video position.
        </p>

        <button
          onClick={() => setIsVisible(true)}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"
        >
          Show Boutique Collection
        </button>

        {/* Simulated Bella's video area */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[40vw] h-[60vh] bg-gradient-to-t from-pink-200/30 to-transparent border-2 border-dashed border-pink-300/50 rounded-t-3xl flex items-end justify-center pb-8 pointer-events-none z-30">
          <div className="text-pink-500 font-medium text-sm">
            Bella's Video Area (40vw × 60vh)
          </div>
        </div>

        <FloatingDisplay
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
          content={{
            type: 'boutique',
            title: "Bella's Boutique Collection",
            boutiquePhotos: sampleDresses
          }}
        />
      </div>
    </div>
  );
};

export default FloatingDisplayExample;