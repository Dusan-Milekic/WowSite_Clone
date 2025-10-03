/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '960px',  // Custom md breakpoint at 960px
      'lg': '1048px',
      '2lg': '1113px',

      'xl': '1333px',

      '2xl': '1536px',
    },
    extend: {},
  },
  fonts:{
    poppins: ['Poppins', 'sans-serif'],
    mavenPro: ['Maven Pro', 'sans-serif'],
  },
  plugins: [],
}