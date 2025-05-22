import React, { useState } from 'react';
import { motion } from 'framer-motion';
import IllustratedDressGallery, { DressItem } from './IllustratedDressGallery';

export type DressPhoto = {
  src: string;
  alt: string;
  name: string;
  price: string;
  featured?: boolean;
};

export type DisplayContent = {
  type: 'carousel' | 'grid' | 'custom' | 'illustrated' | 'boutique';
  title: string;
  images?: Array<{src: string, alt: string}>;
  dresses?: DressItem[];
  boutiquePhotos?: DressPhoto[];
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

  const renderBoutiquePhotos = () => {
    if (!content.boutiquePhotos) return null;

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2
        }
      }
    };

    const cardVariants = {
      hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.8
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    };

    return (
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {content.boutiquePhotos.map((photo, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`relative group cursor-pointer ${
              photo.featured 
                ? 'lg:col-span-2 lg:row-span-2 transform lg:scale-110 lg:-rotate-1' 
                : ''
            }`}
            onClick={() => setLightboxImage({src: photo.src, alt: photo.alt})}
          >
            {/* Polaroid/Boutique Frame */}
            <div className={`
              relative bg-gradient-to-br from-amber-50 to-stone-100 p-3 pb-6 rounded-lg shadow-lg
              hover:shadow-2xl transition-all duration-500 transform hover:-rotate-1 hover:scale-105
              ${photo.featured 
                ? 'ring-4 ring-pink-300/50 shadow-pink-200/50 animate-pulse' 
                : 'hover:ring-2 hover:ring-pink-200/30'
              }
              before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-stone-200/20 
              before:rounded-lg before:pointer-events-none
            `}>
              {/* Featured Ribbon */}
              {photo.featured && (
                <div className="absolute -top-2 -right-2 z-10">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12">
                    Bella's Pick ✨
                  </div>
                </div>
              )}

              {/* Image with reveal effect */}
              <div className="relative overflow-hidden rounded-md">
                <img 
                  src={photo.src}
                  alt={photo.alt}
                  className={`
                    w-full h-48 object-cover transition-all duration-700 ease-out
                    ${photo.featured ? 'lg:h-64' : ''}
                    filter group-hover:filter-none group-hover:contrast-110 group-hover:saturate-110
                    grayscale blur-[0.5px] sepia-[0.2] contrast-90 saturate-75
                  `}
                />
                
                {/* Overlay gradient for illustration effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-transparent to-purple-100/20 group-hover:opacity-0 transition-opacity duration-700" />
              </div>

              {/* Photo info */}
              <div className="mt-3 text-center">
                <h3 className="font-serif text-gray-800 text-sm font-medium">
                  {photo.name}
                </h3>
                <p className="text-pink-600 font-semibold text-xs mt-1">
                  {photo.price}
                </p>
              </div>

              {/* Glow effect for featured items */}
              {photo.featured && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-400/20 to-purple-400/20 blur-xl rounded-lg animate-pulse" />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  const renderContent = () => {
    switch (content.type) {
      case 'boutique':
        return renderBoutiquePhotos();
        
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
      {/* Main floating display with different positioning based on content type */}
      <div className={`
        fixed inset-0 z-40 bg-black/50 backdrop-blur-sm
        ${className}
      `} onClick={onClose}>
        {/* Responsive container for different content types */}
        <div className={
          content.type === 'boutique' 
            ? "absolute pointer-events-auto left-4 top-1/2 -translate-y-1/2 w-[35vw] max-w-md md:left-4 md:top-1/2 md:-translate-y-1/2 md:w-[35vw] md:max-w-md max-md:bottom-4 max-md:left-0 max-md:right-0 max-md:top-auto max-md:transform-none max-md:w-auto max-md:max-w-none max-md:px-4"
            : "absolute pointer-events-auto inset-0 flex items-center justify-center md:justify-start md:items-start p-4"
        } onClick={(e) => e.stopPropagation()}>
          <motion.div 
            className={
              content.type === 'boutique' 
                ? 'bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 max-h-[80vh] overflow-y-auto'
                : 'bg-cloud/70 backdrop-blur-sm rounded-xl shadow-lg p-6 max-h-[80vh] overflow-y-auto w-full max-w-lg md:max-w-[40%] md:ml-[5%] md:mt-[10%] flex flex-col items-center'
            }
            initial={{ 
              opacity: 0, 
              scale: content.type === 'boutique' ? 0.9 : 1, 
              x: content.type === 'boutique' ? -50 : 0,
              y: content.type === 'boutique' ? 0 : 50
            }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ 
              opacity: 0, 
              scale: content.type === 'boutique' ? 0.9 : 1, 
              x: content.type === 'boutique' ? -50 : 0,
              y: content.type === 'boutique' ? 0 : 50
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Header with close button - different styling for different types */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-serif text-gray-800 font-semibold">
                {content.title}
              </h2>
              <button
                onClick={onClose}
                className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-sm font-medium flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            
            {renderContent()}
            
            {/* Bottom close button for illustrated type */}
            {content.type === 'illustrated' && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxImage(null)}
        >
          <motion.div 
            className="relative max-w-4xl max-h-[90vh] p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-lg p-4 shadow-2xl">
              <img 
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-md"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default FloatingDisplay;