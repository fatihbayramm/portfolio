/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },

    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        "port-grey": "#dbe0e0",
        "port-melon": "#ecdc0f",
        "port-blue": "#17a9c7",
      },
    },
  },
  plugins: [],
};
