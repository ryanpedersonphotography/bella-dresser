# Bella Dresser Boutique - Site Documentation

> **Design Update:** A [Design Refinement Plan](./design-refinement-plan.md) has been created to address several design improvements including gradient text refinement, button sizing consistency, dynamic section dividers, enhanced text styling, and new textures. Additionally, a [Sticky Navbar Implementation](./sticky-navbar-implementation.md) has been added to enhance the hero section experience.
>
> **Component Update:** All sliders and carousels have been migrated to [Keen Slider](https://keen-slider.io/) for improved performance, mobile support, and user experience. See the [Enhanced Hero Slideshow Guide](./enhanced-hero-slideshow-guide.md) and [Image Carousel Implementation](./image-carousel-implementation.md) for details.

## Table of Contents
1. [Technical Architecture](#technical-architecture)
2. [Design System](#design-system)
3. [Pages & Components](#pages--components)
4. [Site Analysis](#site-analysis)
5. [Brand Identity](#brand-identity)
6. [Improvement Plan](#improvement-plan)

## Technical Architecture

### Stack
- **Frontend Framework**: React with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Lucide React for icons
- **Dependencies**:
  - keen-slider for carousel and slideshow functionality
  - use-interval (legacy, being phased out)

### Project Structure
```
bella-dresser/
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── HeroSlideshow.tsx
│   │   └── Navbar.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
└── [config files]
```

## Design System

### Color Palette (Current)
- Primary: Pink (#f9a8d4, pink-500)
- Secondary: White/Gray backgrounds
- Dark: Gray-900 for footer/dark sections
- Overlays: Gradient combinations (black/transparent)

### Typography
- Headings: "Playfair Display" (font-script class)
  - Weights: 400, 600, 700
- Body: System font stack
- Special classes: font-script for elegant text

### Visual Elements
- Texture Patterns:
  - Pink geometric pattern (background-image SVG)
  - Fabric textures in sections
  - Gradient overlays on images
- Shapes:
  - Rounded corners (lg, xl, full variants)
  - Decorative circles behind images
  - Diagonal sections (-skew-y-3)
- Animations:
  - Float animation for elements
  - Hover transitions on cards/buttons
  - Slideshow transitions

### Component Styles
- Buttons:
  - Primary: Pink background with hover darkening
  - Secondary: White/transparent with border
  - Rounded-full style
- Cards:
  - Shadow effects
  - Hover scaling
  - Gradient overlays
- Sections:
  - Full-width with max-w-7xl containers
  - Varied background styles
  - Responsive padding/margins

## Pages & Components

### Pages

#### Home Page
1. Hero Section
   - Full-screen slideshow using Keen Slider
   - 4 rotating slides with content
   - Overlay text and CTA buttons
   - Slide indicators
   - Touch/swipe support for mobile

2. Latest Arrivals
   - 3-column product grid
   - Hover effects on images
   - Background texture

3. European Elegance Section
   - Diagonal skew design
   - Two-column layout
   - Decorative shapes
   - Background texture

4. Small Town Boutique
   - Contrasting pink background
   - Image with content
   - Circular decorative elements

5. Fashion Lookbook (currently disabled)
   - Showcase of seasonal collections
   - Enhanced image effects
   - Product gallery
   - Visual storytelling elements

6. Boutique Experience
   - Three feature cards
   - Subtle gradient backgrounds
   - Hover animations

6. Newsletter Section
   - Dark background
   - Email subscription form
   - Texture overlay

#### About Page
- Two-column layout
- Owner biography (Aneta)
- Large feature image
- Quote callout
- Polish heritage emphasis

### Components
#### Navbar
```typescript
Features:
- Dual-mode navigation (transparent in hero, solid when sticky)
- Integrated within hero section on homepage
- Fixed top navigation on other pages
- Logo with adaptive styling based on background
- Responsive design
- Hover effects on links
- Smooth transition animations
- Streamlined navigation without "Shop Now" button
```

See the [Sticky Navbar Implementation Guide](./sticky-navbar-implementation.md) for detailed information on the transparent-to-sticky navbar behavior.
```

#### Footer
```typescript
Features:
- Three-column layout
- Contact information
- Social media links
- Dark theme
- Icon integration
```

#### EnhancedHeroSlideshow
```typescript
Features:
- Keen Slider integration
- Auto-rotating slides
- Content overlay
- Navigation dots with bottom-aligned arrows
- Gradient backgrounds
- CTA buttons
- Touch/swipe support
- Improved performance
- Pause on hover
- Bottom-positioned navigation arrows aligned with dots
```

#### ImageCarousel
```typescript
Features:
- Keen Slider integration
- Auto-rotating images
- Navigation arrows with optimized hover effects
- Indicator dots flush with content
- Touch/swipe support
- Configurable timing
- Responsive design
- Fixed arrow positioning to prevent hover glitches
```

## Site Analysis

### Current Strengths
1. Clean, modern design foundation
2. Consistent branding elements
3. Responsive layout structure
4. Performance-optimized images
5. Thoughtful typography hierarchy
6. Enhanced mobile experience with touch support
7. Optimized carousel and slideshow components

### Areas for Improvement
1. Color Palette
   - Need bolder, more vibrant colors
   - More adventurous combinations
   - Stronger contrast points

2. Layout Innovation
   - More dynamic arrangements
   - Creative section dividers
   - Asymmetrical designs
   - Enhanced grid systems
   - Improved component alignment and positioning

3. Visual Elements
   - Additional texture patterns
   - More decorative shapes
   - Increased animation usage
   - Bold graphic elements

4. Content Expansion
   - Product catalog integration
   - Customer testimonials
   - Enhanced interactivity
   - Contact functionality

5. Navigation
   - Streamlined structure
   - Mobile optimization
   - Additional user pathways
   - Simplified navigation without distracting buttons

## Brand Identity

### Core Identity
- **Name**: Bella Dresser
- **Location**: Pequot Lakes, Minnesota
- **Unique Selling Point**: European fashion meets Minnesota charm
- **Owner**: Aneta (Polish background)

### Target Audience
- Primary: Fashion-conscious women in Minnesota
- Secondary: Tourists and seasonal residents
- Interests: Unique fashion, personal styling, quality clothing

### Brand Voice
- Sophisticated yet approachable
- European influence
- Personal connection
- Quality-focused
- Community-oriented

## Improvement Plan

### Latest Design Refinements
A detailed [Design Refinement Plan](./design-refinement-plan.md) has been created to address specific design improvements:

1. **Gradient Text Refinement** - Less colorful, more elegant gradient text options
2. **Button Sizing Consistency** - Standardized button sizes with consistent proportions
3. **Dynamic Section Dividers** - More feminine, flowing section dividers
4. **Enhanced Text-Cosmic** - Larger, more playful text variants
5. **Pink Wool Texture** - New bright pink wool texture for backgrounds
6. **Sticky Navbar in Hero** - Transparent navbar integrated in hero section that becomes sticky on scroll

These refinements are documented with implementation details and will be incorporated in the next development phase.

### Recent Technical Improvements
1. **Keen Slider Integration** - All carousels and slideshows have been migrated to Keen Slider for:
   - Improved performance and smoother animations
   - Better mobile experience with touch/swipe support
   - Reduced code complexity and maintenance
   - Enhanced user experience
   - Optimized navigation with properly positioned arrows and indicators

2. **Navigation Refinements** - The navigation has been streamlined by:
   - Removing the "Shop Now" button for cleaner navigation
   - Aligning carousel navigation elements for visual consistency
   - Fixing hover effects on carousel arrows to prevent position shifting
   - Enhanced user experience

2. **Content Optimization** - The Fashion Lookbook section has been temporarily disabled to:
   - Streamline the user journey
   - Focus attention on core offerings
   - Improve page load performance
   - Prepare for future content updates

### Phase 1: Visual Refresh
- Implement vibrant color palette
- Add dynamic patterns
- Create custom section dividers
- Enhance animations

### Phase 2: Layout Enhancement
- Redesign section layouts
- Add asymmetrical elements
- Improve mobile experience
- Enhance navigation

### Phase 3: Content Expansion
- Add product catalog
- Create store gallery
- Implement testimonials
- Add store events

### Phase 4: Functionality
- Contact form
- Store locator
- Hours display
- Social media integration

### Design Direction
The site should evolve toward a more bold, vibrant, and distinctive visual direction while maintaining the boutique's sophisticated essence. Key focus areas:

1. **Colors**
   - Bright pinks and purples
   - Bold complementary accents
   - Playful color combinations

2. **Patterns**
   - Custom geometric designs
   - Organic shapes
   - Layered textures

3. **Layout**
   - Unconventional grids
   - Overlapping elements
   - Dynamic spacing

4. **Animation**
   - Scroll effects
   - Hover interactions
   - Page transitions

This documentation serves as a comprehensive reference for the Bella Dresser website's current state and future development direction. It should be updated as new features are implemented and design decisions are made.
