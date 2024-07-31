/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
    },
    },
    colors:{
      "primary-blue":"#1B374C",
      "secondary-blue":"#0C5C97",
      "white":"#EEEEEE",
      "primary-gray": "#7B827E",
      "secondary-white":"#E8EBED",
      "white-text-secondary":"#B8C1C8",
      "navWhite":"#FFFFFF",
      "stone": "#6B7280",
      "navbg":"#E4E4E7",
    }
  },
  plugins: [],
}