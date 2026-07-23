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
  <ULink
    :to="props.href"
    :target="props.target"
    class="text-blue-900 underline outline-blue-900/25 hover:no-underline focus-visible:no-underline dark:text-blue-100"
  >
    <slot />
  </ULink>
</template>
