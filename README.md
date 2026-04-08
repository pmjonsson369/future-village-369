# 369 Future Village

Smart systems for self-sustaining homes and eco-villages — where nature and technology work as one.

**369 Future Village** is the website for a founder-driven company based in Scandinavia that designs, tests, and builds intelligent systems for homes and communities, starting with water and food production.

---

## Table of Contents

- [Overview](#overview)
- [Pages & Routes](#pages--routes)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Styling & Design](#styling--design)
- [Testing](#testing)
- [License](#license)

---

## Overview

The site showcases three interconnected product areas:

| Module                  | Description                                                                 |
| ----------------------- | --------------------------------------------------------------------------- |
| **Smart Villa**         | A connected home system where water, growing, and automation work together. |
| **Smart Growing Systems** | From automated gardens to climate-controlled greenhouses — intelligent food production at every scale. |
| **Ecovillages**         | Pilot projects for mapping water systems, connecting growing areas, and building smarter communities. |

---

## Pages & Routes

| Route                    | Page                 | Description                                      |
| ------------------------ | -------------------- | ------------------------------------------------ |
| `/`                      | Home (Index)         | Landing page with hero, modules, vision, and CTA sections |
| `/smart-villa`           | Smart Villa          | Integrated home systems — water, garden, automation |
| `/smart-growing-systems` | Smart Growing Systems | Combined Smart Garden + Smart Greenhouse overview |
| `/smart-garden`          | Smart Garden         | Automated outdoor growing system details          |
| `/smart-greenhouse`      | Smart Greenhouse     | Year-round climate-controlled growing             |
| `/eco-villages`          | Ecovillages          | Community-scale smart systems and pilots           |
| `/about`                 | About                | Company mission, values, and approach              |
| `/contact`               | Contact              | Contact form and email details                     |

---

## Tech Stack

| Category        | Technology                                                                 |
| --------------- | -------------------------------------------------------------------------- |
| **Framework**   | [React 18](https://react.dev) with [TypeScript](https://typescriptlang.org) |
| **Build Tool**  | [Vite](https://vitejs.dev) (SWC plugin)                                    |
| **Routing**     | [React Router v6](https://reactrouter.com)                                 |
| **Styling**     | [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (Radix UI primitives) |
| **Animations**  | [Framer Motion](https://www.framer.com/motion/)                            |
| **State / Data**| [TanStack React Query](https://tanstack.com/query)                         |
| **Forms**       | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)   |
| **Icons**       | [Lucide React](https://lucide.dev)                                         |
| **Unit Tests**  | [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com) |
| **E2E Tests**   | [Playwright](https://playwright.dev)                                       |
| **Linting**     | [ESLint 9](https://eslint.org) (flat config)                               |
| **Scaffolding** | [Lovable](https://lovable.dev)                                             |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 18
- [Bun](https://bun.sh) (recommended — lockfile included) **or** npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/princeorjiugo/future-village-369.git
cd future-village-369

# Install dependencies
bun install        # or: npm install
```

### Run the Development Server

```bash
bun run dev        # or: npm run dev
```

The app will be available at **http://localhost:8080**.

---

## Available Scripts

| Command             | Description                                |
| ------------------- | ------------------------------------------ |
| `bun run dev`       | Start the Vite dev server on port 8080     |
| `bun run build`     | Production build to `dist/`                |
| `bun run build:dev` | Development-mode build                     |
| `bun run preview`   | Preview the production build locally       |
| `bun run lint`      | Run ESLint across the project              |
| `bun run test`      | Run unit tests once with Vitest            |
| `bun run test:watch`| Run unit tests in watch mode               |

---

## Project Structure

```
src/
├── assets/              # Images (garden, villa, greenhouse, eco-village photos)
├── components/          # Reusable section components
│   ├── Navbar.tsx           # Fixed top navigation with mobile drawer
│   ├── HeroSection.tsx      # Animated hero with parallax background
│   ├── WhatWeBuildSection.tsx
│   ├── VisionSection.tsx
│   ├── SystemSection.tsx
│   ├── StartHereSection.tsx
│   ├── ModulesSection.tsx   # Card grid linking to Smart Villa / Growing / Ecovillages
│   ├── AboutSection.tsx
│   ├── CredibilitySection.tsx
│   ├── BottomCTASection.tsx
│   ├── Footer.tsx
│   └── ui/              # shadcn/ui component library (Radix-based)
├── hooks/               # Custom React hooks (useMobile, useToast)
├── lib/                 # Utility functions (cn helper)
├── pages/               # Route-level page components
│   ├── Index.tsx            # Home / landing page
│   ├── SmartVilla.tsx
│   ├── SmartGarden.tsx
│   ├── SmartGreenhouse.tsx
│   ├── SmartGrowingSystems.tsx
│   ├── EcoVillages.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
└── test/                # Test setup and test files
```

---

## Styling & Design

- **Dark theme** with a regenerative green accent palette
- **Fonts**: [Syne](https://fonts.google.com/specimen/Syne) (display headings) · [Inter](https://fonts.google.com/specimen/Inter) (body text)
- **Responsive**: Mobile-first layout with animated hamburger navigation
- **Animations**: Scroll-triggered fade-ins and parallax hero via Framer Motion
- Path alias `@/` maps to `src/` for clean imports

---

## Testing

### Unit Tests (Vitest)

```bash
bun run test           # single run
bun run test:watch     # watch mode
```

### E2E Tests (Playwright)

```bash
npx playwright test
```

> A custom Playwright fixture is available in `playwright-fixture.ts`.

---

## License

© 369 Future Village. All rights reserved.
