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
- `docs/design-system-guide.md` - Design system documentation  
- `docs/component-implementation-guide.md` - Component development guide
- `docs/development-guidelines.md` - Development best practices

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
*Last updated: May 22, 2025 | Always update after making changes*