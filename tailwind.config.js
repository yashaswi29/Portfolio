export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      spacing: {
        '128': '32rem',
      },
      colors: {
        // Accent: amber. DEFAULT is the primary accent, `light` the secondary.
        accent: {
          DEFAULT: '#D97706', // primary accent
          light: '#F59E0B',   // secondary accent
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Grayscale base. 900/950 map to the dark canvas, 800 to card surfaces.
        primary: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#c9c9c9',
          300: '#a3a3a3',
          400: '#7d7d7d',
          500: '#5c5c5c',
          600: '#404040',
          700: '#2a2a2a',
          800: '#1e1e1e', // card surface
          900: '#121212', // background
          950: '#0a0a0a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'blink': 'blink 1.1s steps(1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
