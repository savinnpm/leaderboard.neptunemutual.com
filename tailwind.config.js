module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'header': '-2px 3px 4px rgba(0, 0, 0, 0.07)',
        'card': '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
};
