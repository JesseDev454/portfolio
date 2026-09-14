import profilePicture from '../../profile-pic.jpeg';

export type ViewId = 'home' | 'work' | 'experience' | 'community' | 'about' | 'contact';

export type Project = {
  name: string;
  kind: 'featured' | 'professional' | 'personal';
  organization?: string;
  status?: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string; external?: boolean }[];
  visual: 'oneclub' | 'whitepenguin' | 'keepdots' | 'dishpatch' | 'events';
};

export type Experience = {
  organization: string;
  product?: string;
  role: string;
  dates: string;
  description: string;
  tags: string[];
  mark: string;
};

export type CommunityItem = {
  title: string;
  role: string;
  description: string;
  mark: string;
  tone: 'cyan' | 'blue' | 'gold';
};

export const siteConfig = {
  name: 'Goodluck Jesse Kassa',
  shortName: 'GK',
  role: 'Software Engineer / Full-Stack Engineer',
  location: 'Abuja, Nigeria',
  email: 'goodluckkassa6@gmail.com',
  phone: '+234 913 334 3147',
  resumeHref: '/Goodluck_Kassa.docx',
  githubUrl: 'https://github.com/JesseDev454',
  linkedinUrl: 'https://www.linkedin.com/in/goodluck-kassa-a4a43a331/',
  portfolioUrl: 'https://portfolio-pi-three-79.vercel.app/',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/JesseDev454' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/goodluck-kassa-a4a43a331/' },
  ],
  nav: [
    { label: 'Home', href: '#home', id: 'home' as ViewId },
    { label: 'Work', href: '#work', id: 'work' as ViewId },
    { label: 'Experience', href: '#experience', id: 'experience' as ViewId },
    { label: 'Community', href: '#community', id: 'community' as ViewId },
    { label: 'About', href: '#about', id: 'about' as ViewId },
    { label: 'Contact', href: '#contact', id: 'contact' as ViewId },
  ],
  portrait: { src: profilePicture, alt: 'Goodluck Jesse Kassa' },
} as const;

export const credibility = [
  { value: '4.90/5.00', label: 'CGPA', detail: 'First Class' },
  { value: 'NNPC–Renaissance', label: 'Scholar', detail: 'Merit-based undergraduate scholarship' },
  { value: '200+', label: 'Schools served', detail: 'WhitePenguin contribution' },
  { value: '~18', label: 'Clubs in scope', detail: 'OneClub target campus ecosystem' },
] as const;

export const projects: Project[] = [
  {
    name: 'OneClub',
    kind: 'featured',
    organization: 'Campus One',
    status: 'Continuing campus product',
    description:
      'A campus club-management platform for discovering clubs, membership, approvals, dues verification, events, announcements, and role-based dashboards. It began at Collective Labs Buildathon 2026 and continued as part of Campus One.',
    tags: ['React', 'Node.js', 'Supabase'],
    links: [
      { label: 'View live', href: 'https://clubs.campusone.com.ng/', external: true },
      { label: 'GitHub', href: 'https://github.com/JesseDev454/nilehive', external: true },
    ],
    visual: 'oneclub',
  },
  {
    name: 'WhitePenguin',
    kind: 'professional',
    organization: 'BrandDrive Systems Limited',
    status: 'Professional contribution',
    description:
      'Contributed to backend development, testing, debugging, feature improvements, and production verification for a school-management platform serving 200+ schools in Nigeria.',
    tags: ['Backend development', 'Testing', 'Production QA'],
    links: [{ label: 'Visit platform', href: 'https://whitepenguin.co', external: true }],
    visual: 'whitepenguin',
  },
  {
    name: 'Keepdots',
    kind: 'professional',
    organization: 'ORGbyte',
    status: 'Private / In development',
    description:
      'Private address-verification infrastructure. My work spans backend API architecture, session lifecycle, consent and upload-token flows, verification, testing, and deployment checks.',
    tags: ['Backend APIs', 'Verification flows', 'Deployment checks'],
    visual: 'keepdots',
  },
  {
    name: 'Dishpatch',
    kind: 'personal',
    status: 'Personal full-stack project',
    description:
      'A food ordering and restaurant-management platform where restaurants can manage menus, receive orders, and handle day-to-day order workflows from a dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL / TypeORM'],
    links: [
      { label: 'Live demo', href: 'https://dishpatchhq.com/', external: true },
      { label: 'GitHub', href: 'https://github.com/JesseDev454/Dishpatch', external: true },
    ],
    visual: 'dishpatch',
  },
  {
    name: 'Event-Driven Notification Platform',
    kind: 'personal',
    status: 'Backend study',
    description:
      'A backend notification system built around events, queues, retries, and provider adapters so messages can be processed and delivered in the background.',
    tags: ['Node.js', 'Express', 'TypeScript'],
    links: [{ label: 'GitHub', href: 'https://github.com/JesseDev454/event-driven-notification-platform', external: true }],
    visual: 'events',
  },
];

