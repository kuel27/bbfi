/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include your HTML entry file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files in the `src` directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
    },
  },
  plugins: [],
};