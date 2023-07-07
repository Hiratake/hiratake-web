<script lang="ts" setup>
// Utils
import { inject } from 'vue'
import { socialShareInjectionKey } from './utils'

const context = inject(socialShareInjectionKey)

const handleClick = (): void => {
  if (context?.isInstance && context?.domain.value) {
    context?.share(context.domain.value)
  }
}
</script>

<template>
  <button :disabled="!context?.domain.value" @click="() => handleClick()">
    <slot />
  </button>
</template>
