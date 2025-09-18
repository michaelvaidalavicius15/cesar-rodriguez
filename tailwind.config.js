/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Scans files in the app directory (Next.js 13+)
    './pages/**/*.{js,ts,jsx,tsx}', // Scans files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Scans files in the components directory
    './src/**/*.{js,ts,jsx,tsx}', // Adjust based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};