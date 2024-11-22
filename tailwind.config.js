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
        "port-grey": "#696969",
        "port-melon": "#ffd369",
        "port-blue": "#17a9c7",
      },

      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
