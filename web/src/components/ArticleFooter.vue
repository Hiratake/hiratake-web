<script lang="ts" setup>
// Icons
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

const { next, page, prev } = useContent()
const website = useWebsite()
const route = useRoute()

/** シェア先サービス */
const services = ['twitter', 'facebook', 'mastodon', 'misskey'] as const
</script>

<template>
  <footer v-if="page" class="grid grid-cols-1 gap-16">
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
          :text="`${page?.title || ''} - ${website.site.name}`"
        />
      </div>
    </div>

    <div
      v-if="page?._dir === 'blog'"
      class="flex flex-wrap items-start justify-between gap-x-12 gap-y-6"
    >
      <NuxtLink
        v-if="prev && prev?._dir === 'blog' && prev?._path"
        :to="prev?._path?.endsWith('/') ? prev?._path : `${prev?._path}/`"
        class="link mr-auto justify-start"
      >
        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
        <article class="flex flex-col items-start gap-1">
          <span class="text-xs text-slate-600 dark:text-slate-400">
            前の投稿
          </span>
          <h2 class="text-sm font-bold">
            {{ prev?.title }}
          </h2>
        </article>
      </NuxtLink>
      <NuxtLink
        v-if="next && next?._dir === 'blog' && next?._path"
        :to="next?._path?.endsWith('/') ? next?._path : `${next?._path}/`"
        class="link ml-auto justify-end"
      >
        <article class="flex flex-col items-end gap-1">
          <span class="text-xs text-slate-600 dark:text-slate-400">
            次の投稿
          </span>
          <h2 class="text-right text-sm font-bold">
            {{ next?.title }}
          </h2>
        </article>
        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
      </NuxtLink>
    </div>
  </footer>
</template>

<style scoped>
.link {
  @apply after:bg-primary relative flex max-w-xs grow basis-1/2 items-center gap-4 pb-2 after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:scale-y-100 after:transition-transform hover:after:origin-left hover:after:scale-x-100;
}
</style>
