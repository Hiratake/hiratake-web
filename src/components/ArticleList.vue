<script lang="ts" setup>
// Types
import type { Article } from '@/types'
// Icons
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FaceFrownIcon,
} from '@heroicons/vue/20/solid'

type ArticleListProps = {
  items?: (Article & {
    path: Required<Article>['_path']
    title: Required<Article>['title']
  })[]
}

const props = withDefaults(defineProps<ArticleListProps>(), {
  items: () => [],
})

/** 現在表示中のページ番号 */
const current = ref<number>(1)
/** 1ページに表示する最大コンテンツ数 */
const maxPerPage = 30
/** 記事データ */
const articles = computed(() => {
  const startId = (current.value - 1) * maxPerPage
  const endId = startId + maxPerPage
  return props.items.slice(startId, endId)
})
</script>

<template>
  <div class="not-prose my-[2em] grid gap-12">
    <template v-if="props.items.length">
      <section class="grid grid-cols-fill-60 gap-6">
        <template v-for="article in articles" :key="article.path">
          <ArticleListItem
            :url="article.path"
            :title="article.title"
            :created="article.created"
          />
        </template>
      </section>

      <nav class="flex items-center justify-center gap-4">
        <button
          :disabled="current === 1"
          :class="[
            'flex items-center justify-center',
            'aspect-square w-8 rounded-lg transition-colors',
            current === 1
              ? 'opacity-40'
              : 'hover:bg-slate-200 dark:hover:bg-slate-800',
          ]"
          title="前のページへ移動"
          @click="() => (current = current - 1)"
        >
          <ChevronLeftIcon class="h-5 w-5" />
        </button>
        <span class="text-sm" aria-current="page">{{ current }}</span>
        <button
          :disabled="current === Math.ceil(props.items.length / maxPerPage)"
          :class="[
            'flex items-center justify-center',
            'aspect-square w-8 rounded-lg transition-colors',
            current === Math.ceil(props.items.length / maxPerPage)
              ? 'opacity-40'
              : 'hover:bg-slate-200 dark:hover:bg-slate-800',
          ]"
          title="後のページへ移動"
          @click="current = current + 1"
        >
          <ChevronRightIcon class="h-5 w-5" />
        </button>
      </nav>
    </template>

    <template v-else>
      <div
        :class="[
          'flex items-center justify-center gap-2 rounded-lg px-2 py-6 text-sm',
          'bg-slate-200 dark:bg-slate-800',
        ]"
      >
        <FaceFrownIcon class="h-5 w-5" />
        <p>コンテンツがありません</p>
      </div>
    </template>
  </div>
</template>
