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
  subtitle: 'Full-stack products, backend systems, and polished frontend work.',
  description:
    'I build web products with reliable APIs, clean architecture, and interfaces that feel clear, fast, and production-ready.',
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: 'Contact Me', href: '#contact' },
  highlights: [
    'Full-stack product development',
    'Backend systems and API design',
    'Responsive frontend interfaces',
  ],
  stats: [
    { label: 'Focus', value: 'Full-stack products, backend services, and interface systems' },
    { label: 'Approach', value: 'Clear architecture, reliable delivery, and polished execution' },
  ],
  portrait: {
    src: portraitPlaceholder,
    alt: 'Portrait illustration representing Jesse.',
  },
} as const;

export const aboutContent = {
  eyebrow: 'About',
  title: 'I build software that is clear, reliable, and ready to scale.',
  paragraphs: [
    'I build full-stack products, backend services, and frontend interfaces with the same priority: ship software that works well, reads clearly, and holds up in production.',
    'My work sits across API design, service architecture, database modeling, and UI implementation. I care about decisions that make systems easier to extend, debug, and operate over time.',
    'Whether the task is a backend workflow or a product-facing interface, I aim for practical solutions, consistent execution, and software that feels considered from end to end.',
  ],
  highlightsTitle: 'How I approach building',
  highlights: [
    'Clean architecture with practical tradeoffs',
    'Reliable APIs and service design',
    'Full-stack builds with product thinking',
    'Frontend work with strong visual clarity',
  ],
} as const;

export const skillsContent = {
  eyebrow: 'My Skills',
  title: 'A focused stack for modern product development.',
  description:
    'A practical stack for building modern products across the interface, API, and data layers.',
  groups: [
    {
      title: 'Frontend',
      summary: 'Modern frontend tools for responsive interfaces, reusable UI, and clean product implementation.',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
    {
      title: 'Backend',
      summary: 'Backend foundations for service logic, API design, authentication, and application structure.',
      items: ['Node.js', 'Express', 'REST APIs', 'Authentication'],
    },
    {
      title: 'Databases',
      summary: 'Relational data tools for structured models, predictable queries, and maintainable persistence.',
      items: ['MySQL', 'PostgreSQL', 'TypeORM'],
    },
    {
      title: 'Tools / Workflow',
      summary: 'Workflow tools that support collaboration, debugging, versioning, and delivery.',
      items: ['Git', 'GitHub', 'Postman', 'Docker'],
    },
  ],
} as const;

export const featuredProjectsContent = {
  eyebrow: 'Featured Projects',
  title: 'Projects that show how I build products and systems.',
  description:
    'A selection of work across full-stack delivery, backend architecture, and polished interface execution.',
  projects: [
    {
      name: 'Dishpatch',
      category: 'Full-Stack',
      description:
        'A full-stack delivery platform built around clear operational workflows, structured order management, and a polished interface for day-to-day product use.',
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
        'A backend platform for processing domain events, coordinating asynchronous delivery, and modeling services that need reliability beyond simple request-response flows.',
      stack: ['Node.js', 'Redis', 'Queues', 'Webhooks', 'Docker'],
      previewLabel: 'Event pipeline',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/event-driven-notification-platform' }],
    },
    {
      name: 'Authentication Service API',
      category: 'Backend',
      description:
        'A focused authentication service covering secure account flows, token-based access, and boundaries that fit cleanly into larger product architecture.',
      stack: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
      previewLabel: 'Auth service',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/authentication-service-api' }],
    },
    {
      name: 'Frontend Templates',
      category: 'Frontend',
      description:
        'A collection of product-style interfaces that show responsive layout discipline, reusable UI structure, and strong frontend execution.',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      previewLabel: 'Product interface',
      links: [
        { label: 'Live Demo', href: 'https://frontend-templates-demo.vercel.app' },
        { label: 'GitHub', href: 'https://github.com/JesseDev454/frontend-templates' },
      ],
    },
  ],
} as const;

export const otherProjectsContent = {
  eyebrow: 'Other Projects',
  title: 'Additional work across APIs, templates, and mobile tooling.',
  description:
    'More projects that expand the stack: backend utilities, frontend templates, and mobile workflows built with the same focus on clarity and execution.',
  projects: [
    {
      name: 'URL Shortener API',
      category: 'Backend',
      summary:
        'A URL service built around short-code generation, redirect handling, and a backend structure that can support analytics and expiry rules.',
      stack: ['Node.js', 'Express', 'MongoDB'],
      previewLabel: 'Redirect service',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/url-shortener-api' }],
    },
    {
      name: 'Image Hosting Platform',
      category: 'Full-Stack',
      summary:
        'A media workflow for structured uploads, asset management, and a clean user-facing experience backed by organized file handling.',
      stack: ['React', 'Node.js', 'Cloud Storage'],
      previewLabel: 'Media workflow',
      links: [
        { label: 'Live Demo', href: 'https://image-hosting-platform-demo.vercel.app' },
        { label: 'GitHub', href: 'https://github.com/JesseDev454/image-hosting-platform' },
      ],
    },
    {
      name: 'Business Website Template',
      category: 'Frontend',
      summary:
        'A business-focused website template built around clean hierarchy, responsive layout, and a professional marketing presentation.',
      stack: ['React', 'TypeScript', 'Tailwind CSS'],
      previewLabel: 'Marketing site',
      links: [
        { label: 'Live Demo', href: 'https://business-website-template-demo.vercel.app' },
        { label: 'GitHub', href: 'https://github.com/JesseDev454/business-website-template' },
      ],
    },
    {
      name: 'Dashboard Template',
      category: 'Frontend',
      summary:
        'A reusable dashboard interface designed for data-heavy layouts, UI consistency, and scalable component structure.',
      stack: ['React', 'TypeScript', 'Tailwind CSS'],
      previewLabel: 'Admin interface',
      links: [
        { label: 'Live Demo', href: 'https://dashboard-template-demo.vercel.app' },
        { label: 'GitHub', href: 'https://github.com/JesseDev454/dashboard-template' },
      ],
    },
    {
      name: 'QR Attendance Android App',
      category: 'Android',
      summary:
        'An Android attendance workflow built around QR-based check-ins, fast scanning, and lightweight operational tracking.',
      stack: ['Kotlin', 'Android', 'QR Scanning'],
      previewLabel: 'Mobile check-in',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/qr-attendance-android-app' }],
    },
  ],
} as const;

export const contactContent = {
  eyebrow: 'Contact Me',
  title: "Let's talk about your next product or system.",
  description:
    'Email is the best way to reach me. I am open to product work, freelance projects, engineering roles, and collaborations that need strong full-stack execution.',
  primaryLabel: 'Email',
  primaryValue: 'goodluckkassa6@gmail.com',
  primaryHref: 'mailto:goodluckkassa6@gmail.com',
  secondaryLabel: 'Best For',
  secondaryValue: 'Product work, backend services, full-stack builds, and engineering collaboration',
} as const;
