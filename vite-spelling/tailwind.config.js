/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html', './src/**/*.{ts,tsx}' ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#F0F0F0',
        'primary-dark': '#1B1A22',
        'little-dark': '#2b2b37',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(330deg, rgb(255 245 154 / 40%) 20%, #ff6d6d66 100%)'
      },
      fontSize: {
        base: '62.5%'
      }
    },
  },
  plugins: [],
}

