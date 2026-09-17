import { motion, useReducedMotion } from 'framer-motion';
import { useState, type ReactNode } from 'react';
import {
  aboutValues,
  communityItems,
  credibility,
  experiences,
  projects,
  siteConfig,
  skillGroups,
  type Project,
  type ViewId,
} from '../data/site';
import { cn } from '../lib/cn';

type Navigate = (view: ViewId) => void;

const fadeVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.16 }}
      variants={fadeVariants}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ViewIntro({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
      <h1 className="editorial-title mt-5">{title}{accent ? <span className="gradient-text"> {accent}</span> : null}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">{description}</p>
    </div>
  );
}

export function HomeView({ navigate }: { navigate: Navigate }) {
  return (
    <div className="view-stack">
      <section className="hero-grid editorial-container">
        <Reveal className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />Student <span>•</span> Builder <span>•</span> Community advocate</p>
          <h1 className="hero-title mt-6"><span>Goodluck</span><span className="gradient-text">Jesse Kassa</span></h1>
          <p className="hero-lede">Software engineer building products, backend systems, and technology for real communities.</p>
          <p className="hero-body">I build web apps and backend systems, contribute to real products, and help students grow through tech. I’m a Software Engineering student with a deep interest in solving meaningful problems and using technology to create opportunities for more people.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button button-primary" href="#work" onClick={() => navigate('work')}>View my work <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href={siteConfig.resumeHref} download="Goodluck_Jesse_Kassa_Resume_2026.pdf">Download resume <span aria-hidden="true">↓</span></a>
          </div>
        </Reveal>
        <Reveal className="hero-portrait-wrap" delay={0.08}>
          <div className="hero-portrait-glow" aria-hidden="true" />
          <div className="portrait-frame">
            <img src={siteConfig.portrait.src} alt={siteConfig.portrait.alt} className="portrait-image" />
            <span className="portrait-note">Build<br />People<br />Create<br />Opportunity</span>
            <span className="portrait-caption">Better<br />Builders<br />Brighter<br />Communities</span>
          </div>
        </Reveal>
      </section>

      <section className="editorial-container credibility-grid" aria-label="Credibility signals">
        {credibility.map((item, index) => (
          <Reveal key={item.label} className="credibility-item" delay={index * 0.04}>
            <span className="credibility-mark" aria-hidden="true">{['◇', '◆', '◌', '⌂'][index]}</span>
            <div><strong>{item.value}</strong><span>{item.label}</span><small>{item.detail}</small></div>
          </Reveal>
        ))}
      </section>

      <section className="editorial-container feature-home-block">
        <Reveal>
          <div className="section-kicker"><span className="eyebrow-dot" />Featured work</div>
        </Reveal>
        <div className="feature-home-grid">
          <Reveal className="feature-home-copy">
            <p className="micro-label">Campus One / continuing product</p>
            <h2 className="display-heading">OneClub</h2>
            <p className="section-lede">A simpler way for students to discover, join, and manage clubs on campus.</p>
            <p className="section-body">OneClub began at the Collective Labs Buildathon 2026 and became part of Campus One. I’m continuing to lead engineering on the workflows that help student communities organize and grow.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="button button-light" href="https://clubs.campusone.com.ng/" target="_blank" rel="noreferrer noopener">View OneClub <span aria-hidden="true">→</span></a>
              <a className="button button-secondary" href="https://github.com/JesseDev454/nilehive" target="_blank" rel="noreferrer noopener">View on GitHub</a>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ProjectVisual project={projects[0]} />
          </Reveal>
        </div>
        <div className="feature-footer"><span>More projects and product work below</span><button type="button" onClick={() => navigate('work')}>Explore selected work <span aria-hidden="true">→</span></button></div>
      </section>
    </div>
  );
}

