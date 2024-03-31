<script lang="ts" setup>
const website = useWebsite()
const route = useRoute()
const { data, error } = await useAsyncData('blog', () =>
  queryContent('/blog').findOne(),
)
const { data: count, error: countError } = await useAsyncData(
  'blog_count',
  () => {
    if (!/^\/blog(\/page\/[1-9]\d*)?\/?$/.test(route.path)) {
      throw new Error('URLの形式が不正です')
    }
    if (route.params?.page && Number(route.params.page) === 1) {
      throw new Error('URLの形式が不正です')
    }

    return queryContent('blog')
      .where({ _path: { $not: '/blog' } })
      .count()
  },
)

if (error.value || countError.value) {
  throw createError({
    statusCode: 404,
    message: 'ページが見つかりません',
    fatal: true,
  })
}

useSeoMeta({
  title: () => data.value?.title || website.value.name,
  description: () => data.value?.description || website.value.description,
  ogType: 'website',
})
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: website.value.name, item: '/' },
      { name: data.value?.title, item: useTrailingSlash('/blog/') },
    ],
  }),
])
defineOgImage({
  url: '/ogp.jpg',
  width: 1200,
  height: 630,
  alt: website.value.name,
})
</script>

<template>
  <main v-if="data" class="main mt-12 max-w-5xl gap-8 md:mt-20 md:gap-16">
    <PageHeader :title="data.title">
      <p class="text-sm leading-relaxed">{{ data.description }}</p>
    </PageHeader>
    <BlogPostList
      :skip="((Number(route.params?.page) || 1) - 1) * website.itemPerPage"
    />
    <AppPagination
      :current="Number(route.params?.page || 1)"
      :item-count="count || 0"
      base-url="/blog/"
    />
  </main>
</template>
