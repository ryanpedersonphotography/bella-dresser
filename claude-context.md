# Claude Context - Bella's Dresser Project

## Instructions for Claude
1. **ALWAYS read this file completely before starting any task**
2. **After completing any task, update relevant sections with changes made**
3. **Update the timestamp and Recent Changes Log at the bottom**
4. **If you create new patterns or solve new challenges, document them**

## Project Overview
**Bella's Dresser** is a boutique website for a European-style fashion store in Pequot Lakes, Minnesota, owned by Aneta (Polish background). The site blends European fashion elegance with Minnesota charm, targeting fashion-conscious women, tourists, and seasonal residents.

## Tech Stack & Dependencies
- **Framework**: React 18.3.1 with TypeScript (strict mode)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom components
- **Routing**: React Router DOM 7.5.0
- **Animations**: Framer Motion 12.6.3
- **Carousels**: Keen Slider 6.8.6 (recently migrated from custom sliders)
- **Icons**: Lucide React
- **Video**: React Player

### Key Scripts
```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # ESLint checking
npm run preview  # Preview production build
```

## Project Architecture

### File Structure
```
src/
├── components/           # Reusable UI components
├── pages/               # Route components (Home, About, etc.)
├── contexts/            # React contexts (DesignSystemContext)
├── styles/              # CSS modules for specific components
├── utils/               # Helper functions and custom hooks
└── assets/              # Static assets (images, etc.)

public/
├── images/              # Public images (hero, carousel, illustrations)
└── videos/              # Video assets

docs/                    # Comprehensive documentation
```

### Core Components & Their Purpose
1. **EnhancedHeroSlideshow** - Keen Slider powered hero section (main landing visual)
2. **ImageCarousel** - Product image carousels (shopping experience)
3. **FloatingDisplay** - Elegant content display with lightbox (recently enhanced with transparent backgrounds)
4. **IllustratedDressGallery** - Storybook-style gallery component (product showcase)
5. **StoryBookButton & StoryBookButtonGroup** - Vintage boutique-style button components with elegant typography and hover effects
6. **Design System Components** - Comprehensive component showcase library

### Data Flow & State Management
- React contexts used for design system theming
- Component-level state for UI interactions
- No global state management library (keep simple)

## Design System & Visual Identity

