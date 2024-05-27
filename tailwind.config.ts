import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      textColor: {
        'primary-text-color': 'var(--primary-text-color)',
      },
      gridTemplateColumns: {
        'meal-grid-auto-fill': 'repeat(auto-fill, minmax(20rem, 1fr))',
      },
      keyframes: {
        'fade-slide-in-from-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-1rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-slide-in-from-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(1rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-slide-in-from-bottom': {
          '0%': {
            opacity: '0',
            transform: 'translateY(1rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        flash: {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        'fade-slide-in-from-left':
          'fade-slide-in-from-left 1s ease-out forwards',
        'fade-slide-in-from-right':
          'fade-slide-in-from-right 1s ease-out forwards',
        'fade-slide-in-from-bottom':
          'fade-slide-in-from-bottom 1s ease-out forwards',
        flash: 'flash 1s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
export default config;
