<script lang="ts" setup>
const route = useRoute()

/** 現在のページがトップページかどうか */
const isTop = computed<boolean>(() => route.path === '/')
/** 現在のページがブログ記事一覧ページかどうか */
const isBlog = computed<boolean>(
  () => route.path === '/blog' || route.path === '/blog/',
)
</script>

<template>
  <main class="mx-auto box-content max-w-3xl px-6">
    <template v-if="isTop">
      <slot />
    </template>

    <template v-else>
      <component
        :is="isBlog ? 'div' : 'article'"
        class="grid grid-cols-1 gap-6"
      >
        <ArticleHeader />
        <div class="prose max-w-none text-inherit dark:prose-invert">
          <slot />
        </div>
        <ArticleFooter />
      </component>
    </template>
  </main>
</template>
