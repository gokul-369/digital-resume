/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // semantic color names used in your CSS
        bgprimary: colors.neutral[950],
        bgSecondary: colors.neutral[900],
        textprimary: colors.white,
        textSecondary: colors.gray[400],
      },
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};
