<script lang="ts" setup>
const app = useAppConfig()
const website = useWebsite()
const route = useRoute()

// 記事データの取得
const { data, error } = await useAsyncData(route.path, () => {
  if (
    route.params?.slug &&
    !Array.isArray(route.params.slug) &&
    /^\d{8}$/.test(route.params.slug)
  ) {
    return queryContent(
      `/blog/${route.params.slug.slice(0, 4)}/${route.params.slug.slice(4, 6)}/${route.params.slug.slice(6, 8)}`,
    ).findOne()
  } else {
    throw new Error('見つかりません')
  }
})

// 前後の記事データの取得
const { data: surround, error: surroundError } = await useAsyncData(
  `${route.path}-surround`,
  () => {
    if (
      route.params?.slug &&
      !Array.isArray(route.params.slug) &&
      /^\d{8}$/.test(route.params.slug)
    ) {
      return queryContent()
        .where({ _path: { $regex: /^\/blog\/\d{4}\/\d{2}\/\d{2}/ } })
        .only(['_path', 'title'])
        .findSurround(
          `/blog/${route.params.slug.slice(0, 4)}/${route.params.slug.slice(4, 6)}/${route.params.slug.slice(6, 8)}`,
        )
    } else {
      throw new Error('見つかりません')
    }
  },
)

// ページが見つからない場合にエラーを出力する
if (error.value || surroundError.value) {
  throw createError({
    statusCode: 404,
    message: error.value?.message || surroundError.value?.message,
  })
}

/** 前のページ */
const prev = computed(() => {
  if (surround.value && surround.value[0]) {
    return {
      title: surround.value[0].title,
      path: `/blog/${((surround.value[0]._path as string) || '')
        .replace('/blog', '')
        .split('/')
        .join('')}`,
    }
  } else {
    return undefined
  }
})
/** 次のページ */
const next = computed(() => {
  if (surround.value && surround.value[1]) {
    return {
      title: surround.value[1].title,
      path: `/blog/${((surround.value[1]._path as string) || '')
        .replace('/blog', '')
        .split('/')
        .join('')}`,
    }
  } else {
    return undefined
  }
})

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: website.value.site.name, item: '/' },
      { name: 'ブログ', item: '/blog/' },
      { name: data.value?.title, item: `/blog/${route.params.slug}/` },
    ],
  }),
  defineArticle({
    '@type': 'BlogPosting',
    datePublished: data.value?.created ? data.value.created : undefined,
    dateModified: data.value?.updated ? data.value.updated : undefined,
    author: [{ name: website.value.author.name, url: website.value.site.url }],
  }),
])
useSeoMeta({
  title: () => data.value?.title || website.value.site.name,
  description: () => data.value?.description,
  ogType: 'article',
})
</script>

<template>
  <main v-if="data" class="mx-auto box-content max-w-3xl px-6">
    <article class="grid grid-cols-1 gap-6">
      <ArticleHeader
        :title="data.title"
        :created="data?.created"
        :updated="data?.updated"
        :author="app.author.name"
      />
      <div class="prose max-w-none text-inherit dark:prose-invert">
        <ContentRenderer :value="data" />
      </div>
      <ArticleFooter :title="data.title" :prev="prev" :next="next" />
    </article>
  </main>
</template>
