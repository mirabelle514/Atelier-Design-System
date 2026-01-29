# Atelier Design System

A modern, accessible React component library built with TypeScript and Tailwind CSS.

## About Atelier

Atelier is the design system behind every template and tool I build — engineered to close the workflow gap between designers and engineers and help teams ship faster and with less friction.

Part of [The Wednesday Collective](https://www.thewednesdaycollective.com/)

## Development Process

### Challenge
Create a production-ready design system that bridges the gap between Figma designs and React code, with full TypeScript support and accessibility compliance.

### Technical Decisions

**Component Architecture**
- Built on Radix UI primitives for accessibility foundation
- Used Class Variance Authority for type-safe variant management
- Chose Vite over Create React App for faster build times and better DX

**Design Token Strategy**
- Implemented Tailwind CSS for utility-first styling approach
- Created semantic color naming system for consistent usage
- Established 8px grid system for spacing consistency

**TypeScript Implementation**
- Defined strict prop interfaces for all components
- Used discriminated unions for variant typing
- Implemented proper generic types for compound components

### My Contribution

**What I Built:**
- Designed the component API surface and prop patterns
- Implemented accessibility features (ARIA labels, keyboard navigation, focus management)
- Created the build pipeline and development workflow
- Integrated with Figma library for design-to-code workflow
- Optimized bundle size and tree-shaking capabilities

**AI-Assisted Development:**
- Used Claude for initial component scaffolding and TypeScript interfaces
- Iterated on AI suggestions to match Radix UI patterns and accessibility requirements
- Refined styling system to align with Tailwind's utility-first philosophy
- Debugged complex TypeScript generic types and variant compositions

**Skills Demonstrated:**
- Component library architecture and design system principles
- TypeScript advanced types and generics
- Accessibility standards (WCAG 2.1 AA)
- Build tooling and optimization
- Design-to-code workflow integration

### Real-World Impact

This design system is used across all projects in my portfolio, demonstrating:
- Reusability and scalability of the component architecture
- Consistent UX across different applications
- Maintainability through type-safe APIs

## Links

- **Figma Library**: [Atelier (Figma)](https://www.figma.com/design/5JADpXkx4NjukMAmWfvdFq/Atelier?node-id=7-917&t=b5Hbc0eZ4u6vIXcT-1)


## Tech Stack

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe component development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component primitives
- **Shadcn/ui** - Component architecture and styling patterns
- **Class Variance Authority** - Type-safe component variants
- **Lucide React** - Beautiful icon library

## What's Inside

Production-ready components designed for real-world applications:

- **Forms**: Input, Select, Checkbox, Radio, Textarea, and more
- **Layout**: Card, Sheet, Dialog, Drawer, Sidebar
- **Navigation**: Tabs, Breadcrumb, Navigation Menu, Menubar
- **Data Display**: Table, Avatar, Badge, Skeleton
- **Feedback**: Toast, Alert, Progress, Spinner
- **Plus**: Carousel, Command Menu, Calendar, Charts, and more

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Built With Modern Tools

- **Fast Refresh** for instant feedback during development
- **ESLint** for maintaining code quality
- **TypeScript** for type safety and better DX
- **Tailwind CSS** for rapid, maintainable styling

---

Built by [Mirabelle](https://github.com/mirabelle514) for [The Wednesday Collective](https://www.thewednesdaycollective.com/)
