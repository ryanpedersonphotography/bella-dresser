# CSS Components & Utilities Guide

This guide documents all the CSS components, utility classes, and design tokens available in the Bella Dresser project. These components and utilities are built on top of Tailwind CSS and provide a consistent design system for the application.

> **Design Refinement Notice:** A design refinement plan has been created to address several design improvements. See [Design Refinement Plan](./design-refinement-plan.md) for details on upcoming changes to gradient text, button sizing, section dividers, text styling, and textures.

## Table of Contents

1. [Button Components](#button-components)
2. [Card Components](#card-components)
3. [Input Components](#input-components)
4. [Section Components](#section-components)
5. [Animation Utilities](#animation-utilities)
6. [Gradient & Texture Utilities](#gradient--texture-utilities)
7. [Shape Generator Utilities](#shape-generator-utilities)
8. [Custom Font Sizes](#custom-font-sizes)
9. [Custom Shadows](#custom-shadows)
10. [Custom Spacing](#custom-spacing)
11. [Custom Opacity Values](#custom-opacity-values)
12. [Upcoming Design Refinements](#upcoming-design-refinements)

## Button Components

### Basic Button Classes

```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-outline">Outline Button</button>
```

### Button Sizes

```html
<button class="btn btn-primary btn-sm">Small Button</button>
<button class="btn btn-primary">Default Button</button>
<button class="btn btn-primary btn-lg">Large Button</button>
```

## Card Components

### Card Variants

```html
<!-- Note: Add 'group' class when using hover effects that target child elements -->
<div class="card card-product group">
  <!-- Card content -->
</div>

<div class="card card-content">
  <!-- Card content -->
</div>

<div class="card card-feature">
  <!-- Card content -->
</div>
```

## Input Components

### Input Styles

```html
<input type="text" class="input" placeholder="Default input">
<input type="text" class="input input-lg" placeholder="Large input">
<input type="text" class="input input-dark" placeholder="Dark input">
```

## Section Components

### Section Styles

```html
<section class="section section-primary">
  <!-- Section content -->
</section>

<section class="section section-secondary">
  <!-- Section content -->
</section>

<section class="section section-accent">
  <!-- Section content -->
</section>

<section class="section-sm">
  <!-- Smaller padding section -->
</section>
```

## Animation Utilities

### Entrance Animations

These classes are designed to be used with JavaScript to add the `.visible` class when the element enters the viewport.

```html
<div class="animate-on-scroll fade-up">
  <!-- Content will fade up when .visible is added -->
</div>

<div class="animate-on-scroll fade-down">
  <!-- Content will fade down when .visible is added -->
</div>

<div class="animate-on-scroll fade-left">
  <!-- Content will fade in from left when .visible is added -->
</div>

<div class="animate-on-scroll fade-right">
  <!-- Content will fade in from right when .visible is added -->
</div>

<div class="animate-on-scroll zoom">
  <!-- Content will zoom in when .visible is added -->
</div>
```

### Hover Animations

```html
<div class="hover-float">
  <!-- Element will float up on hover -->
</div>

<div class="hover-scale">
  <!-- Element will scale up on hover -->
</div>

<div class="hover-rotate">
  <!-- Element will rotate slightly on hover -->
</div>

<div class="hover-glow">
  <!-- Element will have a glow effect on hover -->
</div>
```

### Animation Delays

```html
<div class="delay-100">
  <!-- 100ms delay -->
</div>

<div class="delay-200">
  <!-- 200ms delay -->
</div>

<div class="delay-300">
  <!-- 300ms delay -->
</div>

<div class="delay-400">
  <!-- 400ms delay -->
</div>

<div class="delay-500">
  <!-- 500ms delay -->
</div>

<div class="delay-700">
  <!-- 700ms delay -->
</div>

<div class="delay-1000">
  <!-- 1000ms delay -->
</div>
```

## Gradient & Texture Utilities

### Gradient Backgrounds

```html
<div class="bg-gradient-primary">
  <!-- Primary gradient background -->
</div>

<div class="bg-gradient-secondary">
  <!-- Secondary gradient background -->
</div>

<div class="bg-gradient-accent">
  <!-- Accent gradient background -->
</div>

<div class="bg-gradient-pastel">
  <!-- Pastel gradient background -->
</div>

<div class="bg-gradient-dark">
  <!-- Dark gradient background -->
</div>
```

### Gradient Text

```html
<h2 class="gradient-text">Refined Feminine Gradient</h2>
<h2 class="text-gradient-primary">Primary Gradient Text</h2>
<h2 class="text-gradient-secondary">Secondary Gradient Text</h2>
<h2 class="text-gradient-accent">Accent Gradient Text</h2>
```

The `gradient-text` class provides a refined feminine gradient from primary to secondary colors, while the other classes offer specific color combinations for different purposes. All gradients have been refined to be more elegant and less saturated.

### Texture Overlays

```html
<div class="texture-noise">
  <!-- Content with noise texture overlay -->
</div>

<div class="texture-dots">
  <!-- Content with dots texture overlay -->
</div>

<div class="texture-grid">
  <!-- Content with grid texture overlay -->
</div>
```

## Shape Generator Utilities

### Basic Shapes

```html
<div class="shape-circle">
  <!-- Circle shape -->
</div>

<div class="shape-blob">
  <!-- Blob shape -->
</div>

<div class="shape-diamond">
  <!-- Diamond shape -->
</div>
```

### Decorative Shapes

```html
<div class="shape-decorator-circle shape-lg shape-top-right shape-primary">
  <!-- Large primary circle in top right -->
</div>

<div class="shape-decorator-blob shape-xl shape-bottom-left shape-accent">
  <!-- Extra large accent blob in bottom left -->
</div>
```

### Shape Sizes

```html
<div class="shape-sm">
  <!-- Small shape (6rem) -->
</div>

<div class="shape-md">
  <!-- Medium shape (12rem) -->
</div>

<div class="shape-lg">
  <!-- Large shape (24rem) -->
</div>

<div class="shape-xl">
  <!-- Extra large shape (32rem) -->
</div>
```

### Shape Positions

```html
<div class="shape-top-right">
  <!-- Positioned in top right -->
</div>

<div class="shape-top-left">
  <!-- Positioned in top left -->
</div>

<div class="shape-bottom-right">
  <!-- Positioned in bottom right -->
</div>

<div class="shape-bottom-left">
  <!-- Positioned in bottom left -->
</div>
```

### Shape Colors

```html
<div class="shape-primary">
  <!-- Primary color shape -->
</div>

<div class="shape-secondary">
  <!-- Secondary color shape -->
</div>

<div class="shape-accent">
  <!-- Accent color shape -->
</div>

<div class="shape-highlight">
  <!-- Highlight color shape -->
</div>
```

## Custom Font Sizes

```html
<h1 class="text-display-1">Display 1 (10rem)</h1>
<h1 class="text-display-2">Display 2 (8.5rem)</h1>
<h1 class="text-display-3">Display 3 (7rem)</h1>
<h1 class="text-title-1">Title 1 (5rem)</h1>
<h1 class="text-title-2">Title 2 (4rem)</h1>
<h1 class="text-title-3">Title 3 (3rem)</h1>
<p class="text-body-xl">Body XL (1.5rem)</p>
<p class="text-body-lg">Body LG (1.25rem)</p>
<p class="text-body-md">Body MD (1.125rem)</p>
<p class="text-body-sm">Body SM (0.875rem)</p>
<p class="text-body-xs">Body XS (0.75rem)</p>
```

## Custom Shadows

```html
<div class="shadow-funky">
  <!-- Funky shadow (4px 4px 0 rgba(0, 0, 0, 0.1)) -->
</div>

<div class="shadow-neon">
  <!-- Neon shadow (0 0 15px rgba(255, 0, 255, 0.5)) -->
</div>

<div class="shadow-layered">
  <!-- Layered shadow -->
</div>

<div class="shadow-multi">
  <!-- Multi-layered shadow -->
</div>

<div class="shadow-inner-glow">
  <!-- Inner glow effect -->
</div>

<div class="shadow-neon-intense">
  <!-- Intense neon glow -->
</div>

<div class="shadow-neon-accent">
  <!-- Accent neon glow -->
</div>

<div class="shadow-neon-highlight">
  <!-- Highlight neon glow -->
</div>

<div class="shadow-floating">
  <!-- Floating shadow effect -->
</div>

<div class="shadow-pressed">
  <!-- Pressed in shadow effect -->
</div>

<div class="shadow-card-hover">
  <!-- Card hover shadow effect -->
</div>

<div class="shadow-3d-primary">
  <!-- 3D primary shadow -->
</div>

<div class="shadow-3d-secondary">
  <!-- 3D secondary shadow -->
</div>

<div class="shadow-3d-accent">
  <!-- 3D accent shadow -->
</div>
```

## Upcoming Design Refinements

The following design refinements are planned for implementation. See the [Design Refinement Plan](./design-refinement-plan.md) for full details.

### Refined Gradient Text

The current gradient text utilities will be refined to be less colorful and more elegant:

```html
<h2 class="text-gradient-refined-primary">Refined Primary Gradient</h2>
<h2 class="text-gradient-refined-secondary">Refined Secondary Gradient</h2>
<h2 class="text-gradient-refined-accent">Refined Accent Gradient</h2>
<h2 class="text-gradient-elegant">Elegant Gradient</h2>
<h2 class="text-gradient-soft">Soft Gradient</h2>
```

### Consistent Button Sizing

Button sizing will be standardized with consistent heights and proportions:

```html
<button class="btn btn-primary btn-xs">Extra Small</button>
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-md">Medium</button>
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-xl">Extra Large</button>
```

### Dynamic Section Dividers

New feminine and dynamic section dividers will be added:

```html
<div class="divider-wave"></div>
<div class="divider-scallop"></div>
<div class="divider-ribbon"></div>
```

### Enhanced Text-Cosmic

Text-cosmic will be enhanced with larger, more playful variants:

```html
<p class="text-cosmic-xl">Extra Large Cosmic Text</p>
<p class="text-cosmic-fun">Fun Cosmic Text</p>
<p class="text-cosmic-playful">Playful Cosmic Text</p>
<p class="text-cosmic-animated">Animated Cosmic Text</p>
```

### Pink Wool Texture

A new bright pink wool texture will be added:

```html
<div class="texture-pink-wool">
  <!-- Content with pink wool texture -->
</div>

<div class="texture-pink-wool-rich">
  <!-- Content with rich pink wool texture -->
</div>
```

## Custom Spacing

```html
<div class="mt-72">
  <!-- Margin top 18rem -->
</div>

<div class="p-80">
  <!-- Padding 20rem -->
</div>

<div class="gap-88">
  <!-- Gap 22rem -->
</div>

<div class="h-96">
  <!-- Height 24rem -->
</div>

<div class="w-104">
  <!-- Width 26rem -->
</div>

<div class="max-w-112">
  <!-- Max width 28rem -->
</div>

<div class="min-h-120">
  <!-- Min height 30rem -->
</div>

<div class="mx-128">
  <!-- Margin x 32rem -->
</div>

<div class="my-136">
  <!-- Margin y 34rem -->
</div>

<div class="p-144">
  <!-- Padding 36rem -->
</div>
```

## Custom Opacity Values

```html
<div class="opacity-5">
  <!-- Opacity 0.05 -->
</div>

<div class="opacity-15">
  <!-- Opacity 0.15 -->
</div>

<div class="opacity-35">
  <!-- Opacity 0.35 -->
</div>

<div class="opacity-45">
  <!-- Opacity 0.45 -->
</div>

<div class="opacity-55">
  <!-- Opacity 0.55 -->
</div>

<div class="opacity-65">
  <!-- Opacity 0.65 -->
</div>

<div class="opacity-85">
  <!-- Opacity 0.85 -->
</div>

<div class="opacity-95">
  <!-- Opacity 0.95 -->
</div>