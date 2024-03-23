<script lang="ts" setup>
// Icons
import { PhCaretLeft, PhCaretRight } from '@phosphor-icons/vue'

type ArticlesPaginationProps = {
  /** 現在のページ番号 */
  current: string | number
}

const props = defineProps<ArticlesPaginationProps>()

const website = useWebsite()
const { data: max, error } = await useAsyncData('blog-count', () =>
  queryContent('blog')
    .where({ _path: { $not: '/blog' } })
    .count(),
)

/** 現在のページ番号 */
const currentPage = computed(() => Number(props.current))
/** 最後のページ番号 */
const lastPage = computed(() =>
  Math.ceil((max.value || 0) / website.value.list.perPage),
)
/** 前のページのURL */
const prev = computed<string | undefined>(() => {
  if (currentPage.value === 1) {
    return undefined
  } else {
    return useTrailingSlash(
      currentPage.value === 2
        ? '/blog/'
        : `/blog/page/${currentPage.value - 1}/`,
    )
  }
})
/** 次のページのURL */
const next = computed<string | undefined>(() => {
  if (currentPage.value === lastPage.value) {
    return undefined
  } else {
    return useTrailingSlash(`/blog/page/${currentPage.value + 1}/`)
  }
})
/** ページネーションの項目 */
const paginationItems = computed(() =>
  [...Array(lastPage.value < 5 ? lastPage.value : 5)]
    .map(
      (_, i) =>
        i +
        (lastPage.value < 5 || currentPage.value - 2 < 1
          ? 1
          : currentPage.value + 2 > lastPage.value
            ? lastPage.value - 4
            : currentPage.value - 2),
    )
    .map((item) => ({
      to: item === 1 ? '/blog/' : `/blog/page/${item}/`,
      label: item,
      current: item === currentPage.value,
    }))
    .map((item) => ({ ...item, to: useTrailingSlash(item.to) })),
)
</script>

<template>
  <nav
    v-if="!error && max"
    class="mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-3xl border border-primary bg-white px-8 py-1.5 font-accent shadow-xl dark:bg-slate-900 dark:shadow-slate-200/10"
  >
    <NuxtLink
      v-if="prev"
      :to="prev"
      title="前のページへ"
      class="mr-4 flex size-9 items-center justify-center rounded-full transition-colors hover:bg-slate-100 hover:dark:bg-slate-800"
    >
      <PhCaretLeft class="size-3" weight="bold" />
    </NuxtLink>
    <NuxtLink
      v-for="item in paginationItems"
      :key="item.label"
      :to="item.to"
      :class="[
        item.current
          ? 'flex bg-primary text-white'
          : 'hidden hover:bg-slate-100 hover:dark:bg-slate-800 sm:flex',
      ]"
      class="size-9 items-center justify-center rounded-full transition-colors"
    >
      <span class="text-sm">{{ item.label }}</span>
    </NuxtLink>
    <NuxtLink
      v-if="next"
      :to="next"
      title="次のページへ"
      class="ml-4 flex size-9 items-center justify-center rounded-full transition-colors hover:bg-slate-100 hover:dark:bg-slate-800"
    >
      <PhCaretRight class="size-3" weight="bold" />
    </NuxtLink>
  </nav>
</template>
