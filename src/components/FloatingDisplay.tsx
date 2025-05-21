import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import IllustratedDressGallery, { DressItem } from './IllustratedDressGallery';

export type DisplayContent = {
  type: 'carousel' | 'grid' | 'custom' | 'illustrated';
  title: string;
  images?: Array<{src: string, alt: string}>;
  dresses?: DressItem[];
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
  const [lightboxImage, setLightboxImage] = useState<{src: string, alt: string} | null>(null);
  
  if (!isVisible || !content) return null;

  const renderContent = () => {
    switch (content.type) {
      case 'illustrated':
        if (!content.dresses) return null;
        return (
          <IllustratedDressGallery 
            dresses={content.dresses}
            className="animate-fade-in-up"
          />
        );
        
      case 'carousel':
        if (!content.images) return null;
        return (
          <div className="relative">
            {/* Custom carousel for floating display with clickable images */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {content.images.map((image, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 cursor-pointer group"
                  onClick={() => setLightboxImage(image)}
                >
                  <div className="bg-white rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-48 h-64 object-cover rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
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
    <>
      {/* Main floating display with transparent background */}
      <div className={`absolute bottom-0 left-0 right-0 z-40 p-6 animate-fade-in-up ${className}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm font-medium"
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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <div className="bg-white rounded-lg p-3 shadow-2xl">
              <img 
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-md"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingDisplay;