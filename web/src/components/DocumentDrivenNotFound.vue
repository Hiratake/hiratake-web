<script lang="ts" setup>
// Icons
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <div
    :class="[
      'not-prose mx-auto flex w-full max-w-xl flex-col items-center gap-4 text-center',
    ]"
  >
    <h1 class="text-2xl">お探しのページが見つかりませんでした</h1>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="10"
      viewBox="0 0 24 10"
      class="h-auto w-full fill-current"
    >
      <path
        d="m8.19,7h-1.24v1.18h-1.81v-1.18H1.44v-.45L5.72,1.82h1.24v3.92h1.24v1.26Zm-3.05-1.26v-1.48l-1.29,1.48h1.29Zm4.08-.73c0-1.83.66-3.28,2.96-3.28s2.93,1.45,2.93,3.28-.64,3.26-2.93,3.26-2.96-1.44-2.96-3.26Zm4.08,0c0-1.11-.26-1.96-1.12-1.96s-1.16.85-1.16,1.96.3,1.93,1.16,1.93,1.12-.83,1.12-1.93Zm9.26,1.99h-1.24v1.18h-1.81v-1.18h-3.71v-.45l4.28-4.74h1.24v3.92h1.24v1.26Zm-3.05-1.26v-1.48l-1.29,1.48h1.29Z"
      />
    </svg>

    <div class="flex flex-col items-center gap-8">
      <p class="text-sm leading-relaxed">
        お探しのページは、URLが変更もしくは削除された可能性があります。お手数ですが、入力されたURLに間違いがないかお確かめの上、以下より該当のページをお探しください。
      </p>

      <ul class="flex flex-col items-start gap-2 text-sm">
        <li>
          <NuxtLink to="/" class="link">
            <ChevronRightIcon class="fill-primary h-5 w-5" aria-hidden="true" />
            <span>トップページ</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/" class="link">
            <ChevronRightIcon class="fill-primary h-5 w-5" aria-hidden="true" />
            <span>ブログ</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.link {
  @apply after:bg-primary relative flex items-center gap-1 pb-0.5 pr-1 after:absolute after:bottom-0 after:left-0 after:block after:h-px after:w-full after:origin-right after:scale-x-0 after:scale-y-100 after:transition-transform hover:after:origin-left hover:after:scale-x-100;
}
</style>
