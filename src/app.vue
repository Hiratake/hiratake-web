<script lang="ts" setup>
// Assets
import '@fontsource/noto-sans-jp/400.css'
import '@fontsource/noto-sans-jp/700.css'
import '@fontsource/lexend/400.css'
import '@fontsource/lexend/900.css'
import '@fontsource/source-code-pro/400.css'
import '@fontsource/source-code-pro/700.css'

const website = useWebsite()
</script>

<template>
  <Body class="body">
    <SeoDefault />
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator :height="2" :color="website.themeColor" />
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </Body>
</template>
