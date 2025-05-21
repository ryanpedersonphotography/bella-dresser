import React from 'react';
import ImageCarousel from './ImageCarousel';

export type DisplayContent = {
  type: 'carousel' | 'grid' | 'custom';
  title: string;
  images?: Array<{src: string, alt: string}>;
  customContent?: React.ReactNode;
  carouselSettings?: {
    imagesPerView?: number;
    autoplaySpeed?: number;
  };
};

interface FloatingDisplayProps {
  isVisible: boolean;
  onClose: () => void;
  content?: DisplayContent;
  className?: string;
}

const FloatingDisplay: React.FC<FloatingDisplayProps> = ({
  isVisible,
  onClose,
  content,
  className = ""
}) => {
  if (!isVisible || !content) return null;

  const renderContent = () => {
    switch (content.type) {
      case 'carousel':
        if (!content.images) return null;
        return (
          <div className="relative group">
            <div className="absolute -inset-1 bg-pink-500/30 rounded-2xl opacity-30 blur-md group-hover:opacity-40 transition duration-500"></div>
            <ImageCarousel
              imagesPerView={content.carouselSettings?.imagesPerView || 3}
              images={content.images}
              autoplaySpeed={content.carouselSettings?.autoplaySpeed || 5000}
              className="group-hover:shadow-2xl transition-all duration-500"
            />
          </div>
        );
      
      case 'grid':
        if (!content.images) return null;
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {content.images.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        );
      
      case 'custom':
        return content.customContent;
      
      default:
        return null;
    }
  };

  return (
    <div className={`absolute bottom-0 left-0 right-0 z-40 p-6 bg-white/90 backdrop-blur-md animate-fade-in-up shadow-2xl rounded-t-3xl ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-heading font-bold text-center flex-1">
            <span className="gradient-text">{content.title}</span>
          </h2>
          <button
            onClick={onClose}
            className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm font-medium"
          >
            ✕
          </button>
        </div>
        
        {renderContent()}
        
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingDisplay;