<script lang="ts" setup>
const { page } = useContent()
const config = useRuntimeConfig()
const app = useAppConfig()
const route = useRoute()

/** 構造化データマークアップ */
const schema = await useAsyncData('page-schema', () => {
  // パンくずリストの項目を取得
  const items: string[] = page.value._path
    .split('/')
    .filter((item: string) => item)
    .reduce((prev: string[], current: string) => {
      if (prev.length) {
        return [...prev, `${prev[prev.length - 1]}/${current}`]
      } else {
        return [`/${current}`]
      }
    }, [])
  return queryContent()
    .where({ _path: { $in: ['/', ...items] } })
    .only(['_path', 'title'])
    .sort({ _path: 1 })
    .find()
}).then((data) => {
  const items: (
    | ReturnType<typeof defineBreadcrumb>
    | ReturnType<typeof defineWebPage>
  )[] = []
  // パンくずリストの構造化データを追加
  items.push(
    defineBreadcrumb({
      itemListElement: (data.data.value ?? []).map((item) => ({
        name: item.title,
        item: item._path,
      })),
    })
  )
  // ウェブページの構造化データを追加
  if (route.path === '/blog') {
    // ブログ記事一覧ページの場合に CollectionPage の指定を追加
    items.push(
      defineWebPage({
        '@type': 'CollectionPage',
      })
    )
  }
  return items
})
useSchemaOrg(schema)

useHead({
  htmlAttrs: {
    prefix: 'og: https://ogp.me/ns#',
  },
  meta: [
    { name: 'application-name', content: config.public.siteName },
    { name: 'theme-color', content: '#a83d3d' },
    { name: 'apple-mobile-web-app-title', content: config.public.siteName },
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
  ],
})

useServerSeoMeta({
  twitterSite: app.author.social.twitter.replace('https://twitter.com/', '@'),
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <slot />
</template>
