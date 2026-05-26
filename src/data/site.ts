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
    'I build full-stack apps, APIs, and dashboards that are clear to use and solid behind the scenes. I like working on the parts people see and the systems that keep everything running.',
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: 'Contact Me', href: '#contact' },
  highlights: [
    'Full-stack product development',
    'Backend systems and API design',
    'Responsive frontend interfaces',
  ],
  stats: [
    { label: 'Focus', value: 'Full-stack products, backend services, and interface systems' },
    { label: 'Approach', value: 'Simple structure, steady delivery, and code that is easy to come back to' },
  ],
  portrait: {
    src: profilePicture,
    alt: 'Profile picture of Goodluck Kassa',
  },
} as const;

export const aboutContent = {
  eyebrow: '01. About Me',
  paragraphs: [
    'I’m a fullstack developer focused on building products that are useful, maintainable, and easy to understand.',
    'Most of my work sits between backend systems and frontend interfaces: APIs, auth flows, databases, dashboards, and responsive UI.',
    'I care about clean structure, sensible decisions, and finishing things properly. Not just making a demo look good, but building something that can keep working after it ships.',
  ],
  highlightsTitle: 'How I approach building',
  highlights: [
    'Simple structure with tradeoffs that make sense',
    'APIs that are clear to use and easy to maintain',
    'Full-stack builds that connect the product and the system',
    'Frontend work that feels clear on real screens',
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
        'A food ordering and restaurant management platform where restaurants can manage menus, receive orders, and run day-to-day order handling from a clean dashboard.',
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
        'A backend notification system built around events, queues, retries, and provider adapters, so messages can be processed and delivered more reliably in the background.',
      stack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Redis', 'BullMQ'],
      previewLabel: '',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/event-driven-notification-platform' }],
    },
    {
      name: 'Authentication Service API',
      category: 'Backend',
      description:
        'An auth API with email verification, JWT access tokens, refresh token rotation, password resets, role-based access, rate limiting, and Swagger docs.',
      stack: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'bcrypt', 'Zod', 'Swagger'],
      previewLabel: '',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/auth-api' }],
    },
    {
      name: 'SaaS Landing Page Template',
      category: 'Frontend',
      description:
        'A responsive SaaS landing page template with clean sections, strong spacing, and a layout that works well for product or service pages.',
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
        'An API for uploading and managing images with validation, Cloudinary storage, metadata handling, transformations, and organized media records.',
      stack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Cloudinary', 'Multer'],
      previewLabel: '',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/image-upload-service-api' }],
    },
    {
      name: 'Attendance Management System',
      category: 'Mobile',
      summary:
        'A mobile attendance app built around QR check-ins, quick scanning, and simple attendance tracking.',
      stack: ['Android', 'Kotlin', 'QR Scanning'],
      previewLabel: '',
      links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/Attendance-Management-System' }],
    },
    {
      name: 'Business Website Template',
      category: 'Frontend',
      summary:
        'A responsive business website template for service-based brands, with clear sections, strong calls to action, and a professional layout.',
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
  title: 'Have a project in mind?',
  description:
    'Send me a message if you need help building a web app, backend API, dashboard, landing page, or full-stack product.',
  primaryLabel: 'Email',
  primaryValue: 'goodluckkassa6@gmail.com',
  primaryHref: 'mailto:goodluckkassa6@gmail.com',
  phoneLabel: 'Phone',
  phoneValue: '(+234) 9133343147',
  phoneHref: 'tel:+2349133343147',
  secondaryLabel: 'Best For',
  secondaryValue: 'Product work, backend services, full-stack builds, and engineering collaboration',
} as const;
