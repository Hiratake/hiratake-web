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
  query: string[]
}

const props = defineProps<ArticleListProps>()

// コンテンツの取得
const { data } = await useAsyncData(
  `article-list-${props.query.join('-')}`,
  () => {
    const [query, ...pathParts] = props.query
    return queryContent<Article>(query, ...pathParts)
      .where({ _dir: { $eq: pathParts[pathParts.length - 1] || query } })
      .only(['_path', 'title', 'created'])
      .sort({ created: -1 })
      .find()
  },
)
const articles = computed(
  () =>
    data.value?.filter(
      (
        article,
      ): article is Article & {
        _path: Required<Article>['_path']
        title: Required<Article>['title']
      } => Boolean(article._path) && Boolean(article.title),
    ),
)

/** 現在表示中のページ番号 */
const current = ref<number>(1)
/** 1ページに表示する最大コンテンツ数 */
const maxPerPage = 30
/** フィルタリングされたコンテンツ */
const filteredArticles = computed(() => {
  const startId = (current.value - 1) * maxPerPage
  const endId = startId + maxPerPage
  return (articles.value || []).slice(startId, endId)
})
</script>

<template>
  <div class="not-prose my-[2em] grid gap-12">
    <template v-if="articles?.length">
      <section class="grid grid-cols-fill-60 gap-6">
        <template v-for="article in filteredArticles" :key="article._path">
          <ArticleListItem
            :url="
              article._path.endsWith('/') ? article._path : `${article._path}/`
            "
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
          <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
        </button>
        <span class="text-sm" aria-current="page">{{ current }}</span>
        <button
          :disabled="current === Math.ceil(articles.length / maxPerPage)"
          :class="[
            'flex items-center justify-center',
            'aspect-square w-8 rounded-lg transition-colors',
            current === Math.ceil(articles.length / maxPerPage)
              ? 'opacity-40'
              : 'hover:bg-slate-200 dark:hover:bg-slate-800',
          ]"
          title="後のページへ移動"
          @click="current = current + 1"
        >
          <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
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
        <FaceFrownIcon class="h-5 w-5" aria-hidden="true" />
        <p>コンテンツがありません</p>
      </div>
    </template>
  </div>
</template>
