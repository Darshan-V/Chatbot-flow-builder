/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#ffffff",
          secondary: "#f2f2f2",
          // add more light theme colors here
        },
        dark: {
          primary: "#000000",
          secondary: "#333333",
          // add more dark theme colors here
        },
      },
    },
  },
  plugins: [],
};
