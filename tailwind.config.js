/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./js/*.js"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '6px 0 38px rgba(20, 20, 20, 0.10)',
      },
    },
  },
  plugins: [],
}

