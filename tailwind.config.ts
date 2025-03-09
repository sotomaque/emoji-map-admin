import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  // dynamic safelist for grid-cols and colors
  safelist: [
    'bg-background',
    'bg-primary',
    'bg-secondary',
    'bg-card',
    'bg-accent',
    'bg-descturctive',
    'bg-muted',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
  ],
  prefix: '',
  theme: {
    corePlugins: {
      container: 'false',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        heading: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@screen sm': {
            maxWidth: '640px',
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
            paddingLeft: '4rem',
            paddingRight: '4rem',
          },
        },
      });
      addBase({
        h1: {
          fontFamily: 'var(--font-sans)',
          fontSize: '2.5rem',
          lineHeight: '1.2',
          fontWeight: 'bold',
          '@screen md': {
            fontSize: '3.5rem',
          },
        },
        h2: {
          fontFamily: 'var(--font-sans)',
          fontSize: '2rem',
          lineHeight: '1.2',
          fontWeight: 'bold',
          '@screen md': {
            fontSize: '2.5rem',
          },
        },
        h3: {
          fontFamily: 'var(--font-sans)',
          fontSize: '1.5rem',
          lineHeight: '1.2',
          '@screen md': {
            fontSize: '2rem',
          },
        },
        h4: {
          fontFamily: 'var(--font-sans)',
          fontSize: '1.25rem',
          lineHeight: '1.3',
          '@screen md': {
            fontSize: '1.5rem',
          },
        },
        h5: {
          fontFamily: 'var(--font-sans)',
          fontSize: '1.125rem',
          lineHeight: '1.4',
          '@screen md': {
            fontSize: '1.25rem',
          },
        },
        h6: {
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          lineHeight: '1.4',
          '@screen md': {
            fontSize: '1rem',
          },
        },
      });
    }),
  ],
} satisfies Config;

export default config;
