<script lang="ts" setup>
import type {
  ProsePreProps as UProsePreProps,
  ProsePreSlots as UProsePreSlots,
} from '#ui/components/prose/Pre.vue'
import UProsePre from '#ui/components/prose/Pre.vue'

type ProsePreProps = UProsePreProps
type ProsePreSlots = UProsePreSlots

const props = defineProps<ProsePreProps>()
defineSlots<ProsePreSlots>()

/** コピーボタンをカスタマイズするための設定 */
const customizedCopy = computed<ProsePreProps['copy']>(
  () => props.copy || { color: 'neutral', variant: 'soft' },
)
</script>

<template>
  <UProsePre
    :icon="props.icon"
    :code="props.code"
    :language="props.language"
    :filename="props.filename"
    :highlights="props.highlights"
    :hide-header="props.hideHeader"
    :meta="props.meta"
    :copy="customizedCopy"
    :class="props.class"
    :ui="props.ui"
  >
    <slot />
  </UProsePre>
</template>
