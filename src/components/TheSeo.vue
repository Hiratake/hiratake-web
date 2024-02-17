<script lang="ts" setup>
const { page } = useContent()
const website = useWebsite()
const route = useRoute()

/** 構造化データマークアップ */
const schema = await useAsyncData('page-schema', () => {
  // パンくずリストの項目を取得
  const items: string[] = (page.value?._path || '')
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
  return [
    defineBreadcrumb({
      itemListElement: (data.data.value ?? []).map((item) => ({
        name: item.title,
        item: item._path.endsWith('/') ? item._path : `${item._path}/`,
      })),
    }),
  ] as (
    | ReturnType<typeof defineBreadcrumb>
    | ReturnType<typeof defineWebPage>
    | ReturnType<typeof defineArticle>
  )[]
})
if (route.path === '/blog' || route.path === '/blog/') {
  schema.push(
    defineWebPage({
      '@type': 'CollectionPage',
    }),
  )
}
if (route.path !== '/blog/' && route.path.startsWith('/blog/')) {
  schema.push(
    defineArticle({
      '@type': 'BlogPosting',
      datePublished: page.value?.created ? page.value.created : undefined,
      dateModified: page.value?.updated ? page.value.updated : undefined,
      author: [
        { name: website.value.author.name, url: website.value.site.url },
      ],
    }),
  )
}
if (page.value) {
  // ページが存在しない場合は構造化データを追加しない
  useSchemaOrg(schema)
}

useHead({
  htmlAttrs: {
    prefix: 'og: https://ogp.me/ns#',
  },
  titleTemplate: '%pageTitle',
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
useServerSeoMeta({
  ogType: route.path === '/' ? 'website' : 'article',
  ogImage: `${website.value.site.url}/ogp.jpg`,
  twitterCard: 'summary',
})
</script>

<template>
  <slot />
</template>
