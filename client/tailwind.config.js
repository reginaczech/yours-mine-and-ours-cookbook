/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/Components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-dark-grey": "#2d2b2c",
        "theme-dark-yellow": "#d39737",
        "theme-light-grey": "#9d978b",
        "theme-offwhite": "#fff2e1",
        "theme-background-white": "#fefaf7",
        "theme-light-yellow": "#f5e9d9",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
