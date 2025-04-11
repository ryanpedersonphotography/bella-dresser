# Image Carousel Implementation Guide

## Overview

This document outlines the implementation of multi-image carousels in the Bella Dresser website. The carousels enhance visual storytelling by displaying multiple images in key sections, creating a more dynamic and engaging user experience.

## Implementation Details

### 1. ImageCarousel Component

The `ImageCarousel` component (`src/components/ImageCarousel.tsx`) provides a reusable, accessible carousel with the following features:

- Automatic image rotation with configurable timing
- Manual navigation with previous/next buttons
- Indicator dots for direct slide selection
- Smooth transitions between images
- Responsive design that maintains aspect ratio
- Hover effects that integrate with the site's design language

```tsx
// Example usage
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

## Future Enhancements

Consider these potential enhancements for the image carousels:

1. **Swipe Gestures**: Add touch/swipe gesture support for mobile users.

2. **Keyboard Navigation**: Enhance keyboard navigation for better accessibility.

3. **Caption Support**: Add optional captions that can appear with each image.

4. **Transition Effects**: Implement additional transition effects beyond the current fade.

5. **Lazy Loading**: Implement lazy loading for better performance with multiple high-resolution images.

## Integration with Design System

The carousel component integrates with the site's design system through:

- Consistent use of rounded corners (`rounded-2xl`)
- Shadow effects that match other components (`shadow-multi`)
- Hover animations that align with site interactions
- Color scheme that uses the established palette
- Backdrop blur effects for controls that maintain readability without obscuring content

This implementation enhances the visual storytelling of the site while maintaining the elegant, sophisticated aesthetic established in the design system.