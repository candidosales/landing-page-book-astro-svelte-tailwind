/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "book-yellow": "#fce62e",
        "book-gray": "#1a1a1c",
        "book-theme": "#b3b3b3",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        body: ["PT Serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/ui")],
};
