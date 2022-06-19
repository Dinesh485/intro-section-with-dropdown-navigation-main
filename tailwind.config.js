/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/index.js"],
  theme: {
    extend: {
      fontFamily:{
        'epilogue' : ['Epilogue', 'sans-serif']
      },
      colors:{
        'almost-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)'
      }
    },
  },
  plugins: [],
}
