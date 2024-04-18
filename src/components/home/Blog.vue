<script lang="ts" setup>
type HomeBlogProps = {
  /** セクションのタイトル */
  title: string
  /** セクションの概要 */
  description: string
}

const props = defineProps<HomeBlogProps>()
</script>

<template>
  <section
    class="mx-auto box-content flex w-full max-w-6xl flex-col gap-10 sm:px-2 md:px-6"
  >
    <div class="flex items-center justify-between">
      <h2
        class="font-accent text-4xl font-bold text-slate-800 dark:text-white md:text-5xl"
      >
        {{ props.title }}
      </h2>
      <AppLink to="/blog/">
        <span class="text-xs">もっとみる</span>
      </AppLink>
    </div>
    <div class="flex flex-col gap-8 sm:gap-12 md:gap-16">
      <p class="text-sm leading-relaxed">{{ props.description }}</p>
      <BlogPostList :limit="5" />
    </div>
  </section>
</template>
