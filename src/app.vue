<script lang="ts" setup>
const website = useWebsite()

useHead({
  htmlAttrs: { prefix: 'og: https://ogp.me/ns#', dir: 'ltr' },
  meta: [
    { name: 'application-name', content: website.value.site.name },
    { name: 'theme-color', content: '#a83d3d' },
    { name: 'apple-mobile-web-app-title', content: website.value.site.name },
    { name: 'msapplication-Config', content: '/browserconfig.xml' },
    { name: 'msapplication-TileColor', content: '#a83d3d' },
  ],
  link: [
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
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#a83d3d',
    },
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      href: `${website.value.site.url}/feed.xml`,
      title: `${website.value.site.name} Feed`,
    },
  ],
  script: [
    {
      key: 'gtm',
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${website.value.services.gtm}');`,
    },
  ],
  noscript: [
    {
      key: 'gtm',
      innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${website.value.services.gtm}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    },
  ],
})
useSeoMeta({
  titleTemplate: '%pageTitle',
  ogImage: `${website.value.site.url}/ogp.jpg`,
  twitterImage: `${website.value.site.url}/ogp.jpg`,
  twitterCard: 'summary',
  twitterSite: '@Hirotaisou2012',
})
</script>

<template>
  <Body
    class="bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
  >
    <NuxtLoadingIndicator :height="2" color="#a83d3d" />
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </Body>
</template>
