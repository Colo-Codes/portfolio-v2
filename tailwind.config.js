module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '25vh': '25vh',
      '50vh': '50vh',
      '75vh': '75vh',
      '85vh': '85vh',
      '95vh': '95vh',
    },
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
        'wave-bottom': "url('./assets/img/waveBottom.svg')",
        'virus': "url('./assets/img/virus.png')",
        'to-do': "url('./assets/img/to-do-list.png')",
        'blog-post': "url('./assets/img/blog.png')",
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
      // 'dark', TODO: enable it site-wide
      {
        'mytheme': {                      /* your theme name */
          'primary': '#ffffff',           /* primary color */
          'primary-focus': '#D2D4D7',     /* primary color - focused */
          'primary-content': '#000000',   /* Foreground content color to use on primary color */
          'secondary': '#DADADA',         /* Light text on dark background */
          'neutral': '#2a2e37',         /* Dark text on light background */
        },
      },
    ],
  },
};
