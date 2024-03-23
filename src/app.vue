<script lang="ts" setup>
// Assets
import '@fontsource/noto-sans-jp/400.css'
import '@fontsource/noto-sans-jp/700.css'
import '@fontsource/lexend/400.css'
import '@fontsource/lexend/900.css'
</script>

<template>
  <Body class="bg-white text-slate-600 dark:bg-slate-900 dark:text-slate-100">
    <SeoDefault />
    <NuxtLoadingIndicator :height="2" color="#a83d3d" />
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </Body>
</template>
