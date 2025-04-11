import React from 'react';
import { motion } from 'framer-motion';

interface PinkWaveDividerProps {
  variant?: 'default' | 'hero' | 'bottom';
}

/**
 * PinkWaveDivider Component
 * Creates a simple animated wave divider
 * 
 * @param variant - The style variant to apply:
 *   - 'default': Standard wave divider
 *   - 'hero': Special styling for below hero section
 *   - 'bottom': Special styling for bottom of page
 */
const PinkWaveDivider: React.FC<PinkWaveDividerProps> = ({ 
  variant = 'default'
}) => {
  const variantClass = 
    variant === 'hero' ? 'hero-wave-divider' : 
    variant === 'bottom' ? 'bottom-wave-divider' : '';
  
  // Super simplified animation
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };
  
  return (
    <motion.div 
      className={`pink-wave-divider ${variantClass}`}
      initial="initial"
      animate="animate"
      variants={containerVariants}
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="wave-animation-wrapper" />
    </motion.div>
  );
};

export default PinkWaveDivider;