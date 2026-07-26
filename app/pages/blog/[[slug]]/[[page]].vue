<script lang="ts" setup>
const app = useAppConfig()
const robots = useRobotsRule()
const route = useRoute()
const router = useRouter()
const site = useSiteConfig()
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

if (!data.value || error.value || allBlogPathsError.value || countError.value) {
  throw createError({ status: 404 })
}

/** 現在のページ番号 */
const currentPage = computed(() => Number(route.params?.page) || 1)

/**
 * 指定したページへ移動する
 * @param page ページ番号
 */
const navigateToPage = (page: number) => {
  const url = '/blog/'
  return page === 1 ? url : `${url}page/${page}/`
}
/** ランダムな投稿へ移動する */
const navigateToRandomBlog = () => {
  if (allBlogPaths.value) {
    const random = Math.floor(Math.random() * (count.value || 0))
    if (allBlogPaths.value[random]?.path) {
      router.push(blogPathToUrl(allBlogPaths.value[random].path))
    }
  }
}

if (currentPage.value > 1) {
  robots.value = 'noindex, follow'
}

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description || site.description,
  ogType: 'website',
  ogImage: '/ogp.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: site.name,
})
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: site.name, item: '/' },
      { name: data.value?.title, item: useTrailingSlash('/blog/') },
    ],
  }),
])
</script>

<template>
  <UPage v-if="data" :ui="{ root: 'mt-12 max-w-5xl md:mt-20' }">
    <PageHeader :title="data.title" :description="data.description" />

    <UPageBody :ui="{ base: 'mt-8 gap-2 md:mt-16 md:gap-8' }">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <UIcon name="i-ph-pencil" class="size-4" />
          <span class="text-xs md:text-sm">
            <span class="font-bold">{{ (count || 0).toLocaleString() }}</span>
            件の投稿
          </span>
        </div>

        <UButton
          color="neutral"
          leading-icon="i-ph-shuffle"
          size="sm"
          variant="soft"
          @click="() => navigateToRandomBlog()"
        >
          ランダムで投稿を表示
        </UButton>
      </div>

      <BlogPostList :skip="(currentPage - 1) * app.website.itemPerPage" />
    </UPageBody>

    <UPagination
      :default-page="currentPage"
      :items-per-page="app.website.itemPerPage"
      :to="(page) => navigateToPage(page)"
      :total="count"
      class=""
      :ui="{
        first: 'hidden',
        item: 'font-accent rounded-full not-data-selected:hidden data-selected:pointer-events-none sm:not-data-selected:inline-flex',
        last: 'hidden',
        list: 'border-primary-700 mx-auto max-w-3xl justify-center gap-3 rounded-3xl border bg-white px-8 py-1.5 shadow-xl dark:bg-slate-900 dark:shadow-slate-200/10',
        next: 'ml-4 size-9 rounded-full disabled:hidden *:data-[slot=leadingIcon]:size-3',
        prev: 'mr-4 size-9 rounded-full disabled:hidden *:data-[slot=leadingIcon]:size-3',
        root: 'mt-8 flex md:mt-16',
      }"
      color="neutral"
      ellipsis-icon="i-ph-dots-three"
      first-icon="i-ph-caret-double-left-bold"
      last-icon="i-ph-caret-double-right-bold"
      next-icon="i-ph-caret-right-bold"
      prev-icon="i-ph-caret-left-bold"
      size="lg"
      variant="ghost"
    />
  </UPage>
</template>
