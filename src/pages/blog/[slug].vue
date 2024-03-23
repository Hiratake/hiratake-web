<script lang="ts" setup>
// Types
import type { BlogArticle } from '@/types'

const route = useRoute()
const app = useAppConfig()
const website = useWebsite()
const { data, error } = await useAsyncData('blog', () =>
  queryContent('/blog').findOne(),
)
const { data: article, error: articleError } = await useAsyncData(
  route.path,
  () => {
    if (
      route.params?.slug &&
      !Array.isArray(route.params.slug) &&
      /^\d{8}$/.test(route.params.slug)
    ) {
      return queryContent<BlogArticle>(
        `/blog/${route.params.slug.slice(0, 4)}/${route.params.slug.slice(4, 6)}/${route.params.slug.slice(6, 8)}`,
      ).findOne()
    } else {
      throw new Error('URLの形式が不正です')
    }
  },
)

if (error.value || articleError.value) {
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
/** 投稿者 */
const author = app.authors[article.value?.author || 'hiratake']

useSeoMeta({
  title: () => article.value?.title || name,
  description: () => article.value?.description || description,
  ogType: 'article',
})
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: name, item: '/' },
      { name: data.value?.title, item: useTrailingSlash('/blog/') },
      {
        name: article.value?.title,
        item: useTrailingSlash(`/blog/${route.params.slug}/`),
      },
    ],
  }),
  defineArticle({
    '@type': 'BlogPosting',
    datePublished: article.value?.created ?? undefined,
    dateModified: article.value?.updated ?? undefined,
    author: [{ name: author.name, url: author.url }],
  }),
])
</script>

<template>
  <main
    v-if="article"
    class="mx-auto mt-12 box-content max-w-3xl px-6 md:mt-20"
  >
    <article class="flex flex-col gap-14">
      <ArticlesPageHeader
        :title="article.title"
        :created="article.created"
        :updated="article.updated"
        :author="author"
      />
    </article>
  </main>
</template>
