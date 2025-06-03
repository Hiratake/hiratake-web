<script lang="ts" setup>
import type { BlogCollectionItem, ContentNavigationItem } from '@nuxt/content'

type SurroundItem = ContentNavigationItem & {
  description: BlogCollectionItem['description']
  created: BlogCollectionItem['created']
}

const website = useWebsite()
const route = useRoute()
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

if (error.value || blogError.value || surroundError.value) {
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
/** 投稿者 */
const author = website.value.owner
/** 前の投稿 */
const prev = computed(() => {
  if (surround.value && surround.value[0]) {
    const val = surround.value[0] as SurroundItem
    return {
      path: useTrailingSlash(blogPathToUrl(val.path)),
      title: val.title || '',
      description: val.description || '',
      created: val.created,
    }
  } else {
    return undefined
  }
})
/** 次の投稿 */
const next = computed(() => {
  if (surround.value && surround.value[1]) {
    const val = surround.value[1] as SurroundItem
    return {
      path: useTrailingSlash(blogPathToUrl(val.path)),
      title: val.title || '',
      description: val.description || '',
      created: val.created,
    }
  } else {
    return undefined
  }
})

useSeoMeta({
  title: () => data.value?.title || name,
  description: () => data.value?.description || description,
  ogType: 'article',
})
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: name, item: '/' },
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
    author: [{ name: author.name, url: author.url }],
  }),
])
defineOgImageComponent('BlogPost')
</script>

<template>
  <main v-if="data" class="main mt-12 max-w-3xl md:mt-20">
    <article class="flex flex-col gap-14">
      <PageHeader
        :title="data.title"
        :created="data.created"
        :updated="data.updated"
        :author="author"
      />
      <div class="content prose">
        <ContentRenderer :value="data">
          <template #empty>
            <DocumentEmpty />
          </template>
        </ContentRenderer>
      </div>
      <PageFooter :prev="prev" :next="next" />
    </article>
  </main>
</template>
