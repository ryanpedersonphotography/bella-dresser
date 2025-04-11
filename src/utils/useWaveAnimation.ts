import { useEffect, useState } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

/**
 * Custom hook for creating scroll-based wave animations
 * 
 * @param threshold - The scroll threshold at which the animation should be fully applied (0-1)
 * @returns Animation values and properties for use with Framer Motion
 */
export const useWaveAnimation = (threshold: number = 0.2) => {
  const [isInView, setIsInView] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress into animation values
  const opacity = useTransform(
    scrollYProgress,
    [0, threshold, threshold + 0.1],
    [0.5, 1, 1]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [0, threshold],
    [0.95, 1]
  );
  
  const y = useTransform(
    scrollYProgress,
    [0, threshold],
    [20, 0]
  );
  
  // Create wave speed effect based on scroll
  const [waveSpeed, setWaveSpeed] = useState(1);
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      // Adjust wave speed based on scroll velocity
      setWaveSpeed(1 + value * 0.5);
      
      // Set in view state
      if (value > threshold - 0.1) {
        setIsInView(true);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress, threshold]);
  
  return {
    opacity,
    scale,
    y,
    waveSpeed,
    isInView
  };
};

/**
 * Custom hook for parallax wave effect
 * 
 * @param scrollY - The scroll Y motion value
 * @param strength - The strength of the parallax effect (higher = stronger)
 * @returns A motion value for the parallax effect
 */
export const useWaveParallax = (
  scrollY: MotionValue<number>,
  strength: number = 0.1
) => {
  return useTransform(scrollY, (value) => value * strength);
};

export default useWaveAnimation;