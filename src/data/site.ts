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

export const skillsContent = {
  eyebrow: 'My Skills',
  title: 'A focused stack for modern product development.',
  description:
    'I work across the interface, API, and persistence layers with tools that support clean implementation, maintainable systems, and practical delivery.',
  groups: [
    {
      title: 'Frontend',
      summary: 'Modern UI foundations for fast, maintainable product interfaces.',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
    {
      title: 'Backend',
      summary: 'Service and API tools for building dependable application logic.',
      items: ['Node.js', 'Express', 'REST APIs', 'Authentication'],
    },
    {
      title: 'Databases',
      summary: 'Relational data tooling for structured backend systems.',
      items: ['MySQL', 'PostgreSQL', 'TypeORM'],
    },
    {
      title: 'Tools / Workflow',
      summary: 'Everyday tooling that supports clean collaboration and shipping.',
      items: ['Git', 'GitHub', 'Postman', 'Docker'],
    },
  ],
} as const;

export const featuredProjectsContent = {
  eyebrow: 'Featured Projects',
  title: 'Selected work that shows product thinking, backend depth, and full-stack execution.',
  description:
    'These projects are meant to show more than familiarity with tools. Each one reflects how I approach architecture, product experience, API design, and implementation quality.',
  projects: [
    {
      name: 'Dishpatch',
      category: 'Full-Stack',
      description:
        'A delivery-focused product experience built around operational clarity, role-aware workflows, and a polished interface that supports real application flow from dashboard to order handling.',
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      previewLabel: 'Operations dashboard',
      links: [
        { label: 'Live Demo', href: 'https://dishpatch-demo.vercel.app' },
        { label: 'GitHub', href: 'https://github.com/JesseDev454/dishpatch' },
      ],
    },
    {
      name: 'Event-Driven Notification Platform',
      category: 'Backend',
      description:
        'An event-driven service layer designed to process domain events, coordinate asynchronous delivery, and model backend systems that need reliability beyond basic request-response flows.',
      stack: ['Node.js', 'Redis', 'Queues', 'Webhooks', 'Docker'],
      previewLabel: 'Event pipeline',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/event-driven-notification-platform' }],
    },
    {
      name: 'Authentication Service API',
      category: 'Backend',
      description:
        'A dedicated authentication API focused on secure account flows, token handling, and clean service boundaries that can support broader application architecture.',
      stack: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
      previewLabel: 'Auth service',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/authentication-service-api' }],
    },
    {
      name: 'Frontend Templates',
      category: 'Frontend',
      description:
        'A set of modern product-style interfaces and landing pages that demonstrate visual hierarchy, responsive layout discipline, and reusable UI system thinking.',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      previewLabel: 'Product interface',
      links: [
        { label: 'Live Demo', href: 'https://frontend-templates-demo.vercel.app' },
        { label: 'GitHub', href: 'https://github.com/JesseDev454/frontend-templates' },
      ],
    },
  ],
} as const;

export const placeholderSections = [
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

