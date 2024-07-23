/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#600460',
      dark: '#2B2A2C',
      light: '#F1EFF5',
      lightDark: '#464547',
      darkLight: '#DAD8E0'
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}