# Cherry Blossom Biome Research Website

## Overview

This is a comprehensive educational website about cherry blossom ecosystems in Japan, created for Tourism NL's biome research project. The application presents detailed scientific research covering climate patterns, geography, plant and animal life, cultural significance, and conservation efforts related to Japan's iconic sakura biomes. The website features a premium, visually appealing design with smooth scrolling navigation and responsive layouts optimized for educational content presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Styling**: Tailwind CSS with a custom design system based on cherry blossom themes
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Design System**: Custom cherry blossom-themed color palette with light/dark mode support

### Component Structure
- **Section-based Architecture**: Modular components for each research topic (Climate, Geography, Plant Life, Animal Life, etc.)
- **Reusable UI Components**: Cards, badges, buttons, and navigation components following consistent design patterns
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

### Styling and Theming
- **Color Palette**: Cherry blossom-inspired colors (soft pinks, deep cherry, warm whites) with dark mode variants
- **Typography**: Inter for body text, Noto Serif JP for Japanese cultural elements
- **Layout System**: Consistent spacing using Tailwind's spacing scale
- **Animation**: Smooth scrolling navigation and hover effects

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development
- **API Structure**: RESTful endpoints with proper error handling middleware

### Build and Development
- **Development Server**: Vite with HMR and React Fast Refresh
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Path Aliases**: Configured for clean imports (@/ for client, @shared for shared code)
- **Error Handling**: Runtime error overlay for development

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI component primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Database**: Drizzle ORM, @neondatabase/serverless for PostgreSQL
- **State Management**: TanStack React Query for data fetching and caching
- **Form Handling**: React Hook Form with Zod validation

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Development**: tsx for TypeScript execution, Replit development plugins
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Utilities**: date-fns for date manipulation, clsx for conditional styling

### Asset Management
- **Images**: Generated cherry blossom and Japanese culture themed images stored in attached_assets
- **Fonts**: Google Fonts (Inter, Noto Serif JP) loaded via CDN
- **Icons**: Lucide React icon library for consistent iconography

### Database Configuration
- **ORM**: Drizzle with PostgreSQL dialect
- **Schema**: User management schema with extensible design
- **Migrations**: Drizzle Kit for schema migrations and database management
- **Connection**: Environment-based database URL configuration with Neon serverless support