/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",          // All HTML files in root
    "./**/*.{html,js}",  // All HTML and JS in subfolders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}