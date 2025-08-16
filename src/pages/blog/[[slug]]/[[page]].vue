<script lang="ts" setup>
const website = useWebsite()
const route = useRoute()
const router = useRouter()
const robots = useRobotsRule()
const { data, error } = await useAsyncData(pathToUseAsyncDataKey('/blog'), () =>
  queryCollection('diary').path('/blog').first(),
)
const { data: allBlogPaths, error: allBlogPathsError } = await useAsyncData(
  pathToUseAsyncDataKey('/blog', 'all'),
  () => queryCollection('blog').select('path').all(),
)
const { data: count, error: countError } = await useAsyncData(
  pathToUseAsyncDataKey('/blog', 'count'),
  () => {
    if (!/^\/blog(\/page\/[1-9]\d*)?\/?$/.test(route.path)) {
      throw new Error('URLの形式が不正です')
    }
    if (route.params?.page && Number(route.params.page) === 1) {
      throw new Error('URLの形式が不正です')
    }

    return queryCollection('blog').count()
  },
)

if (error.value || allBlogPathsError.value || countError.value) {
  console.error(countError.value?.message)
  throw createError({
    statusCode: 404,
    message: 'ページが見つかりません',
    fatal: true,
  })
}

/**
 * ランダムな投稿へ移動する
 */
const getRandomBlog = () => {
  if (allBlogPaths.value) {
    const random = Math.floor(Math.random() * (count.value || 0))
    if (allBlogPaths.value[random]?.path) {
      router.push(blogPathToUrl(allBlogPaths.value[random].path))
    }
  }
}

if (Number(route.params.page) > 1) {
  robots.value = 'noindex, follow'
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
    <div class="grid grid-cols-1 gap-2 md:gap-8">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <span class="i-ph-pencil" />
          <span class="text-xs md:text-sm">
<span class="font-bold">{{ (count || 0).toLocaleString() }}</span> 件の投稿
          </span>
        </div>

        <button
          class="flex items-center gap-2 rounded-2xl border-2 border-slate-300 bg-slate-100 px-3 py-1 transition-colors hover:bg-slate-300 dark:border-slate-400 dark:bg-slate-900 hover:dark:bg-slate-800"
          @click="() => getRandomBlog()"
        >
          <span class="i-ph-shuffle" />
          <span class="text-xs">ランダムで投稿を表示</span>
        </button>
      </div>
      <BlogPostList
        :skip="((Number(route.params?.page) || 1) - 1) * website.itemPerPage"
      />
    </div>
    <AppPagination
      :current="Number(route.params?.page || 1)"
      :item-count="count || 0"
      base-url="/blog/"
    />
  </main>
</template>
