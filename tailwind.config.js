/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          DEFAULT: '#14b8a6', // Teal-500
          light: '#5eead4',  // Teal-300
          dark: '#0f766e',   // Teal-700
        },
        secondary: {
          DEFAULT: '#f59e42', // Amber-500
          light: '#fde68a',  // Amber-300
          dark: '#b45309',   // Amber-700
        },
      },
    },
  },
  plugins: [],
}; 