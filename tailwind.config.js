/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1d58db',
        'secondary': '#58b386',
        'cus-grey': '#5b5959',
        'cus-grey-1': '#9c9c9c',
        'cus-black': '#000000',
      },
      maxWidth: {
        '1200': '1220px',
      }
    },
  },
  plugins: [],
}
