<script lang="ts" setup>
type ProseImgProps = {
  /** 画像URL */
  src?: string
  /** 代替テキスト */
  alt?: string
  /** 幅 */
  width?: string | number
  /** 高さ */
  height?: string | number
}

const props = withDefaults(defineProps<ProseImgProps>(), {
  src: '',
  alt: '',
  width: 1536,
  height: 864,
})

const config = useRuntimeConfig()
const website = useWebsite()

/** 画像URL */
const imageUrl = computed(() => {
  const url = website.value.url
  const hash = config.public.cloudflareImageHash
  return `${url}/cdn-cgi/imagedelivery/${hash}/${props.src}`
})
</script>

<template>
  <img
    v-if="props.src"
    :src="`${imageUrl}/w=1536`"
    :srcset="`
        ${imageUrl}/w=320 320w,
        ${imageUrl}/w=640 640w,
        ${imageUrl}/w=768 768w,
        ${imageUrl}/w=1024 1024w,
        ${imageUrl}/w=1280 1280w,
        ${imageUrl}/w=1536 1536w
      `"
    :alt="props.alt"
    :width="props.width"
    :height="props.height"
    class="my-10 rounded-lg border border-slate-100 bg-slate-200 dark:border-slate-800 dark:bg-slate-800"
    decoding="async"
    loading="lazy"
    sizes="(max-width: 768px) calc(100vw - 48px), 768px"
  />
</template>
