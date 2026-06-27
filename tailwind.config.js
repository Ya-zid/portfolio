/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        // One restrained accent. Change these two shades to recolor the whole site.
        // `accent` reads on light backgrounds, `accent.light` on dark backgrounds.
        accent: {
          DEFAULT: '#2348E0',
          light: '#7C97FF',
        },
        // Editorial ink: warm-neutral grays for text, rules and surfaces.
        ink: {
          50: '#f7f7f8',
          100: '#ededee',
          200: '#dcdce0',
          300: '#b9b9c0',
          400: '#8d8d96',
          500: '#6b6b74',
          600: '#4c4c54',
          700: '#37373d',
          800: '#222226',
          900: '#141417',
          950: '#0b0b0d',
        },
      },
      maxWidth: {
        content: '72rem',
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [],
};
