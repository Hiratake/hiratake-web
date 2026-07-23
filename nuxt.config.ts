// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-06-30',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
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
})
