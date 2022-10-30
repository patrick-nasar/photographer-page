/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: "300px",
      },
    },
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [],
};
