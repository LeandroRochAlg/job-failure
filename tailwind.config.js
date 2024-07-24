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
      darkLight: '#DAD8E0',
      red: '#B22222',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'lg': '0 0 10px 0 rgba(0, 0, 0, 0.3)',
        'xl': '0 0 15px 0 rgba(0, 0, 0, 0.3)',
        'primary': '0 0px 10px 0 rgba(96, 4, 96, 0.9)'
      },
      transitionProperty: {
        'shadow': 'box-shadow',
      },
      transitionDuration: {
        '200': '200ms',
      },
      animation: {
        'pulse-fast': 'pulse 1.25s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}