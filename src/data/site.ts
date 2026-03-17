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

export const placeholderSections = [
  {
    id: 'home',
    eyebrow: 'Home',
    title: 'A polished portfolio shell is in place and ready for real content.',
    description:
      'Sprint 1 focuses on structure: navigation, responsive layout behavior, anchored sections, and a premium shell that already feels intentional.',
    accent: 'Navigation-first experience',
    points: ['Sticky responsive header', 'Active section highlighting', 'Refined section spacing'],
  },
  {
    id: 'about',
    eyebrow: 'About',
    title: 'This section is reserved for your positioning, experience, and value.',
    description:
      'The anchor and layout are ready so the next sprint can introduce strong professional copy without reworking the shell.',
    accent: 'Clear developer positioning',
    points: ['Professional summary area', 'Personal intro block', 'Role and collaboration context'],
  },
  {
    id: 'skills',
    eyebrow: 'Skills',
    title: 'The structure is ready for a modern, non-gimmicky skills presentation.',
    description:
      'This placeholder keeps the navigation and page rhythm complete while leaving room for a cleaner skills system in a later sprint.',
    accent: 'Structured technical capabilities',
    points: ['Frontend stack group', 'Backend and infra group', 'Tools and workflow group'],
  },
  {
    id: 'projects',
    eyebrow: 'Projects',
    title: 'Project anchors are prepared for case-study style portfolio content.',
    description:
      'This area will later showcase full-stack, backend, frontend, and mobile work with clear links and stronger proof of execution.',
    accent: 'Proof through shipped work',
    points: ['Featured builds', 'Live demo links', 'Backend repo references'],
  },
  {
    id: 'contact',
    eyebrow: 'Contact',
    title: 'The contact destination is placed and ready for direct conversion.',
    description:
      'Email-first contact strategy and supporting social links will slot into this section next without changing the navigation structure.',
    accent: 'Direct outreach flow',
    points: ['Primary email action', 'Professional social links', 'Clear response expectations'],
  },
] as const;
