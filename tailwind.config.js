/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura", "sans-serif"],
        oxanium: ["Oxanium", "sans-serif"],
      },
      colors: {
        darkBlue: "#00205B",
        silver: "#A0A0A0",
        redAccent: "#FF0000",
        yellowAccent: "#FFD700",
        monarch: "#171717",
        monarchPrimary: "#22b4be",
        monarchSecondary: "#1A3934",
      },
      textColor: {
        monarch: "#22b4be",
      },
      fontSize: {
        "2xs": ".6rem",
      },
      screens: {
        xxs: "220px",
        xs: "320px",
        ...defaultTheme.screens,
      },
    },
  },
};
