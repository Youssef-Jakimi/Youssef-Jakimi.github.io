import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Near-black cinematic canvas
        base: {
          DEFAULT: '#08080b',
          900: '#0a0a0f',
          800: '#101018',
          700: '#16161f',
          600: '#1e1e2a',
        },
        // Electric indigo/violet accent system
        accent: {
          50: '#eef0ff',
          100: '#e0e3ff',
          200: '#c5cbff',
          300: '#a3a8ff',
          400: '#8b85ff',
          500: '#7c6cff', // primary
          600: '#6d4bff',
          700: '#5a35e6',
          800: '#4a2bbd',
          900: '#3a2596',
        },
        // Secondary glow (violet-magenta)
        glow: {
          400: '#b56cff',
          500: '#a14bff',
          600: '#8b2fff',
        },
        ink: {
          DEFAULT: '#f4f4f7',
          secondary: '#a6a6b3',
          tertiary: '#6c6c7a',
        },
        edge: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          strong: 'rgba(255,255,255,0.14)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 9vw, 8.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        card: '20px',
        xl2: '28px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,108,255,0.20), 0 8px 40px rgba(124,108,255,0.18)',
        'glow-lg': '0 0 0 1px rgba(124,108,255,0.28), 0 20px 80px rgba(124,108,255,0.30)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -24px rgba(0,0,0,0.8)',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(120deg, #7c6cff 0%, #a14bff 50%, #6d4bff 100%)',
        'radial-fade': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,108,255,0.18), transparent)',
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        marquee: 'marquee 40s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
