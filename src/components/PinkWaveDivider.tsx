import React from 'react';

interface PinkWaveDividerProps {
  variant?: 'default' | 'hero' | 'bottom';
}

/**
 * PinkWaveDivider Component
 * Creates animated wavy pink ribbons that flow across the screen
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
  
  return (
    <div className={`pink-wave-divider ${variantClass}`}></div>
  );
};

export default PinkWaveDivider;