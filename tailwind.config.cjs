/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        openSans: ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
        kalam: ["Kalam", "cursive"],
      },
    },
  },
  plugins: [],
};
