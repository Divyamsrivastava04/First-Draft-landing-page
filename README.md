# Tivora Landing Page

A premium, dark-luxury landing page for Tivora, an AI-powered fashion & beauty marketplace.

## Features

- 🎨 Elegant, minimal, futuristic design
- 📱 Fully responsive across all devices
- ✨ Smooth animations and hover effects
- 🎭 Glassmorphism-style cards
- 🎯 Component-based architecture
- ⚡ Built with Next.js 14 (App Router) and Tailwind CSS

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Fonts:** Playfair Display (serif) for headings, Inter (sans-serif) for body

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features section
│   ├── About.tsx       # About/Vision section
│   ├── FinalCTA.tsx    # Final CTA section
│   └── Footer.tsx      # Footer
└── tailwind.config.ts  # Tailwind configuration
```

## Design System

### Colors
- **Background:** Deep brown/near-black gradient (#0f0d0a, #1a1612)
- **Accent:** Warm beige/champagne gold (#d4c5b0, #e8dcc6, #c9a961)
- **Text:** Off-white (#f5f3f0) and muted beige (#d4c5b0)

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

## Build for Production

```bash
npm run build
npm start
```

## License

Private project for Tivora.

