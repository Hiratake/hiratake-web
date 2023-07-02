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
  extends: ['nuxt-seo-kit'],
  image: {
    provider: 'cloudflare',
    cloudflare: {
      baseURL: process.env.NUXT_PUBLIC_SITE_URL || 'https://hiratake.dev',
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@vueuse/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hiratake.dev',
      siteName: 'Hiratake Web',
      siteDescription: 'ひらたけの個人ウェブサイトです。',
      language: 'ja',
      gtmId: 'GTM-WF3MQWM',
    },
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
