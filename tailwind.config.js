/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-blue": "#070724",
        "header-border": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
