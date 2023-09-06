/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "rgb(63, 66, 119)",
      primaryDark: "#FFFFFF",
      secondary: "#FFCE66",
      secondaryDark: "#44455B",
      tertiary: "#F9AB40",
      tertiaryDark: "#F9AB40"
    },
    boxShadow: {
      card: "0px 35px 120px -15px primary",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
    },
  },
};
export const plugins = [];
