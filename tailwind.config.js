/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightYellow: "#f6d876",
        white2: "#fffbf2",
        darkGreen: "#05ab54",
        dark: "#1e1e1e",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        leagueGothic: ["League Gothic", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      },
      dropShadow:{
        '3xl':"-6px 6px 10px rgba(0,0,0,.4)"
      }
    },
  },
  plugins: [],
}