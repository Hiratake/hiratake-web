<script lang="ts" setup>
type ProseAProps = {
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top'
}

const props = withDefaults(defineProps<ProseAProps>(), {
  href: '',
  target: undefined,
})
</script>

<template>
  <NuxtLink
    :href="props.href"
    :target="props.target"
    class="text-blue-900 underline hover:no-underline dark:text-blue-100"
  >
    <slot />
  </NuxtLink>
</template>
