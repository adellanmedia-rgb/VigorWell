# VIGOR The Wellness Spa

## Overview
Premium wellness spa website for VIGOR The Wellness Spa, located in Las Vegas, NV. Built with Next.js 14, Tailwind CSS, Framer Motion, and shadcn/ui components.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom vigor color tokens
- **UI Components**: shadcn/ui (button, card, badge, separator)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (display), Cormorant Garamond (heading), Raleway (body)

## Project Structure
```
app/
  layout.tsx          - Root layout with fonts, metadata, header/footer
  page.tsx            - Homepage with all sections
  globals.css         - Global styles, CSS variables, utility classes
  about/              - About page
  contact/            - Contact page
  faq/                - FAQ page
  services/           - Services pages
components/
  ui/                 - shadcn/ui components (button, card, badge, separator)
  Hero.tsx            - Full-screen hero with background image
  Header.tsx          - Fixed header with navigation and mobile menu
  Footer.tsx          - Footer with contact info and links
  PromoBanner.tsx     - Promotional offer banner ($99 package)
  ServicesOverview.tsx - Service cards grid
  WhyChooseUs.tsx     - Features/benefits grid
  TrustBadges.tsx     - Trust indicator badges
  Reviews.tsx         - Client testimonial carousel
  CTASection.tsx      - Call-to-action section
  motion.tsx          - Reusable animation components (FadeIn, StaggerContainer, etc.)
  Accordion.tsx       - FAQ accordion
  Tabs.tsx            - Tab component
lib/
  constants.ts        - Site config, navigation, services data, reviews, FAQs
  utils.ts            - cn() utility for Tailwind class merging
public/images/        - Logo and service images
```

## Design System
- **Colors**: vigor-orange (brand), vigor-teal (accent), vigor-silver (neutral), vigor-dark, vigor-cream
- **Logo**: Transparent PNG with flame icon and metallic text
- **Shadows**: vigor, vigor-lg, soft, soft-lg custom shadows

## Development
- Dev server runs on port 5000: `npm run dev`
- All hosts allowed for Replit preview compatibility

## Recent Changes
- Feb 2026: Added shadcn/ui components, redesigned all homepage sections
- Feb 2026: Made logo transparent, larger in header/footer
- Feb 2026: Added stock images for hero and brain mapping service
- Feb 2026: Improved hero with full-bleed background image and gradient overlays
