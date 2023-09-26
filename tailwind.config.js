/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['"Sora"', 'sans-serif'],
      },
      colors: {
        'darkViolet': '#883AE1',
        'dark': '#20293A',
        'lightViolet': '#E6D6FC',
        'gray': '#6C727F',
        'whiteDesatured': '#FAFAF9',
        'white': '#FFFFFF',
      }
    },
  },
  plugins: [],
}

