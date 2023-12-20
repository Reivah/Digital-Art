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
        shadowBlack: 'rgba(0, 0, 0, 0.4)',
        whiteYellow: '#FFFF33'
      }
    },
  },
  plugins: [],
}

