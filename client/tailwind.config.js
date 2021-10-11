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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
