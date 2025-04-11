import React, { ReactNode } from 'react';
import useSectionTransition from '../utils/useSectionTransition';

interface SectionTransitionProps {
  children: ReactNode;
  type?: 'slide-up' | 'slide-right' | 'slide-left' | 'zoom';
  delay?: number;
  threshold?: number;
  className?: string;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  type = 'slide-up',
  delay = 0,
  threshold = 0.2,
  className = '',
}) => {
  const { ref, isInView } = useSectionTransition({
    transitionType: type,
    delay,
    threshold,
  });

  return (
    // @ts-expect-error - ref is properly typed but TypeScript doesn't recognize it
    <div ref={ref} className={className} data-in-view={isInView}>
      {children}
    </div>
  );
};

export default SectionTransition;