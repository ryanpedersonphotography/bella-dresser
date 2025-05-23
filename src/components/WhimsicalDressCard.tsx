import React from 'react';
import { Heart, Star } from 'lucide-react';

interface WhimsicalDressCardProps {
  image: string;
  title: string;
  price: string;
  description?: string;
  side: 'left' | 'right';
  delay?: number;
}

const WhimsicalDressCard: React.FC<WhimsicalDressCardProps> = ({ 
  image, 
  title, 
  price, 
  description,
  side,
  delay = 0 
}) => {
  const slideDirection = side === 'left' ? '-translate-x-full' : 'translate-x-full';
  
  return (
    <div 
      className={`
        absolute top-1/2 -translate-y-1/2 
        ${side === 'left' ? 'left-0 lg:left-[5%]' : 'right-0 lg:right-[5%]'}
        w-[280px] lg:w-[320px]
        transform transition-all duration-1000 ease-out
        animate-slideInAndFloat
      `}
      style={{
        animationDelay: `${delay}ms`,
        '--slide-from': slideDirection,
        '--float-distance': side === 'left' ? '-10px' : '10px'
      } as React.CSSProperties}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden 
                      transform hover:scale-105 transition-transform duration-300
                      border-2 border-pink-200">
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-pink-300 rounded-full opacity-50 blur-xl" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-300 rounded-full opacity-50 blur-lg" />
        
        {/* Image container */}
        <div className="relative h-[280px] lg:h-[320px] overflow-hidden group">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Whimsical overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-4 right-4">
              <Heart className="w-8 h-8 text-white animate-pulse" fill="currentColor" />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 lg:p-5">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-1">{title}</h3>
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-pink-500">{price}</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          {description && (
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          )}
          
          {/* Action button */}
          <button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-pink-400 to-purple-400 
                             text-white font-semibold rounded-full shadow-lg
                             hover:shadow-xl transform hover:-translate-y-0.5 
                             transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhimsicalDressCard;