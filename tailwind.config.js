/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif']
      },
      colors: {
        customBlue: '#045275'
      }
    },
  },
  plugins: [],
}