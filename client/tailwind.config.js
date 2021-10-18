module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-purple": "#A883F8",
        "secondary-purple": "#d4c1fc",
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
