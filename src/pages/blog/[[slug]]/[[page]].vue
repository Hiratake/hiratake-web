<script lang="ts" setup>
// Types
import type { BlogArticle } from '@/types'

const route = useRoute()
const website = useWebsite()
const { data, error } = await useAsyncData('blog', () =>
  queryContent('/blog').findOne(),
)
const { data: articles, error: listError } = await useAsyncData(
  route.path,
  () => {
    if (!/^\/blog(\/page\/[1-9]\d*)?\/?$/.test(route.path)) {
      throw new Error('URLの形式が不正です')
    }
    if (route.params?.page && Number(route.params.page) === 1) {
      throw new Error('URLの形式が不正です')
    }

    /** ページ番号 */
    const pageNumber = Number(route.params?.page) || 1
    /** 1ページに表示する投稿数 */
    const perPage = website.value.itemPerPage

    return queryContent<BlogArticle>('blog')
      .only(['_path', 'title', 'description', 'created'])
      .where({ _path: { $not: '/blog' } })
      .sort({ created: -1 })
      .limit(perPage)
      .skip((pageNumber - 1) * perPage)
      .find()
  },
)

if (
  error.value ||
  listError.value ||
  !articles.value ||
  !articles.value.length
) {
  throw createError({
    statusCode: 404,
    message: 'ページが見つかりません',
    fatal: true,
  })
}

/** ウェブサイトの名前 */
const name = website.value.name
/** ウェブサイトの概要 */
const description = website.value.description

useSeoMeta({
  title: () => data.value?.title || name,
  description: () => data.value?.description || description,
  ogType: 'website',
})
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: name, item: '/' },
      { name: data.value?.title, item: useTrailingSlash('/blog/') },
    ],
  }),
])
defineOgImage({ url: '/ogp.jpg', width: 1200, height: 630, alt: name })
</script>

<template>
  <main
    v-if="data"
    class="mx-auto mt-12 box-content flex min-h-[calc(100vh-28rem)] max-w-5xl flex-col gap-8 px-6 md:mt-20 md:gap-16"
  >
    <header class="flex flex-col gap-6 md:gap-8">
      <h1 class="text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
        {{ data.title }}
      </h1>
      <p class="text-sm leading-relaxed">
        {{ data.description }}
      </p>
    </header>
    <ArticlesList :items="articles" />
    <ArticlesPagination :current="Number(route.params?.page) || 1" />
  </main>
</template>
