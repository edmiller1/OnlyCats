module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-purple": "#974AF5",
        "purple-1": "#8432BA",
        "purple-2": "#D46BE7",
        "purple-3": "#A42ED1",
        "purple-4": "#7C2ED1",
        "purple-5": "#632BC7",
      },
      borderWidth: {
        1: "1px",
      },
      keyframes: {
        fadeUp: {
          "0%, 100%": { transform: "translateY(-10px)" },
          // "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
