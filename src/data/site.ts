import profilePicture from '../../profile-pic.jpeg';

export const siteConfig = {
  name: 'Goodluck Kassa',
  role: 'Fullstack Developer',
  email: 'goodluckkassa6@gmail.com',
  phone: '(+234) 9133343147',
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
    'I build practical full-stack products, reliable backend workflows, and responsive interfaces that feel clear, fast, and ready for real users.',
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
  eyebrow: '01. About Me',
  paragraphs: [
    'I build full-stack products, backend systems, and frontend interfaces that are practical, reliable, and easy to use.',
    'My work covers API design, authentication, database modeling, service architecture, and responsive UI implementation. I care about building software that works well, is easy to maintain, and feels polished for real users.',
    'Whether I am working on a backend workflow or a product-facing interface, I focus on clear structure, clean execution, and building things that can actually hold up beyond a demo.',
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
  eyebrow: '02. Skills',
  items: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'Node.js',
    'Express',
    'REST APIs',
    'Authentication',
    'MySQL',
    'PostgreSQL',
    'TypeORM',
    'Git',
    'GitHub',
    'Postman',
    'Docker',
  ],
} as const;

export const featuredProjectsContent = {
  eyebrow: '03. Featured Projects',
  projects: [
    {
      name: 'Dishpatch',
      category: 'Full-Stack',
      description:
        'A full-stack food ordering and restaurant management platform that lets restaurants manage menus, receive customer orders, and handle real-time order workflows through a clean dashboard.',
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL/TypeORM', 'Paystack'],
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
        'A backend platform designed around event ingestion, queue-based processing, delivery attempts, retries, and provider adapters for reliable asynchronous notification workflows.',
      stack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Redis', 'BullMQ'],
      previewLabel: '',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/event-driven-notification-platform' }],
    },
    {
      name: 'Authentication Service API',
      category: 'Backend',
      description:
        'A secure authentication service with email verification, JWT access tokens, refresh token rotation, password reset flows, role-based authorization, rate limiting, and API documentation.',
      stack: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'bcrypt', 'Zod', 'Swagger'],
      previewLabel: '',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/auth-api' }],
    },
    {
      name: 'SaaS Landing Page Template',
      category: 'Frontend',
      description:
        'A polished SaaS landing page template built with modern layout structure, responsive sections, strong visual hierarchy, and clean frontend execution.',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      previewLabel: '',
      links: [
        { label: 'Live Demo', href: 'https://saas-landing-page-template-rho.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/JesseDev454/saas-landing-page-template' },
      ],
    },
  ],
} as const;

export const otherProjectsContent = {
  eyebrow: '04. Other Projects',
  projects: [
    {
      name: 'Image Upload Service',
      category: 'Backend',
      summary:
        'A backend image upload service for handling file validation, Cloudinary uploads, image metadata, transformations, and structured media management.',
      stack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Cloudinary', 'Multer'],
      previewLabel: '',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/image-upload-service-api' }],
    },
    {
      name: 'Attendance Management System',
      category: 'Mobile',
      summary:
        'A mobile attendance management system built around QR-based check-ins, fast scanning, and lightweight attendance tracking.',
      stack: ['Android', 'Kotlin', 'QR Scanning'],
      previewLabel: '',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/Attendance-Management-System' }],
    },
    {
      name: 'Business Website Template',
      category: 'Frontend',
      summary:
        'A professional business website template with clean sections, responsive layout, strong marketing hierarchy, and polished presentation for service-based businesses.',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      previewLabel: '',
      links: [
        { label: 'Live Demo', href: 'https://business-website-template-ochre.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/JesseDev454/business-website-template' },
      ],
    },
  ],
} as const;

export const contactContent = {
  eyebrow: '05. Contact',
  title: 'Let us talk about what you are building.',
  description:
    'I am open to product work, freelance projects, engineering roles, and collaborations that need strong full-stack execution.',
  primaryLabel: 'Email',
  primaryValue: 'goodluckkassa6@gmail.com',
  primaryHref: 'mailto:goodluckkassa6@gmail.com',
  phoneLabel: 'Phone',
  phoneValue: '(+234) 9133343147',
  phoneHref: 'tel:+2349133343147',
  secondaryLabel: 'Best For',
  secondaryValue: 'Product work, backend services, full-stack builds, and engineering collaboration',
} as const;
