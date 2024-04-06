<script lang="ts" setup>
type AppLinkProps = {
  /** クリック時に移動するページのURL */
  to: string
}

const props = defineProps<AppLinkProps>()

/** 末尾のスラッシュを考慮したURL */
const url = computed(() => useTrailingSlash(props.to))
</script>

<template>
  <NuxtLink
    :to="url"
    class="relative mt-0.5 flex items-center gap-2 rounded-3xl px-5 py-1.5 transition-colors before:absolute before:inset-0 before:-z-10 before:m-auto before:scale-0 before:rounded-full before:bg-primary before:transition-transform after:absolute after:inset-0 after:rounded-3xl after:border-2 after:border-current after:transition-colors hover:text-white hover:before:scale-100 hover:after:border-transparent md:px-6 md:py-2"
  >
    <slot />
    <slot name="icon">
      <span class="i-ph-arrow-circle-right-bold mt-0.5 size-4" />
    </slot>
  </NuxtLink>
</template>
