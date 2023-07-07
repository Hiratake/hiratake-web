<script lang="ts" setup>
const isInstance = inject(isInstanceKey, false)
const share = inject(shareKey, () => {})
</script>

<template>
  <button @click="() => (isInstance ? () => {} : share())">
    <slot />
  </button>
</template>
