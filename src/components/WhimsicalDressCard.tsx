import React from 'react';
import { Heart, Star } from 'lucide-react';

interface WhimsicalDressCardProps {
  image: string;
  title: string;
  price: string;
  description?: string;
  delay?: number;
}

const WhimsicalDressCard: React.FC<WhimsicalDressCardProps> = ({ 
  image, 
  title, 
  price, 
  description,
  delay = 0 
}) => {
  const slideDirection = '-translate-x-full';
  
  return (
    <div 
      className={`
        w-[180px] lg:w-[220px]
        transform transition-all duration-1000 ease-out
        animate-slideInAndFloat
        relative group
      `}
      style={{
        animationDelay: `${delay}ms`,
        '--slide-from': slideDirection,
        '--float-distance': '-10px',
        fontFamily: '"Cormorant Garamond", serif',
      } as React.CSSProperties}
    >
      <div className="bg-[#fcf4e6] border-2 border-[#cfb68e] rounded-xl 
                      shadow-[0_4px_8px_rgba(0,0,0,0.05)] overflow-hidden 
                      transform hover:scale-105 hover:-translate-y-1 
                      hover:shadow-[0_6px_12px_rgba(0,0,0,0.08)]
                      transition-all duration-200 ease-in-out
                      relative"
      >
        
        {/* Image container */}
        <div className="relative h-[140px] lg:h-[160px] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="dress-card-image w-full h-full object-cover transition-all duration-300"
          />
          
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3c2f2f]/10 to-transparent 
                          opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-2 right-2">
              <Heart className="w-5 h-5 text-[#fcf4e6] drop-shadow-md" fill="currentColor" />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#3c2f2f] mb-1" 
              style={{ fontWeight: 600, letterSpacing: 'normal' }}>
            {title}
          </h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xl font-bold text-[#cfb68e]">{price}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#cfb68e] fill-current" />
              ))}
            </div>
          </div>
          {description && (
            <p className="text-sm text-[#3c2f2f]/70 leading-relaxed mb-3">{description}</p>
          )}
          
          {/* Action area - simplified */}
          <div className="text-center pt-2 border-t border-[#cfb68e]/20">
            <span className="text-sm font-semibold text-[#cfb68e] hover:text-[#3c2f2f] 
                           transition-colors duration-200 cursor-pointer">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhimsicalDressCard;