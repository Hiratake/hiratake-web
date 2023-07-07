<script lang="ts" setup>
// Utils
import { inject } from 'vue'
import { isInstanceKey, shareFunctionKey } from './utils'

/** インスタンスドメインの入力が必要かどうか */
const isInstance = inject(isInstanceKey, false)
/** URLとテキストをSNSへシェアする */
const share = inject(shareFunctionKey, () => {})
</script>

<template>
  <button @click="() => (isInstance ? () => {} : share())">
    <slot />
  </button>
</template>
