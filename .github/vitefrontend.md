# Frontend Project Setup Template

This document provides instructions for creating a new React TypeScript frontend project with modern tooling and best practices.

## Overview

A clean, modern frontend application built with:
- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **React Router** for routing
- **Lucide React** for icons

## Prerequisites

- Node.js 18+ (LTS recommended)
- pnpm package manager

## Project Structure

```
ProjectName/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...
│   ├── hooks/
│   ├── lib/
│   ├── (public frontend)/
│   ├── (admin frontend)/
│   ├── types/
│   └── ...
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Frontend Setup


### 2. Install Dependencies

Add these to your `package.json` dependencies:

```json
{
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toast": "^1.2.15",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "dayjs": "^1.11.19",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.23.24",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.552.0",
    "react": "^19.1.1",
    "react-day-picker": "^9.11.3",
    "react-dom": "^19.1.1",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.67.0",
    "react-router-dom": "^7.9.5",
    "recharts": "^3.5.1",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.3.1",
    "vaul": "^1.1.2"
  }
}
```

Run `pnpm install`.

### 3. Configure Build Tools

#### Tailwind CSS
Create `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // ... your theme extensions
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

#### Vite Config
Update `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### 4. Key Frontend Patterns

#### Component Structure
- Use `@/` alias for imports
- PascalCase component files
- Tailwind for styling
- shadcn/ui components in `src/components/ui/`

#### Routing
Use React Router for navigation:

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
```

#### State Management
Use React hooks for local state, consider Zustand or Redux for complex apps.

#### Forms
Use react-hook-form with validation:

```tsx
import { useForm } from 'react-hook-form'

function MyForm() {
  const { register, handleSubmit } = useForm()
  
  const onSubmit = (data) => console.log(data)
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <button type="submit">Submit</button>
    </form>
  )
}
```

## Development Workflow

### Starting Development Server

```bash
pnpm dev
```

This starts the Vite development server with hot module replacement.

### Building for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

### Linting

```bash
pnpm lint
```

## Common Conventions

### Naming
- camelCase for variables and functions
- PascalCase for components and types
- kebab-case for file names

### Component Organization
- One component per file
- Export default for main component
- Use named exports for utilities

### Styling
- Use Tailwind utility classes
- Custom styles in component files when needed
- Consistent spacing and colors

### State Management
- React hooks for local component state
- Context API for app-wide state
- Consider external libraries for complex state

### Performance
- Use React.memo for expensive components
- Lazy load routes and heavy components
- Optimize images and assets

## Deployment

### Environment Variables
Create environment files for different stages:
- `.env.local` for local development
- `.env.production` for production

### Build Optimization
- Enable code splitting
- Use dynamic imports for large libraries
- Optimize bundle size with tree shaking

## Troubleshooting

### Common Issues
- **Build fails**: Check TypeScript errors and missing dependencies
- **Styling not working**: Ensure Tailwind is properly configured and classes are correct
- **Routing issues**: Verify React Router setup and path configurations
- **Component not rendering**: Check for console errors and prop types
- **Performance issues**: Use React DevTools to identify bottlenecks

### Development Tips
- Use browser dev tools for debugging
- Enable React Strict Mode for development
- Use ESLint for code quality
- Test on multiple browsers and devices

This template provides a solid foundation for building modern React applications. Customize components and styling according to your specific design requirements.