/** @type {import('tailwindcss').Config} */
// Colors  Generator
// https://hihayk.github.io/scale/#4/5/50/80/-51/67/20/14/326820/50/104/32/white
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      brown: {
        50: '#fdf8f6',
        100: '#f2e8e5',
        200: '#eaddd7',
        300: '#e0cec7',
        400: '#d2bab0',
        500: '#bfa094',
        600: '#a18072',
        700: '#977669',
        800: '#846358',
        900: '#43302b',
      },
      'dark-green': {
        900: '#0E3726',
        800: '#124325',
        700: '#165020',
        600: '#1D5C1B',
        500: '#326820',
        400: '#608143',
        300: '#8A9A65',
        200: '#AFB389',
        100: '#CBC6AD',
        50: '#E2DCD1',
      }
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
        'fade-out': 'fadeOut 300ms ease-in-out',
        'blob': 'blob 5s infinite',
      },
      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '25%': { opacity: 0.25 },
          '50%': { opacity: 0.50 },
          '75%': { opacity: 0.75 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '25%': { opacity: 0.75 },
          '50%': { opacity: 0.50 },
          '75%': { opacity: 0.25 },
          '100%': { opacity: 0 },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.2)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.8)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }),
    },
  },
  plugins: [],
};
