/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-850': '#1c1c1c',
        'lightGray': '#A5A5A5'
      }
    },
    screens: {
      '1200': '1200px'
    }
  },
  plugins: [],
}