/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      extend: {
        scrollBehavior: {
          'smooth': 'smooth',
        },
      },
    },
  },
  plugins: [],
}