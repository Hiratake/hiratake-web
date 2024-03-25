// Utils
import { resolve } from 'node:path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: { titleTemplate: '%pageTitle' },
  },
  content: {
    documentDriven: false,
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
    prerender: { failOnError: false, crawlLinks: true, routes: ['/feed.xml'] },
  },
  ogImage: {
    fonts: ['Noto+Sans+JP:400', 'Noto+Sans+JP:700'],
  },
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
      logo: '/logo.png',
      sameAs: [
        'https://bsky.app/profile/hiratake.dev',
        'https://github.com/Hiratake',
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
  },
  srcDir: 'src/',
})
