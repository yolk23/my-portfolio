/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Inter var", "sans-serif"], // Ensure fallback to sans-serif
    },
    colors: {
      skyblue: "#87CEEB",
    },
  },
  plugins: [],
};
