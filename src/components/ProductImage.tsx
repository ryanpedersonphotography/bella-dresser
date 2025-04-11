import React from 'react';
import EnhancedImage from './EnhancedImage';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  isHero?: boolean;
  removeBackground?: boolean;
}

const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = '',
  category,
  isHero = false,
  removeBackground = false
}) => {
  // Determine the appropriate effect based on whether it's a hero image
  const effect = isHero ? 'duotone' : 'vibrant';
  
  return (
    <div className="relative group overflow-hidden">
      {/* Enhanced image with appropriate effects */}
      <EnhancedImage
        src={src}
        alt={alt}
        effect={effect}
        aspectRatio={isHero ? 'landscape' : 'square'}
        removeBackground={removeBackground}
        className={className}
      />
      
      {/* Category tag */}
      {category && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-lavender/70 backdrop-blur-sm text-secondary rounded-full">
            {category}
          </span>
        </div>
      )}
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-cloud font-medium">View Details</div>
        </div>
      </div>
    </div>
  );
};

// Product Gallery component for displaying multiple product images
export const ProductGallery: React.FC<{
  images: Array<{src: string; alt: string; category?: string}>;
  className?: string;
}> = ({ images, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {images.map((image, index) => (
        <ProductImage
          key={index}
          src={image.src}
          alt={image.alt}
          category={image.category}
          removeBackground={index % 3 === 0} // Remove background for every third image
        />
      ))}
    </div>
  );
};

export default ProductImage;