<script lang="ts" setup>
// Types
import type { Article } from '@/types'
// Icons
import { FaceFrownIcon } from '@heroicons/vue/20/solid'

type ContentListProps = {
  query: string[]
}

const props = defineProps<ContentListProps>()

// コンテンツの取得
const { data } = await useAsyncData(
  `content-list-${props.query.join('-')}`,
  () => {
    const [query, ...pathParts] = props.query
    return queryContent<Article>(query, ...pathParts)
      .where({ _dir: { $eq: pathParts[pathParts.length - 1] || query } })
      .sort({ created: -1 })
      .find()
  }
)
const articles = computed(() =>
  data.value?.filter(
    (
      article
    ): article is Article & {
      _path: Required<Article>['_path']
      title: Required<Article>['title']
    } => Boolean(article._path) && Boolean(article.title)
  )
)
</script>

<template>
  <div class="not-prose my-[2em] grid gap-6">
    <template v-if="articles?.length">
      <section class="grid grid-cols-fill-60 gap-6">
        <template v-for="article in articles" :key="article._path">
          <ContentListItem
            :url="
              article._path.endsWith('/') ? article._path : `${article._path}/`
            "
            :title="article.title"
            :created="article.created"
            :updated="article.updated"
          />
        </template>
      </section>
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
