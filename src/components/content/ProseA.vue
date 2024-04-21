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
    class="underline hover:no-underline"
  >
    <slot />
  </NuxtLink>
</template>
