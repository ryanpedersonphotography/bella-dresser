/**
 * Image utility functions for the Bella Dresser application
 * These functions help with image processing, styling, and optimization
 */

// Color grading presets for consistent image styling
export const colorGradingPresets = {
  vibrant: {
    saturation: 1.5,
    contrast: 1.2,
    brightness: 1.05,
    overlay: 'from-highlight/10 to-accent/10'
  },
  muted: {
    saturation: 0.9,
    contrast: 0.95,
    brightness: 1.0,
    overlay: 'from-lavender/10 to-mint/10'
  },
  duotone: {
    primary: 'primary',
    secondary: 'secondary',
    opacity: 0.3,
    blend: 'color'
  }
};

// Image mask shapes for creative cropping
export const maskShapes = {
  blob: "path('M60,0 C30,0 0,30 0,60 C0,90 30,120 60,120 C90,120 120,90 120,60 C120,30 90,0 60,0 Z')",
  diamond: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
};

// Helper function to generate CSS filter values for image effects
export const generateFilterValues = (
  saturation: number = 1,
  contrast: number = 1,
  brightness: number = 1
): string => {
  return `saturate(${saturation}) contrast(${contrast}) brightness(${brightness})`;
};

// Helper function to apply consistent image styling
export const getImageEffectClasses = (effect: string): string => {
  switch (effect) {
    case 'duotone':
      return 'relative after:absolute after:inset-0 after:bg-gradient-to-br after:from-primary/30 after:to-secondary/30 after:mix-blend-color';
    case 'vibrant':
      return 'relative after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:to-transparent after:saturate-[1.5] after:contrast-[1.2]';
    case 'pattern':
      return 'relative after:absolute after:inset-0 after:bg-noise after:opacity-20 after:mix-blend-overlay';
    default:
      return '';
  }
};

// Image optimization configuration
export const imageOptimizationConfig = {
  quality: 85,
  formats: ['webp', 'avif', 'jpg'],
  sizes: [400, 800, 1200, 1600],
  placeholder: 'blur'
};

// Function to generate responsive image srcset
export const generateSrcSet = (basePath: string, filename: string): string => {
  const sizes = imageOptimizationConfig.sizes;
  const format = 'webp'; // Default to webp for best compression/quality ratio
  
  return sizes
    .map(size => `${basePath}/${filename}-${size}.${format} ${size}w`)
    .join(', ');
};
