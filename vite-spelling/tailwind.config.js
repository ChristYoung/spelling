/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html', './src/**/*.{ts,tsx}' ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'base-dark': '#1B1A22',
        'little-dark': '#2b2b37',
      },
      boxShadow: {
        custom: '0 6px 16px -8px #00000014, 0 9px 28px #0000000d, 0 12px 48px 16px #00000008'
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

