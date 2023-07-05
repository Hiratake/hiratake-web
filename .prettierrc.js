// https://prettier.io/docs/en/configuration.html
/** @type {import('prettier').Options} */
module.exports = {
  semi: false,
  singleQuote: true,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './packages/tailwind-config/tailwind.config.js',
}
