<script lang="ts" setup>
const website = useWebsite()

/** Google Tag Manager ID */
const gtmId = website.value.gtmId
/** ウェブサイトの名前 */
const name = website.value.name
/** ウェブサイトのテーマカラー */
const themeColor = website.value.themeColor

useHead({
  htmlAttrs: { prefix: 'og: https://ogp.me/ns#', dir: 'ltr' },
  meta: [
    { name: 'apple-mobile-web-app-title', content: name },
    { name: 'application-name', content: name },
    { name: 'theme-color', content: themeColor },
    { name: 'msapplication-TileColor', content: themeColor },
    { name: 'msapplication-Config', content: '/browserconfig.xml' },
  ],
  link: [
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: themeColor },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      href: website.value.socials.rss.url,
      title: website.value.socials.rss.name,
    },
  ],
  script: [
    {
      key: 'gtm',
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
    },
  ],
  noscript: [
    {
      key: 'gtm',
      innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    },
  ],
})
useSeoMeta({
  titleTemplate: '%pageTitle',
  twitterCard: 'summary_large_image',
  twitterSite: website.value.socials.x.handle,
})
</script>

<template>
  <slot />
</template>
