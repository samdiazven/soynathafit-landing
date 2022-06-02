module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#a5cbce",
          200: "#6ab8cb",
          300: "#23a1d4",
          400: "#2d8eb8",
        },
        green: {
          100: "#a19f9d",
          200: "#236c72",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
