type SkillIconProps = {
  skill: string;
  className?: string;
};

export function SkillIcon({ skill, className = 'h-4 w-4' }: SkillIconProps) {
  switch (skill) {
    case 'React':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <g fill="none" stroke="currentColor" strokeWidth="1.6">
            <ellipse cx="12" cy="12" rx="9" ry="3.8" />
            <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
          </g>
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      );
    case 'TypeScript':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="3.2" fill="currentColor" />
          <path
            d="M8 9.2h8.2M12.1 9.2v6.1M14.9 11.2c.4-.6 1-.9 1.9-.9.9 0 1.8.4 1.8 1.4 0 2-3.8 1.1-3.8 3.2 0 .9.8 1.5 1.9 1.5.9 0 1.6-.3 2.2-.8"
            stroke="#07101F"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M6 9.5c1.1-1.7 2.5-2.5 4.4-2.5 2.8 0 3.2 2 4.6 2 .8 0 1.5-.4 2-1.2-1.1 1.7-2.5 2.5-4.4 2.5-2.8 0-3.2-2-4.6-2-.8 0-1.5.4-2 1.2Zm4 5c1.1-1.7 2.5-2.5 4.4-2.5 2.8 0 3.2 2 4.6 2 .8 0 1.5-.4 2-1.2-1.1 1.7-2.5 2.5-4.4 2.5-2.8 0-3.2-2-4.6-2-.8 0-1.5.4-2 1.2Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'Vite':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path d="M12 3 5.4 4.4 7.8 17l4.2 2.9 4.2-2.9 2.4-12.6L12 3Z" fill="currentColor" />
          <path d="m12 6.5 2.8 5-2.8 5-2.8-5 2.8-5Z" fill="#050816" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="m12 2.8 7.4 4.3v9L12 20.4l-7.4-4.3v-9L12 2.8Zm0 2.2L6.6 8.1v6L12 17.2l5.4-3.1v-6L12 5Z"
            fill="currentColor"
          />
          <path d="M12.2 8.2c1.7 0 2.8.8 2.8 2.2 0 1.6-1.3 2.3-2.7 2.3h-1v2.2H9.7V8.2h2.5Zm-.2 3.3c.8 0 1.3-.3 1.3-1 0-.6-.5-.9-1.3-.9h-.8v1.9h.8Z" fill="currentColor" />
        </svg>
      );
    case 'Express':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M5.5 8.2h13M5.5 12h10.5M5.5 15.8h13"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'REST APIs':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <rect x="4" y="5" width="16" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <rect x="4" y="14" width="16" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 7.5h4M8 16.5h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="16.8" cy="7.5" r="1" fill="currentColor" />
          <circle cx="16.8" cy="16.5" r="1" fill="currentColor" />
        </svg>
      );
    case 'Authentication':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M12 3.8 18 6v5.5c0 3.6-2.2 6.8-6 8.7-3.8-1.9-6-5.1-6-8.7V6l6-2.2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <rect x="9" y="10.5" width="6" height="4.8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10.2 10.5V9.4A1.8 1.8 0 0 1 12 7.6a1.8 1.8 0 0 1 1.8 1.8v1.1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'MySQL':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M5.6 15c1.8-3.2 4.6-5.1 8.3-5.6 1.3-.2 2.5-.1 3.5.2m-8.6 5.7c.6-.5 1.3-.9 2.2-1.1 1.5-.3 2.7-.1 3.8.7.8.5 1.7.8 2.6.9m-6.8 1.8c1 .7 2.3 1 3.8.8 1.7-.2 3.1-.9 4.1-2.2m-4.1-9.2c0-.7.2-1.3.6-1.8m-1.7 11.5.8 1.8m-1.1-5.8 1.7-.2m3.7 1.4 1.2.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M8.2 14.8V9.6c0-2.2 1.5-3.6 3.8-3.6 2.4 0 3.9 1.4 3.9 3.6v5c0 1.4-1 2.4-2.4 2.4h-1.4m-3-6.3 1.7-1.8c.6-.7 1.3-1 2.1-1 .8 0 1.5.3 2.1 1m-4.2 5.2h2.9m-5.1 2.4 1.9-.4v2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'TypeORM':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <circle cx="7.2" cy="8.2" r="2.1" fill="currentColor" />
          <circle cx="16.8" cy="8.2" r="2.1" fill="currentColor" opacity="0.92" />
          <circle cx="12" cy="15.8" r="2.3" fill="currentColor" opacity="0.84" />
          <path
            d="M8.9 9.5 10.8 13m4.3-3.5L13.2 13"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'Git':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path d="m12 3.8 8.2 8.2-8.2 8.2L3.8 12 12 3.8Z" fill="currentColor" />
          <path
            d="M9.3 10.1a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm5.4 2.7a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm-4-1.3v3"
            fill="none"
            stroke="#050816"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path d="M10.7 9.2v1.2l4 4" fill="none" stroke="#050816" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            fill="currentColor"
            d="M12 3.2a8.8 8.8 0 0 0-2.78 17.15c.44.08.6-.2.6-.44v-1.56c-2.43.54-2.94-1.05-2.94-1.05-.4-1.03-.98-1.3-.98-1.3-.8-.56.06-.55.06-.55.88.07 1.35.93 1.35.93.79 1.36 2.06.97 2.56.74.08-.58.3-.97.56-1.2-1.94-.23-3.98-.99-3.98-4.4 0-.98.34-1.78.9-2.41-.1-.23-.39-1.13.09-2.36 0 0 .73-.24 2.4.91a8.07 8.07 0 0 1 4.37 0c1.67-1.15 2.4-.91 2.4-.91.48 1.23.18 2.13.09 2.36.56.63.9 1.43.9 2.41 0 3.42-2.05 4.16-4 4.38.31.28.6.82.6 1.66v2.47c0 .24.16.52.6.44A8.8 8.8 0 0 0 12 3.2Z"
          />
        </svg>
      );
    case 'Postman':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <circle cx="12" cy="12" r="8.5" fill="currentColor" />
          <path d="m9 15 6-6M12.6 8.8H15V11.2" fill="none" stroke="#050816" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'Docker':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M6 11h2V9H6v2Zm3 0h2V9H9v2Zm3 0h2V9h-2v2Zm-6 3h2v-2H6v2Zm3 0h2v-2H9v2Zm3 0h2v-2h-2v2Zm2.8-.8c.5 0 1-.1 1.5-.4.4-.3.7-.7.9-1.2.7.1 1.2.5 1.6 1.1-.5.4-1 .6-1.7.7-.5 1.7-2 2.8-4.1 2.8H7.5c-1.4 0-2.5-1.1-2.5-2.5V12h10.4c.2.3.3.7.3 1.2Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M12 3.6c2.2 2.3 3.4 4.8 3.4 7.6 0 2.8-1.1 5.2-3.4 7.3-2.2-2.1-3.4-4.5-3.4-7.3 0-2.8 1.1-5.3 3.4-7.6Z"
            fill="currentColor"
          />
          <path d="M12 5.5v12.7" stroke="#050816" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'Cloud Storage':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M8.2 17.8h8.2a3.1 3.1 0 0 0 .4-6.2 4.8 4.8 0 0 0-9.2-1.3A3.5 3.5 0 0 0 8.2 17.8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 10.2v6.2m0 0-2-2m2 2 2-2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'Kotlin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path d="M5 5h14L5 19V5Z" fill="currentColor" />
          <path d="M9.6 5H19L9.6 14.4V5Z" fill="currentColor" opacity="0.82" />
          <path d="M12.3 11.7 19 19h-9.6l2.9-7.3Z" fill="currentColor" opacity="0.64" />
        </svg>
      );
    case 'Android':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M8.3 9.1h7.4c1.1 0 1.9.9 1.9 1.9v4.9c0 1.1-.8 1.9-1.9 1.9H8.3c-1.1 0-1.9-.8-1.9-1.9V11c0-1 .8-1.9 1.9-1.9Zm1-1.7 1-1.7m4.4 1.7-1-1.7M9.7 12.2h.01M14.3 12.2h.01"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'QR Scanning':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <path
            d="M5 9V5h4M19 9V5h-4M5 15v4h4M19 15v4h-4M9.5 9.5h1.5v1.5H9.5zm3 0H14v1.5h-1.5zm-3 3H11V14H9.5zm3 0h1.5V14h-1.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8.5 12h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
  }
}

