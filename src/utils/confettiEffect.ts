/**
 * Confetti Effect Utility
 * Creates and animates confetti pieces within confetti dividers
 */

/**
 * Creates confetti pieces within a container element
 * @param container - The DOM element to add confetti pieces to
 */
export function createConfetti(container: HTMLElement): void {
  const confettiCount = 20;
  
  for (let i = 0; i < confettiCount; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    
    // Randomize position, size, and animation delay
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.width = `${5 + Math.random() * 10}px`;
    piece.style.height = `${5 + Math.random() * 10}px`;
    piece.style.opacity = `${0.1 + Math.random() * 0.2}`;
    piece.style.animationDelay = `${Math.random() * 4}s`;
    
    container.appendChild(piece);
  }
}

/**
 * Initialize confetti effects on all confetti dividers
 * Call this function after the DOM is loaded
 */
export function initConfettiEffects(): void {
  // Use setTimeout to ensure DOM is fully loaded
  setTimeout(() => {
    const confettiDividers = document.querySelectorAll('.pink-confetti-divider');
    confettiDividers.forEach(divider => {
      createConfetti(divider as HTMLElement);
    });
  }, 100);
}