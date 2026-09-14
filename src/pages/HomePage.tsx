import { useEffect, useState } from 'react';
import { SiteShell } from '../components/layout/SiteShell';
import { type ViewId } from '../data/site';
import { AboutView, CommunityView, ContactView, ExperienceView, HomeView, WorkView } from './PortfolioViews';

const aliases: Record<string, ViewId> = { projects: 'work', skills: 'about' };
const validViews = new Set<ViewId>(['home', 'work', 'experience', 'community', 'about', 'contact']);

function readView(): ViewId {
  const raw = window.location.hash.replace(/^#/, '').toLowerCase();
  if (validViews.has(raw as ViewId)) return raw as ViewId;
  return aliases[raw] ?? 'home';
}

export function HomePage() {
  const [view, setView] = useState<ViewId>(() => readView());

  useEffect(() => {
    const handleHashChange = () => setView(readView());
    window.addEventListener('hashchange', handleHashChange);
    document.title = `${view === 'home' ? 'Goodluck Jesse Kassa' : `${view[0].toUpperCase()}${view.slice(1)} · Goodluck Jesse Kassa`}`;
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [view]);

  const navigate = (nextView: ViewId) => {
    if (window.location.hash !== `#${nextView}`) window.location.hash = nextView;
    else setView(nextView);
  };

  return (
    <SiteShell activeView={view} onNavigate={navigate}>
      {view === 'home' ? <HomeView navigate={navigate} /> : null}
      {view === 'work' ? <WorkView /> : null}
      {view === 'experience' ? <ExperienceView navigate={navigate} /> : null}
      {view === 'community' ? <CommunityView /> : null}
      {view === 'about' ? <AboutView /> : null}
      {view === 'contact' ? <ContactView /> : null}
    </SiteShell>
  );
}
