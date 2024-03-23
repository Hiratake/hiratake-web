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
    class="mx-auto mt-16 box-content flex max-w-6xl flex-col gap-10 px-2 sm:px-4 md:mt-20 md:px-6"
  >
    <div class="flex items-center justify-between">
      <h2
        class="font-accent text-4xl font-bold text-slate-800 dark:text-white md:text-5xl"
      >
        {{ props.title }}
      </h2>
      <HomeMoreButton to="/about/" />
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
