/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
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
