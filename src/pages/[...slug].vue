<script lang="ts" setup>
// Types
import type { BlogArticle } from '@/types'

const route = useRoute()
const app = useAppConfig()
const website = useWebsite()
const { data, error } = await useAsyncData(route.path, () =>
  queryContent<BlogArticle>(route.path).findOne(),
)
const { data: breadcrumbs, error: breadcrumbsError } = await useAsyncData(
  `${route.path}-breadcrumbs`,
  () => {
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
  },
)

if (error.value || breadcrumbsError.value) {
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
const author = app.authors.hiratake

defineOgImage({ url: '/ogp.jpg', width: 1200, height: 630, alt: name })
useSeoMeta({
  title: () => data.value?.title || name,
  description: () => data.value?.description || description,
  ogType: 'website',
})
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: (breadcrumbs.value ?? []).map((item) => ({
      name: item.title,
      item: useTrailingSlash(item._path || ''),
    })),
  }),
])
</script>

<template>
  <main
    v-if="data"
    class="mx-auto mt-12 box-content min-h-[calc(100vh-28rem)] max-w-3xl px-6 md:mt-20"
  >
    <article class="flex flex-col gap-14">
      <ArticlesPageHeader
        :title="data.title"
        :updated="data.updated"
        :author="author"
      />
      <div
        class="prose max-w-none text-[0.925rem] leading-loose tracking-wide text-inherit dark:prose-invert"
      >
        <ContentRenderer :value="data" class="[&>*:first-child]:mt-0">
          <template #empty>
            <DocumentEmpty />
          </template>
        </ContentRenderer>
      </div>
    </article>
  </main>
</template>
