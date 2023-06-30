<script lang="ts" setup>
const { page } = useContent()
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
</script>

<template>
  <slot />
</template>
