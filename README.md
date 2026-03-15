# Ijebu Igbo Descendants in Diaspora

A premium modern website for the **Ijebu Igbo Descendants in Diaspora** — a diaspora charity organisation dedicated to connecting Ijebu Igbo people worldwide and promoting the development of Ijebu Igbo town in Nigeria.

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** (scroll animations)
- **TypeScript**
- Responsive, mobile-first design

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page — assembles all sections
│
├── components/
│   ├── Hero.tsx          # Full-width hero with animated headline
│   ├── About.tsx         # Organisation mission & stats
│   ├── VideoSection.tsx  # Heritage video embed
│   ├── Impact.tsx        # 4 impact pillars (cards)
│   ├── Story.tsx         # Ijebu Igbo history & culture
│   ├── Gallery.tsx       # Responsive image gallery grid
│   ├── CTA.tsx           # Call to action section
│   └── Footer.tsx        # Footer with links, contact & socials
│
└── public/               # Static assets
```

## Colour Palette

| Colour | Hex |
|--------|-----|
| Deep Royal Blue (Primary) | `#0B3D91` |
| Gold Accent (Secondary) | `#C9A227` |
| White | `#FFFFFF` |
| Light Gray | `#F5F5F5` |
| Dark Text | `#111111` |

## Features

- Full-screen animated hero section
- Scroll-triggered Framer Motion animations throughout
- Responsive grid gallery with hover effects
- Embedded YouTube video for heritage storytelling
- Impact cards with hover states
- Mobile-first responsive layout
- SEO metadata
