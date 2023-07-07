<script lang="ts" setup>
// Utils
import { inject } from 'vue'
import { socialShareInjectionKey } from './utils'

const { isInstance, share } = inject(socialShareInjectionKey, {
  isInstance: false,
  share: () => {},
})
</script>

<template>
  <button @click="() => (isInstance ? () => {} : share())">
    <slot />
  </button>
</template>
