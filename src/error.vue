<script lang="ts" setup>
// Types
import type { NuxtError } from '#app'
// Icons
import { PhArrowUDownLeft } from '@phosphor-icons/vue'
// Assets
import '@fontsource/noto-sans-jp/400.css'
import '@fontsource/noto-sans-jp/700.css'
import '@fontsource/lexend/400.css'
import '@fontsource/lexend/900.css'

type ErrorProps = {
  error: NuxtError
}

const props = defineProps<ErrorProps>()

const route = useRoute()

/** エラーページのタイトル */
const title = computed(() =>
  props.error.statusCode === 404
    ? 'ページが見つかりませんでした'
    : `${props.error.statusCode}`,
)
/** エラーページの概要 */
const description = computed(() =>
  props.error.statusCode === 404
    ? 'ページが見つかりませんでした。お探しのページは、URLが変更もしくは削除された可能性があります。お手数ですが、念の為入力されたURLに間違いがないかお確かめください。'
    : props.error.message,
)

useSeoMeta({ title: title.value, description: description.value })
</script>

<template>
  <Body class="bg-white text-slate-600 dark:bg-slate-900 dark:text-slate-100">
    <SeoDefault />
    <NuxtLoadingIndicator :height="2" color="#a83d3d" />
    <TheHeader />
    <main
      class="mx-auto mt-12 box-content flex min-h-[calc(100vh-28rem)] max-w-5xl flex-col gap-8 px-6 md:mt-20 md:gap-16"
    >
      <header class="flex flex-col gap-6">
        <h1
          class="text-3xl font-bold text-slate-800 dark:text-white md:text-4xl"
        >
          {{ title }}
        </h1>
        <div class="flex gap-2 text-xs">
          <span class="shrink-0 py-1">現在のURL：</span>
          <div
            class="break-all rounded bg-slate-100 px-2 py-1 font-mono dark:bg-slate-800"
          >
            {{ route.fullPath }}
          </div>
        </div>
      </header>
      <div class="flex flex-col items-start gap-8">
        <p class="text-sm leading-relaxed">{{ description }}</p>
        <NuxtLink
          to="/"
          class="relative mt-0.5 flex items-center gap-2 rounded-3xl px-5 py-1.5 transition-colors before:absolute before:inset-0 before:-z-10 before:m-auto before:scale-0 before:rounded-full before:bg-primary before:transition-transform after:absolute after:inset-0 after:rounded-3xl after:border-2 after:border-current after:transition-colors hover:text-white hover:before:scale-100 hover:after:border-transparent md:px-6 md:py-2"
        >
          <span class="text-xs">トップページへ戻る</span>
          <PhArrowUDownLeft class="mt-0.5 size-4" weight="bold" />
        </NuxtLink>
      </div>
    </main>
    <TheFooter />
  </Body>
</template>