### Brand Personality
- **Sophisticated yet approachable**
- **European influence with Minnesota charm**
- **Quality-focused boutique experience**
- **Personal connection** (owner Aneta's Polish heritage)

### Color Palette
```css
Primary: Pink (#f9a8d4, pink-500)
Background: White/Gray gradients
Dark sections: Gray-900
Accents: Gradient combinations
Evolution: Moving toward brighter pinks and complementary colors
```

### Typography Hierarchy
```css
Headings: "Playfair Display" (elegant script font)
Body: System font stack
Special: .font-script class for decorative text
```

### Design Evolution
**Current Direction**: Bold, vibrant, and distinctive while maintaining boutique sophistication
- Bright pinks and complementary colors
- Custom geometric patterns and organic shapes
- Dynamic layouts with unconventional grids
- Smooth animations and transitions
- Mobile-first responsive design

## Development Guidelines & Patterns

### Code Standards
- **TypeScript**: Strict mode enabled, proper interfaces required
- **Styling**: Tailwind CSS preferred, CSS modules in `/src/styles/` for component-specific needs
- **Components**: Reusable, following established naming conventions
- **Performance**: Lazy loading, optimized images, efficient animations
- **Responsive**: Mobile-first approach

### Component Development Pattern
1. Create in `/src/components/`
2. Follow existing design system patterns
3. Include proper TypeScript interfaces
4. Implement responsive design
5. Use Framer Motion for animations
6. Test with `npm run build` and `npm run lint`

### When to Use What
- **Keen Slider**: For any carousel/slider functionality (replaces custom sliders)
- **Framer Motion**: For animations and transitions
- **CSS Modules**: Only when Tailwind isn't sufficient
- **Existing Components**: Always check design system first before creating new ones

## Current Implementation Status

### Recently Completed
- Migrated from custom sliders to Keen Slider for better performance
- Enhanced FloatingDisplay component with transparent backgrounds and lightbox
- Implemented comprehensive design system documentation
- Created component showcase library

### Active Development Areas
- Component refinements and storybook-style implementations
- Design system evolution toward bolder visual direction

## Documentation Hub
- `docs/site-documentation.md` - Comprehensive site overview
- `docs/bella-dresser-design-system-guide.md` - Design system documentation  
- `docs/component-implementation-guide.md` - Component development guide
- `docs/development-guidelines.md` - Development best practices
- `docs/bellas-dresser-color-scheme-guide.md` - Color palette and usage guide
- `docs/typography-implementation-guide.md` - Typography system guide
- `unused/docs/` - Archive of outdated documentation (roadmaps, old CSS guides)

## Common Workflows

### Adding New Component
1. Check existing design system first
2. Create in `/src/components/[ComponentName].tsx`
3. Add TypeScript interfaces
4. Implement responsive design with Tailwind
5. Add to design system showcase if reusable
6. Update this context file

### Modifying Existing Features
1. Check component documentation first
2. Maintain existing patterns and conventions
3. Test responsiveness across breakpoints
4. Verify animations work smoothly
5. Update documentation if behavior changes

### Styling Guidelines
- **Prefer**: Tailwind utility classes
- **Acceptable**: CSS modules in `/src/styles/` for complex styling
- **Avoid**: Inline styles, conflicting with design system

## Known Challenges & Solutions

### Performance Considerations
- **Images**: Use optimized formats, implement lazy loading
- **Animations**: Prefer CSS transforms over layout-affecting properties
- **Sliders**: Keen Slider handles performance optimization

### Browser Support
- Modern browsers (ES6+ support)
- Mobile-responsive across all viewports
- Touch-friendly interactions

## Current Git Status
- **Modified**: `.gitignore`, `netlify.toml`, `FloatingDisplay.tsx`
- **New**: `FloatingDisplayExample.tsx`
- **Focus**: Component refinements and storybook-style implementations

---

## Recent Changes Log
- **2025-05-22**: Aligned desktop tree positioning with store for visual harmony - moved both left and right trees from top 20% to top 25% to match the store's horizontal axis. Trees now form a cohesive horizontal line with the store on desktop screens while remaining hidden on mobile for clean layout.
- **2025-05-22**: Fixed mobile button clipping by moving all elements up 15% - store moved from top 10% to 2%, Bella video from top 30% to 15%, "Talk to Bella" button from top 8% to 0%, and interaction buttons from top 85% to 70%. This prevents buttons from being clipped at the bottom of mobile viewport while maintaining optimal layout hierarchy.
- **2025-05-22**: Refined mobile layout for tighter spacing - moved Bella video lower (top 30%) for more compact design while ensuring buttons don't block the animation. "Talk to Bella" button repositioned to top 8%, interaction buttons moved to bottom area (top 85%) to avoid overlapping with Bella video. Maintained large video size (h-[500px]) while optimizing button placement.
- **2025-05-22**: Enhanced mobile Interactive Bella section layout - made Bella video much larger (h-[500px]) and centered in front of store without completely blocking it. Repositioned buttons to not obstruct store: "Talk to Bella" moved above store (top 5%), interaction buttons moved below store (top 65%). Added proper z-index layering for optimal visual hierarchy.
- **2025-05-22**: Optimized Interactive Bella section for mobile screens - buttons now positioned on top of store image (moved to top 20%), store moved closer to top (from 25% to 10%), trees hidden on mobile for cleaner layout, Bella video remains prominent at bottom. Desktop layout maintains buttons to the right of video.
- **2025-05-22**: Adjusted Bella interaction button positioning to be closer to the webm video animation while remaining non-obstructive. Reduced button offset distances from 200px-350px to 120px-200px across all responsive breakpoints for a more integrated and accessible user experience.
- **2025-05-22**: Repositioned Bella interaction buttons to be responsive and consistently placed to the right of the webm video animation and vertically centered with it. Implemented proper responsive layout using flex containers with invisible video placeholders for consistent positioning across all breakpoints (sm, md, lg, xl).
- **2025-05-22**: Component cleanup - analyzed all components for usage and moved 10 unused components to unused/components/ folder (DesignSystemNavbar duplicate, EnhancedImage, FloatingDisplayExample, HeroImage, HeroSection, HeroSlideshow, ProductImage, StoryBookButtonExample, TextAwareImage, ThemeSwitcher). Retained LoadingAnimation and SectionTransition as they are actively used in demo components.
- **2025-05-22**: Cleaned up documentation - moved 4 outdated docs (design roadmap, refinement plans, CSS components guide) to unused/docs/ folder, keeping only active/relevant documentation
- **2025-05-22**: Organized unused assets - moved 32 unused image/video files to unused/ folder, maintaining only assets currently referenced in codebase
- **2025-05-22**: Replaced Meet Bella section background with positioned individual PNG images (store.png, tree_1.png, tree_2.png) maintaining original layout and blue gradient
- **2025-05-22**: Implemented StoryBookButton components in Home.tsx for "Talk to Bella", "Learn Bella's Story", and "Bella's Favorite Dresses" buttons with vintage boutique styling
- **2025-05-22**: Created StoryBookButton and StoryBookButtonGroup components with vintage boutique styling, Cormorant Garamond typography, and elegant hover effects
- **2025-05-21**: Made buttons appear immediately after clicking 'Talk to Bella' instead of waiting for video to end - improves user interaction flow
- **2025-05-21**: Fixed "Bella's Favorite Dresses" button functionality and FloatingDisplay positioning with responsive modal overlay design
- **2025-05-21**: Enhanced FloatingDisplay with lightbox functionality and transparent backgrounds
- **2025-05-21**: Created comprehensive context documentation

## Code Changes Made (Requires Testing)
- **Bella's Favorite Dresses Button**: Modified the button click handler to call setFloatingDisplay() immediately instead of using setTimeout. Based on code analysis, this should display the IllustratedDressGallery when clicked, but requires actual browser testing to confirm the user experience works as expected.

## Open Tasks & Priorities

### High Priority
- [ ] Continue design system component development
- [ ] Implement remaining storybook-style gallery features

### Medium Priority  
- [ ] Performance optimization review
- [ ] Mobile experience refinements
- [ ] Address linting warnings in design system components

### Future Enhancements
- [ ] Advanced animation sequences
- [ ] Enhanced boutique shopping features

---
*Last updated: May 22, 2025 | Aligned desktop trees with store for visual harmony*