// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  eslint: {
    lintOnStart: false,
  },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  srcDir: 'src/',
  stylelint: {
    lintOnStart: false,
  },
  typescript: {
    shim: false,
    strict: true,
  },
})
