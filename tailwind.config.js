/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "footerLayout" : "repeat(auto-fit, minmax(14rem, 1fr))"
      }
    },
  },
  plugins: [],
}

