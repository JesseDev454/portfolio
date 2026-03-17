/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#050816',
        },
        cyan: {
          450: '#38bdf8',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(148, 163, 184, 0.1), 0 20px 80px rgba(14, 165, 233, 0.18)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

