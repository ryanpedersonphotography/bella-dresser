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
        ${side === 'left' ? 'left-0 lg:left-[8%]' : 'right-0 lg:right-[8%]'}
        w-[200px] lg:w-[240px]
        transform transition-all duration-1000 ease-out
        animate-slideInAndFloat
      `}
      style={{
        animationDelay: `${delay}ms`,
        '--slide-from': slideDirection,
        '--float-distance': side === 'left' ? '-10px' : '10px'
      } as React.CSSProperties}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden 
                      transform hover:scale-105 transition-transform duration-300
                      border border-pink-200">
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-300 rounded-full opacity-40 blur-xl" />
        <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-purple-300 rounded-full opacity-40 blur-lg" />
        
        {/* Image container */}
        <div className="relative h-[200px] lg:h-[240px] overflow-hidden group">
          <img 
            src={image} 
            alt={title}
            className="dress-card-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Whimsical overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-3 right-3">
              <Heart className="w-6 h-6 text-white animate-pulse" fill="currentColor" />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-3 lg:p-4">
          <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-1">{title}</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xl font-bold text-pink-500">{price}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          {description && (
            <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
          )}
          
          {/* Action button */}
          <button className="mt-3 w-full py-1.5 px-3 bg-gradient-to-r from-pink-400 to-purple-400 
                             text-white text-sm font-semibold rounded-full shadow-md
                             hover:shadow-lg transform hover:-translate-y-0.5 
                             transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhimsicalDressCard;