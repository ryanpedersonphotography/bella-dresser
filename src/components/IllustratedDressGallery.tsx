import React, { useState } from 'react';

export interface DressItem {
  src: string;
  alt: string;
  name: string;
  description?: string;
  price?: string;
}

interface IllustratedDressGalleryProps {
  dresses: DressItem[];
  className?: string;
  onDressClick?: (dress: DressItem) => void;
}

const IllustratedDressGallery: React.FC<IllustratedDressGalleryProps> = ({
  dresses,
  className = "",
  onDressClick
}) => {
  const [lightboxDress, setLightboxDress] = useState<DressItem | null>(null);

  const handleDressClick = (dress: DressItem) => {
    if (onDressClick) {
      onDressClick(dress);
    } else {
      setLightboxDress(dress);
    }
  };

  return (
    <>
      {/* Storybook-style dress gallery */}
      <div className={`w-full ${className}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {dresses.map((dress, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => handleDressClick(dress)}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Polaroid-style frame */}
              <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 p-4 transform rotate-1 hover:rotate-0 group-hover:-translate-y-2">
                
                {/* Photo container with sketch-to-photo effect */}
                <div className="relative overflow-hidden rounded-md bg-gray-50">
                  <img
                    src={dress.src}
                    alt={dress.alt}
                    className="w-full h-64 sm:h-72 object-cover transition-all duration-700 ease-out
                             filter grayscale brightness-110 contrast-90 blur-[0.5px]
                             group-hover:filter-none group-hover:brightness-100 group-hover:contrast-100 group-hover:blur-0
                             transform scale-105 group-hover:scale-100"
                  />
                  
                  {/* Sketch overlay that fades out on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 via-purple-50/30 to-blue-50/40 
                                mix-blend-overlay transition-opacity duration-700 opacity-60 group-hover:opacity-0" />
                  
                  {/* Subtle paper texture overlay */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-700"
                       style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                         mixBlendMode: 'multiply'
                       }} />
                </div>

                {/* Handwritten-style caption */}
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-800 transition-colors duration-300"
                      style={{ fontFamily: "'Dancing Script', cursive" }}>
                    {dress.name}
                  </h3>
                  
                  {dress.description && (
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-light">
                      {dress.description}
                    </p>
                  )}
                  
                  {dress.price && (
                    <p className="text-base font-medium text-pink-600 group-hover:text-pink-700 transition-colors duration-300"
                       style={{ fontFamily: "'Dancing Script', cursive" }}>
                      {dress.price}
                    </p>
                  )}
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-pink-200 opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-pink-200 opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-pink-200 opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-pink-200 opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced lightbox modal */}
      {lightboxDress && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md"
          onClick={() => setLightboxDress(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-6 animate-fade-in-up">
            <button
              onClick={() => setLightboxDress(null)}
              className="absolute -top-3 -right-3 z-10 w-10 h-10 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:scale-110"
            >
              ✕
            </button>
            
            {/* Lightbox polaroid frame */}
            <div className="bg-white rounded-xl p-6 shadow-2xl max-w-full">
              <img 
                src={lightboxDress.src}
                alt={lightboxDress.alt}
                className="max-w-full max-h-[70vh] object-contain rounded-lg mx-auto"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="mt-6 text-center space-y-2">
                <h3 className="text-2xl font-bold text-gray-800" 
                    style={{ fontFamily: "'Dancing Script', cursive" }}>
                  {lightboxDress.name}
                </h3>
                
                {lightboxDress.description && (
                  <p className="text-gray-600 text-lg">
                    {lightboxDress.description}
                  </p>
                )}
                
                {lightboxDress.price && (
                  <p className="text-xl font-semibold text-pink-600"
                     style={{ fontFamily: "'Dancing Script', cursive" }}>
                    {lightboxDress.price}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IllustratedDressGallery;