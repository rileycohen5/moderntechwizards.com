# Design Guidelines: Modern Technology AI Consulting Website

## Design Approach
**Reference-Based Approach**: Futuristic tech aesthetic inspired by cutting-edge SaaS platforms (Linear, Stripe, Vercel) combined with cyberpunk/neon gaming interfaces for maximum visual impact.

## Core Visual Identity

### Color Palette
- **Base**: Dark theme (near-black backgrounds)
- **Neon Accents**: Teal, blue, purple gradients with glowing effects
- **Glassmorphism**: Blurred panels with semi-transparent overlays
- **Emphasis**: Neon hover states and glowing borders on interactive elements

### Typography
- **Primary Display**: Orbitron (futuristic headlines)
- **Body/UI**: Space Grotesk (modern, tech-forward)
- **Supporting**: Inter (clean readability)
- **Hierarchy**: Bold neon-colored headlines, lighter body text with good contrast

### Layout System
**Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-6, mb-12, gap-8)
- Generous whitespace between sections (py-20 to py-32)
- Tight component spacing for cohesive cards (p-6 to p-8)
- Consistent vertical rhythm throughout all pages

## Page-Specific Guidelines

### Homepage (index.html)
- **Hero**: Full-width animated section with ASCII logo header, bold headline, sub-headline, and dual CTAs ("Get a Demo", "Explore Bundles")
- **What We Do**: 3-column feature grid (AI Voice Agents, Support Automation, Revenue Automation) with icon-title-description cards
- **Who We Help**: Multi-column industry badges/cards (mortgage, real estate, dental, medical, insurance, home services)
- **How It Works**: 3-step process flow with numbers, titles, descriptions in horizontal or staggered layout

### Services Page (services.html)
- Grid layout showcasing 7 AI products as detailed cards
- Each card includes: product name, feature bullets, integration capabilities
- Highlight: 1000+ voices, multi-language, custom knowledge base, CRM/calendar integration
- Glassmorphism card backgrounds with neon borders on hover

### Bundles Page (bundles.html)
- 3 pricing tiers in card format with neon accents
- **Tier 1** ($1,497/mo): Core features
- **Tier 2** ($2,497/mo): + Integrations
- **Tier 3** ($3,997/mo): Full suite
- Include feature comparison table below pricing cards
- Animated hover states with glowing effects

### Demo Audio Page (demo.html)
- Hero: "Hear Modern Technology in Action"
- Audio grid organized by categories: Customer Service, Appointment Scheduling, Sales/Outbound, Follow-Up, Industry Specific
- Custom-styled audio players with neon progress bars
- Load demos from demo-audio.json dynamically
- "Try Your Own Scenario" form section at bottom

### Custom Solutions (custom.html)
- Title + description section
- 4 example cards: Industry flows, Integrations, Document automation, Data optimization
- CTA: "Book a Custom Strategy Session" button

### About Page (about.html)
- Mission statement section
- "What We Believe" values
- "Why Modern Technology?" differentiators
- Company story (placeholder text)

### Contact Page (contact.html)
- Two-column layout: Form (left) + Info panel (right)
- Form fields: Full Name, Company, Email, Phone, Message
- Info panel: Email (hello@moderntechnology.ai), response time note
- Glassmorphism form background with neon accents

## Global Components

### Navigation Bar
- Fixed/sticky header with ASCII logo
- Links to all 8 pages: Home, Services, Bundles, Demo, Custom, About, Contact
- Glassmorphism background with subtle blur
- Neon underline on active/hover states

### Footer
- Full-width dark section
- Multi-column: Company info, Quick links, Contact info, Social placeholders
- Matches navbar glassmorphism aesthetic

## Interactive Elements

### Buttons
- Primary: Neon gradient backgrounds with glow effects
- When on images: Blurred backgrounds (no additional hover states needed)
- Standard hover: Brightness increase + scale transform
- Smooth transitions (200-300ms)

### Cards
- Glassmorphism with backdrop-blur
- Neon borders (1-2px) that glow on hover
- Subtle shadow with colored glow (teal/blue/purple)
- Scale transform on hover (1.02-1.05)

### Audio Players
- Custom-styled controls with neon accents
- Teal/blue progress bars
- Play/pause buttons with glow effects
- Display: title, category, duration, voice profile, description

## Animations
- Smooth page transitions (fade/slide)
- Hero section: Gentle floating/pulsing effects on elements
- Cards: Hover scale + glow
- Buttons: Brightness + subtle glow
- Keep animations subtle and performant (avoid overuse)

## Responsive Behavior
- **Mobile**: Single column, stacked layout, hamburger menu
- **Tablet**: 2-column grids where appropriate
- **Desktop**: 3-4 column grids, full multi-column layouts
- All text readable, touch targets minimum 44px

## Image Usage
No large hero images specified—focus on typography, ASCII logo, and neon graphics for the futuristic aesthetic. Use icons/minimal graphics within feature cards.