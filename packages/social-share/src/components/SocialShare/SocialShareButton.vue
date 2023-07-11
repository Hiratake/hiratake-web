<script lang="ts" setup>
// Utils
import { inject } from 'vue'
import { socialShareInjectionKey } from './utils'

const context = inject(socialShareInjectionKey)

const handleClick = (): void => {
  if (context?.isInstance) {
    // インスタンスドメインの入力が必要な場合パネルを開く
    context?.togglePanelOpen(true)
  } else {
    // インスタンスドメインの入力が不要な場合シェアする関数を実行する
    context?.share()
  }
}
</script>

<template>
  <button @click="() => handleClick()">
    <slot />
  </button>
</template>
