/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2e7d32',
          light: '#4caf50',
          dark: '#1b5e20'
        },
        accent: {
          DEFAULT: '#d6f36b',
          light: '#e8f5e8'
        }
      }
    },
  },
  plugins: [],
}
