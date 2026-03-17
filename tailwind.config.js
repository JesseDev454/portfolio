/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050816',
        surface: '#0b1220',
        panel: '#101a2b',
        line: '#1e293b',
        accent: '#22d3ee',
        'accent-strong': '#0ea5e9',
        highlight: '#7c3aed',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(148, 163, 184, 0.1), 0 20px 80px rgba(14, 165, 233, 0.18)',
        soft: '0 20px 60px rgba(2, 6, 23, 0.34)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
