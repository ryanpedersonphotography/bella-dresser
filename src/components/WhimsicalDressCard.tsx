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
  
  // Add slight rotation for artistic effect
  const rotation = delay === 0 ? '-1.5deg' : '1.2deg';
  
  return (
    <div 
      className={`
        w-[180px] lg:w-[220px]
        transform transition-all duration-1000 ease-out
        animate-slideInAndFloat
        relative
      `}
      style={{
        animationDelay: `${delay}ms`,
        '--slide-from': slideDirection,
        '--float-distance': '-10px',
        fontFamily: '"Cormorant Garamond", serif',
        transform: `rotate(${rotation})`,
      } as React.CSSProperties}
    >
      {/* Hand-drawn border SVG */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 220 300"
        preserveAspectRatio="none"
      >
        {/* Multiple rough strokes for more artistic effect */}
        <g>
          {/* Main rough outline */}
          <path
            d="M 15 30 
               C 12 15, 18 8, 25 12
               L 45 10
               C 65 11, 85 9, 105 11
               L 125 10
               C 145 12, 165 8, 185 11
               L 195 10
               C 208 8, 215 15, 210 28
               L 212 50
               C 210 80, 213 110, 211 140
               L 212 170
               C 210 200, 214 230, 210 260
               L 208 275
               C 210 285, 205 295, 190 290
               L 170 292
               C 150 290, 130 293, 110 291
               L 90 292
               C 70 290, 50 293, 30 290
               L 20 288
               C 8 290, 5 285, 12 270
               L 10 250
               C 12 220, 8 190, 11 160
               L 10 130
               C 12 100, 8 70, 11 40
               Z"
            fill="none"
            stroke="#cfb68e"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          
          {/* Second sketch line for depth */}
          <path
            d="M 13 28 
               C 11 14, 16 10, 23 11
               L 187 12
               C 206 10, 212 14, 208 30
               L 210 268
               C 212 286, 207 292, 193 289
               L 25 291
               C 10 293, 6 287, 11 271
               Z"
            fill="none"
            stroke="#cfb68e"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
            strokeDasharray="3 2"
          />
          
          {/* Third rough sketch for texture */}
          <path
            d="M 16 32 
               L 188 14
               L 207 273
               L 27 287
               Z"
            fill="none"
            stroke="#cfb68e"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
            strokeDasharray="1 3"
          />
        </g>
        
        <defs>
          <filter id={`hand-drawn-${delay}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" result="noise" seed={delay} />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            <feGaussianBlur stdDeviation="0.3" />
          </filter>
        </defs>
        
        {/* Apply filter to entire group */}
        <g filter={`url(#hand-drawn-${delay})`}>
          <use href="#sketch-paths" />
        </g>
      </svg>
      
      <div className="bg-[#fcf4e6] 
                      shadow-[0_4px_8px_rgba(0,0,0,0.05)] overflow-hidden 
                      transform hover:scale-105 hover:-translate-y-1 
                      hover:shadow-[0_6px_12px_rgba(0,0,0,0.08)]
                      transition-all duration-200 ease-in-out
                      relative"
           style={{
             clipPath: 'polygon(3% 2%, 97% 0%, 99% 98%, 2% 100%)',
             borderRadius: '8px 15px 12px 10px'
           }}
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