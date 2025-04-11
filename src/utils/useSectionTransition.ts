import { useEffect, useRef, useState } from 'react';

interface SectionTransitionOptions {
  threshold?: number;
  rootMargin?: string;
  transitionType?: 'slide-up' | 'slide-right' | 'slide-left' | 'zoom';
  delay?: number;
}

/**
 * Hook to handle section transitions on scroll
 */
export const useSectionTransition = (options: SectionTransitionOptions = {}) => {
  const {
    threshold = 0.2,
    rootMargin = '0px',
    transitionType = 'slide-up',
    delay = 0
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Add transition classes
    currentRef.classList.add('section-transition', transitionType);
    
    // Set delay if provided
    if (delay > 0) {
      currentRef.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Add in-view class when section comes into view
          setIsInView(true);
          setTimeout(() => {
            currentRef.classList.add('in-view');
          }, 100); // Small delay for better visual effect
          
          // Once the section is in view, we don't need to observe it anymore
          observer.unobserve(currentRef);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
        currentRef.classList.remove('section-transition', transitionType, 'in-view');
      }
    };
  }, [threshold, rootMargin, transitionType, delay]);

  return { ref, isInView };
};

export default useSectionTransition;