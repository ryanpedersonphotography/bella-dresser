# Image Carousel Implementation Guide

## Overview

This document outlines the implementation of multi-image carousels in the Bella Dresser website. The carousels enhance visual storytelling by displaying multiple images in key sections, creating a more dynamic and engaging user experience.

## Implementation Details

### 1. ImageCarousel Component with Keen Slider

The `ImageCarousel` component (`src/components/ImageCarousel.tsx`) has been upgraded to use Keen Slider, a modern, lightweight slider library. This provides a reusable, accessible carousel with the following features:

- Automatic image rotation with configurable timing
- Manual navigation with previous/next buttons
- Indicator dots for direct slide selection
- Smooth transitions between images
- Responsive design that maintains aspect ratio
- Hover effects that integrate with the site's design language
- Touch/swipe support for mobile devices
- Improved performance and animations
- Reduced code complexity

```tsx
// Example usage with Keen Slider
<ImageCarousel
  images={[
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      alt: "Boutique interior with elegant displays"
    },
    {
      src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
      alt: "European-inspired fashion collection"
    }
  ]}
  autoplaySpeed={6000}
  className="additional-classes-here"
/>
```

#### Keen Slider Implementation

The component uses the `useKeenSlider` hook to create and manage the slider:

```tsx
const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
  initial: 0,
  loop: true,
  slideChanged(slider) {
    setCurrentSlide(slider.track.details.rel);
  },
  created() {
    setLoaded(true);
  },
}, [
  // Auto-play plugin
  (slider) => {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;
    
    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, autoplaySpeed);
    }
    
    // Event listeners for auto-play functionality
    slider.on("created", () => {
      if (autoplaySpeed > 0) {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      }
    });
    
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  },
]);
```

### 2. Implemented Carousels

The carousels have been implemented in two key sections:

#### European Elegance Section

```tsx
<ImageCarousel
  images={[
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3",
      alt: "Boutique interior with elegant displays"
    },
    {
      src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3",
      alt: "European-inspired fashion collection"
    },
    {
      src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3",
      alt: "Sophisticated boutique styling"
    },
    {
      src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3",
      alt: "Elegant clothing display"
    }
  ]}
  autoplaySpeed={6000}
  className="group-hover:shadow-2xl transition-all duration-500"
/>
```

#### Small Town Boutique Section

```tsx
<ImageCarousel
  images={[
    {
      src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3",
      alt: "Boutique collection display"
    },
    {
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3",
      alt: "Small town boutique style"
    },
    {
      src: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3",
      alt: "Contemporary fashion collection"
    },
    {
      src: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3",
      alt: "Lakeside fashion display"
    }
  ]}
  autoplaySpeed={5000}
  className="group-hover:shadow-2xl transition-all duration-500"
/>
```

## Image Selection Guidelines

When selecting images for the carousels, follow these guidelines:

1. **Visual Consistency**: Choose images with similar color tones and lighting to maintain visual harmony during transitions.

2. **Storytelling Sequence**: Arrange images in a logical sequence that tells a story or showcases different aspects of the same theme.

3. **Aspect Ratio**: Maintain a consistent aspect ratio (4:5 is used in the current implementation) for all images in a carousel.

4. **Image Quality**: Use high-resolution images (at least 1200px wide) that remain sharp on larger screens.

5. **Accessibility**: Provide descriptive alt text for each image that conveys its content and context.

## Implemented Enhancements

With the migration to Keen Slider, several previously planned enhancements have been implemented:

1. ✅ **Swipe Gestures**: Touch/swipe gesture support for mobile users is now available through Keen Slider's built-in touch handling.

2. ✅ **Improved Performance**: Keen Slider provides optimized animations and transitions for smoother operation.

3. ✅ **Better Mobile Support**: The carousel now works seamlessly across all devices with proper touch support.

## Future Enhancements

Consider these additional potential enhancements for the image carousels:

1. **Keyboard Navigation**: Further enhance keyboard navigation for better accessibility.

2. **Caption Support**: Add optional captions that can appear with each image.

3. **Additional Transition Effects**: Explore Keen Slider's animation options for varied transition effects.

4. **Lazy Loading**: Implement lazy loading for better performance with multiple high-resolution images.

5. **Thumbnails**: Add thumbnail navigation for image collections.

## Integration with Design System

The carousel component integrates with the site's design system through:

- Consistent use of rounded corners (`rounded-2xl`)
- Shadow effects that match other components (`shadow-multi`)
- Hover animations that align with site interactions
- Color scheme that uses the established palette
- Backdrop blur effects for controls that maintain readability without obscuring content

This implementation enhances the visual storytelling of the site while maintaining the elegant, sophisticated aesthetic established in the design system.

## Keen Slider Installation and Setup

To use Keen Slider in your project:

1. Install the package:
   ```bash
   npm install keen-slider
   ```

2. Import the necessary components:
   ```jsx
   import { useKeenSlider } from 'keen-slider/react';
   import 'keen-slider/keen-slider.min.css';
   ```

3. Initialize the slider with your desired configuration:
   ```jsx
   const [sliderRef, instanceRef] = useKeenSlider({
     initial: 0,
     loop: true,
     // Additional options...
   });
   ```

4. Apply the ref to your container element:
   ```jsx
   <div ref={sliderRef} className="keen-slider">
     {/* Slides go here */}
   </div>
   ```

For more details, refer to the [Keen Slider documentation](https://keen-slider.io/docs).

## Benefits of Keen Slider

The migration to Keen Slider provides several advantages:

1. **Improved Performance**: Keen Slider uses modern techniques for smoother animations and transitions
2. **Better Mobile Experience**: Enhanced touch and swipe support for mobile users
3. **Reduced Bundle Size**: Lightweight library with minimal dependencies
4. **Simplified Maintenance**: Cleaner code structure that's easier to maintain and update
5. **Advanced Features**: Access to additional features like drag constraints, responsive options, and event hooks