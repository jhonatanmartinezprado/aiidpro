/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-850': '#1c1c1c',
        'lightGray': '#A5A5A5',
        'backColor': '#F6F6F6',
      },
      backgroundImage: {
        'hero-pattern': "url('https://cdn.builder.io/api/v1/image/assets/TEMP/ebbafc0e5625741a697523c9ad2c67cd5a0361599e4594520ddc26db969d3c1b?apiKey=2a73886494004d7089b4468484ca08f2&')",
      }
    },
    screens: {
      '1200': '1200px'
    },
    backgroundSize: {
      '100%': '50%'
    }
  },
  plugins: [],
}