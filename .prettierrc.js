// https://prettier.io/docs/en/configuration.html
module.exports = {
  semi: false,
  singleQuote: true,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './packages/tailwind-config/tailwind.config.js',
}
