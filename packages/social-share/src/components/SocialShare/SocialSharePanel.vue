<script lang="ts" setup>
// Composables
import { onClickOutside } from '@vueuse/core'
// Utils
import { inject, ref } from 'vue'
import { socialShareInjectionKey } from './utils'

const context = inject(socialShareInjectionKey)
const target = ref<HTMLDivElement | null>(null)

onClickOutside(target, () => context?.togglePanelOpen(false))
</script>

<template>
  <div v-if="context?.isPanelOpen.value" ref="target">
    <slot />
  </div>
</template>
