// https://tailwindcss.com/docs/configuration
const sharedConfig = require('tailwind-config/tailwind.config')
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        primary: '#a83d3d',
      },
    },
  },
}
