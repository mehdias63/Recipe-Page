/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      out: ["Outfit"],
    },
    extend: {
      colors: {
        "dark-blue": "#262E38",
      },
    },
  },
  plugins: [],
};
