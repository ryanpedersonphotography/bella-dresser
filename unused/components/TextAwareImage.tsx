import React, { useState, useRef, useEffect } from 'react';
import WatercolorBorderedImage from './WatercolorBorderedImage';

interface TextAwareImageProps {
  src: string;
  alt: string;
  textSelector: string;
  className?: string;
  borderColor?: string;
  borderOpacity?: number;
  borderWidth?: number;
  borderBlur?: number;
  initialPosition?: { x: number, y: number };
  transitionDuration?: number;
  safeMargin?: number;
}

const TextAwareImage: React.FC<TextAwareImageProps> = ({
  src,
  alt,
  textSelector,
  className = '',
  borderColor,
  borderOpacity,
  borderWidth,
  borderBlur,
  initialPosition = { x: 0, y: 0 },
  transitionDuration = 0.5,
  safeMargin = 20
}) => {
  const [position, setPosition] = useState(initialPosition);
  const imageRef = useRef<HTMLDivElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
  
  // Track if component is mounted to avoid state updates after unmount
  const isMounted = useRef(true);
  
  // Set initial position when it changes
  useEffect(() => {
    if (initialPosition && (initialPosition.x !== 0 || initialPosition.y !== 0)) {
      setPosition(initialPosition);
    }
  }, [initialPosition]);
  
  useEffect(() => {
    // Set mounted flag
    isMounted.current = true;
    
    return () => {
      isMounted.current = false;
    };
  }, []);
  
  useEffect(() => {
    // Function to calculate image position that avoids text
    const calculateSafePosition = () => {
      if (!imageRef.current || !isMounted.current) return;
      
      const imageRect = imageRef.current.getBoundingClientRect();
      const textElements = document.querySelectorAll(textSelector);
      
      if (textElements.length === 0) return;
      
      // Start with current position
      let newX = position.x;
      let newY = position.y;
      let hasCollision = false;
      
      // Check for collisions with each text element
      textElements.forEach(textElement => {
        const textRect = textElement.getBoundingClientRect();
        
        // Check if image and text rectangles overlap
        const overlap = !(
          imageRect.right + safeMargin < textRect.left ||
          imageRect.left - safeMargin > textRect.right ||
          imageRect.bottom + safeMargin < textRect.top ||
          imageRect.top - safeMargin > textRect.bottom
        );
        
        if (overlap) {
          hasCollision = true;
          
          // Calculate the center points
          const textCenterX = textRect.left + textRect.width / 2;
          const textCenterY = textRect.top + textRect.height / 2;
          const imageCenterX = imageRect.left + imageRect.width / 2;
          const imageCenterY = imageRect.top + imageRect.height / 2;
          
          // Determine the direction to move (away from text)
          const moveX = imageCenterX < textCenterX ? -1 : 1;
          const moveY = imageCenterY < textCenterY ? -1 : 1;
          
          // Calculate how much to move
          // If the overlap is more horizontal than vertical, prioritize horizontal movement
          if (Math.abs(textCenterX - imageCenterX) < Math.abs(textCenterY - imageCenterY)) {
            // More vertical overlap - move vertically
            newY += moveY * 10;
          } else {
            // More horizontal overlap - move horizontally
            newX += moveX * 10;
          }
        }
      });
      
      // Only update position if there was a collision
      if (hasCollision) {
        // Ensure the image stays within viewport bounds
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Constrain x position
        newX = Math.max(0, Math.min(newX, viewportWidth - imageRect.width));
        
        // Constrain y position
        newY = Math.max(0, Math.min(newY, viewportHeight - imageRect.height));
        
        if (isMounted.current) {
          setPosition({ x: newX, y: newY });
        }
      }
    };
    
    // Initial calculation with a slight delay to ensure DOM is ready
    const initialTimer = setTimeout(() => {
      calculateSafePosition();
    }, 300);
    
    // Set up resize observer to recalculate on size changes
    resizeObserverRef.current = new ResizeObserver(() => {
      calculateSafePosition();
    });
    
    if (imageRef.current) {
      resizeObserverRef.current.observe(imageRef.current);
    }
    
    // Set up intersection observer to monitor text elements
    intersectionObserverRef.current = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        calculateSafePosition();
      }
    }, { threshold: 0.1 });
    
    // Observe all text elements
    document.querySelectorAll(textSelector).forEach(element => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.observe(element);
      }
    });
    
    // Add scroll and resize listeners
    window.addEventListener('scroll', calculateSafePosition);
    window.addEventListener('resize', calculateSafePosition);
    
    // Set up a mutation observer to detect DOM changes
    const mutationObserver = new MutationObserver(() => {
      calculateSafePosition();
    });
    
    // Observe the entire document for changes
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
    
    // Clean up
    return () => {
      clearTimeout(initialTimer);
      isMounted.current = false;
      mutationObserver.disconnect();
      if (resizeObserverRef.current && imageRef.current) {
        resizeObserverRef.current.unobserve(imageRef.current);
      }
      
      if (intersectionObserverRef.current) {
        document.querySelectorAll(textSelector).forEach(element => {
          intersectionObserverRef.current?.unobserve(element);
        });
      }
      
      window.removeEventListener('scroll', calculateSafePosition);
      window.removeEventListener('resize', calculateSafePosition);
    };
  }, [position, textSelector, safeMargin]);
  
  return (
    <div 
      ref={imageRef}
      className={`${className}`}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: `left ${transitionDuration}s ease-out, top ${transitionDuration}s ease-out`,
        zIndex: 10
      }}
    >
      <WatercolorBorderedImage
        src={src}
        alt={alt}
        borderColor={borderColor}
        borderOpacity={borderOpacity}
        borderWidth={borderWidth}
        borderBlur={borderBlur}
      />
    </div>
  );
};

export default TextAwareImage;