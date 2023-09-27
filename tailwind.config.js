/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'fundo':"#12122A",
      'rosa':'#FF75F8',
      'azul':'#AEF9FD',
      "header":"#22223F",
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}