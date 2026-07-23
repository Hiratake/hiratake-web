<script lang="ts" setup>
import type { BlogCollectionItem, ContentNavigationItem } from '@nuxt/content'

type SurroundItem = ContentNavigationItem & {
  description: BlogCollectionItem['description']
  created: BlogCollectionItem['created']
}

const app = useAppConfig()
const route = useRoute()
const site = useSiteConfig()
const { data, error } = await useAsyncData(
  pathToUseAsyncDataKey(route.path),
  () => {
    if (
      route.params?.slug &&
      !Array.isArray(route.params.slug) &&
      /^\d{8}$/.test(route.params.slug)
    ) {
      return queryCollection('blog').path(blogUrlToPath(route.path)).first()
    } else {
      throw new Error('URLの形式が不正です')
    }
  },
)
const { data: blogData, error: blogError } = await useAsyncData(
  pathToUseAsyncDataKey('/blog'),
  () => queryCollection('diary').path('/blog').first(),
)
const { data: surround, error: surroundError } = await useAsyncData(
  pathToUseAsyncDataKey(route.path, 'surround'),
  () => {
    if (
      route.params?.slug &&
      !Array.isArray(route.params.slug) &&
      /^\d{8}$/.test(route.params.slug)
    ) {
      return queryCollectionItemSurroundings(
        'blog',
        blogUrlToPath(route.path),
        { fields: ['path', 'title', 'description', 'created'] },
      )
    } else {
      throw new Error('URLの形式が不正です')
    }
  },
)

if (!data.value || error.value || blogError.value || surroundError.value) {
  throw createError({ status: 404 })
}

/** 前の投稿 */
const prev = computed(() => {
  if (surround.value && surround.value[0]) {
    const val = surround.value[0] as SurroundItem
    return { ...val, path: useTrailingSlash(blogPathToUrl(val.path)) }
  } else {
    return undefined
  }
})
/** 次の投稿 */
const next = computed(() => {
  if (surround.value && surround.value[1]) {
    const val = surround.value[1] as SurroundItem
    return { ...val, path: useTrailingSlash(blogPathToUrl(val.path)) }
  } else {
    return undefined
  }
})

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description || site.description,
  ogType: 'article',
})
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: site.name, item: '/' },
      { name: blogData.value?.title, item: useTrailingSlash('/blog/') },
      {
        name: data.value?.title,
        item: useTrailingSlash(`/blog/${route.params.slug}/`),
      },
    ],
  }),
  defineArticle({
    '@type': 'BlogPosting',
    datePublished: data.value?.created ?? undefined,
    dateModified: data.value?.updated ?? undefined,
    author: [{ name: app.website.owner.name, url: app.website.owner.url }],
  }),
])
defineOgImage('DiaryPost.takumi', { title: data.value?.title })
</script>

<template>
  <UPage v-if="data" as="article" :ui="{ root: 'mt-12 max-w-3xl md:mt-20' }">
    <PageHeader
      :title="data.title"
      :created="data.created"
      :updated="data.updated"
      show-author
    />

    <UPageBody :ui="{ base: 'mt-14' }">
      <DocumentRenderer :data="data" />
    </UPageBody>

    <PageFooter :prev="prev" :next="next" />
  </UPage>
</template>
