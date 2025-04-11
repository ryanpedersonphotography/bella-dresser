import React from 'react';

interface EnhancedImageProps {
  src: string;
  alt: string;
  className?: string;
  effect?: 'duotone' | 'vibrant' | 'masked' | 'pattern' | 'none';
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'auto';
  removeBackground?: boolean;
  maskShape?: 'circle' | 'blob' | 'diamond' | 'none';
}

const EnhancedImage: React.FC<EnhancedImageProps> = ({
  src,
  alt,
  className = '',
  effect = 'none',
  aspectRatio = 'auto',
  removeBackground = false,
  maskShape = 'none'
}) => {
  // Define aspect ratio classes
  const aspectRatioClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    auto: ''
  };

  // Define effect classes
  const getEffectClasses = () => {
    switch (effect) {
      case 'duotone':
        return 'relative after:absolute after:inset-0 after:bg-gradient-to-br after:from-primary/30 after:to-secondary/30 after:mix-blend-color';
      case 'vibrant':
        return 'relative after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:to-transparent after:saturate-[1.5] after:contrast-[1.2]';
      case 'masked':
        return 'relative';
      case 'pattern':
        return 'relative after:absolute after:inset-0 after:bg-noise after:opacity-20 after:mix-blend-overlay';
      default:
        return '';
    }
  };

  // Define mask shape classes
  const getMaskClasses = () => {
    switch (maskShape) {
      case 'circle':
        return 'rounded-full overflow-hidden';
      case 'blob':
        return 'mask-blob overflow-hidden';
      case 'diamond':
        return 'mask-diamond overflow-hidden';
      default:
        return '';
    }
  };

  // Background removal class
  const bgRemovalClass = removeBackground ? 'mix-blend-multiply' : '';

  return (
    <div 
      className={`
        relative overflow-hidden
        ${aspectRatioClasses[aspectRatio]}
        ${getMaskClasses()}
        ${className}
      `}
    >
      <div className={`w-full h-full ${getEffectClasses()}`}>
        <img 
          src={src} 
          alt={alt} 
          className={`
            w-full h-full object-cover
            transition-transform duration-700 hover:scale-105
            ${bgRemovalClass}
          `}
        />
      </div>
      
      {/* Pattern overlay for certain effects */}
      {effect === 'pattern' && (
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
      )}
      
      {/* Gradient overlay for duotone effect */}
      {effect === 'duotone' && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-color pointer-events-none"></div>
      )}
      
      {/* Vibrancy enhancement for vibrant effect */}
      {effect === 'vibrant' && (
        <div className="absolute inset-0 bg-gradient-to-br from-highlight/10 to-accent/10 mix-blend-overlay pointer-events-none"></div>
      )}
    </div>
  );
};

export default EnhancedImage;