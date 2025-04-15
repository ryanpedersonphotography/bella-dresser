# Sticky Navbar Implementation Guide

This guide explains the implementation of the sticky navigation bar that shrinks when scrolling past the hero section on the Bella Dresser website.

## Overview

The sticky navbar enhances the user experience by:

1. Providing persistent navigation access throughout the site
2. Adapting its appearance based on scroll position
3. Transitioning smoothly between states
4. Maintaining visual hierarchy while preserving screen real estate

## Implementation Details

### Key Features

1. **Transparent Overlay on Hero**: 
   - On the home page, the navbar starts as transparent, overlaying the hero section
   - On other pages, it maintains a solid background

2. **Scroll-Aware Behavior**:
   - Detects scroll position relative to the viewport
   - Transitions to a compact, solid state when scrolling past the hero section
   - Uses different scroll thresholds for home page vs. other pages

3. **Responsive Size Changes**:
   - Reduces height when scrolled
   - Scales down logo and text
   - Maintains touch target sizes for accessibility

4. **Smooth Transitions**:
   - All size and appearance changes are animated
   - Uses CSS transitions for performance

### Component Structure

The navbar implementation consists of:

1. **State Management**:
   - `scrolled`: Tracks whether the user has scrolled past the threshold
   - `isHome`: Determines if we're on the home page for different behavior

2. **Scroll Detection**:
   - Uses `useEffect` to add a scroll event listener
   - Calculates appropriate threshold based on page type
   - Removes event listener on component unmount

3. **Conditional Styling**:
   - Applies different classes based on scroll state and page type
   - Transitions between transparent and solid backgrounds
   - Adjusts element sizes based on scroll state

4. **Fixed Positioning**:
   - Uses `fixed` positioning to keep the navbar at the top of the viewport
   - Adds appropriate padding to the main content to prevent overlap

## Code Implementation

### Navbar Component

The Navbar component uses React hooks to manage state and detect scroll position:

```tsx
// Key scroll detection logic
useEffect(() => {
  const handleScroll = () => {
    // For home page, we want to detect when we've scrolled past the hero
    // For other pages, we want to detect any scroll
    const scrollThreshold = isHome ? window.innerHeight * 0.8 : 50;
    
    if (window.scrollY > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Initial check
  handleScroll();
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [isHome]);
```

### CSS Transitions

The navbar uses CSS transitions for smooth state changes:

```css
/* Applied via Tailwind classes */
transition-all duration-300
```

### Layout Adjustments

To accommodate the fixed navbar:

1. The main content area has padding-top added:
   ```tsx
   <main className="pt-24">
   ```

2. The home page hero section uses negative margin to overlay the navbar:
   ```tsx
   <div className="relative -mt-24">
   ```

## Design Considerations

### Visual Hierarchy

1. **Initial State**:
   - Larger, more prominent navbar when at the top of the page
   - Transparent background on home page to showcase the hero image
   - Full-size logo and navigation items

2. **Scrolled State**:
   - Compact navbar that takes less vertical space
   - Solid background with subtle shadow for depth
   - Reduced size for logo and navigation items while maintaining readability

### Accessibility

1. **Text Contrast**:
   - Ensures text remains readable against both transparent and solid backgrounds
   - Maintains sufficient contrast ratios in all states

2. **Interactive Elements**:
   - Navigation links and buttons maintain adequate touch target sizes even in compact mode
   - Hover and focus states are clearly visible

3. **Motion Considerations**:
   - Transitions are smooth but not disruptive
   - Duration is short enough to feel responsive

## Mobile Considerations

The mobile version of the navbar:

1. Maintains the same scroll-aware behavior
2. Uses a hamburger menu for navigation items
3. Ensures the toggle button is easily accessible
4. Provides a full-screen overlay menu when opened

## Integration with Brand Identity

The navbar implementation:

1. Uses the brand's color palette for backgrounds and accents
2. Incorporates the colorful top border as a brand element
3. Maintains the "Funky Feminine Maximalism" aesthetic while being functional
4. Uses the brand's typography system consistently

This sticky navbar implementation enhances the overall user experience by providing persistent navigation while adapting to the user's context in an elegant, on-brand manner.