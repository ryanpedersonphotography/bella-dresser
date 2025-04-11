# Tailwind CSS Best Practices Guide (2025)

## Project Setup
- Use the official installation method via npm/yarn for full features
- Configure content paths properly in `tailwind.config.js` to ensure all used classes are detected
- Enable JIT (Just-in-Time) mode for faster development and smaller production bundles
- Use PostCSS for processing Tailwind styles

## Code Organization
- Group related classes together in your HTML for better readability
- Use consistent ordering of utility classes (layout → typography → visual styles)
- Create component classes with `@apply` for repeated patterns to reduce HTML bloat
- Maintain a clean project structure with proper separation of concerns

## Avoiding Common Errors
- Watch for typos in class names (use editor extensions like Tailwind CSS IntelliSense)
- Avoid arbitrary values with square bracket notation when using in React components
- Use predefined utility classes instead of arbitrary values (e.g., use `mt-6` not `mt-[27px]`)
- Be cautious with specificity issues by leveraging Tailwind's CSS layers
- Use proper responsive prefixes consistently (sm:, md:, lg:, etc.)

## Performance Optimization
- Utilize PurgeCSS (built into Tailwind v3+) to remove unused styles
- Be explicit about which files to scan for class names in your configuration
- Keep an eye on bundle size using dev tools
- Use Tailwind's automatic class detection to avoid manual content configuration

## Component Patterns
- For repeated UI patterns, create reusable component classes:
```css
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
  }
}
```
- Balance utility classes and component abstractions based on project needs

## Working with AI
- When using AI to generate Tailwind code:
  - Stick to standard utility classes from the Tailwind documentation
  - Avoid complex arbitrary values in square brackets
  - Request that AI use Tailwind's responsive utility prefixes correctly
  - Consider having AI generate custom component classes using `@apply` for complex components
  - When errors occur, ask AI to refactor using only standard Tailwind classes

## TypeScript Integration
- Enable Tailwind IntelliSense in your editor
- Use type definitions for custom theme values
- Consider typed utility functions for complex dynamic class generation

## Accessibility Considerations
- Don't forget ARIA attributes even when using utility classes
- Ensure proper color contrast ratios for text
- Test with screen readers to verify the accessible experience

## Framework-Specific Tips
- For Next.js: Leverage the App Router architecture for clean component organization
- For React components: Be careful with dynamic class names and avoid arbitrary values
- Use conditional class utilities like `clsx` or `tailwind-merge` to handle conditional styling

## Resources
- Official documentation: https://tailwindcss.com/docs
- Tailwind UI for pre-built components: https://tailwindui.com
- VS Code extension: "Tailwind CSS IntelliSense"
