<script lang="ts" setup>
// Types
import type { Article } from '@/types'
// Icons
import {
  ArrowPathIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from '@heroicons/vue/20/solid'

type ContentListItemProps = {
  /** URLを指定します */
  url: Required<Article>['_path']
  /** タイトルを指定します */
  title: Required<Article>['title']
  /** 作成した日を指定します */
  created?: Article['created']
  /** 更新した日を指定します */
  updated?: Article['updated']
}

const props = withDefaults(defineProps<ContentListItemProps>(), {
  created: undefined,
  updated: undefined,
})

const app = useAppConfig()

/** 作成した日 */
const createdDate = useDateFormat(props.created || useNow(), 'YYYY/MM/DD')
/** 更新した日 */
const updatedDate = useDateFormat(props.updated || useNow(), 'YYYY/MM/DD')
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
      class="flex h-full flex-col justify-between gap-4 px-4 py-6"
    >
      <h2 class="line-clamp-2 font-bold leading-snug">{{ props.title }}</h2>
      <div
        :class="[
          'flex flex-wrap gap-x-3 gap-y-2 text-xs',
          'text-slate-500 dark:text-slate-400',
        ]"
      >
        <div class="flex items-center gap-1">
          <PencilSquareIcon class="h-4 w-4" aria-label="作成した日" />
          <span>{{ createdDate }}</span>
        </div>
        <div class="flex items-center gap-1">
          <ArrowPathIcon class="h-4 w-4" aria-label="更新した日" />
          <span>{{ updatedDate }}</span>
        </div>
        <div class="flex items-center gap-1">
          <UserCircleIcon class="h-4 w-4" aria-label="書いたひと" />
          <span>{{ app.author.name }}</span>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
