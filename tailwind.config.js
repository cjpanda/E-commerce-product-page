/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d2025",
        secondary: "#68707d",
        light: "#b6bcc8",
        accent: {
          DEFAULT: "#ff7d1a",
          hover: "#ffede0",
        },
        body: "#f7f8fd",
      },
    },
  },
  plugins: [],
};
