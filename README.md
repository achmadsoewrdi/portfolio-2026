# 🗂️ Portfolio 2026

> Personal portfolio website — Achmad Soewardi  
> Software Engineer · UI/UX · Web Design

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white&labelColor=0a0a0a)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white&labelColor=0a0a0a)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite&logoColor=white&labelColor=0a0a0a)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white&labelColor=0a0a0a)

---

## 📋 Overview

Static portfolio website with a dark minimalist aesthetic, built with React + TypeScript + Vite. Designed to showcase projects, skills, and process as a Software Engineer with a focus on UI/UX and Web Design.

---

## ✨ Features

- **Loading Screen** — Animated percentage counter (0–100%) with smooth fade-out transition
- **Custom Cursor** — Dot + trailing ring cursor with hover interaction states
- **Hero Section** — Staggered entrance animations with decorative grid background
- **Marquee Banner** — Infinite scrolling ticker with skill keywords
- **About Section** — Bio + stat cards (years of experience, projects, clients)
- **Work Section** — Project list with hover left-border reveal effect and arrow animation
- **Skills Section** — Capability cards with icon, description, and tech stack tags
- **Process Section** — 4-step workflow breakdown
- **Contact Section** — Social links + contact form
- **Navbar** — Fixed with glassmorphism blur on scroll
- **Footer** — Minimal with social links
- **Scroll Reveal** — All sections animate in on scroll using Framer Motion + `useInView`
- **Responsive Animations** — All transitions use `easeOut` with staggered delays

---

## 🗂️ Project Structure

```
portfolio/
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Fixed navbar with scroll blur
│   │   │   └── Footer.tsx           # Footer with social links
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Landing hero with animations
│   │   │   ├── MarqueeBanner.tsx    # Infinite scrolling ticker
│   │   │   ├── AboutSection.tsx     # Bio + stat cards
│   │   │   ├── WorkSection.tsx      # Project list
│   │   │   ├── SkillsSection.tsx    # Skills grid
│   │   │   ├── ProcessSection.tsx   # 4-step process
│   │   │   └── ContactSection.tsx   # Contact form + links
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx           # Primary & ghost variants
│   │       ├── Cursor.tsx           # Custom cursor with trailing ring
│   │       ├── LoadingScreen.tsx    # Percentage loading screen
│   │       ├── ProjectItem.tsx      # Project row with hover effects
│   │       ├── SkillCard.tsx        # Skill card with icon + tags
│   │       ├── StatCard.tsx         # Stat number card
│   │       ├── StepCard.tsx         # Process step card
│   │       ├── ContactLink.tsx      # Social link row
│   │       ├── SectionLabel.tsx     # Section label with decorative line
│   │       └── Tag.tsx              # Small mono tag/badge
│   │
│   ├── hooks/
│   │   ├── useScrolled.ts           # Detects scroll position for navbar
│   │   └── useCursor.ts             # Tracks mouse position + hover state
│   │
│   ├── data/
│   │   ├── projects.ts              # Project list data
│   │   ├── skills.ts                # Skills data
│   │   └── process.ts               # Process steps data
│   │
│   ├── types/
│   │   └── index.ts                 # Shared TypeScript interfaces
│   │
│   ├── lib/
│   │   ├── utils.ts                 # cn() helper (clsx + tailwind-merge)
│   │   └── motion.ts                # Shared Framer Motion variants
│   │
│   ├── App.tsx                      # Root component
│   ├── main.tsx                     # Entry point
│   └── app.css                      # Global styles + Tailwind imports
│
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#0a0a0a` | Page background |
| `bg2` | `#111111` | Alternate background |
| `surface` | `#161616` | Card/component background |
| `border` | `#262626` | Default borders |
| `border2` | `#1f1f1f` | Subtle borders |
| `text` | `#fafafa` | Primary text |
| `muted` | `#a1a1aa` | Secondary text |
| `subtle` | `#52525b` | Tertiary text / labels |
| `green` | `#4ade80` | Available for work indicator |

### Typography

| Font | Usage |
|---|---|
| [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) | Section titles, hero heading |
| [Syne](https://fonts.google.com/specimen/Syne) | Body text, UI elements |
| [Geist Mono](https://fonts.google.com/specimen/Geist+Mono) | Labels, tags, code-like elements |

---

## 📦 Dependencies

### Production

| Package | Version | Purpose |
|---|---|---|
| `react` | ^19 | UI framework |
| `react-dom` | ^19 | DOM rendering |
| `framer-motion` | ^12 | Animations & transitions |
| `lucide-react` | latest | Icon library |
| `clsx` | latest | Conditional classnames |
| `tailwind-merge` | latest | Tailwind class deduplication |

### Development

| Package | Version | Purpose |
|---|---|---|
| `vite` | ^6 | Build tool & dev server |
| `@vitejs/plugin-react` | ^4 | React fast refresh |
| `tailwindcss` | ^4 | Utility CSS framework |
| `@tailwindcss/vite` | ^4 | Tailwind Vite plugin |
| `typescript` | ^5 | Type safety |
| `@types/react` | latest | React type definitions |
| `@types/react-dom` | latest | React DOM type definitions |
| `eslint` | latest | Code linting |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18`
- npm `>=9`

### Installation

```bash
# Clone the repository
git clone https://github.com/achmadsoewrdi/portfolio-2026.git

# Navigate to the project
cd portfolio-2026

# Install dependencies
npm install
```

### Development

```bash
# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔧 Customization

### Updating Personal Data

All content is stored in the `src/data/` folder — no need to touch components directly.

**Projects** → `src/data/projects.ts`
```ts
{
  id: 'your-project',
  num: '01',
  title: 'Your Project Title',
  description: 'Short description of the project.',
  tags: ['React', 'UI Design'],
  href: 'https://your-project-link.com',
}
```

**Skills** → `src/data/skills.ts`
```ts
{
  id: 'your-skill',
  icon: '✦',
  title: 'Skill Name',
  description: 'What you do with this skill.',
  items: ['Tool 1', 'Tool 2', 'Tool 3'],
}
```

**Process Steps** → `src/data/process.ts`
```ts
{
  num: '01',
  title: 'Step Name',
  description: 'What happens in this step.',
}
```

### Updating Contact Links

Edit the `contactLinks` array inside `src/components/sections/ContactSection.tsx`:

```ts
const contactLinks: ContactLinkItem[] = [
  { icon: '✉', label: 'your@email.com', href: 'mailto:your@email.com' },
  { icon: 'in', label: 'linkedin.com/in/yourprofile', href: 'https://linkedin.com/in/yourprofile' },
  { icon: 'gh', label: 'github.com/yourusername', href: 'https://github.com/yourusername' },
]
```

### Updating Personal Info

Edit the bio text and stats inside `src/components/sections/AboutSection.tsx`.

---

## 🌐 Deployment

This is a static site — can be deployed to any static hosting provider.

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

### GitHub Pages

```bash
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm run build
npm run deploy
```

---

## 📄 License

MIT — free to use as inspiration or template. If you do, a credit or star would be appreciated! ⭐

---

<p align="center">Designed & built by <strong>Achmad Soewardi</strong> · 2026</p>