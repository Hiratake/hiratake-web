<script lang="ts" setup>
import type { BlogCollectionItem } from '@nuxt/content'

type PageFooterProps = {
  prev?: Pick<BlogCollectionItem, 'path' | 'title' | 'description' | 'created'>
  next?: Pick<BlogCollectionItem, 'path' | 'title' | 'description' | 'created'>
}

const props = withDefaults(defineProps<PageFooterProps>(), {
  prev: () => ({ path: '', title: '', description: '', created: undefined }),
  next: () => ({ path: '', title: '', description: '', created: undefined }),
})

const app = useAppConfig()

/** 前後の投稿 */
const surroundPost = computed(() => {
  return [
    {
      type: 'prev',
      to: props.prev.path || '',
      title: props.prev.title || '',
      description: props.prev.description,
      created: useDatetimeFormat(props.prev.created),
    },
    {
      type: 'next',
      to: props.next.path || '',
      title: props.next.title || '',
      description: props.next.description,
      created: useDatetimeFormat(props.next.created),
    },
  ].filter((item) => item.to)
})
</script>

<template>
  <footer class="mt-14 flex flex-col gap-16">
    <div class="flex flex-wrap gap-x-16 gap-y-10">
      <template v-for="post in surroundPost" :key="post.type">
        <article
          :class="[post.type === 'next' ? 'items-end' : 'items-start']"
          class="flex shrink-0 grow basis-80 flex-col gap-3"
        >
          <div
            :class="[post.type === 'next' && 'flex-row-reverse']"
            class="flex items-center gap-1"
          >
            <UIcon
              :name="`i-ph-arrow-${post.type === 'next' ? 'right' : 'left'}-fill`"
              class="text-primary-700 size-5"
            />
            <span class="text-sm font-bold">
              {{ post.type === 'next' ? '次の投稿' : '前の投稿' }}
            </span>
          </div>

          <ULink
            :to="post.to"
            :class="[
              post.type === 'next'
                ? 'border-r-2 pr-6 before:-right-0.5'
                : 'border-l-2 pl-6 before:-left-0.5',
            ]"
            class="before:bg-primary-700 relative flex grow flex-col gap-1.5 rounded-none border-slate-200 transition-colors before:absolute before:h-full before:w-0.5 before:origin-bottom before:scale-x-100 before:scale-y-0 before:transition-transform hover:*:opacity-70 hover:*:transition-opacity hover:before:origin-top hover:before:scale-y-100 focus-visible:outline-0 focus-visible:*:opacity-70 focus-visible:*:transition-opacity focus-visible:before:origin-top focus-visible:before:scale-y-100 dark:border-slate-700"
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
              class="line-clamp-2 text-xs text-slate-500 md:text-sm dark:text-slate-400"
            >
              {{ post.description }}
            </p>
          </ULink>
        </article>
      </template>
    </div>

    <div
      class="flex flex-col items-center gap-4 rounded-lg border-2 border-slate-200 p-6 text-center dark:border-slate-800"
    >
      <h3 class="text-lg font-bold">
        投稿への感想などは {{ app.website.socials.discord.name }} サーバへ
      </h3>
      <p class="text-xs">
        この投稿への感想などは、{{ app.website.socials.discord.name }}
        サーバにて受け付けております。もしよろしければ、以下のボタンよりご参加ください！
      </p>
      <UButton
        :to="app.website.socials.discord.url"
        :ui="{
          base: 'bg-[#5865f2] font-bold hover:bg-[#5865f2]/80 focus-visible:bg-[#5865f2]/80 focus-visible:outline-0',
        }"
        icon="i-simple-icons-discord"
        target="_blank"
      >
        {{ app.website.socials.discord.name }} に参加
      </UButton>
    </div>
  </footer>
</template>
