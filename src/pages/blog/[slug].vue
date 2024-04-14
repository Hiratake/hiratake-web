<script lang="ts" setup>
// Types
import type { BlogPost } from '@/types'

const website = useWebsite()
const route = useRoute()
const { data, error } = await useAsyncData(
  pathToUseAsyncDataKey(route.path),
  () => {
    if (
      !Array.isArray(route.params?.slug) &&
      /^\d{8}$/.test(route.params.slug)
    ) {
      return queryContent<BlogPost>(blogUrlToPath(route.path)).findOne()
    } else {
      throw new Error('URLの形式が不正です')
    }
  },
)
const { data: blogData, error: blogError } = await useAsyncData(
  pathToUseAsyncDataKey('/blog'),
  () => queryContent('/blog').findOne(),
)
const { data: surround, error: surroundError } = await useAsyncData(
  pathToUseAsyncDataKey(route.path, 'surround'),
  () => {
    if (
      route.params?.slug &&
      !Array.isArray(route.params.slug) &&
      /^\d{8}$/.test(route.params.slug)
    ) {
      return queryContent<BlogPost>()
        .where({ _path: { $regex: /^\/blog\/\d{4}\/\d{2}\/\d{2}/ } })
        .only(['_path', 'title', 'description', 'created'])
        .findSurround(blogUrlToPath(route.path))
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
    return {
      _path: useTrailingSlash(blogPathToUrl(surround.value[0]._path)),
      title: surround.value[0].title || '',
      description: surround.value[0].description || '',
      created: surround.value[0].created,
    }
  } else {
    return undefined
  }
})
/** 次の投稿 */
const next = computed(() => {
  if (surround.value && surround.value[1]) {
    return {
      _path: useTrailingSlash(blogPathToUrl(surround.value[1]._path)),
      title: surround.value[1].title || '',
      description: surround.value[1].description || '',
      created: surround.value[1].created,
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
