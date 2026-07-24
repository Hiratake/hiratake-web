import type { Config } from 'prettier'

// https://prettier.io/docs/en/configuration.html
const Configuration: Config = {
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
}

export default Configuration
