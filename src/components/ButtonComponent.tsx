import React, { useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  loading = false,
  disabled = false
}) => {
  const [isPressed, setIsPressed] = useState(false);
  
  // Standardized button sizing
  const sizes = {
    sm: 'px-5 py-2 text-sm h-[36px]',
    md: 'px-6 py-2.5 text-base h-[44px]',
    lg: 'px-8 py-3 text-lg h-[52px]'
  };

  const handleClick = () => {
    if (loading || disabled) return;
    
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 300);
    
    if (onClick) onClick();
  };

  const renderLoadingSpinner = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (variant === 'primary') {
    return (
      <button
        onClick={handleClick}
        disabled={disabled || loading}
        className={`
          ${sizes[size]}
          font-heading font-semibold
          bg-gradient-to-r from-primary to-primary-saturated/90
          text-white
          border border-white/10 rounded-md
          transform transition-all duration-300
          hover:from-primary-saturated/90 hover:to-primary
          hover:shadow-[0_0_15px_5px_rgba(255,0,255,0.15)]
          hover:-translate-y-1
          focus:outline-none focus:ring-2 focus:ring-primary/30
          relative overflow-hidden
          ${isPressed ? 'scale-[0.98] translate-y-0.5' : ''}
          ${loading || disabled ? 'opacity-80 cursor-not-allowed' : ''}
          ${className}
        `}
      >
        <span className={`relative ${loading ? 'opacity-0' : 'opacity-100'}`}>
          {children}
        </span>
        
        {/* Loading spinner */}
        {loading && renderLoadingSpinner()}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      className={`
        ${sizes[size]}
        font-heading font-semibold
        bg-gradient-to-r from-lavender to-peach/90
        text-cosmic
        border border-white/10 rounded-md
        transform transition-all duration-300
        hover:from-peach/90 hover:to-lavender
        hover:shadow-[0_0_15px_5px_rgba(226,213,248,0.15)]
        hover:-translate-y-1
        focus:outline-none focus:ring-2 focus:ring-lavender/30
        relative overflow-hidden
        ${isPressed ? 'scale-[0.98] translate-y-0.5' : ''}
        ${loading || disabled ? 'opacity-80 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      <span className={`relative ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </span>
      
      {/* Loading spinner */}
      {loading && renderLoadingSpinner()}
    </button>
  );
};

export default ButtonComponent;