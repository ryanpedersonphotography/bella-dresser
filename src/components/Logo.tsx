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
        <div className={`relative ${sizes[size].icon} ${isLightText ? 'bg-cloud/20' : 'bg-cloud'} rounded-full p-2 shadow-xl overflow-hidden`}>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full transform group-hover:rotate-12 transition-transform duration-500"
          >
            {/* Outer ring with gradient */}
            <circle
              cx="50"
              cy="50"
              r="48"
              strokeWidth="4"
              stroke="url(#logoGradient)"
            />
            
            {/* Stylized "B" shape */}
            <path
              d="M35 25C35 25 65 25 65 40C65 55 35 50 35 50C35 50 65 50 65 65C65 80 35 80 35 80"
              strokeWidth="8"
              strokeLinecap="round"
              stroke="url(#logoGradient)"
            />
            
            {/* Sparkle elements */}
            <path
              d="M75 30L80 25M75 70L80 75M25 30L20 25M25 70L20 75"
              strokeWidth="3"
              strokeLinecap="round"
              stroke="#00E5E5"
              className="animate-pulse-slow"
            />
            
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF00FF" />
                <stop offset="50%" stopColor="#00E5E5" />
                <stop offset="100%" stopColor="#5B3E96" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Logo Text - only show for full variant */}
      {variant === 'full' && (
        <span
          className={`font-heading font-extrabold ${isLightText ? 'text-cloud' : 'bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'} transform group-hover:-translate-y-0.5 transition-transform duration-300 ${sizes[size].text}`}
        >
          Bella Dresser
        </span>
      )}
    </div>
  );
};

export default Logo;