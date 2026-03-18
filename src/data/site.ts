import profilePicture from '../../profile-pic.jpeg';

export const siteConfig = {
  name: 'Goodluck Kassa',
  role: 'Fullstack Developer',
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
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/goodluck-kassa-a4a43a331/' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/1a6z2rWgA2/' },
  ],
} as const;

export const heroContent = {
  intro: 'Hello, I am',
  title: 'Goodluck Kassa',
  subtitle: 'Fullstack Developer',
  description:
    'I build full-stack products with reliable APIs, scalable backend systems, and polished interfaces that feel fast, clear, and production-ready.',
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
    src: profilePicture,
    alt: 'Profile picture of Goodluck Kassa',
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
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
      previewLabel: '',
      links: [
        { label: 'Live Demo', href: 'https://dishpatchhq.com/' },
        { label: 'GitHub', href: 'https://github.com/JesseDev454/Dishpatch' },
      ],
    },
    {
      name: 'Event-Driven Notification Platform',
      category: 'Backend',
      description:
        'A backend platform for processing domain events, coordinating asynchronous delivery, and modeling services that need reliability beyond simple request-response flows.',
      stack: ['Node.js', 'Redis', 'Queues', 'Webhooks', 'Docker'],
      previewLabel: '',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/event-driven-notification-platform' }],
    },
    {
      name: 'Authentication Service API',
      category: 'Backend',
      description:
        'A focused authentication service covering secure account flows, token-based access, and boundaries that fit cleanly into larger product architecture.',
      stack: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
      previewLabel: '',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/auth-api' }],
    },
    {
      name: 'SaaS Landing Page Template',
      category: 'Frontend',
      description:
        'A product-style landing page template built to showcase structured messaging, polished conversion sections, and strong frontend execution.',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      previewLabel: '',
      links: [
        { label: 'Live Demo', href: 'https://saas-landing-page-template-rho.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/JesseDev454/saas-landing-page-template' },
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
      name: 'Image Upload Service',
      category: 'Backend',
      summary:
        'A backend upload service focused on media handling, storage coordination, and structured file workflows for hosted assets.',
      stack: ['Node.js', 'Express', 'Cloud Storage'],
      previewLabel: 'Storage workflow',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/image-upload-service-api' }],
    },
    {
      name: 'Business Website Template',
      category: 'Frontend',
      summary:
        'A business-focused website template built around clean hierarchy, responsive layout, and a professional marketing presentation.',
      stack: ['React', 'TypeScript', 'Tailwind CSS'],
      previewLabel: 'Marketing site',
      links: [
        { label: 'Live Demo', href: 'https://business-website-template-ochre.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/JesseDev454/business-website-template' },
      ],
    },
    {
      name: 'Attendance Management System',
      category: 'Mobile',
      summary:
        'A mobile attendance workflow built for structured session tracking, fast check-ins, and practical Android-first operation.',
      stack: ['Kotlin', 'Android', 'QR Scanning'],
      previewLabel: 'Mobile check-in',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/Attendance-Management-System' }],
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
  phoneLabel: 'Phone',
  phoneValue: '(+234) 9133343147',
  phoneHref: 'tel:+2349133343147',
  secondaryLabel: 'Best For',
  secondaryValue: 'Product work, backend services, full-stack builds, and engineering collaboration',
} as const;
