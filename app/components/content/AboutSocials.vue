<script lang="ts" setup>
const app = useAppConfig()

/** ソーシャルリンク */
const socials = app.website.socials
</script>

<template>
  <ul class="flex list-none flex-wrap items-center gap-x-4 gap-y-2 ps-4 pe-4">
    <li>
      <NuxtLink
        :to="socials.bluesky.url"
        class="inline-flex items-center gap-2 rounded-3xl bg-[#0285ff] px-3 py-1 text-white no-underline transition-opacity hover:opacity-80"
      >
        <UIcon name="i-simple-icons-bluesky" class="size-4" />
        <span class="text-sm font-bold">{{ socials.bluesky.name }}</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        :to="socials.github.url"
        class="inline-flex items-center gap-2 rounded-3xl bg-[#181717] px-3 py-1 text-white no-underline transition-opacity hover:opacity-80"
      >
        <UIcon name="i-simple-icons-github" class="size-4" />
        <span class="text-sm font-bold">{{ socials.github.name }}</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        :to="socials.discord.url"
        class="inline-flex items-center gap-2 rounded-3xl bg-[#5865f2] px-3 py-1 text-white no-underline transition-opacity hover:opacity-80"
      >
        <UIcon name="i-simple-icons-discord" class="size-4" />
        <span class="text-sm font-bold">{{ socials.discord.name }}</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        :to="socials.x.url"
        class="inline-flex items-center gap-2 rounded-3xl bg-black px-3 py-1 text-white no-underline transition-opacity hover:opacity-80"
      >
        <UIcon name="i-simple-icons-x" class="size-4" />
        <span class="text-sm font-bold">{{ socials.x.name }}</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        :to="socials.misskey.url"
        class="inline-flex items-center gap-2 rounded-3xl bg-[#a1ca03] px-3 py-1 text-slate-600 no-underline transition-opacity hover:opacity-80"
      >
        <UIcon name="i-simple-icons-misskey" class="size-4" />
        <span class="text-sm font-bold">{{ socials.misskey.name }}</span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        :to="socials.steam.url"
        class="inline-flex items-center gap-2 rounded-3xl bg-black px-3 py-1 text-white no-underline transition-opacity hover:opacity-80"
      >
        <UIcon name="i-simple-icons-steam" class="size-4" />
        <span class="text-sm font-bold">{{ socials.steam.name }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>
