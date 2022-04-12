module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      
      'xs': {'max':'420px'},
      // => @media (max-width: 420px) { ... }

      
    },
    fontFamily: {
      content_font_Nunito: ['Nunito Sans'],
      title_font_Metronic:["'MetronicProRegular'"],
    },
    
    extend: {
      colors: {
        'secondary_500':'#F0B323',
        'sub-text':'#4E5D6B',        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
