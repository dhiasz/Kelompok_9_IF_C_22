/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./page/**/*.{html,js}",
    "./dist/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'hijau': '#5C8374',
        'bermuda': '#78dcca',
        'biru-tua' : '#092635',
        'hijau-tua' : '#1B4242'
      },
    },
  },
  plugins: [],
}
