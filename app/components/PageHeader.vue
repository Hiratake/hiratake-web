<script lang="ts" setup>
type PageHeaderProps = {
  /** タイトル */
  title?: string
  /** ページの説明 */
  description?: string
  /** 投稿した日 */
  created?: Date | string
  /** 更新した日 */
  updated?: Date | string
  /** 書いた人を表示するか */
  showAuthor?: boolean
}

const props = withDefaults(defineProps<PageHeaderProps>(), {
  title: '',
  description: undefined,
  created: undefined,
  updated: undefined,
})

const app = useAppConfig()

/** 投稿した日 */
const createdDate = computed(() => useDatetimeFormat(props.created))
/** 更新した日 */
const updatedDate = computed(() => useDatetimeFormat(props.updated))
</script>

<template>
  <UPageHeader
    :title="props.title"
    :description="props.description"
    :ui="{
      container: 'flex flex-col gap-5',
      description: 'mt-0 text-sm leading-relaxed text-inherit',
      root: 'border-b-0 py-0',
      title:
        'leading-snug text-slate-800 sm:text-3xl md:text-4xl md:leading-normal dark:text-white',
    }"
  >
    <dl
      v-if="props.created || props.updated || props.showAuthor"
      class="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-3 text-xs sm:gap-4"
    >
      <div
        v-if="props.created"
        class="flex flex-col gap-1.5 rounded-lg bg-slate-100 px-4 py-2.5 dark:bg-slate-800"
      >
        <dt>投稿した日</dt>
        <dd class="flex items-center gap-1.5 font-bold">
          <UIcon name="i-ph-calendar-blank-bold" class="mt-0.5 size-4.5" />
          <time :datetime="createdDate.hyphen">
            {{ createdDate.slash }}
          </time>
        </dd>
      </div>

      <div
        v-if="props.updated"
        class="flex flex-col gap-1.5 rounded-lg bg-slate-100 px-4 py-2.5 dark:bg-slate-800"
      >
        <dt>更新した日</dt>
        <dd class="flex items-center gap-1.5 font-bold">
          <UIcon name="i-ph-clock-clockwise-bold" class="mt-0.5 size-4.5" />
          <time :datetime="updatedDate.hyphen">
            {{ updatedDate.slash }}
          </time>
        </dd>
      </div>

      <div
        v-if="props.showAuthor"
        class="flex flex-col gap-1.5 rounded-lg bg-slate-100 px-4 py-2.5 dark:bg-slate-800"
      >
        <dt>書いたひと</dt>
        <dd class="flex items-center gap-1.5 font-bold">
          <div class="size-5 overflow-hidden rounded-full">
            <img
              :src="app.website.owner.icon"
              alt="icon"
              class="size-full object-contain"
              width="24"
              height="24"
            />
          </div>
          <span>{{ app.website.owner.name }}</span>
        </dd>
      </div>
    </dl>
  </UPageHeader>
</template>
