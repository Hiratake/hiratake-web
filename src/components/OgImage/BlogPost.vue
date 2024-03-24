<script lang="ts" setup>
type OgImageBlogPostProps = {
  /** 投稿のタイトル */
  title?: string
}

const props = withDefaults(defineProps<OgImageBlogPostProps>(), {
  title: '',
})
</script>

<template>
  <div
    class="relative size-full"
    style="font-family: 'Noto Sans JP', sans-serif"
  >
    <div
      class="absolute flex size-full items-center justify-center bg-[#a83d3d] p-24"
    >
      <div
        class="flex size-full flex-col items-center justify-center gap-5 rounded-3xl bg-white p-10"
      >
        <div class="flex grow items-center justify-center">
          <h1 class="text-center text-4xl leading-relaxed text-slate-800">
            {{ props.title }}
          </h1>
        </div>
        <div
          class="flex h-9 w-full shrink-0 flex-row items-center justify-between"
        >
          <img src="/logo-light.svg" alt="" class="w-44" />
          <div class="text-xl tracking-widest text-slate-600">hiratake.dev</div>
        </div>
      </div>
    </div>
  </div>
</template>
