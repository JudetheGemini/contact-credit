/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      darkBlue: "#263238",
      greenLike: "#AFE4BE",
      myBlue: "#012168",
      myGreen: "#6CC049",
    },
    fontSize: {
      xs: "0.6rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.4rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    lineHeight: { 12: "3rem" },
    fontFamily: { kumbh: ['"Kumbh Sans"', "sans-serif"] },
    extend: {
      keyframes: {
        wiggle: {
          "5%, 50%": {
            transform: "scale(1)",
          },

          "10%": {
            transform: "scale(1)",
          },

          "15%": {
            transform: "scale(1)",
          },

          "20%": {
            transform: "scale(1) rotate(-5deg)",
          },

          "25%": {
            transform: "scale(1) rotate(5deg)",
          },

          "30%": {
            transform: "scale(1) rotate(-3deg)",
          },

          "35%": {
            transform: "scale(1) rotate(2deg)",
          },
          "40%": {
            transform: "scale(1) rotate(0)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 4s infinite",
      },
      backgroundImage: { money: "url(src/assets/images/background.jpg)" },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
