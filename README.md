# VIGOR The Wellness Spa - Website

A premium wellness spa website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern, Premium Design** - Sophisticated aesthetic with smooth animations
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- ⚡ **Performance Optimized** - Fast loading with optimized images and code splitting
- 🔍 **SEO Ready** - Built-in meta tags, Open Graph, and structured data (JSON-LD)
- 🗓️ **SimplyBook.me Integration** - Ready for booking widget embed
- 🎭 **Advanced Animations** - Smooth scroll-triggered animations with Framer Motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
vigor-wellness/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with booking
│   ├── faq/               # FAQ page
│   ├── services/          # Services pages
│   │   ├── brain-mapping/
│   │   ├── cryo-bodysculpting/
│   │   └── spa-capsule/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Accordion.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── motion.tsx         # Animation wrappers
│   ├── PromoBanner.tsx
│   ├── Reviews.tsx
│   ├── ServicesOverview.tsx
│   ├── Tabs.tsx
│   ├── TrustBadges.tsx
│   └── WhyChooseUs.tsx
├── lib/                   # Utilities and constants
│   ├── constants.ts       # Site data and content
│   └── utils.ts           # Helper functions
├── public/               # Static assets
│   └── images/
└── ...config files
```

## SimplyBook.me Integration

To add your booking widget:

1. Go to your SimplyBook.me dashboard
2. Navigate to Settings → Booking widgets settings → iFrame widget
3. Copy the embed code
4. Add it to `app/contact/ContactContent.tsx` in the booking section

Example:
```javascript
<script src="//simplybook.me/v2/widget/widget.js"></script>
<script>
  var widget = new SimplybookWidget({
    "widget_type": "iframe",
    "url": "https://YOUR-COMPANY.simplybook.me",
    "theme": "belle",
    "theme_settings": {
      "sb_base_color": "#E85D04",
      "body_bg_color": "#ffffff"
    }
  });
</script>
```

## Placeholder Images

The site uses placeholder images that need to be replaced:

- `/public/images/hero-wellness.jpg` - Hero section background
- `/public/images/brain-mapping.jpg` - Brain mapping service card
- `/public/images/brain-mapping-hero.jpg` - Brain mapping page hero
- `/public/images/cryo-hero.jpg` - Cryo page hero
- `/public/images/about-hero.jpg` - About page hero
- `/public/images/spa-interior.jpg` - About page interior shot

## Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://vigorlv.com
```

## Deployment to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Phase 2 (Coming Soon)

- Supabase integration for content management
- Admin panel for client editing
- Dynamic content loading

## Support

For questions about this website, contact the development team.

---

Built with ❤️ for VIGOR The Wellness Spa
