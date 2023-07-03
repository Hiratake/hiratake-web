<script lang="ts" setup>
// Icons
import { siGithub, siMisskey, siTwitter } from 'simple-icons'

const config = useRuntimeConfig()
const app = useAppConfig()
</script>

<template>
  <div class="flex items-center justify-center gap-10">
    <div
      :class="[
        'aspect-square w-24 shrink-0 grow-0 overflow-hidden rounded-full',
        'bg-slate-200 dark:bg-slate-800',
      ]"
    >
      <img
        :src="`${config.public.siteUrl}/cdn-cgi/imagedelivery/${config.public.cloudflareImageHash}/69d60176-a6f2-4844-ae78-bb33d3f32400/w=96`"
        alt="icon"
        width="96"
        height="96"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="grid basis-96 gap-3">
      <div class="text-xl font-bold">{{ app.author.name }}</div>
      <div class="text-sm">{{ app.author.biography }}</div>
      <div class="flex items-center gap-3">
        <NuxtLink
          :href="app.author.social.twitter"
          title="Twitter"
          class="h-5 w-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-full w-full fill-[#1da1f2]"
          >
            <path :d="siTwitter.path" />
          </svg>
        </NuxtLink>
        <NuxtLink
          :href="app.author.social.misskey"
          title="Misskey"
          class="h-5 w-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-full w-full fill-[#a1ca03]"
          >
            <path :d="siMisskey.path" />
          </svg>
        </NuxtLink>
        <NuxtLink
          :href="app.author.social.github"
          title="GitHub"
          class="h-5 w-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-full w-full fill-[#181717] dark:fill-white"
          >
            <path :d="siGithub.path" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
