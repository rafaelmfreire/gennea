module.exports = {
	mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      current: "currentColor",
      green: {
        light: "#6FCE1A",
        light10: "#F1FAE8",
        light20: "#E9F8DD",
        // DEFAULT: "#6FCE1A",
        dark: "#0F5156",
        card: "#115E64",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
    },
    fontFamily: {
      sans: "Inter, sans-serif",
      serif: "ui-serif, Georgia",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
