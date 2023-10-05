/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purp": "rgba(40, 32, 66, 1)",

        "custom-dark": "rgba(21, 24, 27, 1)",
      },
      backgroundColor: {
        "custom-purp": "rgba(40, 32, 66, 1)",

        "custom-dark": "rgba(21, 24, 27, 1)",
        "custom-linear":
          "linear-gradient(to bottom, rgba(40, 32, 66, 1), rgba(21, 24, 27, 1))",
      },
      boxShadow: {
        inner: "inset 0 0 10px #000",
      },
      animation: {
        "fade-in-top": "fade-in-top 2s forwards",
        "fade-in-left": "fade-in-left 2s forwards",
        "fade-in-right": "fade-in-right 2s forwards",
      },
      keyframes: {
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-100px)",
            visibility: "hidden",
          },
          "1%": { visibility: "visible" },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            visibility: "visible",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)",
            visibility: "hidden",
          },
          "1%": { visibility: "visible" },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
            visibility: "visible",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
            visibility: "hidden",
          },
          "1%": { visibility: "visible" },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
            visibility: "visible",
          },
        },
      },
    },
  },
  plugins: [],
};
