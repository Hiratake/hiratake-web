<script lang="ts" setup>
type TheSeoSlots = {
  /** デフォルトのスロット */
  default?: (props: object) => unknown
}

defineSlots<TheSeoSlots>()

const app = useAppConfig()
const site = useSiteConfig()

useHead({
  htmlAttrs: { prefix: 'og: https://ogp.me/ns#', dir: 'ltr', lang: 'ja' },
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: app.website.themeColor,
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
      href: app.website.socials.rss.url,
      title: app.website.socials.rss.name,
    },
  ],
})
useSeoMeta({
  appleMobileWebAppTitle: site.name,
  applicationName: site.name,
  msapplicationConfig: '/browserconfig.xml',
  msapplicationTileColor: app.website.themeColor,
  themeColor: app.website.themeColor,
  titleTemplate: '%pageTitle',
  twitterCard: 'summary_large_image',
  twitterSite: app.website.socials.x.handle,
})
</script>

<template>
  <slot />
</template>
