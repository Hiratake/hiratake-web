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
    class="relative flex size-full items-center justify-center"
    style="font-family: 'Noto Sans JP', sans-serif"
  >
    <div class="absolute size-full bg-white" />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 222.73 500"
      class="absolute left-20 top-0 w-56"
    >
      <polygon
        points="12 121.67 222.73 0 198.73 0 0 114.74 0 500 12 500 12 121.67"
        class="fill-[#a83d3d]"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 222.73 500"
      class="absolute bottom-0 right-20 w-56"
    >
      <polygon
        points="210.73 378.33 0 500 24 500 222.73 385.26 222.73 0 210.73 0 210.73 378.33"
        class="fill-[#a83d3d]"
      />
    </svg>

    <div class="flex flex-col items-center gap-8 px-60 py-20">
      <h1
        class="relative text-center text-[2.5rem] leading-relaxed text-slate-700"
      >
        {{ props.title }}
      </h1>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 40" class="w-40">
        <path
          d="m155.49,24.99h-9.86c.39,1.51,1.62,2.35,3.39,2.35,1.32,0,2.63-.53,3.42-1.46l2.16,2.16c-1.23,1.65-3.53,2.55-5.82,2.55-4,0-6.94-2.74-6.94-6.78s3.19-6.86,6.94-6.86,6.78,2.63,6.78,6.64c0,.36-.03.81-.05,1.4h0Zm-3.61-2.38c-.11-1.54-1.4-2.46-3.05-2.46-1.48,0-2.8.7-3.19,2.46h6.24Z"
          class="fill-slate-700"
        />
        <path
          d="m136.47,30.34l-4.59-5.66v5.66h-3.67V10.32h3.67v10.95l3.3-3.98h4.7l-5.1,5.74,6.24,7.31h-4.56Z"
          class="fill-slate-700"
        />
        <path
          d="m124.52,17.29v13.05h-3.66v-1.62c-.92,1.29-2.74,1.88-4.2,1.88-3.36,0-6.41-2.6-6.41-6.8s3.05-6.8,6.41-6.8c1.51,0,3.28.56,4.2,1.88v-1.57s3.66,0,3.66,0Zm-3.78,6.5c0-2.02-1.68-3.36-3.39-3.36-1.84-.03-3.36,1.45-3.39,3.29v.07c.04,1.87,1.59,3.36,3.46,3.32,1.82-.04,3.28-1.5,3.32-3.32Z"
          class="fill-slate-700"
        />
        <path
          d="m108.64,20.12h-2.77v10.22h-3.67v-10.22h-2.38v-2.83h2.38v-4.78h3.67v4.78h2.77v2.83Z"
          class="fill-slate-700"
        />
        <path
          d="m97.25,17.29v13.05h-3.67v-1.62c-.92,1.29-2.74,1.88-4.2,1.88-3.36,0-6.41-2.6-6.41-6.8s3.05-6.8,6.41-6.8c1.51,0,3.28.56,4.2,1.88v-1.57s3.67,0,3.67,0Zm-3.78,6.5c0-2.02-1.68-3.36-3.39-3.36-1.85-.03-3.36,1.45-3.39,3.29v.07c0,1.87,1.52,3.39,3.39,3.39s3.39-1.52,3.39-3.39h0Z"
          class="fill-slate-700"
        />
        <path
          d="m81.76,17.37l-.84,3.5c-.57-.32-1.22-.48-1.88-.48-1.88,0-3.16,1.74-3.16,5.46v4.48h-3.67v-13.05h3.64v2.77c.73-2.18,2.21-3.11,3.84-3.11.7,0,1.48.12,2.07.42h0Z"
          class="fill-slate-700"
        />
        <path
          d="m64.86,17.29h3.67v13.05h-3.67v-13.05Zm1.8-6.68l-1.92,1.11v2.21l1.91,1.1,1.91-1.1v-2.21l-1.91-1.11h0Z"
          class="fill-slate-700"
        />
        <path
          d="m60.65,11.05v19.29h-3.89v-7.83h-7.19v7.84h-3.9V11.05h3.9v7.95h7.2v-7.95h3.88Z"
          class="fill-slate-700"
        />
        <polyline
          points="19.44 4.57 6.5 12.04 6.5 27.63 20 35.43 33.5 27.63 33.5 17.47 26.45 21.53 19.47 17.5 19.47 9.44 26.53 5.42 31.02 7.89 31.02 10.6 26.52 8.01 21.72 10.75 21.72 16.2 26.45 18.93 35.76 13.57 35.76 28.93 20 38.03 4.24 28.93 4.24 10.74 19.44 1.97"
          class="fill-[#a83d3d]"
        />
        <rect width="162" height="40" class="fill-none" />
      </svg>
    </div>
  </div>
</template>
