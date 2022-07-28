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

module.exports = nextConfig