export const experiences: Experience[] = [
  {
    organization: 'BrandDrive Systems Limited',
    role: 'Junior Backend Developer — SIWES',
    dates: 'Jul 2026 – Present',
    description:
      'Completing SIWES across backend development, testing, debugging, regression testing, production verification, GitHub workflows, CI, migrations, deployment checks, documentation, and client QA sessions.',
    tags: ['Backend', 'Testing', 'GitHub Actions'],
    mark: 'BD',
  },
  {
    organization: 'ORGbyte',
    product: 'Keepdots',
    role: 'Lead Backend Engineer',
    dates: 'Jun 2026 – Present',
    description:
      'Leading backend work for a private product in development, including API architecture, authentication exchange, secure uploads, verification flows, admin endpoints, testing, and smoke checks.',
    tags: ['APIs', 'Auth flows', 'Verification'],
    mark: 'OB',
  },
  {
    organization: 'Campus One',
    product: 'OneClub',
    role: 'Lead Full-Stack Engineer',
    dates: 'Apr 2026 – Present',
    description:
      'Leading engineering on a campus club-management platform that grew from the Collective Labs Buildathon 2026 into a continuing Campus One product.',
    tags: ['React', 'Node.js', 'Supabase'],
    mark: 'OC',
  },
];

export const communityItems: CommunityItem[] = [
  {
    title: 'AWS Student Builder Group',
    role: 'Social Media Lead',
    description: 'Support technical-community promotion, content, student engagement, and community growth on campus.',
    mark: 'aws',
    tone: 'gold',
  },
  {
    title: 'Assistant Course Representative',
    role: 'Software Engineering · Nile University',
    description: 'Help represent roughly 270 Software Engineering students and support communication between students and faculty.',
    mark: '270',
    tone: 'blue',
  },
  {
    title: 'Collective Labs Buildathon 2026',
    role: 'Team Lead · Best Team Lead',
    description: 'Led the OneClub team to the Most Impactful Solution recognition. The project continued into Campus One.',
    mark: '★',
    tone: 'gold',
  },
];

export const aboutValues = [
  { title: 'Problem Solving', description: 'Break complex problems down until the next useful decision is clear.', mark: '↗' },
  { title: 'Teamwork', description: 'Build better when communication is direct and people have room to contribute.', mark: '◎' },
  { title: 'Continuous Learning', description: 'Keep learning by building, testing assumptions, and understanding why systems work.', mark: '⌁' },
  { title: 'Community Impact', description: 'Use technology to create more access and opportunity for students and communities.', mark: '✦' },
] as const;

export const skillGroups = [
  { label: 'Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { label: 'Frontend', skills: ['React', 'Vite', 'Tailwind CSS'] },
  { label: 'Backend', skills: ['Node.js', 'Express', 'REST APIs', 'Authentication / authorization', 'TypeORM'] },
  { label: 'Databases', skills: ['PostgreSQL', 'MySQL', 'Supabase'] },
  { label: 'Developer / DevOps', skills: ['Git', 'GitHub', 'Postman', 'Swagger / OpenAPI', 'GitHub Actions', 'Docker', 'Nginx'] },
] as const;

export const socialLinks = [
  { label: 'GitHub', href: siteConfig.githubUrl },
  { label: 'LinkedIn', href: siteConfig.linkedinUrl },
  { label: 'Email', href: `mailto:${siteConfig.email}` },
] as const;

// Compatibility records keep the retired section components type-safe while the hash views use the records above.
export const heroContent = {
  intro: 'Student · Builder · Community advocate',
  title: 'Goodluck Jesse Kassa',
  subtitle: 'Software engineer building products, backend systems, and technology for real communities.',
  description: 'I build web apps and backend systems, contribute to real products, and help students grow through tech.',
  primaryCta: { label: 'View my work', href: '#work' },
  secondaryCta: { label: 'Contact me', href: '#contact' },
  portrait: siteConfig.portrait,
} as const;

export const aboutContent = {
  eyebrow: 'About me',
  paragraphs: ['I’m a Software Engineering student who learns heavily by building.', 'I care about solving real problems, especially the ones that affect students and young people around me.'],
} as const;

export const skillsContent = {
  eyebrow: 'Skills',
  items: skillGroups.flatMap((group) => group.skills),
} as const;

export const featuredProjectsContent = {
  eyebrow: 'Featured work',
  projects: projects.filter((project) => project.kind === 'featured').map((project) => ({
    name: project.name,
    category: project.organization ?? project.kind,
    description: project.description,
    stack: project.tags,
    previewLabel: project.status ?? '',
    links: project.links ?? [],
  })),
} as const;

export const otherProjectsContent = {
  eyebrow: 'Other projects',
  projects: projects.filter((project) => project.kind !== 'featured').map((project) => ({
    name: project.name,
    category: project.organization ?? project.kind,
    summary: project.description,
    stack: project.tags,
    previewLabel: project.status ?? '',
    links: project.links ?? [],
  })),
} as const;

export const contactContent = {
  eyebrow: 'Get in touch',
  title: 'Let’s work together',
  description: 'I’m open to opportunities, collaborations, and interesting projects.',
  primaryLabel: 'Email',
  primaryValue: siteConfig.email,
  primaryHref: `mailto:${siteConfig.email}`,
  phoneLabel: 'Phone',
  phoneValue: siteConfig.phone,
  phoneHref: 'tel:+2349133343147',
} as const;
