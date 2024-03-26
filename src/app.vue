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

// TODO: Vue v3.5 がリリースされたら削除
// https://github.com/tailwindlabs/headlessui/issues/2913
provideUseId(() => useId())
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
