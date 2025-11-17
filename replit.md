# Modern Tech Wizards AI Consulting Website

## Overview

This is a multi-page marketing website for Modern Tech Wizards, an AI consulting business that provides AI voice agents, customer service automation, and revenue automation solutions. The application is built as a full-stack TypeScript project using React for the frontend and Express for the backend, with a focus on creating a futuristic, visually striking user experience featuring dark themes, neon accents, and glassmorphism design elements.

The website showcases AI products across multiple pages (Home, Services, Products, Demo, Custom Solutions, About, Contact) and targets industries including mortgage, real estate, dental, medical, insurance, and home services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight alternative to React Router. The application uses a declarative `<Switch>` and `<Route>` pattern to handle navigation between seven main pages.

**UI Component System**: Built on shadcn/ui (New York variant), a collection of reusable components based on Radix UI primitives. Components are styled using Tailwind CSS with custom design tokens and follow a consistent glassmorphism aesthetic with neon accents.

**State Management**: TanStack Query (React Query) for server state management, with a centralized query client configured for minimal refetching and long stale times. Local component state managed with React hooks.

**Styling Approach**: Tailwind CSS with extensive customization through CSS variables for theming. The design system uses a dark-first approach with futuristic color schemes (teal, blue, purple neon accents) and custom fonts (Orbitron for displays, Space Grotesk for UI, Inter for body text). Glassmorphism effects are achieved through backdrop filters and semi-transparent backgrounds.

**Design System**: Comprehensive design guidelines documented in `design_guidelines.md` specify spacing (Tailwind units 4-32), typography hierarchy, color palettes, and page-specific layouts. The system emphasizes generous whitespace, neon hover states, and animated elements for a modern tech aesthetic.

### Backend Architecture

**Server Framework**: Express.js serving as both API backend and static file server for the production build.

**Development Setup**: Vite dev server in middleware mode during development, providing HMR (Hot Module Replacement) through the Express app. This allows seamless full-stack development with a single server process.

**Storage Layer**: Currently implements an in-memory storage interface (`MemStorage`) for user data. The storage abstraction (`IStorage` interface) provides CRUD operations and is designed to be swappable with a database implementation.

**Database Schema**: Drizzle ORM configured with PostgreSQL schema definitions, though not currently connected. Schema defines a users table with UUID primary keys, username, and password fields. The system is prepared for database integration but currently uses memory storage.

**API Design**: RESTful API routes prefixed with `/api` are registered through a centralized route handler. The architecture supports middleware logging with request timing and response capturing.

**Session Management**: Express session middleware configured with connect-pg-simple for PostgreSQL session storage (when database is connected).

### Design Patterns

**Component Composition**: Heavy use of compound components pattern (e.g., Card, CardHeader, CardContent) for flexible, reusable UI building blocks. Components use the Radix Slot pattern for composition flexibility.

**Variant-Based Styling**: Class Variance Authority (CVA) used throughout for creating component variants with type-safe prop-based styling. Buttons, badges, and cards expose variant props for consistent theming.

**Separation of Concerns**: Clear separation between client (`client/src`), server (`server`), and shared (`shared`) code. Shared schema definitions and types used by both frontend and backend.

**Form Handling**: React Hook Form with Zod resolvers for type-safe form validation. Drizzle-Zod integration generates Zod schemas from database schema definitions.

**Path Aliases**: TypeScript path mapping configured for clean imports (`@/` for client code, `@shared/` for shared types, `@assets/` for static assets).

### Build and Deployment

**Production Build Process**: Two-step build - Vite builds the frontend to `dist/public`, then esbuild bundles the server code to `dist` as ESM format with external packages. The production server serves static files from the build output.

**Development Workflow**: Single command (`npm run dev`) starts both the Express server and Vite dev middleware with HMR. TypeScript checking available via `npm run check`.

**Environment Configuration**: Environment-based configuration with development and production modes. Database URL expected via `DATABASE_URL` environment variable.

## External Dependencies

### UI Component Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives (dialogs, dropdowns, tooltips, etc.) providing the foundation for all interactive components
- **shadcn/ui**: Pre-built component implementations based on Radix UI with Tailwind styling
- **Lucide React**: Icon library providing consistent iconography across the application

### Styling and Design
- **Tailwind CSS**: Utility-first CSS framework with extensive customization via config
- **Class Variance Authority**: Type-safe variant management for component styling
- **PostCSS**: CSS processing pipeline with Autoprefixer

### State and Data Management
- **TanStack Query**: Server state management with caching, background updates, and request deduplication
- **React Hook Form**: Performant form state management with validation
- **Zod**: TypeScript-first schema validation for forms and API data

### Form Components
- **React Day Picker**: Calendar and date picker functionality
- **Embla Carousel**: Carousel/slider component for content display
- **CMDK**: Command palette component for keyboard-driven interfaces
- **Input OTP**: One-time password input component

### Database and ORM
- **Drizzle ORM**: TypeScript ORM with type-safe queries and migrations
- **Drizzle Kit**: CLI tool for schema management and migrations
- **Drizzle Zod**: Integration layer generating Zod schemas from Drizzle schemas
- **@neondatabase/serverless**: PostgreSQL driver optimized for serverless environments

### Backend Framework
- **Express**: Web application framework for Node.js
- **Connect-pg-simple**: PostgreSQL session store for Express sessions

### Routing
- **Wouter**: Minimalist client-side router (lightweight React Router alternative)

### Development Tools
- **Vite**: Next-generation frontend build tool with fast HMR
- **TypeScript**: Type-safe JavaScript development
- **TSX**: TypeScript execution engine for Node.js
- **esbuild**: Fast JavaScript bundler for production server code
- **Replit Plugins**: Development utilities for runtime error overlay, cartographer, and dev banner

### Utilities
- **clsx/tailwind-merge**: Utility for merging Tailwind CSS classes
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation