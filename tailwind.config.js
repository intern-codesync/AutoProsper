/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    fontFamily : {
      'display' : ['Plus Jakarta Sans','sans-serif'],
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 540px) { ... }

      'md': '768px',
      // => @media (min-width: 720px) { ... }

      'lg': '992px',
      // => @media (min-width: 960px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1140px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1320px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

