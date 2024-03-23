<script lang="ts" setup>
// Types
import type { BlogArticle } from '@/types'

type HomeBlogProps = {
  /** セクションのタイトル */
  title: string
  /** セクションの概要 */
  description: string
}

const props = defineProps<HomeBlogProps>()

const { data, error } = await useAsyncData('index-blog-list', () =>
  queryContent<BlogArticle>('blog')
    .only(['_path', 'title', 'description', 'created'])
    .where({ _path: { $not: '/blog' } })
    .sort({ created: -1 })
    .limit(5)
    .find(),
)

if (error.value) {
  throw createError({
    statusCode: 404,
    message: 'ページが見つかりません',
    fatal: true,
  })
}
</script>

<template>
  <section
    class="mx-auto mt-16 box-content flex max-w-6xl flex-col gap-10 px-2 sm:px-4 md:mt-20 md:px-6"
  >
    <div class="flex items-center justify-between">
      <h2
        class="font-accent text-4xl font-bold text-slate-800 dark:text-white md:text-5xl"
      >
        {{ props.title }}
      </h2>
      <HomeMoreButton to="/blog/" />
    </div>
    <div class="flex flex-col gap-8 sm:gap-12 md:gap-16">
      <p class="text-sm leading-relaxed">{{ props.description }}</p>
      <BlogList :items="data" />
    </div>
  </section>
</template>
