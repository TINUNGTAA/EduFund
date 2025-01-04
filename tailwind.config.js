/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'edufund-green':'rgba(75, 170, 36, <alpha-value>)',

      },
    },
  },
  plugins: [],
}