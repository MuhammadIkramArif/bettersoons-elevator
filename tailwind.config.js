/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4D74DA",
          50: "#E5EBFA",
          100: "#D4DEF6",
          200: "#B2C3EF",
          300: "#91A9E8",
          400: "#6F8EE1",
          500: "#4D74DA",
          600: "#2954C6",
          700: "#1F4197",
          800: "#162D69",
          900: "#0C193A",
          950: "#070F23",
        },
        secondary: {
          DEFAULT: "#600078",
          50: "#D631FF",
          100: "#D21CFF",
          200: "#C200F2",
          300: "#A100CA",
          400: "#8100A1",
          500: "#600078",
          600: "#330040",
          700: "#060008",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
