/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'w1144' : "1144px"
      },
      fontFamily:{
        'poppin' : ['Poppins', 'sans-serif'],
      },
      colors:{
        'petroil-bg' : '#F40404',
        'footerbg' : '#1F1F1F',
      },
      screens: {
        'sm': '300px',
        'md': '640px',
        // => @media (min-width: 640px) { ... }
        'tablet': '700px',
        'tablet2': '800px',
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1200px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
