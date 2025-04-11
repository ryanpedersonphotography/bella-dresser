# Bella Dresser Development Guidelines

## Code Organization

### File Structure
- Maximum 500 lines per file
- Break down large components into smaller, focused components
- Keep logic and presentation separate
- Group related components in feature directories

### Component Organization
```
feature/
├── components/         # Reusable components specific to feature
├── hooks/             # Custom hooks
├── utils/             # Helper functions
├── types/             # TypeScript interfaces/types
└── index.ts          # Public API exports
```

### Import Order
1. React and framework imports
2. Third-party libraries
3. Local components
4. Hooks and utilities
5. Types and interfaces
6. Assets and styles

## Best Practices

### React & TypeScript
- Use functional components with hooks
- Implement proper TypeScript types for all props and state
- Avoid any type unless absolutely necessary
- Use React.memo() for performance optimization when needed
- Implement error boundaries for graceful error handling

### Component Guidelines
- Single responsibility principle
- Props should be immutable
- Avoid prop drilling (use Context or state management)
- Use proper semantic HTML elements
- Implement proper keyboard navigation
- Ensure ARIA attributes for accessibility

### State Management
- Use local state for component-specific data
- Implement Context for shared state
- Keep state minimal and normalized
- Use reducers for complex state logic

### Performance
- Implement code splitting with React.lazy()
- Use proper key props in lists
- Optimize re-renders with useMemo and useCallback
- Implement proper loading states
- Use image optimization techniques

## Testing Guidelines

### Unit Tests
- Test component rendering
- Test user interactions
- Test error states
- Mock external dependencies
- Aim for high coverage of business logic

### Integration Tests
- Test component integration
- Test routing functionality
- Test form submissions
- Test API interactions

### E2E Tests
- Test critical user flows
- Test responsive behavior
- Test cross-browser compatibility

## Code Style

### General
- Use consistent naming conventions
- Write self-documenting code
- Add comments for complex logic
- Use proper indentation (2 spaces)
- Keep functions pure when possible

### TypeScript
```typescript
// Interfaces
interface ComponentProps {
  title: string;
  onAction: (id: string) => void;
  items?: Item[];
}

// Type Guards
function isValidItem(item: unknown): item is Item {
  return (
    typeof item === 'object' &&
    item !== null &&
    'id' in item &&
    'name' in item
  );
}

// Utility Types
type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
```

### Component Template
```tsx
import React from 'react';
import type { FC } from 'react';

interface Props {
  // Props interface
}

export const Component: FC<Props> = ({ prop1, prop2 }) => {
  // Hooks
  
  // Derived state
  
  // Event handlers
  
  // Render helpers
  
  return (
    // JSX
  );
};
```

## Performance Guidelines

### Image Optimization
- Use next-gen formats (WebP, AVIF)
- Implement responsive images
- Lazy load below-the-fold images
- Optimize image quality vs size

### Bundle Optimization
- Implement code splitting
- Tree shake unused code
- Minimize third-party dependencies
- Use dynamic imports for large libraries

### Runtime Performance
- Debounce scroll/resize events
- Use IntersectionObserver for lazy loading
- Implement virtual scrolling for long lists
- Optimize expensive calculations with useMemo

## Deployment & CI/CD

### Netlify Configuration
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[context.production]
  environment = { NODE_VERSION = "18.x" }

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Workflow
```yaml
# .github/workflows/main.yml
name: CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build
```

## Git Workflow

### Branch Naming
- feature/feature-name
- bugfix/issue-description
- hotfix/urgent-fix
- release/version-number

### Commit Messages
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance

### Pull Request Template
```markdown
## Description
[Description of changes]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing

## Screenshots
[If applicable]

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] Responsive design verified
```

## Security Guidelines

### Frontend Security
- Implement proper input validation
- Sanitize user input
- Use secure HTTP headers
- Implement proper CORS policies
- Use environment variables for sensitive data

### Authentication
- Implement proper session management
- Use secure token storage
- Implement proper password policies
- Use HTTPS for all requests
- Implement rate limiting

## Accessibility Guidelines

### WCAG Compliance
- Implement proper heading hierarchy
- Ensure proper color contrast
- Provide alt text for images
- Implement proper focus management
- Support keyboard navigation

### ARIA Implementation
- Use proper ARIA roles
- Implement proper ARIA labels
- Use proper ARIA states
- Test with screen readers
- Implement proper focus indicators

## Browser Support

### Minimum Requirements
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)

### Progressive Enhancement
- Core functionality works without JS
- Enhanced features for modern browsers
- Fallbacks for older browsers
- Responsive design for all devices

This document serves as a comprehensive guide for development practices in the Bella Dresser project. All team members should follow these guidelines to maintain code quality and consistency.
