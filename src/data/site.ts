import portraitPlaceholder from '../assets/portrait-placeholder.svg';

export const siteConfig = {
  name: 'Jesse',
  role: 'Software Developer',
  email: 'goodluckkassa6@gmail.com',
  githubUrl: 'https://github.com/JesseDev454',
  nav: [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/JesseDev454' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-linkedin-handle' },
    { label: 'Facebook', href: 'https://www.facebook.com/your-facebook-handle' },
  ],
} as const;

export const heroContent = {
  eyebrow: 'Software Developer',
  title: 'Jesse',
  subtitle: 'Frontend systems, backend APIs, and full-stack products built with precision.',
  description:
    'I build modern web products with polished interfaces, reliable backend architecture, and technical decisions that hold up beyond the first release.',
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: 'Contact Me', href: '#contact' },
  highlights: [
    'React and TypeScript interfaces',
    'Backend services and API design',
    'Full-stack product delivery',
  ],
  stats: [
    { label: 'Focus', value: 'Frontend, backend, and product execution' },
    { label: 'Approach', value: 'Clean architecture, strong UX, and scalable implementation' },
  ],
  portrait: {
    src: portraitPlaceholder,
    alt: 'Temporary portrait placeholder for Jesse until the final photo is added.',
  },
} as const;

export const aboutContent = {
  eyebrow: 'About',
  title: 'I build software that is clear to use, reliable to run, and clean to maintain.',
  paragraphs: [
    'I work across backend systems, APIs, polished frontend interfaces, and practical full-stack products. My focus is building software that solves real problems without sacrificing clarity, maintainability, or user experience.',
    'That means thinking carefully about architecture, service boundaries, and implementation details while still caring about how the product feels in the hands of the people using it. I value systems that are dependable under pressure and interfaces that feel intentional instead of improvised.',
    'Whether I am shaping a backend workflow, designing an API, or refining a frontend experience, I aim for software that is practical, well-structured, and ready to grow with the product.',
  ],
  highlightsTitle: 'How I approach building',
  highlights: [
    'Clean architecture over unnecessary complexity',
    'Practical full-stack products with real delivery value',
    'Reliable backend systems and clear API design',
    'Thoughtful UI that supports the product, not distracts from it',
  ],
} as const;

export const placeholderSections = [
  {
    id: 'skills',
    eyebrow: 'Skills',
    title: 'The structure is ready for a modern, non-gimmicky skills presentation.',
    description:
      'This placeholder keeps the page rhythm complete while leaving space for a cleaner skills system in the next sprint.',
    accent: 'Structured technical capabilities',
    points: ['Frontend stack group', 'Backend and infra group', 'Tools and workflow group'],
  },
  {
    id: 'projects',
    eyebrow: 'Projects',
    title: 'Project anchors are prepared for proof-driven portfolio content.',
    description:
      'This section will soon showcase full-stack products, backend APIs, frontend builds, and live demos in a stronger case-study format.',
    accent: 'Proof through shipped work',
    points: ['Featured builds', 'Live demo links', 'Backend repo references'],
  },
  {
    id: 'contact',
    eyebrow: 'Contact',
    title: 'The contact destination is ready for a direct conversion-focused handoff.',
    description:
      'Email-first contact strategy and supporting social links will slot into this section cleanly in a later sprint.',
    accent: 'Direct outreach flow',
    points: ['Primary email action', 'Professional social links', 'Clear response expectations'],
  },
] as const;
