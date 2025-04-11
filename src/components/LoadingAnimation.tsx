import React from 'react';

interface LoadingAnimationProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent' | 'highlight';
  className?: string;
  text?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  size = 'md',
  color = 'primary',
  className = '',
  text
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-primary-saturated',
    secondary: 'text-secondary-saturated',
    accent: 'text-accent-saturated',
    highlight: 'text-highlight-saturated'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer spinning circle */}
        <div 
          className={`
            ${sizeClasses[size]} 
            ${colorClasses[color]} 
            rounded-full 
            border-4 
            border-current 
            border-t-transparent 
            animate-spin
          `}
        />
        
        {/* Inner pulsing dot */}
        <div 
          className={`
            absolute 
            top-1/2 
            left-1/2 
            -translate-x-1/2 
            -translate-y-1/2
            ${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-5 h-5'}
            ${colorClasses[color]} 
            rounded-full 
            animate-pulse-glow
          `}
        />
      </div>
      
      {text && (
        <p className={`mt-3 ${colorClasses[color]} font-medium text-center`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingAnimation;