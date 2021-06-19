// nuxt.config.js

const appEnv = process.env.NODE_ENV || 'production'

const packageRepository = process.env.npm_package_repository_url || ''

const baseName = process.env.BASE_NAME || 'Hiratake Web'
const baseUrl = process.env.BASE_URL || 'https://hiratake.xyz'
const baseDir = process.env.BASE_DIR || '/'
const baseImage = process.env.BASE_IMAGE || '/images/default.jpg'
const baseDescription = process.env.BASE_DESCRIPTION || 'マークアップ園児でデザイナーなひらたけのサイト。'

const gtmId = process.env.GTM_ID || 'GTM-WF3MQWM'
const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`
const gtmNoscript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`

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
    script: [
      { hid: 'gtm-script', innerHTML: gtmScript, skip: appEnv === 'development' },
    ],
    noscript: [
      { hid: 'gtm-noscript', innerHTML: gtmNoscript, pbody: true, skip: appEnv === 'development' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#a83d3d' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons&display=block' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/emp0pno.css' },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'gtm-script': ['innerHTML'],
      'gtm-noscript': ['innerHTML'],
    },
  },

  css: [
    '@/assets/css/reset.css',
  ],

  plugins: [
    '@/plugins/jsonld',
  ],

  components: true,

  router: {
    base: baseDir,
  },

  publicRuntimeConfig: {
    packageRepository,
    baseName,
    baseDescription,
    baseUrl,
    baseImage,
  },

  privateRuntimeConfig: {},

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/cloudinary',
  ],

  colorMode: {
    classSuffix: '',
    storageKey: 'color-mode',
  },

  content: {},

  sitemap: {
    hostname: `${baseUrl}${baseDir}`,
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const pages = await $content('blog')
        .only(['slug', 'updatedAt'])
        .fetch()
      return pages.map(item => ({
        url: item.slug,
        lastmod: item.updatedAt,
        priority: 0.8,
      }))
    },
  },

  cloudinary: {
    cloudName: 'hiratake',
  },

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
