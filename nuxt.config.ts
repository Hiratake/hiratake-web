// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-06-30',
  content: { build: { markdown: { highlight: { theme: 'github-dark' } } } },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  fonts: {
    families: [
      { name: 'Lexend', weights: [400, 900] },
      { name: 'Noto Sans JP', weights: [400] },
      { name: 'Noto Sans JP', weights: [700], global: true },
      { name: 'Source Code Pro', weights: [400, 700] },
    ],
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
  routeRules: { '/': { prerender: true } },
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
  sitemap: { exclude: [new RegExp(/^\/blog\/\d{4}\/\d{2}\/\d{2}\/$/)] },
  ui: { prose: false },
})
