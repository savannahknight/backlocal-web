  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
       screens: {
           sm: "640px",
           // => @media (min-width: 760px) { ... }

           md:"760px",
           // => @media (min-width: 760px) { ... }

           lg: "1024px",
           // => @media (min-width: 1024px) { ... }

           xl: "1200px",
           // => @media (min-width: 1200px) { ... }

           "2xl": "1536px",
           // => @media (min-width: 1536px) { ... }
       },
       textColor: {
        'primary': '#283871',
        'secondary': '#5669AD',
        'danger': '#94A0C9',
        'white': '#fff',
        'black': '#000',
        'gray': '#808080',
      },
      backgroundColor: theme => ({
        'primary': '#283871',
        'secondary': '#5669AD',
        'danger': '#94A0C9',
        'white': '#fff',
        'black': '#000',
        'gray': '#808080',
        'transparent': 'transparent',
      }),
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary': '#283871',
        'secondary': '#5669AD',
        'danger': '#94A0C9',
        'white': '#fff',
        'black': '#000',
        'gray': '#808080',
        'transparent': 'transparent',
      })
     },
     variants: {
       extend: {},
     },
     plugins: [],
   };