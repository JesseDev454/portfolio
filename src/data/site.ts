export const siteConfig = {
  name: 'Jesse',
  role: 'Software Developer',
  email: 'goodluckkassa6@gmail.com',
  status: 'Sprint 0 foundation in progress',
  nav: [
    { label: 'Foundation', href: '#foundation' },
    { label: 'Primitives', href: '#primitives' },
    { label: 'Readiness', href: '#readiness' },
  ],
} as const;

export const foundationHighlights = [
  {
    title: 'Dark product shell',
    description: 'A mature visual baseline with restrained glow, layered surfaces, and grid texture.',
  },
  {
    title: 'Reusable primitives',
    description: 'Core UI building blocks that keep future sections consistent and easy to scale.',
  },
  {
    title: 'Responsive structure',
    description: 'Layouts, spacing, and cards tuned to feel polished across mobile and desktop.',
  },
] as const;

export const designPillars = [
  {
    eyebrow: 'Layout',
    title: 'A flexible section system with clean vertical rhythm.',
    body: 'Container widths, section spacing, sticky navigation, and card density are set up now so later sprints can focus on real portfolio content.',
  },
  {
    eyebrow: 'Visual Language',
    title: 'Modern SaaS-inspired UI with restrained depth.',
    body: 'The interface uses soft borders, muted gradients, glass panels, and subtle light treatment instead of loud neon or gamer styling.',
  },
  {
    eyebrow: 'Scalability',
    title: 'Shared tokens and components instead of one-off layouts.',
    body: 'The project structure is organized to support modular sections, reusable primitives, and production-style growth sprint by sprint.',
  },
] as const;

export const primitiveCards = [
  {
    name: 'Container',
    detail: 'Controls content width and horizontal spacing across the app.',
  },
  {
    name: 'Section',
    detail: 'Provides consistent section spacing, anchors, and wrapper behavior.',
  },
  {
    name: 'SectionHeading',
    detail: 'Standardizes section labels, titles, and supporting text.',
  },
  {
    name: 'Button',
    detail: 'Shared interactive styles for primary and secondary calls to action.',
  },
  {
    name: 'Card',
    detail: 'Reusable elevated surface for previews, metrics, and content blocks.',
  },
] as const;

export const readinessItems = [
  'React, TypeScript, Vite, and Tailwind CSS configured for a scalable app foundation.',
  'Global dark theme and spacing system established in the root stylesheet.',
  'Motion-ready component layer available for future section reveals and interactions.',
  'Home page placeholder already communicates a premium technical brand direction.',
] as const;
