/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          50:  '#fdf2f4',
          100: '#fbe8ec',
          200: '#f5c6d0',
          300: '#ee9aaa',
          400: '#e36079',
          500: '#d43553',
          600: '#DC143C', 
          700: '#990011',
          800: '#7A000D',
          900: '#4D0008',
          950: '#120206',
        },
        gold: {
          300: '#F2D283',
          400: '#E6C163',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#8B6508',
          flare: '#FFF5CC',
        },
        ivory: {
          100: '#FAF7F2',
          200: '#F0EBE1',
          300: '#EDE4D3',
          400: '#D9CEBF',
          500: '#BFB09A',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        serif:   ['Cormorant Garamond', 'serif'],
        body:    ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
