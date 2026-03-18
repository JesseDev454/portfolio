import { useEffect, useState } from 'react';

const HEADER_OFFSET = 104;
const TOP_SCROLL_THRESHOLD = 120;
const BOTTOM_SCROLL_THRESHOLD = 8;
const VIEWPORT_END_FACTOR = 0.72;

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-section]')).filter((element) => {
      const sectionId = element.dataset.section;
      return typeof sectionId === 'string' && sectionIds.includes(sectionId);
    });

    if (!elements.length) {
      return;
    }

    const firstSection = sectionIds[0] ?? '';
    const lastSection = sectionIds[sectionIds.length - 1] ?? '';
    let frameId = 0;

    const updateActiveSection = () => {
      if (window.scrollY <= TOP_SCROLL_THRESHOLD) {
        setActiveSection(firstSection);
        return;
      }

      const scrollBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (documentHeight - scrollBottom <= BOTTOM_SCROLL_THRESHOLD) {
        setActiveSection(lastSection);
        return;
      }

      const viewportTop = HEADER_OFFSET;
      const viewportBottom = window.innerHeight * VIEWPORT_END_FACTOR;
      const targetLine = viewportTop + Math.min((viewportBottom - viewportTop) * 0.35, 180);

      const candidates = elements
        .map((element) => {
          const sectionId = element.dataset.section ?? element.id;
          const rect = element.getBoundingClientRect();
          const visibleTop = Math.max(rect.top, viewportTop);
          const visibleBottom = Math.min(rect.bottom, viewportBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const availableHeight = Math.min(Math.max(rect.height, 1), viewportBottom - viewportTop);
          const visibleRatio = visibleHeight / availableHeight;
          const center = rect.top + rect.height / 2;
          const centerDistance = Math.abs(center - targetLine);
          const centerScore = 1 - Math.min(centerDistance / window.innerHeight, 1);
          const topBias = rect.top <= viewportTop + 16 && rect.bottom > viewportTop ? 0.2 : 0;
          const score = visibleRatio * 0.7 + centerScore * 0.3 + topBias;

          return { sectionId, score, top: rect.top, bottom: rect.bottom };
        })
        .filter((candidate) => candidate.bottom > viewportTop && candidate.top < viewportBottom)
        .sort((a, b) => b.score - a.score || a.top - b.top);

      if (candidates[0]) {
        setActiveSection((current) => (current === candidates[0].sectionId ? current : candidates[0].sectionId));
      }
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    const observer = new IntersectionObserver(
      () => {
        requestUpdate();
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -28% 0px`,
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    );

    elements.forEach((element) => observer.observe(element));
    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [sectionIds]);

  return activeSection;
}
