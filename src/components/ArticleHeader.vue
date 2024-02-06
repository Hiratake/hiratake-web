<script lang="ts" setup>
const { page } = useContent()
const app = useAppConfig()
const route = useRoute()

/** 現在のページがブログ記事一覧ページかどうか */
const isBlog = computed<boolean>(
  () => route.path === '/blog' || route.path === '/blog/',
)
</script>

<template>
  <header
    v-if="page"
    :class="[
      'grid gap-6 pb-10',
      'border-b border-b-slate-300 dark:border-b-slate-700',
    ]"
  >
    <h1 class="px-1 text-3xl font-bold">{{ page?.title || '' }}</h1>
    <dl
      v-if="!isBlog"
      :class="[
        'flex flex-wrap items-start gap-x-8 gap-y-5 rounded-lg px-4 pb-4 pt-5',
        'bg-slate-200 dark:bg-slate-800',
      ]"
    >
      <div v-if="page?.created" class="grid gap-1">
        <dt class="text-xs text-slate-600 dark:text-slate-400">投稿した日</dt>
        <dd class="text-sm font-bold">
          <time :datetime="useDateFormat(page?.created, 'YYYY-MM-DD').value">
            {{ useDateFormat(page?.created, 'YYYY/MM/DD').value }}
          </time>
        </dd>
      </div>
      <div v-if="page?.updated" class="grid gap-1">
        <dt class="text-xs text-slate-600 dark:text-slate-400">更新した日</dt>
        <dd class="text-sm font-bold">
          <time :datetime="useDateFormat(page?.updated, 'YYYY-MM-DD').value">
            {{ useDateFormat(page?.updated, 'YYYY/MM/DD').value }}
          </time>
        </dd>
      </div>
      <div class="grid gap-1">
        <dt class="text-xs text-slate-600 dark:text-slate-400">書いたひと</dt>
        <dd class="flex items-center gap-2 text-sm font-bold">
          <span>{{ app.author.name }}</span>
        </dd>
      </div>
    </dl>
  </header>
</template>
