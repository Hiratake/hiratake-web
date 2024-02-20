<script lang="ts" setup>
// Icons
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
// Utils
import { withTrailingSlash } from 'ufo'

type ArticlePage = {
  /** ページタイトル */
  title: string
  /** パス */
  path: string
}
type ArticleFooterProps = {
  /** ページタイトル */
  title?: string
  /** 前のページ */
  prev?: ArticlePage
  /** 次のページ */
  next?: ArticlePage
}

const props = withDefaults(defineProps<ArticleFooterProps>(), {
  title: undefined,
  prev: undefined,
  next: undefined,
})

const website = useWebsite()
const route = useRoute()

/** シェア先サービス */
const services = ['twitter', 'facebook', 'mastodon', 'misskey'] as const
</script>

<template>
  <footer class="grid grid-cols-1 gap-16">
    <div class="grid gap-2">
      <div class="text-center text-xs">SNSでこのページをシェアする</div>
      <div class="flex items-center justify-center gap-1">
        <SocialShareItem
          v-for="item in services"
          :key="item"
          :service="item"
          :url="`${website.site.url}${
            route.path.endsWith('/') ? route.path : `${route.path}/`
          }`"
          :text="`${props.title || ''} - ${website.site.name}`"
        />
      </div>
    </div>

    <div
      v-if="props.prev || props.next"
      class="flex flex-wrap items-start justify-between gap-x-12 gap-y-6"
    >
      <NuxtLink
        v-if="props.prev"
        :to="withTrailingSlash(props.prev.path)"
        class="link mr-auto justify-start"
      >
        <ChevronLeftIcon class="size-5" />
        <article class="flex flex-col items-start gap-1">
          <span class="text-xs text-slate-600 dark:text-slate-400">
            前の投稿
          </span>
          <h2 class="text-sm font-bold">{{ props.prev.title }}</h2>
        </article>
      </NuxtLink>
      <NuxtLink
        v-if="props.next"
        :to="withTrailingSlash(props.next.path)"
        class="link ml-auto justify-end"
      >
        <article class="flex flex-col items-end gap-1">
          <span class="text-xs text-slate-600 dark:text-slate-400">
            次の投稿
          </span>
          <h2 class="text-right text-sm font-bold">{{ props.next.title }}</h2>
        </article>
        <ChevronRightIcon class="size-5" />
      </NuxtLink>
    </div>
  </footer>
</template>

<style scoped>
.link {
  @apply relative flex max-w-xs grow basis-1/2 items-center gap-4 pb-2 after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:scale-y-100 after:bg-primary after:transition-transform hover:after:origin-left hover:after:scale-x-100;
}
</style>
