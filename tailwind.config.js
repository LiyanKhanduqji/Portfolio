/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{ 
        primary:'#D60638',
        secondary:'#06d6a0'
      }
    },
  },
  plugins: [],
}

