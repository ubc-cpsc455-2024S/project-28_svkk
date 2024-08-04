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
        'darkTeal': '#0C6F7B'
      }
    },
  },
  plugins: [],
}