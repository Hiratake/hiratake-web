// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-06-30',
  content: {
    build: {
      markdown: {
        highlight: { theme: { default: 'github-light', dark: 'github-dark' } },
      },
    },
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  fonts: {
    families: [
      { name: 'Lexend', weights: [400, 900] },
      { name: 'Noto Sans JP', weights: [400, 700], global: true },
      { name: 'Source Code Pro', weights: [400, 700] },
    ],
  },
  icon: {
    clientBundle: {
      icons: [
        'ph:arrow-left-fill',
        'ph:arrow-right-fill',
        'ph:check',
        'ph:copy',
        'ph:hash',
        'ph:moon-bold',
        'ph:sun-bold',
      ],
      scan: true,
    },
  },
  linkChecker: { enabled: false },
  llms: {
    domain: process.env.CF_PAGES_URL || 'https://hiratake.dev',
    title: 'Hiratake Web',
    description: 'ひらたけの個人ウェブサイトです。',
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    'nuxt-llms',
  ],
  nitro: { prerender: { concurrency: 1, crawlLinks: true } },
  ogImage: { zeroRuntime: true, security: { renderTimeout: 45000 } },
  routeRules: {
    '/': { prerender: true },
    '/feed.xml': {
      headers: { 'content-type': 'application/rss+xml; charset=UTF-8' },
      prerender: true,
    },
  },
  runtimeConfig: { public: { cloudflareImageHash: '3uWTcGTKoWPI8987WrI0hQ' } },
  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'ひらたけ',
      logo: '/logo.png',
      sameAs: [
        'https://bsky.app/profile/hiratake.dev',
        'https://github.com/Hiratake',
      ],
    },
  },
  site: {
    url: process.env.CF_PAGES_URL || 'https://hiratake.dev',
    name: 'Hiratake Web',
    description: 'ひらたけの個人ウェブサイトです。',
    defaultLocale: 'ja',
    trailingSlash: true,
  },
  sitemap: { zeroRuntime: true },
  ui: { prose: true },
  $production: {
    scripts: {
      registry: {
        googleTagManager: { id: 'GTM-WF3MQWM', trigger: 'onNuxtReady' },
      },
    },
  },
})