export function WorkView() {
  const [filter, setFilter] = useState<'all' | 'featured' | 'professional' | 'personal'>('all');
  const filtered = projects.filter((project) => filter === 'all' || project.kind === filter);
  const filters = [
    ['all', 'All'],
    ['featured', 'Featured'],
    ['professional', 'Professional'],
    ['personal', 'Personal'],
  ] as const;

  return (
    <div className="editorial-container view-stack">
      <Reveal><ViewIntro eyebrow="Projects · Products · Real impact" title="Selected" accent="Work" description="A closer look at the products I’ve built and contributed to." /></Reveal>
      <div className="filter-row" role="group" aria-label="Filter projects">
        {filters.map(([value, label]) => <button key={value} type="button" className={cn('filter-button', filter === value && 'filter-button-active')} onClick={() => setFilter(value)} aria-pressed={filter === value}>{label}</button>)}
      </div>
      <div className="project-list">
        {filtered.map((project, index) => <Reveal key={project.name} delay={index * 0.05}><ProjectCard project={project} /></Reveal>)}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={cn('project-card', project.kind === 'featured' && 'project-card-featured')}>
      <div className="project-card-copy">
        <div className="tag-row"><span className="status-tag">{project.status ?? project.kind}</span>{project.organization ? <span className="org-tag">{project.organization}</span> : null}</div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <div className="skill-pills">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {project.links?.length ? <div className="project-actions">{project.links.map((link) => <a key={link.label} className="button button-small" href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer noopener' : undefined}>{link.label} <span aria-hidden="true">→</span></a>)}</div> : <span className="private-note">Private work · no public link</span>}
      </div>
      <ProjectVisual project={project} />
    </article>
  );
}

export function ExperienceView({ navigate }: { navigate: Navigate }) {
  return (
    <div className="editorial-container view-stack">
      <Reveal><ViewIntro eyebrow="My journey" title="Experience" description="Where I’ve worked and what I’ve done." /></Reveal>
      <div className="experience-timeline">
        {experiences.map((experience, index) => <Reveal key={experience.organization} delay={index * 0.06}><article className="experience-card"><div className="timeline-node" aria-hidden="true" /><div className="experience-mark">{experience.mark}</div><div className="experience-content"><div className="experience-heading"><div><h2>{experience.organization}{experience.product ? <span> / {experience.product}</span> : null}</h2><p className="experience-role">{experience.role}</p></div><time>{experience.dates}</time></div><p>{experience.description}</p><div className="skill-pills">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article></Reveal>)}
      </div>
      <Reveal className="callout-panel"><div><p className="micro-label">Open to thoughtful work</p><h2>Want to work together?</h2><p>I’m open to opportunities, interesting projects, and collaborations that create useful things.</p></div><a className="button button-light" href="#contact" onClick={() => navigate('contact')}>Get in touch <span aria-hidden="true">→</span></a></Reveal>
    </div>
  );
}

export function CommunityView() {
  return (
    <div className="editorial-container view-stack">
      <Reveal><ViewIntro eyebrow="Leadership · Community · Opportunity" title="Leadership &" accent="Community" description="Building with others and creating opportunities for students." /></Reveal>
      <p className="wide-intro">I enjoy working with people, supporting technical communities, and taking responsibility when a group needs someone to move things forward.</p>
      <div className="community-grid">{communityItems.map((item, index) => <Reveal key={item.title} delay={index * 0.06}><article className={cn('community-card', index === 2 && 'community-card-wide')}><div className={cn('community-mark', `community-${item.tone}`)}>{item.mark}</div><div><h2>{item.title}</h2><p className="community-role">{item.role}</p><p>{item.description}</p></div><span className="card-arrow" aria-hidden="true">↗</span></article></Reveal>)}</div>
      <Reveal className="community-quote"><span aria-hidden="true">“</span><p>Technology is more meaningful when it creates opportunities for other people.</p><cite>— Goodluck Jesse Kassa</cite></Reveal>
    </div>
  );
}

export function AboutView() {
  return (
    <div className="editorial-container view-stack">
      <Reveal><ViewIntro eyebrow="Student · Builder · Community advocate" title="About" accent="Me" description="A bit more about my journey." /></Reveal>
      <div className="about-split">
        <Reveal className="about-portrait"><img src={siteConfig.portrait.src} alt={siteConfig.portrait.alt} className="portrait-image" /><span className="portrait-caption">Better<br />Builders<br />Brighter<br />Communities</span></Reveal>
        <Reveal className="about-copy" delay={0.08}><p>I’m a Software Engineering student who learns heavily by building. I care about solving real problems, especially the ones that affect students and young people around me.</p><p>My strongest interests sit around backend and full-stack engineering, systems, products, AI-assisted development, and increasingly cloud and DevOps.</p><div className="value-grid">{aboutValues.map((value) => <article key={value.title} className="value-card"><span>{value.mark}</span><div><h2>{value.title}</h2><p>{value.description}</p></div></article>)}</div></Reveal>
      </div>
      <div className="about-lower-grid">
        <Reveal className="info-panel"><p className="micro-label">Education</p><h2>Nile University of Nigeria</h2><p>B.Sc. Software Engineering · Expected November 2027</p><strong>4.90 / 5.00 · First Class</strong></Reveal>
        <Reveal className="info-panel" delay={0.05}><p className="micro-label">Recognition</p><h2>NNPC–Renaissance JV University Scholarship</h2><p>Merit-based undergraduate scholarship.</p><p className="muted-note">Also received a 40% Nile University tuition scholarship after scoring 310 / 400 in UTME (2023).</p></Reveal>
      </div>
      <Reveal className="ai-panel"><p className="micro-label">How I work</p><h2>AI as a thinking partner before coding.</h2><p>I use Claude for architecture planning, debugging, code review, edge cases, and agent workflows. The point is to understand the decision before writing the implementation.</p></Reveal>
      <Reveal><div className="skills-section"><div><p className="micro-label">Tools I use</p><h2>Skills</h2></div><div className="skill-groups">{skillGroups.map((group) => <div key={group.label}><h3>{group.label}</h3><div className="skill-pills">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></Reveal>
    </div>
  );
}

function ContactLink({ label, value, href, copyValue, download }: { label: string; value: string; href: string; copyValue: string; download?: string }) {
  const [status, setStatus] = useState('');
  const copy = async () => {
    try {
      if (navigator.clipboard) await navigator.clipboard.writeText(copyValue);
      else { const input = document.createElement('textarea'); input.value = copyValue; document.body.appendChild(input); input.select(); document.execCommand('copy'); input.remove(); }
      setStatus('Copied');
    } catch { setStatus('Copy unavailable'); }
    window.setTimeout(() => setStatus(''), 1800);
  };
  return <div className="contact-link"><a href={href} download={download} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}><span className="contact-icon" aria-hidden="true">{label === 'Email' ? '@' : label === 'Phone' ? '＋' : label === 'Resume' ? '↓' : '↗'}</span><span><strong>{label}</strong><small>{value}</small></span></a><button type="button" className="copy-button" onClick={copy} aria-label={`Copy ${label}`}><span aria-live="polite">{status || 'Copy'}</span></button></div>;
}

export function ContactView() {
  return (
    <div className="editorial-container view-stack">
      <Reveal><ViewIntro eyebrow="Get in touch" title="Let’s Work" accent="Together" description="I’m open to opportunities, collaborations, and interesting projects." /></Reveal>
      <div className="contact-grid"><Reveal className="contact-panel"><p className="micro-label">Contact me</p><h2>Good conversations start simply.</h2><p className="section-body">Email is the best way to reach me. You can also find my work and professional profile below.</p><div className="contact-links"><ContactLink label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} copyValue={siteConfig.email} /><ContactLink label="Phone" value={siteConfig.phone} href="tel:+2349133343147" copyValue={siteConfig.phone} /><ContactLink label="LinkedIn" value="linkedin.com/in/goodluck-kassa-a4a43a331" href={siteConfig.linkedinUrl} copyValue={siteConfig.linkedinUrl} /><ContactLink label="GitHub" value="github.com/JesseDev454" href={siteConfig.githubUrl} copyValue={siteConfig.githubUrl} /><ContactLink label="Resume" value="Download my résumé (PDF)" href={siteConfig.resumeHref} copyValue={`${window.location.origin}${siteConfig.resumeHref}`} download="Goodluck_Jesse_Kassa_Resume_2026.pdf" /></div></Reveal><Reveal className="contact-panel contact-email-panel" delay={0.08}><p className="micro-label">Direct email</p><h2>Tell me what you’re building.</h2><p>Use the button below to open your email client with a clear subject line. There is no pretend form submission behind this page.</p><a className="button button-primary" href={`mailto:${siteConfig.email}?subject=Project%20enquiry%20for%20Goodluck%20Jesse%20Kassa`}>Email Goodluck <span aria-hidden="true">→</span></a><div className="contact-statement"><span className="eyebrow-dot" /><span>Ideas · People · Impact</span></div></Reveal></div>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return <div className={cn('project-visual', `visual-${project.visual}`)} aria-label={`${project.name} conceptual product visual`}><div className="visual-topline"><span>{project.name}</span><span>{project.status ?? 'Product system'}</span></div>{project.visual === 'oneclub' ? <><div className="visual-hero-copy"><small>Campus communities</small><strong>Find your people.<br />Do more together.</strong><span>Discover · Join · Engage</span></div><div className="visual-cards"><i>Clubs</i><i>Events</i><i>Members</i></div><div className="visual-flow"><span>Discover</span><b>→</b><span>Join</span><b>→</b><span>Impact</span></div></> : project.visual === 'whitepenguin' ? <><div className="visual-dashboard"><aside><span>Dashboard</span><span>Students</span><span>Staff</span><span>Reports</span></aside><main><strong>School operations</strong><div className="visual-metric-row"><i>200+<small>schools</small></i><i>QA<small>verified</small></i><i>CI<small>checked</small></i></div><div className="visual-bars"><b /><b /><b /><b /></div></main></div></> : project.visual === 'keepdots' ? <><div className="visual-network"><span /><span /><span /><span /><span /><span /></div><div className="visual-hero-copy"><small>Private infrastructure</small><strong>Verify. Validate.<br />Build with confidence.</strong><span>Session · Consent · Signals</span></div></> : project.visual === 'dishpatch' ? <><div className="visual-hero-copy"><small>Food operations</small><strong>Great food.<br /><em>Closer to you.</em></strong><span>Menus · Orders · Delivery</span></div><div className="visual-food-cards"><i>Menu</i><i>Orders</i><i>Track</i></div></> : <><div className="visual-hero-copy"><small>Event pipeline</small><strong>Reliable messages<br />in the background.</strong><span>Events · Queues · Retries</span></div><div className="visual-flow"><span>Event</span><b>→</b><span>Queue</span><b>→</b><span>Provider</span></div></>}</div>;
}
