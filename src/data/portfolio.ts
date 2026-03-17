import profilePhoto from '../assets/profile-photo-placeholder.svg';

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

export const profile = {
  name: 'Jesse',
  role: 'Software Developer',
  headline: 'Frontend systems, backend APIs, and full-stack products built with clarity.',
  summary:
    'I build polished interfaces, reliable services, and product-focused experiences that feel intentional from architecture to execution.',
  email: 'goodluckkassa6@gmail.com',
  location: 'Nigeria',
  availability: 'Available for freelance, contract, and collaborative product work.',
  portrait: {
    src: profilePhoto,
    alt: 'Temporary portrait placeholder for Jesse until the final headshot is added.',
  },
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/your-github-username' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-linkedin-handle' },
    { label: 'Facebook', href: 'https://www.facebook.com/your-facebook-handle' },
  ],
  introHighlights: [
    'Product-minded frontend engineering',
    'API design and backend architecture',
    'Full-stack delivery with production discipline',
  ],
};

export const about = {
  title: 'I build software that looks sharp, works hard, and scales cleanly.',
  body: [
    'My work sits at the intersection of interface quality, backend reliability, and product thinking. I care about systems that are easy to use, maintain, and grow.',
    'That means building responsive frontend experiences, well-structured APIs, and full-stack products with a strong focus on performance, clarity, and long-term maintainability.',
  ],
  points: [
    'Strong preference for clean architecture and modular codebases',
    'Comfortable shipping across frontend, backend, and integration layers',
    'Focused on real product outcomes, not just isolated features',
  ],
};

export const skillGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces that feel fast, intentional, and production-ready.',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Responsive UI', 'Accessibility'],
  },
  {
    title: 'Backend',
    description: 'Services and APIs designed for clarity, maintainability, and scale.',
    items: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'Webhooks', 'Event-Driven Systems'],
  },
  {
    title: 'Data & Infra',
    description: 'Practical tooling for persistence, delivery, and deployment.',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'CI/CD', 'Git'],
  },
  {
    title: 'Mobile & Product',
    description: 'Cross-functional thinking beyond a single layer of the stack.',
    items: ['Android', 'Kotlin', 'QR Workflows', 'System Thinking', 'Debugging', 'Collaboration'],
  },
] as const;

export const projects = [
  {
    title: 'Dishpatch',
    type: 'Full-Stack Product',
    summary:
      'A delivery-oriented product experience focused on operational visibility, role-based workflows, and clean end-to-end execution.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    highlights: ['Dashboard-driven order management', 'Structured backend services', 'Product-focused UI architecture'],
    repoUrl: 'https://github.com/your-github-username/dishpatch',
    liveUrl: 'https://your-demo-url.com/dishpatch',
  },
  {
    title: 'Event-Driven Notification Platform',
    type: 'Backend Platform',
    summary:
      'An asynchronous notification pipeline designed to process domain events and dispatch communication across multiple channels.',
    technologies: ['Node.js', 'Message Queues', 'Redis', 'Webhooks', 'Docker'],
    highlights: ['Event ingestion and routing', 'Retry-aware delivery flow', 'Scalable service boundaries'],
    repoUrl: 'https://github.com/your-github-username/event-driven-notification-platform',
  },
  {
    title: 'Authentication Service API',
    type: 'Backend API',
    summary:
      'A dedicated authentication service with secure credential flows, token handling, and clean API boundaries for product teams.',
    technologies: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
    highlights: ['Registration and login flows', 'Token lifecycle management', 'Role-aware authorization patterns'],
    repoUrl: 'https://github.com/your-github-username/authentication-service-api',
  },
  {
    title: 'URL Shortener API',
    type: 'Backend API',
    summary:
      'A short-link service built around performance, redirect handling, and extensible analytics-friendly architecture.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    highlights: ['Short code generation', 'Redirect and expiry logic', 'Usage tracking foundations'],
    repoUrl: 'https://github.com/your-github-username/url-shortener-api',
  },
  {
    title: 'Frontend Templates',
    type: 'Frontend Systems',
    summary:
      'A collection of conversion-focused landing pages and dashboard interfaces built with a modern product and SaaS visual language.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    highlights: ['Reusable UI patterns', 'Responsive product layouts', 'Strong visual hierarchy'],
    repoUrl: 'https://github.com/your-github-username/frontend-templates',
    liveUrl: 'https://your-demo-url.com/frontend-templates',
  },
  {
    title: 'QR Attendance Android App',
    type: 'Mobile Project',
    summary:
      'A QR-based mobile workflow for attendance capture, session tracking, and streamlined event or classroom check-ins.',
    technologies: ['Android', 'Kotlin', 'QR Scanning', 'SQLite'],
    highlights: ['Fast check-in flow', 'Mobile-first user experience', 'Practical operational use case'],
    repoUrl: 'https://github.com/your-github-username/qr-attendance-android-app',
  },
] as const;

