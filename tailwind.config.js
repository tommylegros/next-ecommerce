/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,js,tsx,jsx}",
    "./pages/**/*.{ts,js,tsx,jsx}",
    "./components/**/*.{ts,js,tsx,jsx}",
],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem,1fr))",
      },
    },
  },
  plugins: [],
}