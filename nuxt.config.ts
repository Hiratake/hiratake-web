// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'node:path'
export default defineNuxtConfig({
  app: {
    head: { titleTemplate: '%pageTitle' },
  },
  content: {
    documentDriven: true,
    highlight: { theme: 'github-dark' },
    sources: {
      content: { driver: 'fs', base: resolve(__dirname, './content') },
    },
  },
  devtools: { enabled: true },
  linkChecker: { enabled: false },
  modules: [
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  nitro: {
    prerender: { routes: ['/feed.xml'] },
  },
  ogImage: { enabled: false },
  routeRules: {
    '/feed.xml': {
      headers: { 'content-type': 'application/rss+xml; charset=UTF-8' },
    },
  },
  runtimeConfig: {
    public: {
      gtmId: 'GTM-WF3MQWM',
      cloudflareImageHash: '3uWTcGTKoWPI8987WrI0hQ',
    },
  },
  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'ひらたけ',
      sameAs: [
        'https://github.com/Hiratake',
        'https://mozilla.social/@hiratake',
        'https://x.com/Hirotaisou2012',
      ],
    },
  },
  seo: { splash: false },
  site: {
    url: process.env.CF_PAGES_URL || 'https://hiratake.dev',
    name: 'Hiratake Web',
    description: 'ひらたけの個人ウェブサイトです。',
    defaultLocale: 'ja',
    trailingSlash: true,
    twitter: '@Hirotaisou2012',
  },
  srcDir: 'src/',
})
