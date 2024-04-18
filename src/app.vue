<script lang="ts" setup>
// Utils
import { provideUseId } from '@headlessui/vue'
// Assets
import '@fontsource/noto-sans-jp/400.css'
import '@fontsource/noto-sans-jp/700.css'
import '@fontsource/lexend/400.css'
import '@fontsource/lexend/900.css'
import '@fontsource/source-code-pro/400.css'
import '@fontsource/source-code-pro/700.css'

const website = useWebsite()

// TODO: Vue v3.5 がリリースされたら削除
provideUseId(() => useId())
</script>

<template>
  <Body class="body">
    <SeoDefault />
    <NuxtLoadingIndicator :height="2" :color="website.themeColor" />
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </Body>
</template>
