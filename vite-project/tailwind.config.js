/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue' : 'rgb(0,195,255)',
        'bg' : '#EFF7F8',
        'shadow': '#DFEAEA',
        'teal': '#1199A9',
        'darkTeal': '#0C6F7B',
        'darkTealHover': '#07606B',
        'red': '#D11A2A',
        'redHover': '#A41421',
        'green': '#22B538',
        'greenHover': '#177717'
      }
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
     }
  },
  plugins: [],
}