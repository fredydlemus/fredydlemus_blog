/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyblue: {
          100: "#00ffeb",
          200: "#00b6c5",
          300: "#007e9d",
          400: "#005477",
          500: "#00385a",
        },
      },
    },
  },
  plugins: [],
};
