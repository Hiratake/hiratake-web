// Utils
import { resolve } from 'node:path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
