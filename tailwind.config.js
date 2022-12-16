/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#333",
        secondary: "#F9F9F9",
        primaryBackground: "#16181E",
        secondaryBackground: "#21242D",
      },
    },
  },
  plugins: [],
};
