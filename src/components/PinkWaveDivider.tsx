import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import useWaveAnimation, { useWaveParallax } from '../utils/useWaveAnimation';

interface PinkWaveDividerProps {
  variant?: 'default' | 'hero' | 'bottom';
  threshold?: number;
}

/**
 * PinkWaveDivider Component
 * Creates animated wavy pink ribbons that flow across the screen
 * Enhanced with Framer Motion for smoother animations and scroll-based effects
 *
 * @param variant - The style variant to apply:
 *   - 'default': Standard wave divider
 *   - 'hero': Special styling for below hero section
 *   - 'bottom': Special styling for bottom of page
 * @param threshold - Scroll threshold for animation (0-1)
 */
const PinkWaveDivider: React.FC<PinkWaveDividerProps> = ({
  variant = 'default',
  threshold = variant === 'hero' ? 0.1 : 0.2
}) => {
  const dividerRef = useRef<HTMLDivElement>(null);
  const variantClass =
    variant === 'hero' ? 'hero-wave-divider' :
    variant === 'bottom' ? 'bottom-wave-divider' : '';
  
  // Use our custom hook for scroll-based animations
  const { opacity, scale, y, isInView } = useWaveAnimation(threshold);
  
  // Add scroll-based parallax effect
  const { scrollY } = useScroll();
  const parallaxY = useWaveParallax(
    scrollY,
    variant === 'hero' ? 0.05 : variant === 'bottom' ? -0.05 : 0.02
  );
  
  // Animation variants for the wave container
  const containerVariants = {
    initial: {
      opacity: 0,
      y: variant === 'hero' ? -20 : 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  // Animation variants for the wave elements with more dynamic effects
  const waveVariants = {
    initial: {
      scale: 0.9,
      filter: "blur(2px)"
    },
    animate: {
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <motion.div
      ref={dividerRef}
      className={`pink-wave-divider ${variantClass}`}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={containerVariants}
      style={{
        opacity,
        y: variant === 'hero' ? y : undefined
      }}
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        className="wave-animation-wrapper"
        variants={waveVariants}
        style={{
          scale,
          y: parallaxY
        }}
      />
    </motion.div>
  );
};

export default PinkWaveDivider;