/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope"],
      },
      colors: {
        "ramos-red": "#FE4B23",
        "ramos-ash": "#CDCCCC",
      },
      lineHeight: {
        "ramos-120": "120%",
        "ramos-150": "150%",
      },
    },
  },
  plugins: [],
};
