/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{ 
        primary:'#D60638',
        secondary:'#06d6a0',
        dark: "#000012"
      },
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1279px",
        sm: { max: "767px" },
        xs : {max:"280px"}
      },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    },
  },
  plugins: [],
}

