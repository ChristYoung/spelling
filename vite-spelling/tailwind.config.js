/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html', './src/**/*.{ts,tsx}' ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#F0F0F0',
        'primary-dark': '#1B1A22',
      }
    },
  },
  plugins: [],
}

