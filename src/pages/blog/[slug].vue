<script lang="ts" setup>
// Types
import type { BlogArticle } from '@/types'

const route = useRoute()
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
const { data: surround, error: surroundError } = await useAsyncData(
  `${route.path}-surround`,
  () => {
    if (
      route.params?.slug &&
      !Array.isArray(route.params.slug) &&
      /^\d{8}$/.test(route.params.slug)
    ) {
      return queryContent<BlogArticle>()
        .where({ _path: { $regex: /^\/blog\/\d{4}\/\d{2}\/\d{2}/ } })
        .only(['_path', 'title', 'description', 'created'])
        .findSurround(
          `/blog/${route.params.slug.slice(0, 4)}/${route.params.slug.slice(4, 6)}/${route.params.slug.slice(6, 8)}`,
        )
    } else {
      throw new Error('URLの形式が不正です')
    }
  },
)

if (error.value || articleError.value || surroundError.value) {
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
      _path: useTrailingSlash(
        `/blog/${((surround.value[0]._path as string) || '')
          .replace('/blog', '')
          .split('/')
          .join('')}/`,
      ),
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
      _path: useTrailingSlash(
        `/blog/${((surround.value[1]._path as string) || '')
          .replace('/blog', '')
          .split('/')
          .join('')}/`,
      ),
      title: surround.value[1].title || '',
      description: surround.value[1].description || '',
      created: surround.value[1].created,
    }
  } else {
    return undefined
  }
})

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
defineOgImageComponent('BlogPost')
</script>

<template>
  <main
    v-if="article"
    class="mx-auto mt-12 box-content min-h-[calc(100vh-28rem)] max-w-3xl px-6 md:mt-20"
  >
    <article class="flex flex-col gap-14">
      <ArticlesPageHeader
        :title="article.title"
        :created="article.created"
        :updated="article.updated"
        :author="author"
      />
      <div
        class="prose max-w-none text-[0.925rem] leading-loose tracking-wide text-inherit dark:prose-invert"
      >
        <ContentRenderer :value="article" class="[&>*:first-child]:mt-0">
          <template #empty>
            <DocumentEmpty />
          </template>
        </ContentRenderer>
      </div>
      <ArticlesPageFooter :prev="prev" :next="next" />
    </article>
  </main>
</template>
