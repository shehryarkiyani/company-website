/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'primary':'#00A78E'
    },
    extend: {
      shadow: {
        'testimonial': '30px 35px 35px rgba(0, 0, 0, 0.25)',
       
      }
    },
  },
  plugins: [],
}

