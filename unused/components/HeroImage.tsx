import React from 'react';
import EnhancedImage from './EnhancedImage';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  overlayText?: string;
  overlaySubtext?: string;
  patternOverlay?: boolean;
  maskShape?: 'circle' | 'blob' | 'diamond' | 'none';
}

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  className = '',
  overlayText,
  overlaySubtext,
  patternOverlay = true,
  maskShape = 'none'
}) => {
  return (
    <div className="relative overflow-hidden group">
      {/* Enhanced image with duotone effect */}
      <EnhancedImage
        src={src}
        alt={alt}
        effect="duotone"
        aspectRatio="landscape"
        maskShape={maskShape}
        className={`w-full ${className}`}
      />
      
      {/* Pattern overlay */}
      {patternOverlay && (
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
      )}
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic/80 via-cosmic/40 to-transparent"></div>
      
      {/* Text overlay */}
      {(overlayText || overlaySubtext) && (
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          {overlayText && (
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-cloud mb-2 md:mb-4 tracking-tight">
              {overlayText}
            </h2>
          )}
          {overlaySubtext && (
            <p className="text-lg md:text-xl text-cloud/90 max-w-2xl">
              {overlaySubtext}
            </p>
          )}
        </div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

// Hero Banner component for full-width hero sections
export const HeroBanner: React.FC<HeroImageProps & {
  ctaText?: string;
  ctaLink?: string;
}> = ({ ctaText, ctaLink, ...props }) => {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <HeroImage {...props} className="h-full" />
      
      {ctaText && ctaLink && (
        <div className="absolute bottom-12 left-6 md:left-12 z-10">
          <a 
            href={ctaLink}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {ctaText}
          </a>
        </div>
      )}
    </div>
  );
};

export default HeroImage;