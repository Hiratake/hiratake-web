<script lang="ts" setup>
type HomeProfileProps = {
  /** セクションのタイトル */
  title: string
  /** 自己紹介文 */
  biography: string[]
}

const props = defineProps<HomeProfileProps>()
</script>

<template>
  <section
    class="mx-auto flex w-full max-w-6xl flex-col gap-10 sm:px-2 md:px-6"
  >
    <div class="flex items-center justify-between">
      <h2
        class="font-accent text-4xl font-bold text-slate-800 dark:text-white md:text-5xl"
      >
        {{ props.title }}
      </h2>
      <AppLink to="/about/">
        <span class="text-xs">もっとみる</span>
      </AppLink>
    </div>
    <div>
      <p
        v-for="item in props.biography"
        :key="item"
        class="mt-2.5 text-sm leading-relaxed first:mt-0"
      >
        {{ item }}
      </p>
    </div>
  </section>
</template>
