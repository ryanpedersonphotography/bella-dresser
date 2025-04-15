  # Enhanced Hero Slideshow & Arrow Navigation Guide

This guide explains the implementation and usage of the enhanced hero slideshow with bespoke pink arrow buttons and creative copy for the Bella Dresser website, as well as the consistent arrow navigation used throughout the site.

## Overview

The enhanced hero slideshow creates a dynamic, engaging introduction to the Bella Dresser brand. It features:

1. Four slides with high-quality fashion images
2. Sleek pink arrow navigation buttons positioned at the bottom
3. Creative, compelling copy for each slide
4. Smooth, slower transitions between slides (8 seconds per slide)
5. Custom slide indicators
6. Responsive design that works on all devices

## Implementation Details

### Keen Slider Integration

The slideshow now uses Keen Slider, a lightweight and high-performance slider library that provides:

1. Improved touch/swipe support for mobile devices
2. Better performance with smoother animations
3. More responsive controls
4. Reduced code complexity

```jsx
// Set up Keen Slider
const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
  initial: 0,
  loop: true,
  slideChanged(slider) {
    setCurrentSlide(slider.track.details.rel);
  },
  created() {
    setLoaded(true);
  },
  slides: {
    perView: 1,
    spacing: 0,
  },
  renderMode: 'custom',
}, [
  // Auto-play plugin implementation
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
      }, 8000); // 8 seconds per slide
    }
    
    // Event listeners for auto-play functionality
    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  },
]);
```

### Components

The slideshow is implemented in the `EnhancedHeroSlideshow.tsx` component, which replaces the previous static `HeroSection` component.

### Styling

The styles for the slideshow are defined in `src/styles/hero-slider.css`, which is imported in `src/main.tsx`.

### Features

#### 1. Sleek Pink Arrow Buttons

Minimalist pink arrow buttons positioned at the bottom of the hero section provide an elegant navigation experience while reinforcing the brand's signature color.

```jsx
<button
  className="slider-arrow-simple slider-arrow-left"
  onClick={goToPrevSlide}
  aria-label="Previous slide"
>
  <ArrowLeft size={20} />
</button>

<button
  className="slider-arrow-simple slider-arrow-right"
  onClick={goToNextSlide}
  aria-label="Next slide"
>
  <ArrowRight size={20} />
</button>
```

#### 2. Creative Copy for Each Slide

Each slide features carefully crafted copy that tells a compelling story about the brand:

- **Slide 1: "Elevate Your Essence"** - Focuses on personal style and the blend of European sophistication with Minnesota charm
- **Slide 2: "Lakeside Luxe"** - Highlights versatile pieces that transition from day to evening activities
- **Slide 3: "Uniquely You"** - Emphasizes the personalized styling experience
- **Slide 4: "Dress to Impress"** - The original hero copy with an improved image, highlighting the boutique collection

#### 3. Improved Images

The slideshow uses high-quality, professionally styled fashion images that:

- Feature diverse models
- Showcase the brand's aesthetic
- Have been optimized for web performance
- Create visual interest with varied compositions

#### 4. Smooth Transitions

The slideshow includes smooth fade and scale transitions between slides, creating a polished, professional experience.

```css
.slide-enter {
  opacity: 0;
  transform: scale(1.05);
}

.slide-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 800ms, transform 800ms;
}
```

#### 5. Custom Slide Indicators

Custom slide indicators at the bottom of the slideshow show the current slide position and allow users to navigate directly to any slide.

```jsx
<div className="slide-indicators">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
      aria-label={`Go to slide ${index + 1}`}
    ></button>
  ))}
</div>
```

## Slide Content

### Slide 1: Dress to Impress

- **Image**: Improved boutique collection image
- **Title**: "Dress to Impress"
- **Subtitle**: "Your Style Journey Begins Here"
- **Description**: "Step into a world of curated fashion where European elegance meets Minnesota charm. Our boutique collection features handpicked pieces that celebrate individuality and timeless style. From lakeside casual to evening sophistication, find your perfect look for every occasion and season."
- **CTA**: "Shop Now"

### Slide 2: Elevate Your Essence

- **Image**: Professional fashion model in spring attire
- **Title**: "Elevate Your Essence"
- **Subtitle**: "Spring Collection 2025"
- **Description**: "Discover pieces that speak to your soul and elevate your personal style narrative. Our curated collection blends European sophistication with Minnesota's free-spirited charm."
- **CTA**: "Explore Collection"

### Slide 3: Lakeside Luxe

- **Image**: Model showcasing versatile summer fashion
- **Title**: "Lakeside Luxe"
- **Subtitle**: "Summer Essentials"
- **Description**: "From sunrise kayaking to sunset soirées, our versatile pieces transition effortlessly through your day. Embrace the season with fabrics that breathe and silhouettes that celebrate."
- **CTA**: "Shop Summer"

