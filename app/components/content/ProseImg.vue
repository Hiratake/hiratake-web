<script lang="ts" setup>
import type { ProseImgProps as UProseImgProps } from '#ui/components/prose/Img.vue'
import UProseImg from '#ui/components/prose/Img.vue'

type ProseImgProps = UProseImgProps

const props = withDefaults(defineProps<ProseImgProps>(), {
  width: 1536,
  height: 864,
  zoom: true,
})

const config = useRuntimeConfig()
const site = useSiteConfig()

/** 画像のURL */
const imgUrl = computed(() => {
  const baseUrl = `${site.url}/cdn-cgi/imagedelivery/${config.public.cloudflareImageHash}/${props.src}`
  const generatedSrcset = {
    320: `${baseUrl}/w=320`,
    640: `${baseUrl}/w=640`,
    768: `${baseUrl}/w=768`,
    1024: `${baseUrl}/w=1024`,
    1280: `${baseUrl}/w=1280`,
    1536: `${baseUrl}/w=1536`,
  }
  return {
    src: generatedSrcset[1536],
    srcset: `
      ${generatedSrcset[320]} 320w,
      ${generatedSrcset[640]} 640w,
      ${generatedSrcset[768]} 768w,
      ${generatedSrcset[1024]} 1024w,
      ${generatedSrcset[1280]} 1280w,
      ${generatedSrcset[1536]} 1536w,
    `,
  }
})
</script>

<template>
  <UProseImg
    :alt="props.alt"
    :class="props.class"
    :height="props.height"
    :src="imgUrl.src"
    :srcset="imgUrl.srcset"
    :ui="props.ui"
    :width="props.width"
    :zoom="props.zoom"
    decoding="async"
    loading="lazy"
    sizes="(max-width: 768px) calc(100vw - 48px), 768px"
  />
</template>
