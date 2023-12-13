module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_b2": "#000000b2",
          "900_5a": "#0000005a",
          "900_3f": "#0000003f",
          "900_87": "#00000087",
          "900_4c": "#0000004c",
          "900_0a": "#0000000a",
          "900_99": "#07080d99",
        },
        red: { 600: "#e12f2f", "600_b2": "#f2232fb2", A700: "#ff0000" },
        blue: { A700: "#0067ff", A700_7f: "#0067ff7f" },
        green: { 50: "#e9ffe5", 800: "#00a510", A700: "#0a9d4b" },
        indigo: {
          50: "#ebebff",
          A700_01: "#0028ff",
          A700_7f: "#3455fd7f",
          A700: "#3455fd",
        },
        blue_gray: { 100: "#d9d9d9", 900: "#242438" },
        pink: { 50: "#ffdfe4" },
        gray: {
          200: "#f0f0f0",
          400: "#c4c4c4",
          500: "#93939a",
          "400_01": "#bebebe",
        },
        white: { A700: "#ffffff" },
      },
      fontFamily: { manrope: "Manrope" },
      boxShadow: {
        bs1: "0px 4px  4px 0px #0000003f",
        bs: "0px 4px  12px 0px #0000000a",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
