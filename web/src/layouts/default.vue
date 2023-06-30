<script lang="ts" setup>
const route = useRoute()

/** 現在のページがトップページかどうか */
const isTop = computed<boolean>(() => route.path === '/')
</script>

<template>
  <main class="mx-auto box-content max-w-3xl px-6">
    <template v-if="isTop">
      <slot />
    </template>

    <template v-else>
      <article>
        <div class="prose max-w-none dark:prose-invert">
          <slot />
        </div>
      </article>
    </template>
  </main>
</template>
