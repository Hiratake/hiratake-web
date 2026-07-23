<script lang="ts" setup>
const app = useAppConfig()
</script>

<template>
  <UApp>
    <Body
      class="bg-white text-slate-600 dark:bg-slate-900 dark:text-slate-100"
    />
    <TheSeo />
    <NuxtRouteAnnouncer class="" />
    <NuxtLoadingIndicator :height="2" :color="app.website.themeColor" />
    <TheHeader />
    <UMain
      :ui="{
        base: 'box-content min-h-[calc(100vh-var(--ui-header-height)-22rem)] px-6 md:min-h-[calc(100vh-var(--ui-header-height)-20rem)]',
      }"
    >
      <NuxtPage />
    </UMain>
    <TheFooter />
  </UApp>
</template>
