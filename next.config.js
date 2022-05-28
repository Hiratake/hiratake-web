/** @type {import('next').NextConfig} */

const path = require('path')

const baseName = process.env.BASE_NAME || 'Hiratake Web'
const baseUrl = process.env.BASE_URL || 'https://hiratake.xyz'
const baseDir = process.env.BASE_DIR || '/'
const baseImage = process.env.BASE_IMAGE || '/images/default.jpg'
const baseDescription =
  process.env.BASE_DESCRIPTION ||
  'マークアップ園児でデザイナーなひらたけのサイト。'

module.exports = {
  env: {
    baseName,
    baseUrl,
    baseDir,
    baseImage,
    baseDescription,
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
