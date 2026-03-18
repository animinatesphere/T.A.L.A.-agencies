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
          600: '#b91c3a',
          700: '#6B0C22',
          800: '#4A0818',
          900: '#2E0510',
          950: '#1a0309',
        },
        gold: {
          400: '#E8C46A',
          500: '#C9A84C',
          600: '#a8893a',
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
