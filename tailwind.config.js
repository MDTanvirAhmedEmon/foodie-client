/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary': '#E63945',
      'secondary': '#FAAB34',
    },
  },
  },
  plugins: [],
};
