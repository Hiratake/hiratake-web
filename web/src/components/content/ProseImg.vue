<script lang="ts" setup>
type ProseImgProps = {
  /** Cloudflare Images の画像 ID を指定します */
  src: string
  /** 代替文字列を指定します */
  alt: string
  /** 幅を指定します */
  width?: string | number
  /** 高さを指定します */
  height?: string | number
}

const props = withDefaults(defineProps<ProseImgProps>(), {
  width: 1536,
  height: 864,
})

/** 画像URL */
const imageUrl = useImage({ id: props.src, provider: 'cloudflare' })
</script>

<template>
  <div
    class="not-prose my-[2em] overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800"
  >
    <img
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
      class="block h-auto w-full"
      decoding="async"
      loading="lazy"
      sizes="(max-width: 768px) calc(100vw - 48px), 768px"
    />
  </div>
</template>
