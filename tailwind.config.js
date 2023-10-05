/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      // Enable responsive variants
      padding: ['responsive'],
      margin: ['responsive'],
      // Add more variants as needed
    },
  },
}

