const colors = require('tailwindcss/colors')

delete colors?.lightBlue

module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  plugins: [require('tailwind-filter-utilities')]
}
