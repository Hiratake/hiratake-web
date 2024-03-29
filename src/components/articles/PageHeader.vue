<script lang="ts" setup>
type ArticlesHeaderProps = {
  /** タイトル */
  title?: string
  /** 投稿した日 */
  created?: string
  /** 更新した日 */
  updated?: string
  /** 書いたひと */
  author?: {
    name: string
    icon: string
  }
}

const props = withDefaults(defineProps<ArticlesHeaderProps>(), {
  title: '',
  created: '',
  updated: '',
  author: () => ({ name: '', icon: '' }),
})

/** 投稿した日 */
const createdDate = computed(() => ({
  hyphen: useDateFormat(props.created || new Date(), 'YYYY-MM-DD').value,
  slash: useDateFormat(props.created || new Date(), 'YYYY/MM/DD').value,
}))
/** 更新した日 */
const updatedDate = computed(() => ({
  hyphen: useDateFormat(props.updated || new Date(), 'YYYY-MM-DD').value,
  slash: useDateFormat(props.updated || new Date(), 'YYYY/MM/DD').value,
}))
</script>

<template>
  <header class="flex flex-col gap-5">
    <h1
      class="text-3xl font-bold leading-snug text-slate-800 dark:text-white md:text-4xl md:leading-normal"
    >
      {{ props.title }}
    </h1>
    <slot>
      <dl class="grid grid-cols-fill-36 gap-3 text-xs sm:gap-4">
        <div
          v-if="props.created"
          class="flex flex-col gap-1 rounded-lg bg-slate-100 px-4 py-2.5 dark:bg-slate-800"
        >
          <dt>投稿した日</dt>
          <dd class="flex items-center gap-1 font-bold">
            <span class="i-ph-calendar-blank-bold mt-0.5 size-5" />
            <time :datetime="createdDate.hyphen">
              {{ createdDate.slash }}
            </time>
          </dd>
        </div>
        <div
          v-if="props.updated"
          class="flex flex-col gap-1 rounded-lg bg-slate-100 px-4 py-2.5 dark:bg-slate-800"
        >
          <dt>更新した日</dt>
          <dd class="flex items-center gap-1 font-bold">
            <span class="i-ph-clock-clockwise-bold mt-0.5 size-5" />
            <time :datetime="updatedDate.hyphen">
              {{ updatedDate.slash }}
            </time>
          </dd>
        </div>
        <div
          v-if="props.author.name"
          class="flex flex-col gap-1 rounded-lg bg-slate-100 px-4 py-2.5 dark:bg-slate-800"
        >
          <dt>書いたひと</dt>
          <dd class="flex items-center gap-1 font-bold">
            <div class="size-6 overflow-hidden rounded-full">
              <img
                :src="props.author.icon"
                alt="icon"
                class="size-full object-contain"
                width="24"
                height="24"
              />
            </div>
            <span>{{ props.author.name }}</span>
          </dd>
        </div>
      </dl>
    </slot>
  </header>
</template>
