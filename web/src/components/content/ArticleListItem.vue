<script lang="ts" setup>
// Types
import type { Article } from '@/types'

type ArticleListItemProps = {
  /** URLを指定します */
  url: Required<Article>['_path']
  /** タイトルを指定します */
  title: Required<Article>['title']
  /** 投稿した日を指定します */
  created?: Article['created']
}

const props = withDefaults(defineProps<ArticleListItemProps>(), {
  created: undefined,
})
</script>

<template>
  <article
    :class="[
      'overflow-hidden rounded-lg transition-colors',
      'bg-slate-200 hover:bg-slate-300/70',
      'dark:bg-slate-800 dark:hover:bg-slate-700/70',
    ]"
  >
    <NuxtLink
      :to="props.url"
      :title="props.title"
      class="flex h-full flex-col justify-between gap-4 px-4 py-6"
    >
      <h2 class="line-clamp-2 font-bold leading-snug">{{ props.title }}</h2>
      <div class="flex flex-wrap gap-x-3 gap-y-2 text-xs">
        <div class="flex items-center gap-1 text-slate-600 dark:text-slate-400">
          <span>投稿した日：</span>
          <time
            :datetime="
              useDateFormat(props.created || useNow(), 'YYYY-MM-DD').value
            "
          >
            {{ useDateFormat(props.created || useNow(), 'YYYY/MM/DD').value }}
          </time>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
