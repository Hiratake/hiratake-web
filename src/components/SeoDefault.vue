<script lang="ts" setup>
const website = useWebsite()

useHead({
  htmlAttrs: { prefix: 'og: https://ogp.me/ns#', dir: 'ltr' },
  link: [
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: website.value.themeColor,
    },
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
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${website.value.gtmId}');`,
    },
  ],
  noscript: [
    {
      key: 'gtm-noscript',
      innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${website.value.gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    },
  ],
})
useSeoMeta({
  appleMobileWebAppTitle: website.value.name,
  applicationName: website.value.name,
  msapplicationConfig: '/browserconfig.xml',
  msapplicationTileColor: website.value.themeColor,
  themeColor: website.value.themeColor,
  titleTemplate: '%pageTitle',
  twitterCard: 'summary_large_image',
  twitterSite: website.value.socials.x.handle,
})
</script>

<template>
  <slot />
</template>
