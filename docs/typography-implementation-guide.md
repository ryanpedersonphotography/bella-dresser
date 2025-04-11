# Typography Implementation Guide

This guide provides specific code implementations for the typography enhancements in Phase 1 of the Bella Dresser design upgrade. It includes both CSS snippets and Tailwind utility class examples.

## Heading Typography Enhancements

### CSS Implementation

```css
/* Add to src/index.css */

/* Enhanced Heading Styles */
h1, .h1 {
  font-family: var(--font-heading);
  font-size: 7.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 0.95;
  text-shadow: 2px 2px 0px rgba(255,0,255,0.2), 4px 4px 0px rgba(0,229,229,0.15);
  margin-bottom: 1.5rem;
}

h2, .h2 {
  font-family: var(--font-heading);
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.1;
  margin-bottom: 1.25rem;
}

h3, .h3 {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.15;
  margin-bottom: 1rem;
}

/* Enhanced Gradient Text */
.gradient-text {
  background: linear-gradient(135deg, #FF00FF 0%, #00E5E5 50%, #FFDD00 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

/* Add dimensionality to heading with text shadow */
.text-dimensional {
  text-shadow: 
    1px 1px 0px rgba(255,0,255,0.2),
    2px 2px 0px rgba(0,229,229,0.15),
    3px 3px 0px rgba(255,221,0,0.1);
}
```

### Tailwind Utility Implementation

```jsx
// Enhanced h1 example with Tailwind
<h1 className="font-heading text-9xl font-extrabold tracking-tight leading-none mb-6 gradient-text">
  Bella Dresser
</h1>

// Enhanced h2 example with Tailwind
<h2 className="font-heading text-7xl font-bold tracking-tight leading-tight mb-5">
  Summer Collection
</h2>

// Enhanced h3 example with Tailwind
<h3 className="font-heading text-5xl font-semibold tracking-tight leading-snug mb-4">
  New Arrivals
</h3>
```

## Body Typography Enhancements

### CSS Implementation

```css
/* Add to src/index.css */

/* Enhanced Body Text */
body {
  font-family: var(--font-body);
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--color-cosmic);
}

p {
  margin-bottom: 1.5rem;
}

/* Featured paragraph with subtle gradient background */
.p-featured {
  position: relative;
  font-size: 1.4rem;
  line-height: 1.7;
  font-weight: 500;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(226,213,248,0.7) 0%, rgba(222,255,242,0.7) 100%);
}

/* Text highlight for important points */
.text-highlight {
  position: relative;
  display: inline-block;
}

.text-highlight::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.4em;
  background: linear-gradient(to right, rgba(255,0,255,0.2), rgba(0,229,229,0.2));
  z-index: -1;
  transform: translateY(-0.1em);
}
```

### Tailwind Utility Implementation

```jsx
// Standard paragraph with enhanced size
<p className="text-lg leading-relaxed mb-6">
  Step into a world of curated fashion where European elegance meets Minnesota charm. 
  Find your perfect look for every occasion.
</p>

// Featured paragraph with gradient background
<p className="text-xl leading-relaxed font-medium p-6 rounded-2xl bg-gradient-to-br from-lavender/70 to-mint/70">
  Experience our carefully curated collection of unique pieces that blend sophisticated 
  European style with comfortable lakeside living.
</p>

// Text with highlight effect
<p className="text-lg leading-relaxed">
  Discover our <span className="relative inline-block">
    newest collection
    <span className="absolute bottom-0 left-0 w-full h-[0.4em] bg-gradient-to-r from-primary/20 to-accent/20 -z-10 translate-y-[-0.1em]"></span>
  </span> of carefully curated pieces.
</p>
```

## Tailwind Config Updates for Typography

Add these values to your tailwind.config.js file:

```javascript
// Add to tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        '7xl': '4.5rem',   // h2
        '8xl': '6rem',     // between h1 and h2
        '9xl': '7.5rem',   // h1
      },
      letterSpacing: {
        'tightest': '-0.02em',
        'tighter': '-0.01em',
      },
      lineHeight: {
        'none': '0.95',
        'tight': '1.1',
        'snug': '1.15',
        'relaxed': '1.6',
      },
      textShadow: {
        'dimensional': '1px 1px 0px rgba(255,0,255,0.2), 2px 2px 0px rgba(0,229,229,0.15), 3px 3px 0px rgba(255,221,0,0.1)',
      },
    },
  },
  plugins: [
    // Add custom text shadow plugin
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-dimensional': {
          textShadow: '1px 1px 0px rgba(255,0,255,0.2), 2px 2px 0px rgba(0,229,229,0.15), 3px 3px 0px rgba(255,221,0,0.1)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
```

## Responsive Typography Considerations

```css
/* Add to src/index.css for responsive typography */
@media (max-width: 1280px) {
  h1, .h1 {
    font-size: 6rem;
  }
  h2, .h2 {
    font-size: 3.75rem;
  }
  h3, .h3 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  h1, .h1 {
    font-size: 4.5rem;
  }
  h2, .h2 {
    font-size: 3rem;
  }
  h3, .h3 {
    font-size: 2rem;
  }
  body {
    font-size: 1.1rem;
  }
  .p-featured {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  h1, .h1 {
    font-size: 3.5rem;
  }
  h2, .h2 {
    font-size: 2.5rem;
  }
  h3, .h3 {
    font-size: 1.75rem;
  }
}
```

## Component Examples

### Hero Heading Component

```jsx
// Example of a Hero Heading component with the new typography
const HeroHeading = ({ title, subtitle, description }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-body mb-2 text-highlight animate-float">
        {subtitle}
      </h2>
      <h1 className="text-9xl font-heading font-extrabold tracking-tightest leading-none mb-6 text-shadow-dimensional">
        <span className="gradient-text">
          {title}
        </span>
      </h1>
      <p className="text-xl leading-relaxed text-cloud font-body max-w-2xl">
        {description}
      </p>
    </div>
  );
};
```

### Section Heading Component

```jsx
// Example of a Section Heading component with the new typography
const SectionHeading = ({ title, alignment = 'center' }) => {
  return (
    <div className={`mb-16 text-${alignment}`}>
      <h2 className="text-7xl font-heading font-bold tracking-tight leading-tight">
        <span className="bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mt-4 mx-auto rounded-full"></div>
    </div>
  );
};
```

This guide provides the implementation details for Phase 1 of the design enhancement focused on typography. These changes will create a more bold, dramatic, and refined typographic system for the Bella Dresser website.