/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#0a0018",
        cdff: "#00cdff",
        white: "#fff",
        "light-stroke": "#dfdfe0",
        "light-text": "#9a9ea6",
        black: "#2f2f2f",
        gainsboro: "#dcdcdc",
        mediumslateblue: "#5956e9",
        "light-neutral-secondary": "#f0f1f2",
        b: "#22304b",
        deepskyblue: "rgba(0, 205, 255, 0.16)",
        black1: "#000",
        blue: "#1b16ff",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        "playfair-display": "'Playfair Display'",
        mulish: "Mulish",
      },
      borderRadius: {
        xl: "20px",
        "11xl": "30px",
        "14xl-5": "33.5px",
      },
    },
    fontSize: {
      xl: "20px",
      "45xl": "64px",
      "6xl": "25px",
      "31xl": "50px",
      "base-7": "15.7px",
      "xs-2": "11.2px",
      "sm-4": "13.4px",
      "xl-1": "20.1px",
      "11xl": "30px",
      "lg-1": "18.1px",
      "25xl": "44px",
      "base-9": "16.9px",
      xs: "12px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
