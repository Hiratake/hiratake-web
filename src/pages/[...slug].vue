<script lang="ts" setup>
// Utils
import { withTrailingSlash } from 'ufo'

const website = useWebsite()
const route = useRoute()

// 記事データの取得
const { data, error } = await useAsyncData(route.path, () => {
  if (!route.path.startsWith('/blog')) {
    return queryContent(route.path).findOne()
  } else {
    throw new Error('見つかりません')
  }
})

// ページが見つからない場合にエラーを出力する
if (error.value) {
  throw createError({
    statusCode: 404,
    message: error.value.message,
    fatal: true,
  })
}

// 構造化データマークアップの情報を生成
const schema = await useAsyncData('page-schema', () => {
  // パンくずリストの項目を取得
  const items: string[] = (data.value?._path || '')
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
        item: withTrailingSlash(item._path),
      })),
    }),
  ] as ReturnType<typeof defineBreadcrumb>[]
})

useSchemaOrg(schema)
useSeoMeta({
  title: () => data.value?.title || website.value.site.name,
  description: () => data.value?.description,
  ogType: 'website',
})
</script>

<template>
  <main v-if="data" class="mx-auto box-content max-w-3xl px-6">
    <article class="grid grid-cols-1 gap-6">
      <ArticleHeader :title="data.title" :updated="data?.updated" />
      <div class="prose max-w-none text-inherit dark:prose-invert">
        <ContentRenderer :value="data" />
      </div>
      <ArticleFooter :title="data.title" />
    </article>
  </main>
</template>
