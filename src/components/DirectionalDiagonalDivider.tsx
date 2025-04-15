import React from 'react';
import { motion } from 'framer-motion';

interface DirectionalDiagonalDividerProps {
  direction?: 'up' | 'down';
  variant?: 'default' | 'hero' | 'bottom';
}

/**
 * DirectionalDiagonalDivider Component
 * Creates a diagonal divider with customizable direction
 * 
 * @param direction - The direction of the diagonal:
 *   - 'up': Diagonal slopes upward from left to right
 *   - 'down': Diagonal slopes downward from left to right
 * @param variant - The style variant to apply:
 *   - 'default': Standard diagonal divider
 *   - 'hero': Special styling for below hero section
 *   - 'bottom': Special styling for bottom of page
 */
const DirectionalDiagonalDivider: React.FC<DirectionalDiagonalDividerProps> = ({ 
  direction = 'down',
  variant = 'default'
}) => {
  const directionClass = direction === 'up' ? 'diagonal-up' : 'diagonal-down';
  const variantClass = 
    variant === 'hero' ? 'hero-diagonal-divider' : 
    variant === 'bottom' ? 'bottom-diagonal-divider' : '';
  
  // Simple fade-in animation
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };
  
  return (
    <motion.div 
      className={`pink-diagonal-divider ${directionClass} ${variantClass}`}
      initial="initial"
      animate="animate"
      variants={containerVariants}
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="diagonal-pattern" />
    </motion.div>
  );
};

export default DirectionalDiagonalDivider;