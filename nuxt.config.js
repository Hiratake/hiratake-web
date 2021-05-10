// nuxt.config.js

const baseName = process.env.BASE_NAME || 'Hiratake Web'
const baseUrl = process.env.BASE_URL || 'https://hiratake.xyz'
const baseDir = process.env.BASE_DIR || '/'
const baseImage = process.env.BASE_IMAGE || '/images/default.jpg'
const baseDescription = process.env.BASE_DESCRIPTION || 'マークアップ園児でデザイナーなひらたけのサイト。'

export default {
  target: 'static',

  head: {
    titleTemplate: '%s｜' + baseName,
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-title', content: baseName },
      { name: 'application-name', content: baseName },
      { name: 'msapplication-TileColor', content: '#a83d3d' },
      { name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
      { name: 'theme-color', content: '#a83d3d' },
      { hid: 'description', name: 'description', content: baseDescription },
      { hid: 'og:site_name', property: 'og:site_name', content: baseName },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      { hid: 'og:title', property: 'og:title', content: baseName },
      { hid: 'og:description', property: 'og:description', content: baseDescription },
      { hid: 'og:image', property: 'og:image', content: `${baseUrl}${baseImage}` },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Hirotaisou2012' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#a83d3d' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  css: [
    '@/assets/css/reset.css',
  ],

  plugins: [],

  components: true,

  router: {
    base: baseDir,
  },

  publicRuntimeConfig: {
    baseName,
    baseDescription,
    baseUrl,
    baseImage,
  },

  privateRuntimeConfig: {},

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  modules: [
    '@nuxt/http',
    '@nuxt/content',
  ],

  http: {},

  content: {},

  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
        sassOptions: {
          fiber: require('fibers'),
        },
      },
    },
  },
}
