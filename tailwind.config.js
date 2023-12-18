/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        bitter: ['Bitter', 'serif']
      },
      colors: {
        yellow: '#D6EF0E',
        veryDarkBlue: 'hsl(226, 43%, 10%)',
        shadowBlue: 'rgba(39, 67, 189, 0.11)'
      }
    },
  },
  plugins: [],
}

