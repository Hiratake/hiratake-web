<script lang="ts" setup>
import type { NuxtError } from '#app'

type ErrorProps = {
  /** エラー */
  error: NuxtError
}

const props = defineProps<ErrorProps>()

const app = useAppConfig()
const route = useRoute()

/** エラーページのタイトル */
const title = computed(() =>
  props.error.status === 404
    ? 'ページが見つかりませんでした'
    : props.error.status,
)
/** エラーページの概要 */
const description = computed(() =>
  props.error.status === 404
    ? 'ページが見つかりませんでした。お探しのページは、URLが変更もしくは削除された可能性があります。お手数ですが、念の為入力されたURLに間違いがないかお確かめください。'
    : props.error.message,
)

useSeoMeta({
  title,
  description,
  ogType: 'website',
  robots: { noindex: true, nofollow: true },
})
</script>

<template>
  <UApp>
    <Body
      class="bg-white text-slate-600 dark:bg-slate-900 dark:text-slate-100"
    />
    <TheSeo />
    <NuxtRouteAnnouncer class="" />
    <NuxtLoadingIndicator :height="2" :color="app.website.themeColor" />
    <TheHeader />
    <UMain>
      <UPage :ui="{ root: 'mt-12 max-w-5xl md:mt-20' }">
        <PageHeader :title="`${title}`">
          <div class="flex gap-2 text-xs">
            <span class="shrink-0 py-1">現在のURL：</span>
            <div
              class="rounded bg-slate-100 px-2 py-1 font-mono break-all dark:bg-slate-800"
            >
              {{ route.fullPath }}
            </div>
          </div>
        </PageHeader>

        <UPageBody :ui="{ base: 'mt-8 md:mt-16 gap-8 items-start' }">
          <p class="text-sm leading-relaxed">{{ description }}</p>

          <UButton
            :ui="{ base: 'before:bg-primary-700' }"
            color="neutral"
            trailing-icon="i-ph-arrow-u-down-left-bold"
            to="/"
            variant="outline"
          >
            トップページへ戻る
          </UButton>
        </UPageBody>
      </UPage>
    </UMain>
    <TheFooter />
  </UApp>
</template>
