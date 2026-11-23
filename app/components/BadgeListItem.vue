<script lang="ts" setup>
import { ULink } from '#components'

type BadgeListItemProps = {
  /** ラベル */
  label: string
  /** アイコン */
  icon: string
  /** 6 桁の RGB カラーコード */
  backgroundColor: `#${string}`
  /** リンク先 URL */
  to?: string
}

const props = defineProps<BadgeListItemProps>()

const whiteLuminance = 1
const slate600Luminance = 0.08882393
const textColorClass = computed(() => {
  const background = getRelativeLuminance(props.backgroundColor)
  const whiteContrast = getContrastRatio(background, whiteLuminance)
  const slateContrast = getContrastRatio(background, slate600Luminance)
  return whiteContrast >= slateContrast ? 'text-white' : 'text-slate-600'
})
</script>

<template>
  <li>
    <UBadge
      :as="to ? ULink : 'span'"
      v-bind="to ? { to, raw: true } : {}"
      :label="label"
      :icon="icon"
      :ui="{ leadingIcon: 'size-4' }"
      :style="{ backgroundColor }"
      class="gap-2 rounded-3xl px-3 py-1 text-sm font-bold"
      :class="[
        textColorClass,
        to && 'no-underline hover:underline focus-visible:underline',
      ]"
    />
  </li>
</template>
