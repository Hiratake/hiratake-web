<script lang="ts" setup>
// Types
import type { ShareFunction, SocialShareProps } from './types'
// Composables
import { tryOnMounted } from '@vueuse/core'
// Utils
import { provide } from 'vue'
import { isInstanceKey, services, shareFunctionKey } from './utils'

const props = withDefaults(defineProps<SocialShareProps>(), {
  url: '',
  text: '',
})

/**
 * URLとテキストをSNSへシェアする
 * @param domain インスタンスのドメイン
 */
const share: ShareFunction = (domain = '') => {
  /** 指定したSNS */
  const current = {
    endpoint: services[props.service].endpoint,
    url: encodeURI(services[props.service].url),
    text: encodeURI(services[props.service].text),
    instance: !!services[props.service].instance,
  }

  if (
    // インスタンスドメインの入力が不要
    !current.instance ||
    // インスタンスドメインの入力が必要かつインスタンスドメインの入力がされている
    (current.instance && domain)
  ) {
    tryOnMounted(() => {
      window.open(
        `https://${current.instance ? domain : ''}${current.endpoint}?${
          current.url
        }=${props.url}&${current.text}=${props.text}`,
        '_blank'
      )
    })
  }
}

provide(isInstanceKey, !!services[props.service].instance)
provide(shareFunctionKey, share)
</script>

<template>
  <slot />
</template>
