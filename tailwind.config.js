module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0067b8",
        secondary: "rgb(129, 129, 129)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
