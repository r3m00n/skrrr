const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MonaSansExtraBoldNarrow', ...defaultTheme.fontFamily.sans],
        wide: ['MonaSansBlackWide', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
