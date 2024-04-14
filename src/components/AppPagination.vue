<script lang="ts" setup>
// Utils
import { withoutTrailingSlash } from 'ufo'

type AppPaginationProps = {
  /** 現在のページ番号 */
  current: number
  /** アイテムの総数 */
  itemCount: number
  /** ベースとなるURL */
  baseUrl?: string
}

const props = withDefaults(defineProps<AppPaginationProps>(), {
  baseUrl: '/',
})

const website = useWebsite()

/**
 * 指定したページ番号のURLを取得する
 * @param val ページ番号
 */
const getPageUrl = (val: number): string => {
  const url = withoutTrailingSlash(props.baseUrl)
  return val === 1
    ? useTrailingSlash(url)
    : useTrailingSlash(`${url}/page/${val}`)
}

/** 最後のページ番号 */
const last = computed(() =>
  Math.ceil(props.itemCount / website.value.itemPerPage),
)
/** 前のページのURL */
const prev = computed(() =>
  props.current === 1 ? undefined : getPageUrl(props.current - 1),
)
/** 次のページのURL */
const next = computed(() =>
  props.current === last.value ? undefined : getPageUrl(props.current + 1),
)
/** ページネーションの項目 */
const items = computed(() =>
  [...Array(last.value < 5 ? last.value : 5)]
    .map(
      (_, i) =>
        i +
        (last.value < 5 || props.current - 2 < 1
          ? 1
          : props.current + 2 > last.value
            ? last.value - 4
            : props.current - 2),
    )
    .map((item) => ({
      to: getPageUrl(item),
      label: item,
      current: item === props.current,
    })),
)
</script>

<template>
  <nav
    v-if="props.current && props.itemCount"
    class="mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-3xl border border-primary bg-white px-8 py-1.5 font-accent shadow-xl dark:bg-slate-900 dark:shadow-slate-200/10"
  >
    <NuxtLink
      v-if="prev"
      :to="prev"
      title="前のページへ"
      class="mr-4 flex size-9 items-center justify-center rounded-full transition-colors hover:bg-slate-100 hover:dark:bg-slate-800"
    >
      <span class="i-ph-caret-left-bold size-3" />
    </NuxtLink>
    <NuxtLink
      v-for="item in items"
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
      <span class="i-ph-caret-right-bold size-3" />
    </NuxtLink>
  </nav>
</template>
