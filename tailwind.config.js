module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      'n3': -30,
      'n2': -20,
      'n1': -10,
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      'auto': 'auto',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'wave-top': "url('./assets/img/waveTop.svg')",
        'virus': "url('./assets/img/virus.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    themes: [
      'light',
      'dark',
      {
        'mytheme': {                      /* your theme name */
          'primary': '#ffffff',           /* primary color */
          'primary-focus': '#D2D4D7',     /* primary color - focused */
          'primary-content': '#000000',   /* Foreground content color to use on primary color */
        },
      },
    ],
  },
};
