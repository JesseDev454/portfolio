/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        surface: '#131313',
        panel: '#201f1f',
        line: '#3c494e',
        accent: '#a5e7ff',
        'accent-strong': '#47d6ff',
        highlight: '#9d05ff',
        tertiary: '#00fd93',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(165, 231, 255, 0.24), 0 0 36px rgba(165, 231, 255, 0.18)',
        soft: '0 22px 70px rgba(0, 0, 0, 0.42)',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
