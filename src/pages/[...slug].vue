<script lang="ts" setup>
// Types
import type { BlogArticle } from '@/types'

const route = useRoute()
const website = useWebsite()
const schema = await useAsyncData(`${route.path}-schema`, () => {
  // パンくずリストの項目を取得
  const items: string[] = (route.path || '')
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
        item: useTrailingSlash(item._path || ''),
      })),
    }),
  ] as ReturnType<typeof defineBreadcrumb>[]
})
const { data, error } = await useAsyncData(route.path, () =>
  queryContent<BlogArticle>(route.path).findOne(),
)

if (error.value) {
  throw createError({
    statusCode: 404,
    message: 'ページが見つかりません',
    fatal: true,
  })
}

/** ウェブサイトの名前 */
const name = website.value.site.name
/** ウェブサイトの概要 */
const description = website.value.site.description

defineOgImage({ url: '/ogp.jpg', width: 1200, height: 630, alt: name })
useSeoMeta({
  title: () => data.value?.title || name,
  description: () => data.value?.description || description,
  ogType: 'website',
})
useSchemaOrg(schema)
</script>

<template>
  <main v-if="data" class="mx-auto mt-12 box-content max-w-3xl px-6 md:mt-20">
    <article class="flex flex-col gap-14">
      <ArticlesPageHeader :title="data.title" :updated="data.updated" />
      <div></div>
    </article>
  </main>
</template>
