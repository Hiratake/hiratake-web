<script lang="ts" setup>
// Utils
import { computed, inject } from 'vue'
import { socialShareInjectionKey } from './utils'

const context = inject(socialShareInjectionKey)

const modelValue = computed({
  get: () => context?.domain.value || '',
  set: (val) => context?.updateDomain(val || ''),
})
</script>

<template>
  <input v-model="modelValue" type="text" />
</template>
