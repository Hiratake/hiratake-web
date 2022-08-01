// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path: '',
  },
  async redirects() {
    return [
      {
        source: '/website-renewal',
        destination: '/blog/website-renewal',
        permanent: true,
      },
      {
        source: '/website-remake-with-react',
        destination: '/blog/website-remake-with-react',
        permanent: true,
      },
    ]
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})

module.exports = withBundleAnalyzer(nextConfig)
