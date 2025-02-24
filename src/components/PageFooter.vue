<script lang="ts" setup>
// Types
import type { BlogCollectionItem } from '@nuxt/content'

type PageFooterProps = {
  prev?: Pick<BlogCollectionItem, 'path' | 'title' | 'description' | 'created'>
  next?: Pick<BlogCollectionItem, 'path' | 'title' | 'description' | 'created'>
}

const props = withDefaults(defineProps<PageFooterProps>(), {
  prev: () => ({ path: '', title: '', description: '', created: undefined }),
  next: () => ({ path: '', title: '', description: '', created: undefined }),
})

const website = useWebsite()

/** 前後の投稿 */
const surroundPost = computed(() => [
  props.prev.path && {
    type: 'prev',
    to: props.prev.path,
    title: props.prev.title || '',
    description: props.prev.description,
    created: useDatetimeFormat(props.prev.created),
  },
  props.next.path && {
    type: 'next',
    to: props.next.path,
    title: props.next.title || '',
    description: props.next.description,
    created: useDatetimeFormat(props.next.created),
  },
])
</script>

<template>
  <footer class="flex flex-col gap-16">
    <div class="flex flex-wrap gap-x-16 gap-y-10">
      <template v-for="post in surroundPost">
        <article
          v-if="post"
          :key="post.type"
          :class="[post.type === 'next' ? 'items-end' : 'items-start']"
          class="flex shrink-0 grow basis-80 flex-col gap-3"
        >
          <div
            :class="[post.type === 'next' && 'flex-row-reverse']"
            class="flex items-center gap-1"
          >
            <span
              :class="[
                post.type === 'next'
                  ? 'i-ph-arrow-right-fill'
                  : 'i-ph-arrow-left-fill',
              ]"
              class="size-5 text-primary"
            />
            <span class="text-sm font-bold">
              {{ post.type === 'next' ? '次の投稿' : '前の投稿' }}
            </span>
          </div>
          <NuxtLink
            :to="post.to"
            :class="[
              post.type === 'next'
                ? 'border-r-2 pr-6 before:-right-0.5'
                : 'border-l-2 pl-6 before:-left-0.5',
            ]"
            class="relative flex grow flex-col gap-1.5 border-slate-200 transition-colors before:absolute before:h-full before:w-0.5 before:origin-bottom before:scale-x-100 before:scale-y-0 before:bg-primary before:transition-transform hover:before:origin-top hover:before:scale-y-100 dark:border-slate-700 [&>*]:transition-opacity [&>*]:hover:opacity-70"
          >
            <dl>
              <dt class="sr-only">投稿した日</dt>
              <dd class="text-xs">
                <time :datetime="post.created.hyphen">
                  {{ post.created.slash }}
                </time>
              </dd>
            </dl>
            <h2 class="font-bold text-slate-800 dark:text-white">
              {{ post.title }}
            </h2>
            <p
              class="line-clamp-2 text-xs text-slate-500 dark:text-slate-400 md:text-sm"
            >
              {{ post.description }}
            </p>
          </NuxtLink>
        </article>
      </template>
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
