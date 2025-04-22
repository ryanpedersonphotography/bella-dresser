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
        <div className={`relative ${sizes[size].icon} rounded-lg overflow-hidden flex items-center justify-center`}>
          <img
            src="/images/logo/bellas_dresser_logo_vector.svg"
            alt="Bella's Dresser Logo"
            className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            style={{ filter: isLightText ? 'brightness(1.5)' : 'none' }}
          />
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