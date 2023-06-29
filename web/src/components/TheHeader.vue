<script lang="ts" setup>
const config = useRuntimeConfig()
</script>

<template>
  <header
    :class="[
      'mx-auto box-content flex max-w-3xl items-center justify-between px-6 py-16',
    ]"
  >
    <NuxtLink
      :aria-label="`${config.public.siteName} homepage`"
      href="/"
      class="w-32 transition-opacity hover:opacity-70"
    >
      <img
        :alt="config.public.siteName"
        :title="config.public.siteName"
        src="/logo.svg"
      />
    </NuxtLink>
  </header>
</template>
