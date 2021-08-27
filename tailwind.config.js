module.exports = {
  mode: 'jit',
  purge: [
      './*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat']
      },
      backgroundImage: theme => ({
        'banner': "url('/assets/banner.png')",
        'inpt': "url('/assets/inpbg.svg')",
        'footerbg': "url('/assets/pp.png')",
        'adjbutt': "url('/assets/adjhover.svg')",
        'dflt': "url('/assets/picd.png')",
        'hvr': "url('/assets/pich.png')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
