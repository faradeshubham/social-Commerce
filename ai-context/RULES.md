# 2. RULES.md

# UI Rules

---

## Design Philosophy

Target

- Premium
- Modern
- Minimal
- Professional

Never look like a template or AI-generated landing page.

Design should feel handcrafted.

---

## Human Design Rules

Never create pages that look identical to common AI-generated SaaS templates.

Avoid

- identical spacing everywhere
- identical card sizes without reason
- repetitive layouts
- excessive gradients
- too many floating elements
- decorative blobs everywhere
- unnecessary glassmorphism
- fake dashboard screenshots
- fake statistics
- random testimonial avatars
- meaningless icons

Every section should have a clear purpose.

---

## Visual Consistency

Keep a consistent design language.

Maintain

- spacing scale
- border radius
- shadow levels
- typography
- icon size
- animation style

Avoid random styling changes between sections.

---

## Color Rules

Use

- one primary color
- one accent color
- neutral grayscale

Avoid rainbow color palettes.

Dark mode should be supported.

---

## Typography

Maximum

2 font families

Use consistent

- Heading Scale
- Body Scale
- Caption Scale

Avoid oversized headings.

Maintain readable line lengths.

---

## Layout Rules

Every section should include

- proper spacing
- balanced whitespace
- clear hierarchy
- obvious CTA
- logical reading flow

Never center everything.

Use alignment intentionally.

---

## Hero Rules

Hero must contain

- logo
- navigation
- product description
- primary CTA
- secondary CTA
- supporting visual

Value proposition must be understandable within 5 seconds.

Avoid generic AI marketing text.

---

## Section Rules

Each section must solve one purpose only.

Avoid adding sections simply to make the page longer.

No filler content.

No repeated information.

---

## Card Rules

Cards should have

- equal visual weight
- proper padding
- hover feedback
- consistent radius
- consistent shadows

Avoid giant empty cards.

---

## Button Rules

Buttons require

- hover state
- active state
- focus state
- loading state (where applicable)

Only one primary button should dominate each section.

Avoid having multiple competing CTAs.

---

## Forms

Forms should

- validate inputs
- show helpful error messages
- preserve entered values
- indicate loading
- prevent duplicate submissions

Never use placeholder text as labels.

---

## Navigation

Navigation should

- clearly indicate current page
- remain usable on mobile
- avoid overcrowding

Only make it sticky if it improves usability.

---

## Icons

Use only one icon library.

Recommended

- Lucide
- Heroicons

Do not mix icon styles.

Only use icons that improve comprehension.

---

## Images

Images must be

- high quality
- optimized
- lazy loaded
- consistent aspect ratio

Avoid stock photos that feel generic.

---

## Animation Rules

Animation duration

150–400ms

Animations should improve usability.

Never animate

- entire pages
- large layouts
- every element
- excessive parallax
- distracting loops

Avoid animation for decoration only.

---

## Responsive Rules

Support

- Mobile
- Tablet
- Desktop

No horizontal scrolling.

No broken layouts.

No overlapping elements.

---

## Accessibility Rules

Minimum touch target

44px

Maintain

- AA contrast
- keyboard navigation
- visible focus states
- semantic HTML
- accessible labels

Never remove focus outlines without replacing them.

---

## Performance Rules

Optimize

- images
- fonts
- bundle size
- rendering

Lazy load where appropriate.

Avoid unnecessary re-renders.

Avoid large animation libraries.

---

## Code Rules

Never

- duplicate components
- duplicate styles
- hardcode repeated values
- mix UI logic with business logic
- create oversized components
- over-engineer simple features
- leave commented-out code
- leave unused imports
- leave console.log statements

Always

- extract constants
- create reusable utilities
- use semantic naming
- keep components focused
- follow consistent folder structure
- prefer composition over duplication

---

## AI Detection Rules

The codebase should feel written by an experienced frontend developer.

Avoid

- unnecessary comments explaining obvious code
- AI-generated placeholder text
- Lorem Ipsum
- generic feature names
- fake companies
- fake users
- fake reviews
- repetitive component structures
- meaningless helper functions
- overuse of abstractions
- unnecessary wrappers
- one-file components exceeding reasonable size
- inconsistent naming
- random utility files that are used once

Every component should exist for a reason.

Every abstraction should reduce complexity.

---

## Reviewer Expectations

Assume the project will be reviewed by a senior engineer.

Before considering a feature complete, verify

- Is this necessary?
- Does it improve UX?
- Is the implementation simple?
- Can duplicate code be reduced?
- Would another developer understand it quickly?
- Does it look handcrafted rather than AI-generated?

Quality is preferred over quantity.

Simple is preferred over clever.

Consistency is preferred over novelty.
