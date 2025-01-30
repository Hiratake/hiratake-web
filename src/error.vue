<script lang="ts" setup>
// Types
import type { NuxtError } from '#app'

type ErrorProps = {
  /** エラーの情報 */
  error: NuxtError
}

const props = defineProps<ErrorProps>()

const website = useWebsite()
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
  <Body class="body">
    <SeoDefault />
    <NuxtLoadingIndicator :height="2" :color="website.themeColor" />
    <TheHeader />
    <main class="main mt-12 max-w-5xl gap-8 md:mt-20 md:gap-16">
      <PageHeader :title="title">
        <div class="flex gap-2 text-xs">
          <span class="shrink-0 py-1">現在のURL：</span>
          <div
            class="rounded bg-slate-100 px-2 py-1 font-mono break-all dark:bg-slate-800"
          >
            {{ route.fullPath }}
          </div>
        </div>
      </PageHeader>
      <div class="flex flex-col items-start gap-8">
        <p class="text-sm leading-relaxed">{{ description }}</p>
        <AppLink to="/">
          <span class="text-xs">トップページへ戻る</span>
          <template #icon>
            <span class="i-ph-arrow-u-down-left-bold mt-0.5 size-4" />
          </template>
        </AppLink>
      </div>
    </main>
    <TheFooter />
  </Body>
</template>
