module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '144': '36rem',
      },
      colors: {
        'blue-tb': '#0080ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
