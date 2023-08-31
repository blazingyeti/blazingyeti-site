/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
