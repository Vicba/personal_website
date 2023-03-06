
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whale-blue': '#012d3f',
        'purple': '#520a26',
        'egyptian-blue': '#27359c',
        'white': '#ffffff'
      },
      backgroundImage: {
        'hero': "url('./assets/images/hero-bg.png')"
      }
    },
  },
  plugins: [],
}