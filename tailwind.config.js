/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5470F0',
        secondary: '#CEFCE5',
        lightBlue: '#f1f6fe',
        lightGreen: '#f1fff9',
        mainGreen: '#68b288',
      },
    },
  },
  plugins: [],
};
