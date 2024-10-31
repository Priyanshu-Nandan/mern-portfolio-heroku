/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2a676e",
        "secondary": "#F97316",
        "tertiary": "#54d688"
      }
    },
    screens: {
      'sm': {max: '1000px'},

      'lg': {max: '2080px'}
    }
  },
  plugins: [],
}