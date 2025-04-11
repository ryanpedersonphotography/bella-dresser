import React, { useEffect, useRef } from 'react';
import { createConfetti } from '../utils/confettiEffect';

/**
 * PinkConfettiDivider Component
 * Creates a divider with animated confetti elements
 */
const PinkConfettiDivider: React.FC = () => {
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize confetti when component mounts
    if (dividerRef.current) {
      createConfetti(dividerRef.current);
    }
  }, []);

  return (
    <div className="pink-confetti-divider" ref={dividerRef}></div>
  );
};

export default PinkConfettiDivider;