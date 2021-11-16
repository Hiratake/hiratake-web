/** @type {import('next').NextConfig} */

const path = require('path')

const baseName = process.env.BASE_NAME || 'Hiratake Web'
const baseDir = process.env.BASE_DIR || '/'

module.exports = {
  env: {
    baseName,
    baseDir,
  },
  images: {
    domains: ['gravatar.com'],
    disableStaticImages: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    config.resolve.alias['@'] = path.join(__dirname)
    return config
  },
  reactStrictMode: true,
}
