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
    <UMain>
      <NuxtPage />
    </UMain>
    <TheFooter />
  </UApp>
</template>
