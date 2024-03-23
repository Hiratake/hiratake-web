<script lang="ts" setup>
// Icons
import { PhArrowCircleRight } from '@phosphor-icons/vue'

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
      <NuxtLink
        to="/about/"
        class="relative mt-0.5 flex items-center gap-2 rounded-3xl px-5 py-1.5 transition-colors before:absolute before:inset-0 before:-z-10 before:m-auto before:scale-0 before:rounded-full before:bg-primary before:transition-transform after:absolute after:inset-0 after:rounded-3xl after:border-2 after:border-current after:transition-colors hover:text-white hover:before:scale-100 hover:after:border-transparent md:px-6 md:py-2"
      >
        <span class="text-xs">もっとみる</span>
        <PhArrowCircleRight class="mt-0.5 size-4" weight="bold" />
      </NuxtLink>
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
