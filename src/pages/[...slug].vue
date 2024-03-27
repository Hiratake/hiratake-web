<script lang="ts" setup>
// Types
import type { BlogArticle } from '@/types'

const website = useWebsite()
const route = useRoute()
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
const name = website.value.name
/** ウェブサイトの概要 */
const description = website.value.description
/** ウェブサイトの運営者 */
const owner = website.value.owner

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
defineOgImage({ url: '/ogp.jpg', width: 1200, height: 630, alt: name })
</script>

<template>
  <main v-if="data" class="main mt-12 max-w-3xl md:mt-20">
    <article class="flex flex-col gap-14">
      <ArticlesPageHeader
        :title="data.title"
        :updated="data.updated"
        :author="owner"
      />
      <div class="content prose">
        <ContentRenderer :value="data">
          <template #empty>
            <DocumentEmpty />
          </template>
        </ContentRenderer>
      </div>
    </article>
  </main>
</template>
