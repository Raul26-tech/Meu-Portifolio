/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-blue-dark": {
          50: "#27314d",
          100: "#191826",
          200: "#051439",
          300: "#172348",
        },
        "theme-blue-dark-gray": {
          100: "#2e353b",
          150: "#22262a",
        },
        "blue-10": "#328de8",
        "theme-blue": "#2596FF",
        "theme-blue-hover": "#3DA2FF",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
