<script lang="ts" setup>
// Types
import type { BlogArticle } from '@/types'

type ArticlesPageFooterProps = {
  prev?: Pick<BlogArticle, '_path' | 'title' | 'description' | 'created'>
  next?: Pick<BlogArticle, '_path' | 'title' | 'description' | 'created'>
}

const props = withDefaults(defineProps<ArticlesPageFooterProps>(), {
  prev: () => ({ _path: '', title: '', description: '', created: '' }),
  next: () => ({ _path: '', title: '', description: '', created: '' }),
})

const website = useWebsite()

/** 前の投稿 */
const prevArticle = computed(() =>
  props.prev._path
    ? {
        to: props.prev._path,
        title: props.prev.title || '',
        description: props.prev.description,
        created: {
          hyphen: useDateFormat(props.prev.created || new Date(), 'YYYY-MM-DD')
            .value,
          slash: useDateFormat(props.prev.created || new Date(), 'YYYY/MM/DD')
            .value,
        },
      }
    : undefined,
)
/** 次の投稿 */
const nextArticle = computed(() =>
  props.next._path
    ? {
        to: props.next._path,
        title: props.next.title || '',
        description: props.next.description,
        created: {
          hyphen: useDateFormat(props.next.created || new Date(), 'YYYY-MM-DD')
            .value,
          slash: useDateFormat(props.next.created || new Date(), 'YYYY/MM/DD')
            .value,
        },
      }
    : undefined,
)
</script>

<template>
  <footer class="flex flex-col gap-16">
    <div class="flex flex-wrap gap-x-16 gap-y-10">
      <div
        v-if="prevArticle"
        class="flex shrink-0 grow basis-80 flex-col items-start gap-3"
      >
        <div class="flex items-center gap-1">
          <span class="i-ph-arrow-left-fill size-5 text-primary" />
          <span class="text-sm font-bold">前の投稿</span>
        </div>
        <NuxtLink
          :to="prevArticle.to"
          class="flex grow flex-col gap-1.5 border-l border-l-slate-200 pl-6 transition-colors hover:border-l-primary dark:border-l-slate-700 dark:hover:border-l-primary"
        >
          <dl>
            <dt class="sr-only">投稿した日</dt>
            <dd class="text-xs">
              <time :datetime="prevArticle.created.hyphen">
                {{ prevArticle.created.slash }}
              </time>
            </dd>
          </dl>
          <h3 class="font-bold text-slate-800 dark:text-white">
            {{ prevArticle.title }}
          </h3>
          <p
            class="line-clamp-2 text-xs text-slate-500 dark:text-slate-400 md:text-sm"
          >
            {{ prevArticle.description }}
          </p>
        </NuxtLink>
      </div>
      <div
        v-if="nextArticle"
        class="flex shrink-0 grow basis-80 flex-col items-end gap-3"
      >
        <div class="flex items-center gap-1">
          <span class="text-sm font-bold">次の投稿</span>
          <span class="i-ph-arrow-right-fill size-5 text-primary" />
        </div>
        <NuxtLink
          :to="nextArticle.to"
          class="flex grow flex-col gap-1.5 border-r border-r-slate-200 pr-6 transition-colors hover:border-r-primary dark:border-r-slate-700 dark:hover:border-r-primary"
        >
          <dl>
            <dt class="sr-only">投稿した日</dt>
            <dd class="text-xs">
              <time :datetime="nextArticle.created.hyphen">
                {{ nextArticle.created.slash }}
              </time>
            </dd>
          </dl>
          <h3 class="font-bold text-slate-800 dark:text-white">
            {{ nextArticle.title }}
          </h3>
          <p
            class="line-clamp-2 text-xs text-slate-500 dark:text-slate-400 md:text-sm"
          >
            {{ nextArticle.description }}
          </p>
        </NuxtLink>
      </div>
    </div>

    <div
      class="flex flex-col items-center gap-4 rounded-lg border-2 border-slate-200 p-6 text-center dark:border-slate-800"
    >
      <h3 class="text-lg font-bold">投稿への感想などは Discord サーバへ</h3>
      <p class="text-xs">
        この投稿への感想などは、Discord
        サーバにて受け付けております。もしよろしければ、以下のボタンよりご参加ください！
      </p>
      <NuxtLink
        :to="website.socials.discord.url"
        class="flex items-center gap-2 rounded-2xl bg-discord px-6 py-1.5 text-white transition-colors hover:bg-discord/80"
      >
        <span class="i-simple-icons-discord size-5" />
        <span class="pb-0.5 text-xs font-bold">Discord に参加</span>
      </NuxtLink>
    </div>
  </footer>
</template>
