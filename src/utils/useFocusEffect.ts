import { useEffect, useRef, useState } from 'react';

interface FocusEffectOptions {
  outlineColor?: string;
  outlineWidth?: string;
  outlineStyle?: string;
  outlineOffset?: string;
  transitionDuration?: string;
  pulseEffect?: boolean;
  scaleEffect?: boolean;
}

/**
 * Hook to enhance focus states with custom effects
 */
export const useFocusEffect = <T extends HTMLElement>(options: FocusEffectOptions = {}) => {
  const {
    outlineColor = 'rgba(255, 0, 255, 0.5)',
    outlineWidth = '3px',
    outlineStyle = 'solid',
    outlineOffset = '2px',
    transitionDuration = '0.2s',
    pulseEffect = false,
    scaleEffect = false
  } = options;

  const ref = useRef<T | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleFocus = () => {
      setIsFocused(true);
      
      // Apply custom focus styles
      element.style.outline = `${outlineWidth} ${outlineStyle} ${outlineColor}`;
      element.style.outlineOffset = outlineOffset;
      element.style.transition = `all ${transitionDuration} ease-out`;
      
      if (pulseEffect) {
        element.classList.add('animate-pulse-glow');
      }
      
      if (scaleEffect) {
        element.style.transform = 'scale(1.02)';
      }
    };

    const handleBlur = () => {
      setIsFocused(false);
      
      // Reset styles
      element.style.outline = '';
      element.style.outlineOffset = '';
      
      if (pulseEffect) {
        element.classList.remove('animate-pulse-glow');
      }
      
      if (scaleEffect) {
        element.style.transform = '';
      }
    };

    element.addEventListener('focus', handleFocus);
    element.addEventListener('blur', handleBlur);

    return () => {
      element.removeEventListener('focus', handleFocus);
      element.removeEventListener('blur', handleBlur);
    };
  }, [outlineColor, outlineWidth, outlineStyle, outlineOffset, transitionDuration, pulseEffect, scaleEffect]);

  return { ref, isFocused };
};

export default useFocusEffect;