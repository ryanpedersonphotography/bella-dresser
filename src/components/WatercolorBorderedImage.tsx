import React from 'react';

interface WatercolorBorderedImageProps {
  src: string;
  alt: string;
  className?: string;
  borderColor?: string;
  borderOpacity?: number;
  borderWidth?: number;
  borderBlur?: number;
}

const WatercolorBorderedImage: React.FC<WatercolorBorderedImageProps> = ({
  src,
  alt,
  className = '',
  borderColor = '#f9f5eb', // Changed to match the background color
  borderOpacity = 0.8,
  borderWidth = 8, // Reduced to 8 pixels
  borderBlur = 3 // Reduced blur for a more subtle effect
}) => {
  // Generate a unique ID for the SVG filter
  const filterId = React.useId();
  
  // Generate random points for the rough border path
  const generateRoughPath = () => {
    // Get a rough rectangle with random variations
    const points = [];
    const segments = 36; // Increased number of segments for more detail
    const variationFactor = borderWidth * 0.9; // Increased variation
    const secondaryVariationFactor = borderWidth * 0.4; // For additional randomness
    
    // Helper function to add controlled randomness
    const getVariation = (base: number) => {
      // Primary variation
      const primaryVar = (Math.random() - 0.5) * variationFactor;
      // Secondary smaller variation for more natural look
      const secondaryVar = (Math.sin(base * Math.PI * 2) * secondaryVariationFactor);
      return primaryVar + secondaryVar;
    };
    
    // Top edge with variations
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * 100;
      const variation = getVariation(i / segments);
      points.push(`${x}% ${variation}%`);
    }
    
    // Right edge with variations
    for (let i = 0; i <= segments; i++) {
      const y = (i / segments) * 100;
      const variation = getVariation(i / segments + 0.25); // Phase shift for variety
      points.push(`${100 + variation}% ${y}%`);
    }
    
    // Bottom edge with variations (reversed)
    for (let i = segments; i >= 0; i--) {
      const x = (i / segments) * 100;
      const variation = getVariation(i / segments + 0.5); // Phase shift for variety
      points.push(`${x}% ${100 + variation}%`);
    }
    
    // Left edge with variations (reversed)
    for (let i = segments; i >= 0; i--) {
      const y = (i / segments) * 100;
      const variation = getVariation(i / segments + 0.75); // Phase shift for variety
      points.push(`${0 + variation}% ${y}%`);
    }
    
    return `polygon(${points.join(', ')})`;
  };

  // Create the rough path once on component mount
  const [roughPath, setRoughPath] = React.useState('');
  
  // Generate path only once on mount
  React.useEffect(() => {
    setRoughPath(generateRoughPath());
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* SVG Filter for watercolor effect */}
      <svg width="0" height="0" className="absolute">
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation={borderBlur} />
        </filter>
      </svg>
      
      {/* Image container */}
      <div className="relative z-10 overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain"
        />
      </div>
      
      {/* Watercolor border - only around the edges */}
      <div
        className="absolute inset-0 -m-2 pointer-events-none"
        style={{
          filter: `url(#${filterId})`,
          border: `${borderWidth}px solid ${borderColor}`,
          opacity: borderOpacity,
          background: 'transparent',
          clipPath: roughPath || 'none',
        }}
      />
    </div>
  );
};

export default WatercolorBorderedImage;