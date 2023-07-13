<script lang="ts" setup>
// Types
import type { ShareFunction, SocialShareProps } from './types'
// Composables
import { tryOnMounted, useToggle } from '@vueuse/core'
// Utils
import { provide, readonly, ref } from 'vue'
import { services, socialShareInjectionKey } from './utils'

const props = withDefaults(defineProps<SocialShareProps>(), {
  url: '',
  text: '',
})

const [
  /** パネルの開閉状態 */
  isPanelOpen,
  /** パネルの開閉状態を切り替える */
  togglePanelOpen,
] = useToggle(false)

/** インスタンスのドメイン */
const domain = ref<string>('')
const updateDomain = (val: typeof domain.value) => {
  domain.value = val
  return domain.value
}

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
        '_blank',
      )
    })
  }
}

provide(socialShareInjectionKey, {
  isInstance: !!services[props.service].instance,
  isPanelOpen: readonly(isPanelOpen),
  domain: readonly(domain),
  share,
  togglePanelOpen,
  updateDomain,
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
