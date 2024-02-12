<script lang="ts" setup>
// Icons
import { siBluesky, siGithub, siMastodon } from 'simple-icons'

const website = useWebsite()

/** アイコン画像 */
const iconUrl = useImage({
  id: '69d60176-a6f2-4844-ae78-bb33d3f32400',
  provider: 'cloudflare',
  width: 96,
})
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
        :src="iconUrl"
        alt="icon"
        width="96"
        height="96"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="grid basis-96 gap-3">
      <div class="text-xl font-bold">{{ website.author.name }}</div>
      <div class="text-sm">{{ website.author.biography }}</div>
      <div class="flex items-center gap-3">
        <NuxtLink
          :href="website.author.social.mastodon"
          title="Mastodon"
          rel="noopener noreferrer me"
          class="h-5 w-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-full w-full fill-[#6364ff]"
          >
            <path :d="siMastodon.path" />
          </svg>
        </NuxtLink>
        <NuxtLink
          :href="website.author.social.bluesky"
          title="Bluesky"
          rel="noopener noreferrer me"
          class="h-5 w-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-full w-full fill-[#0285ff]"
          >
            <path :d="siBluesky.path" />
          </svg>
        </NuxtLink>
        <NuxtLink
          :href="website.author.social.github"
          title="GitHub"
          rel="noopener noreferrer me"
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
