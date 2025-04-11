import React, { ReactNode } from 'react';
import useScrollAnimation from '../utils/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  triggerOnce?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = '',
  triggerOnce = true
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce
  });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'translate-y-10 opacity-0';
      case 'fade-down':
        return '-translate-y-10 opacity-0';
      case 'fade-left':
        return 'translate-x-10 opacity-0';
      case 'fade-right':
        return '-translate-x-10 opacity-0';
      case 'zoom-in':
        return 'scale-95 opacity-0';
      case 'rotate':
        return 'rotate-6 opacity-0';
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      // @ts-expect-error - ref is properly typed but TypeScript doesn't recognize it
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transform: isVisible ? 'none' : undefined,
        opacity: isVisible ? 1 : undefined,
        transitionProperty: 'transform, opacity',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className={isVisible ? '' : getAnimationClass()}>
        {children}
      </div>
    </div>
  );
};

export default ScrollReveal;