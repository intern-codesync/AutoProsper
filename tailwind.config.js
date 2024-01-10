/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 540px) { ... }

      'md': '768px',
      // => @media (min-width: 720px) { ... }

      'lg': '992px',
      // => @media (min-width: 960px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1140px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

