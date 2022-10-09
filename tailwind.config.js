/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./index.html"],
  theme: {
    extend: {
      screens: {
       
        // => @media (min-width: 576px) { ... }
        'sm': '150px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      fontFamily: {
        Cinzel: ["Cinzel", "serif"],
        Aboreto: ['Aboreto', "sans-serif"],
        Ubuntu: ['Ubuntu', 'sans-serif']
       },
    },
    
  },
  plugins: [],
}
