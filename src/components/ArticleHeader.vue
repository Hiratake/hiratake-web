<script lang="ts" setup>
type ArticleHeaderProps = {
  /** ページタイトル */
  title?: string
  /** 投稿した日 */
  created?: string
  /** 更新した日 */
  updated?: string
  /** 書いたひと */
  author?: string
}

const props = withDefaults(defineProps<ArticleHeaderProps>(), {
  title: undefined,
  created: undefined,
  updated: undefined,
  author: undefined,
})
</script>

<template>
  <header
    v-if="props.title"
    class="grid gap-6 border-b border-b-slate-300 pb-10 dark:border-b-slate-700"
  >
    <h1 class="px-1 text-3xl font-bold">{{ props.title }}</h1>
    <dl
      v-if="props.created || props.updated || props.author"
      class="flex flex-wrap items-start gap-x-8 gap-y-5 rounded-lg bg-slate-200 px-4 pb-4 pt-5 dark:bg-slate-800"
    >
      <div v-if="props.created" class="grid gap-1">
        <dt class="text-xs text-slate-600 dark:text-slate-400">投稿した日</dt>
        <dd class="text-sm font-bold">
          <time :datetime="useDateFormat(props.created, 'YYYY-MM-DD').value">
            {{ useDateFormat(props.created, 'YYYY/MM/DD').value }}
          </time>
        </dd>
      </div>
      <div v-if="props.updated" class="grid gap-1">
        <dt class="text-xs text-slate-600 dark:text-slate-400">更新した日</dt>
        <dd class="text-sm font-bold">
          <time :datetime="useDateFormat(props.updated, 'YYYY-MM-DD').value">
            {{ useDateFormat(props.updated, 'YYYY/MM/DD').value }}
          </time>
        </dd>
      </div>
      <div v-if="props.author" class="grid gap-1">
        <dt class="text-xs text-slate-600 dark:text-slate-400">書いたひと</dt>
        <dd class="text-sm font-bold">
          <span>{{ props.author }}</span>
        </dd>
      </div>
    </dl>
  </header>
</template>
