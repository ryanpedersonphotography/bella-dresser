import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  variant?: 'product' | 'content' | 'feature';
  imageUrl?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  icon?: React.ElementType;
}

const CardComponent: React.FC<CardProps> = ({
  children,
  variant = 'content',
  imageUrl,
  imageAlt,
  title,
  subtitle,
  className = '',
  icon: Icon
}) => {
  const baseStyles = `
    relative overflow-hidden rounded-2xl
    transform transition-all duration-500
    hover:scale-[1.05] group
    focus-within:ring-4 focus-within:ring-primary-saturated/30
  `;

  const variants = {
    product: `
      bg-white shadow-multi
      border-4 border-transparent
      hover:border-primary-saturated/20
      before:absolute before:inset-x-0 before:top-0 before:h-2
      before:bg-gradient-to-r before:from-primary/90 before:to-secondary/90
    `,
    content: `
      bg-gradient-to-br from-cloud to-lavender/50
      shadow-layered hover:shadow-multi
      border-2 border-lavender/20
    `,
    feature: `
      color-block bg-gradient-to-br from-cloud to-lavender/30
      hover:shadow-multi
      border-2 border-lavender/20
      hover:border-primary-saturated/20
    `
  };

  if (variant === 'product' && imageUrl) {
    return (
      <div className={`${baseStyles} ${variants[variant]} ${className}`}>
        <div className="relative aspect-square">
          <img 
            src={imageUrl}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic/80 via-cosmic/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm group-hover:backdrop-blur-0">
            <div className="absolute bottom-6 left-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
              {title && <p className="text-xl font-heading font-bold text-cloud mb-1">{title}</p>}
              {subtitle && <p className="text-sm font-body text-cloud/90">{subtitle}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'feature') {
    return (
      <div className={`${baseStyles} ${variants[variant]} p-10 ${className}`}>
        {Icon && (
          <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-r from-primary/90 to-secondary/90 p-3 flex items-center justify-center shadow-multi transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-neon">
            <Icon className="w-10 h-10 text-white" />
          </div>
        )}
        {title && (
          <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-saturated to-accent-saturated bg-clip-text text-transparent transform group-hover:translate-x-2 transition-transform duration-300">
            {title}
          </h3>
        )}
        <div className="text-cosmic/70 font-body leading-relaxed">{children}</div>
      </div>
    );
  }

  return (
    <div className={`${baseStyles} ${variants[variant]} p-10 ${className}`}>
      {imageUrl && (
        <div className="relative aspect-video mb-8 rounded-xl overflow-hidden shadow-multi group-hover:shadow-neon transition-all duration-500 group-hover:translate-y-[-5px]">
          <img 
            src={imageUrl}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm group-hover:backdrop-blur-0"></div>
        </div>
      )}
      {title && (
        <h3 className="text-3xl font-heading font-bold mb-3 bg-gradient-to-r from-primary-saturated to-accent-saturated bg-clip-text text-transparent transform group-hover:translate-x-2 transition-transform duration-300">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-lg text-cosmic/70 font-body mb-6 transform group-hover:translate-x-1 transition-transform duration-300 delay-75">
          {subtitle}
        </p>
      )}
      <div className="text-cosmic/80 font-body leading-relaxed space-y-4">{children}</div>
    </div>
  );
};

export default CardComponent;