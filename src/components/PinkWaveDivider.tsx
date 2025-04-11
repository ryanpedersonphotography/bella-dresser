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
  
  // Animation variants for the wave container - smoother transitions
  const containerVariants = {
    initial: {
      opacity: 0,
      y: variant === 'hero' ? -30 : 30
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1] // Cubic bezier for smoother motion
      }
    }
  };
  
  // Animation variants for the wave elements - simplified for 2 waves
  const waveVariants = {
    initial: {
      scale: 0.95,
      filter: "blur(3px)"
    },
    animate: {
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.34, 1.56, 0.64, 1], // Spring-like easing
        staggerChildren: 0.2 // Stagger the animation of child elements
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.8,
        ease: "easeOut"
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
      whileHover="hover"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        className="wave-animation-wrapper"
        variants={waveVariants}
        style={{
          scale,
          y: parallaxY
        }}
        animate={{
          opacity: [0.9, 1, 0.9]
        }}
        transition={{
          opacity: {
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }
        }}
      />
    </motion.div>
  );
};

export default PinkWaveDivider;