import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'full',
  className = ''
}) => {
  // Determine if we should use light text (for transparent navbar)
  const isLightText = className.includes('text-cloud');
  // Size mappings
  const sizes = {
    sm: {
      container: 'h-8',
      icon: 'w-8 h-8',
      text: 'text-xl ml-2'
    },
    md: {
      container: 'h-12',
      icon: 'w-12 h-12',
      text: 'text-3xl ml-3'
    },
    lg: {
      container: 'h-16',
      icon: 'w-16 h-16',
      text: 'text-4xl ml-4'
    }
  };

  return (
    <div className={`flex items-center ${sizes[size].container} ${className} group animate-fade-in`}>
      {/* Logo Icon */}
      <div className="relative transform hover:scale-105 transition-transform duration-300">
        {/* Multi-layered shadow effects */}
        <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse-slow"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
        
        {/* SVG Logo */}
        <div className={`relative ${sizes[size].icon} ${isLightText ? 'bg-cloud/20' : 'bg-primary'} rounded-lg p-2 shadow-xl overflow-hidden`}>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          >
            {/* Background */}
            <rect x="0" y="0" width="100" height="100" fill="#D9026D" />
            
            {/* Dresser illustration */}
            <g transform="translate(60, 50) scale(0.4)">
              <rect x="-40" y="-40" width="80" height="80" rx="5" fill="#F7D94C" stroke="#3A7D44" strokeWidth="3" />
              <rect x="-30" y="-30" width="60" height="15" rx="2" fill="#F7D94C" stroke="#3A7D44" strokeWidth="2" />
              <rect x="-30" y="-10" width="60" height="15" rx="2" fill="#F7D94C" stroke="#3A7D44" strokeWidth="2" />
              <rect x="-30" y="10" width="60" height="15" rx="2" fill="#F7D94C" stroke="#3A7D44" strokeWidth="2" />
              <rect x="-15" y="-25" width="30" height="5" rx="1" fill="#3A7D44" />
              <rect x="-15" y="-5" width="30" height="5" rx="1" fill="#3A7D44" />
              <rect x="-15" y="15" width="30" height="5" rx="1" fill="#3A7D44" />
              <rect x="-20" y="-50" width="40" height="10" rx="2" fill="#D9026D" />
            </g>
            
            {/* Floral elements */}
            <g className="animate-pulse-slow">
              <circle cx="15" cy="15" r="5" fill="#F7D94C" />
              <circle cx="15" cy="85" r="5" fill="#F7D94C" />
              <circle cx="85" cy="15" r="5" fill="#F7D94C" />
              <circle cx="85" cy="85" r="5" fill="#F7D94C" />
            </g>
            
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D9026D" />
                <stop offset="50%" stopColor="#3A7D44" />
                <stop offset="100%" stopColor="#F7D94C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Logo Text - only show for full variant */}
      {variant === 'full' && (
        <div className="flex flex-col">
          <span
            className={`font-heading font-extrabold ${isLightText ? 'text-cloud' : 'text-secondary'} transform group-hover:-translate-y-0.5 transition-transform duration-300 ${sizes[size].text}`}
            style={{ textShadow: '1px 1px 2px rgba(58, 125, 68, 0.5)' }}
          >
            Bella's
          </span>
          <span
            className={`font-heading font-extrabold ${isLightText ? 'text-cloud' : 'text-secondary'} transform group-hover:-translate-y-0.5 transition-transform duration-300 ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-3xl'}`}
            style={{ textShadow: '1px 1px 2px rgba(58, 125, 68, 0.5)', letterSpacing: '0.05em' }}
          >
            DRESSER
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;