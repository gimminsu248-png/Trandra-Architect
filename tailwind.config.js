/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d1117",
        surface: "#161b22",
        primary: "#2f81f7",
        secondary: "#30363d",
        accent: "#2ea043",
        border: "#30363d",
        text: {
          primary: "#c9d1d9",
          secondary: "#8b949e",
          accent: "#58a6ff"
        }
      }
    },
  },
  plugins: [],
}
