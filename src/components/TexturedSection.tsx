import React from 'react';

interface TexturedSectionProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  textureType?: 'noise' | 'grid' | 'dots';
  className?: string;
}

const TexturedSection: React.FC<TexturedSectionProps> = ({
  children,
  variant = 'primary',
  textureType = 'noise',
  className = ''
}) => {
  const colorBlockClass = {
    primary: 'color-block-primary',
    secondary: 'color-block-secondary',
    accent: 'color-block-accent'
  }[variant];

  const textureClass = {
    noise: 'texture-noise',
    grid: 'texture-grid',
    dots: 'texture-dots'
  }[textureType];

  return (
    <section className={`
      section-container
      ${colorBlockClass}
      ${textureClass}
      relative p-8 md:p-12 lg:p-16
      overflow-hidden rounded-3xl
      ${className}
    `}>
      {/* Floating decorative shapes */}
      <div className="floating-shape w-96 h-96 -top-48 -right-48"></div>
      <div className="floating-shape w-72 h-72 -bottom-36 -left-36 animation-delay-2000"></div>

      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom textured divider with overlap for visual flow */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="textured-divider"></div>
      </div>
      
      {/* Overlapping gradient for visual flow between sections */}
      <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-cloud/50 z-20"></div>
    </section>
  );
};

export default TexturedSection;