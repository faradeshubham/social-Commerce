# MakeWith — Social Commerce Platform

MakeWith is a high-performance social commerce productivity platform that connects creator engagement directly with automated e-commerce transactions and commission splits. By rendering checkout overlays natively inside short-form videos and aligning payout schedules via smart contract agreements, MakeWith removes transaction friction and builds transparent pipelines for creators and brands.

---

## Technical Stack

* **Core**: React 19, TypeScript (Strict Mode)
* **Styling**: Tailwind CSS (Utility-first style system)
* **Icons**: Lucide React
* **Router**: React Router 7
* **Build Tool**: Vite v8

---

## Directory Structure

```
src/
├── assets/             # Logo and static graphic assets
├── components/
│   ├── layout/         # RootLayout, Navbar, Footer wrapping containers
│   ├── sections/       # Primary landing page section modules
│   └── ui/             # Reusable design-system atomic components
├── pages/              # Route entry-point views (Home landing page & Workspace)
├── styles/             # Global CSS base styles and themes
├── App.tsx             # Route registry and top-level definitions
└── main.tsx            # Application renderer mount element
```

---

## Installation & Setup

### Prerequisites
* Node.js (version 18 or above recommended)
* npm or yarn package manager

### Steps
1. Clone the repository and navigate to the project directory:
   ```bash
   cd "Social commerce"
   ```
2. Install package dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Verify code syntax and style rules:
   ```bash
   npm run lint
   ```
5. Compile type declarations and build production assets:
   ```bash
   npm run build
   ```

---

## Component Documentation

### 1. Atomic UI Elements (`src/components/ui/`)

#### `Button`
* **Purpose**: A design system button supporting variants, size states, custom icons, and active loaders.
* **Props**:
  ```typescript
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
    size?: 'sm' | 'md' | 'lg'
    isLoading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
  }
  ```

#### `Card`
* **Purpose**: Card wrapper enforcing border variables, background layers, padding scales, and active hover feedbacks.
* **Props**:
  ```typescript
  interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean
  }
  ```

#### `Badge`
* **Purpose**: Small content badge useful for tags, metadata labels, and statuses.
* **Props**:
  ```typescript
  interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'outline' | 'destructive'
  }
  ```

---

### 2. Page Section Modules (`src/components/sections/`)

#### `Hero`
* **Purpose**: High-converting first screen displaying value propositions, call-to-actions, and a handcrafted mockup feed.
* **Props**: None (receives state globally).

#### `About`
* **Purpose**: Details mission, vision, and core value propositions using an asymmetric layout.
* **Props**: None.

#### `Features`
* **Purpose**: Displays the core platform architecture in a clean responsive grid using `FeatureCard`.
* **Props**: None.

#### `HowItWorks`
* **Purpose**: Renders a vertical 7-step timeline illustrating onboarding, tagging, purchase, and payouts. Alternates left/right on desktop.
* **Props**: None.

#### `Marketplace`
* **Purpose**: Verified product grid (2 columns on desktop) with "Trending Creators" and "Featured Brands" dashboards.
* **Props**: None.

#### `Reels`
* **Purpose**: Short-form video mockup carousel cards with play triggers, engagement panels, and direct-checkout shop widgets.
* **Props**: None.

#### `AppShowcase`
* **Purpose**: Interactive CSS mobile app mockup letting users preview home, marketplace, reels, chat, and profile screen telemetry.
* **Props**: None.

#### `Download`
* **Purpose**: Store download links (App Store / Google Play) paired with a geometric SVG QR code redirect placeholder.
* **Props**: None.

#### `Testimonials`
* **Purpose**: Tabbed grid displaying community feedback from verified Creators, Brands, and Buyers.
* **Props**: None.

#### `Faq`
* **Purpose**: Keyboard-accessible (ARIA attributes mapped, chevron transitions) FAQ accordion list.
* **Props**: None.

#### `Contact`
* **Purpose**: Form with built-in regex email validation, submission locks, direct mailto channels, and WhatsApp support linkages.
* **Props**: None.

---

## Accessibility & SEO Details

* **Touch Targets**: All interactive elements (CTA links, form inputs, buttons) conform to WCAG guidelines with a minimum height of `44px` or padding adjustments.
* **Semantic HTML**: Page content is structured using standard HTML5 tags (`<main>`, `<header>`, `<footer>`, `<nav>`, `<section>`).
* **SEO Metadata**: Added detailed descriptive title hooks, keyword sets, Open Graph social tags, and Twitter Cards to `index.html` for crawl optimization.