### Slide 4: Uniquely You

- **Image**: Personalized styling session
- **Title**: "Uniquely You"
- **Subtitle**: "Personalized Style Journey"
- **Description**: "Your wardrobe should tell your story. Our stylists craft personalized experiences that honor your individuality while introducing you to unexpected pieces that become signature favorites."
- **CTA**: "Book Styling"

## Customization

### Changing Slide Content

To update the slide content, modify the `slides` array in `EnhancedHeroSlideshow.tsx`:

```jsx
const slides = [
  {
    image: "path/to/image.jpg",
    title: "Your Title",
    subtitle: "Your Subtitle",
    description: "Your description text goes here.",
    ctaText: "Button Text",
    ctaLink: "/your-link"
  },
  // Additional slides...
];
```

### Adjusting Timing with Keen Slider

With Keen Slider, the timing is controlled through the auto-play plugin:

```jsx
function nextTimeout() {
  clearTimeout(timeout);
  if (mouseOver) return;
  timeout = setTimeout(() => {
    slider.next();
  }, 8000); // 8 seconds per slide
}
```

To change the timing, modify the timeout value (8000ms) in the nextTimeout function.

To change how long each slide displays, modify the interval time in the `useEffect` hook:

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    goToNextSlide();
  }, 8000); // Changed from 6000ms to 8000ms for slower transitions
  
  return () => clearInterval(interval);
}, [currentSlide]);
```

### Arrow Styling Changes

The arrow buttons have been redesigned to be:

1. Positioned at the bottom of the hero section instead of centered vertically
2. Smaller and more subtle (20px instead of 24px)
3. Simple arrow shapes without circular backgrounds
4. Pure pink color with a drop shadow that follows site guidelines

```css
.slider-arrow-simple {
  position: absolute;
  bottom: 100px; /* Positioned toward bottom of hero */
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  border: none;
  color: #FF00FF; /* Electric Fuchsia */
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}
```

### Other Styling Changes

To modify the appearance of the slideshow elements, edit the CSS in `src/styles/hero-slider.css`.

## Accessibility Features

The enhanced hero slideshow includes several accessibility features:

1. Proper ARIA labels for navigation buttons
2. Keyboard navigation support
3. Sufficient color contrast for text readability
4. Pause on hover/focus (to be implemented)

## Benefits

1. **Enhanced Brand Storytelling**: The slideshow tells a more complete story about the brand through compelling visuals and copy
2. **Improved User Engagement**: Interactive elements and smooth animations keep users engaged
3. **Stronger Visual Impact**: High-quality images create a powerful first impression
4. **Clear Call-to-Actions**: Each slide has a specific, targeted CTA to guide users
5. **Brand Reinforcement**: The custom pink arrows reinforce the brand's signature color

This enhanced hero slideshow transforms the website's introduction from a static hero section to a dynamic, engaging experience that better showcases the Bella Dresser brand and its offerings.

## Keen Slider Benefits

The migration to Keen Slider provides several advantages:

1. **Improved Performance**: Keen Slider uses modern techniques for smoother animations and transitions
2. **Better Mobile Experience**: Enhanced touch and swipe support for mobile users
3. **Reduced Bundle Size**: Lightweight library with minimal dependencies
4. **Simplified Maintenance**: Cleaner code structure that's easier to maintain and update
5. **Advanced Features**: Access to additional features like drag constraints, responsive options, and event hooks

## Consistent Arrow Navigation

The same arrow style has been implemented across the site for a consistent user experience:

### Components Using the Arrow Style

1. **Hero Slideshow**: Main hero section with four slides
2. **Image Carousel**: Product and feature image carousels throughout the site

### Implementation

The arrow style is defined in `src/styles/hero-slider.css` and used in both components:

```css
.slider-arrow-simple {
  position: absolute;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  border: none;
  color: #FF00FF; /* Electric Fuchsia */
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}
```

### Usage in Image Carousel

```jsx
<button
  onClick={goToPrevious}
  className="slider-arrow-simple slider-arrow-left absolute bottom-12 left-4 z-20"
  aria-label="Previous image"
>
  <ArrowLeft size={20} />
</button>

<button
  onClick={goToNext}
  className="slider-arrow-simple slider-arrow-right absolute bottom-12 right-4 z-20"
  aria-label="Next image"
>
  <ArrowRight size={20} />
</button>
```

### Benefits of Consistent Navigation

1. **Improved Usability**: Users learn the navigation pattern once and can apply it throughout the site
2. **Brand Reinforcement**: Consistent use of the signature pink color strengthens brand identity
3. **Visual Cohesion**: Creates a unified look and feel across different components
4. **Reduced Cognitive Load**: Users don't need to learn different navigation patterns for different carousels

## Installation and Setup

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