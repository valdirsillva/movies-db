/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'image-header-top': "url(../public/the-movie-db.jpg)",
      },
    },
  },
  plugins: [],
}