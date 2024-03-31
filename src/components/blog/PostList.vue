<script lang="ts" setup>
// Types
import type { BlogPost } from '@/types'

type BlogPostListProps = {
  /** 取得する投稿数 */
  limit?: number
  /** スキップする投稿数 */
  skip?: number
}

const props = withDefaults(defineProps<BlogPostListProps>(), {
  limit: undefined,
  skip: 0,
})

const website = useWebsite()
const { data, error } = await useAsyncData(
  pathToUseAsyncDataKey(
    '/blog',
    `limit-${props.limit || website.value.itemPerPage}`,
    `skip-${props.skip}`,
  ),
  () =>
    queryContent<BlogPost>('blog')
      .only(['_path', 'title', 'description', 'created'])
      .where({ _path: { $not: '/blog' } })
      .sort({ created: -1 })
      .limit(props.limit || website.value.itemPerPage)
      .skip(props.skip)
      .find(),
)

if (error.value || !data.value?.length) {
  throw createError({
    statusCode: 404,
    message: 'ページが見つかりません',
    fatal: true,
  })
}

/** ブログの投稿 */
const items = computed(() =>
  (data.value || [])
    .filter((item) => item._path && item.title && item.created)
    .map((item) => ({
      path: useTrailingSlash(blogPathToUrl(item._path)),
      title: item.title || '',
      description: item.description || '',
      created: useDatetimeFormat(item.created),
    })),
)
</script>

<template>
  <div class="mx-auto w-full max-w-5xl">
    <article v-for="post in items" :key="post.path" class="flex gap-10">
      <div
        class="hidden shrink-0 basis-12 items-start justify-center text-slate-300 dark:text-slate-700 sm:flex"
      >
        <div class="grid h-full justify-items-center">
          <div class="col-span-full row-span-full w-px bg-current" />
          <div
            class="col-span-full row-span-full mt-10 size-[calc(0.5rem+1px)] rounded-full border-2 border-current bg-white dark:bg-slate-900"
          />
        </div>
      </div>
      <div
        class="grid grow grid-cols-1 grid-rows-[auto_auto_1fr] gap-x-6 gap-y-2 py-4 md:grid-cols-[auto_1fr] md:grid-rows-[auto_1fr]"
      >
        <dl
          class="grid md:row-span-full md:grid-rows-subgrid md:place-items-center md:px-0 md:py-4"
        >
          <dt class="sr-only">投稿した日</dt>
          <dd class="text-xs">
            <time :datetime="post.created.hyphen">
              {{ post.created.slash }}
            </time>
          </dd>
        </dl>
        <NuxtLink
          :to="post.path"
          class="grid rounded-lg transition-opacity hover:opacity-65 md:row-span-full md:grid-rows-subgrid md:px-6 md:py-4 md:transition-colors md:hover:bg-slate-100 md:hover:opacity-100 md:hover:dark:bg-slate-800"
        >
          <h3 class="font-bold text-slate-800 dark:text-white">
            {{ post.title }}
          </h3>
          <div class="flex flex-col gap-3 pt-2 leading-relaxed md:pt-4">
            <p
              class="line-clamp-2 text-xs text-slate-500 dark:text-slate-400 md:text-sm"
            >
              {{ post.description }}
            </p>
            <div class="flex items-center gap-2">
              <span class="text-xs text-primary underline dark:text-white">
                続きを読む
              </span>
              <span class="i-ph-caret-right-bold mt-1 size-3 text-primary" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </article>
  </div>
</template>
