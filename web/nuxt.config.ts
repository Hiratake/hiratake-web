// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'node:path'
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%pageTitle',
    },
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-dark',
    },
    sources: {
      content: {
        driver: 'fs',
        base: resolve(__dirname, '../content'),
      },
    },
  },
  css: ['@/assets/tailwind.css'],
  devtools: { enabled: true },
  eslint: {
    lintOnStart: false,
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtseo/module',
    '@vueuse/nuxt',
  ],
  nitro: {
    prerender: {
      routes: ['/feed.xml'],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
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
  site: {
    defaultLocale: 'ja',
    description: 'ひらたけの個人ウェブサイトです。',
    identity: {
      type: 'Person',
    },
    name: 'Hiratake Web',
    trailingSlash: true,
    twitter: '@Hirotaisou2012',
    url: process.env.CF_PAGES_URL || 'https://hiratake.dev',
  },
  srcDir: 'src/',
  stylelint: {
    lintOnStart: false,
  },
  typescript: {
    shim: false,
    strict: true,
  },
})
