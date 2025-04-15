# Bella Dresser Design Style Guide

## Core Design Philosophy

Bella Dresser's design embodies a "Funky Feminine Maximalism" approach - an exciting blend of retro-inspired elements, bold color combinations, organic shapes, and layered textures. The visual language creates an immersive, joyful experience that feels both nostalgic and contemporary.

## Color Palette

### Primary Colors
- **Vibrant Pink/Magenta** (#D9026D) - Bold, vibrant pink as signature color
- **Sunny Yellow** (#F7D94C) - Warm, cheerful yellow for highlights and energy
- **Leaf Green** (#3A7D44) - Rich, natural green for accents and contrast

### Secondary Colors
- **Lavender Mist** (#F0E8FF) - Soft, light purple for backgrounds and texture
- **Mint Cream** (#E8F5EA) - Fresh light green tone for balance
- **Peachy Pink** (#FF7E79) - Warm complement to main palette (retained for compatibility)
- **Tangerine Dream** (#FF8C42) - Energetic orange for strategic accents (retained for compatibility)

### Neutral Foundation
- **Dark Grey** (#333333) - Deep, rich grey for text (not pure black)
- **Off-White/Light Grey** (#F8F8F8) - Clean, neutral white for backgrounds
- **Medium Grey** (#666666) - Sophisticated neutral for secondary text

## Typography

### Headings
- **Primary**: "Hatton" (or "Clash Display") - Bold, retro-inspired with striking geometric features
- **Weights**: 600, 800
- **Styling**: Oversized, sometimes with subtle shadow or outline effects
- **Line height**: 1.1 (tight)

### Body Text
- **Primary**: "Cabinet Grotesk" - Contemporary with retro charm, highly readable
- **Weights**: 400 for body, 500 for emphasis
- **Line height**: 1.6 (spacious)

### Accent Font
- **Display**: "Voyage" - Playful, curvy serif for special elements
- **Application**: Large quotes, special callouts, decorative numbers

## Shapes & Elements

### Signature Shapes
- **Blobs**: Asymmetrical, organic shapes with soft edges
- **Geometric Contrast**: Circles intersected with sharp angles
- **Wavy Lines**: Undulating patterns that create rhythm and flow
- **Retro Arches**: Curved elements that frame content

### Section Dividers
- **Wave Dividers**: Multi-colored, overlapping wave patterns
- **Diagonal Slices**: Sharp angles with gradient overlays
- **Scalloped Edges**: Repeating curved shapes with texture
- **Blob Boundaries**: Organic, fluid transitions between sections

### Decorative Elements
- **Pattern Patches**: Geometric or dotted texture blocks
- **Floating Objects**: Small decorative elements that add depth
- **Gradient Orbs**: Soft, spherical highlights
- **Line Art**: Thin, playful illustrations as accents

## Component Design

### Buttons
- **Primary**: Pill-shaped with gradient background
- **Secondary**: Outlined with wavy borders
- **Hover States**: Scale up slightly (105%) with shadow intensification
- **Micro-interactions**: Subtle background pattern shift on hover

### Cards & Containers
- **Shape**: Soft, rounded corners (16-20px radius)
- **Borders**: Colorful highlights or pattern strips
- **Shadows**: Multi-layered with color tinting
- **Backgrounds**: Subtle patterns or gradient washes

### Navigation
- **Style**: Bold, oversized elements with playful indicators
- **Mobile**: Circular menu with radial animation
- **Active States**: Strong color shift with animated underline

### Form Elements
- **Inputs**: Floating labels with colorful focus states
- **Checkboxes/Radios**: Custom shapes with animated transitions
- **Dropdowns**: Expanded design with visual previews

## Layout Principles

### Grid System
- **Base**: 12-column flexible grid
- **Character**: Intentionally asymmetrical and dynamic
- **Spacing**: Variable rhythm with "breathing room" between sections
- **Alignment**: Strategic misalignment for visual interest

### Content Blocks
- **Arrangement**: Overlapping elements with depth
- **Hierarchy**: Bold size contrast between elements (1:3 ratio)
- **Whitespace**: Strategic emptiness to balance visual intensity
- **Composition**: Z-pattern reading flow with focal point anchors

### Section Structure
- **Pacing**: Alternating between high-density and minimal sections
- **Flow**: Curved visual pathways that guide the eye
- **Contrast**: Dramatic shifts between light/dark, busy/minimal

## Imagery Style

### Photography
- **Treatment**: High-contrast with subtle color grading
- **Subjects**: Candid, joyful, expressive
- **Backgrounds**: Interesting textures, bold colors
- **Composition**: Dynamic angles, unexpected framing

### Graphics & Illustrations
- **Style**: Hand-drawn elements mixed with geometric shapes
- **Application**: Supporting visuals that enhance messaging
- **Animation**: Subtle movements that add playfulness
- **Integration**: Seamless blending with photographs

## Animations & Transitions

### Principles
- **Character**: Bouncy, energetic, but refined
- **Timing**: 300-500ms for standard transitions
- **Easing**: Custom cubic-bezier curves that feel springy
- **Purpose**: Enhancing understanding, not just decoration

### Micro-interactions
- **Hover Effects**: Scale, color shift, and subtle movement
- **Scroll Reactions**: Elements that respond to page position
- **Click Feedback**: Satisfying visual and motion confirmation
- **Page Transitions**: Coordinated element movements between views

## Texture Treatments

### Surface Styles
- **Grain Overlays**: Subtle noise for depth and character
- **Paper Textures**: Light embossing effect for richness
- **Pattern Backgrounds**: Geometric or organic repeating elements
- **Gradient Meshes**: Complex color transitions for dimension

### Layer Effects
- **Overlapping Transparency**: Elements that interact visually
- **Drop Shadows**: Colored, offset for dimensional impact
- **Highlight Glints**: Strategic light reflections
- **Depth Maps**: Subtle lighting effects that create physical feeling

## Responsive Approach

### Mobile-First Principles
- **Simplification**: Maintaining bold character while streamlining
- **Touch Targets**: Generous, accessible interactive areas (min 44px)
- **Motion Efficiency**: Optimized animations for performance
- **Progressive Enhancement**: Core experience first, embellishments added for larger screens

### Breakpoint Philosophy
- **Fluid Design**: Elements that scale proportionally between breakpoints
- **Content Reflow**: Dramatic layout shifts that optimize for each screen size
- **Feature Parity**: Ensuring all devices get equally bold experiences
- **Device-Specific Enhancements**: Leveraging unique capabilities where available

## Implementation Guidelines

### CSS Custom Properties
```css
:root {
  /* Colors */
  --color-primary: #D9026D;
  --color-secondary: #F7D94C;
  --color-accent: #3A7D44;
  --color-highlight: #F7D94C;
  
  /* Typography */
  --font-heading: "Hatton", "Clash Display", sans-serif;
  --font-body: "Cabinet Grotesk", sans-serif;
  --font-accent: "Voyage", serif;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  
  /* Borders */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;
  
  /* Animations */
  --transition-fast: 200ms;
  --transition-base: 300ms;
  --transition-slow: 500ms;
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Tailwind Configuration
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#D9026D',
        secondary: '#F7D94C',
        accent: '#3A7D44',
        highlight: '#F7D94C',
        // ... other colors
      },
      fontFamily: {
        heading: ['Hatton', 'Clash Display', 'sans-serif'],
        body: ['Cabinet Grotesk', 'sans-serif'],
        accent: ['Voyage', 'serif'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'full': '9999px',
      },
      // ... other theme extensions
    },
  },
  // ... other config
}
```

### Component Examples

#### Button Component
```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, size, children }) => {
  const baseStyles = "transition-all duration-300 rounded-full font-body";
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:scale-105",
    secondary: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
};
```

#### Card Component
```tsx
interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white p-6 transition-all duration-300 hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
      <img 
        src={image} 
        alt={title}
        className="aspect-square w-full object-cover rounded-md mb-4"
      />
      <h3 className="font-heading text-xl mb-2">{title}</h3>
      <p className="font-body text-gray-600">{description}</p>
    </div>
  );
};
```

This style guide serves as the foundation for Bella Dresser's bold, funky, and sophisticated web presence. All new components and features should adhere to these guidelines while maintaining the playful and energetic spirit of the brand.
