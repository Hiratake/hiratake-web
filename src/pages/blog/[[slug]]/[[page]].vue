<script lang="ts" setup>
// Types
import type { BlogArticle } from '@/types'

const website = useWebsite()
const route = useRoute()
const { data, error } = await useAsyncData('blog', () =>
  queryContent('/blog').findOne(),
)
const { data: articles, error: articlesError } = await useAsyncData(
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

if (error.value || articlesError.value || !articles.value?.length) {
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
  <main v-if="data" class="main mt-12 max-w-5xl gap-8 md:mt-20 md:gap-16">
    <ArticlesPageHeader :title="data.title">
      <p class="text-sm leading-relaxed">
        {{ data.description }}
      </p>
    </ArticlesPageHeader>
    <ArticlesList :items="articles" />
    <ArticlesPagination :current="Number(route.params?.page) || 1" />
  </main>
</template>
