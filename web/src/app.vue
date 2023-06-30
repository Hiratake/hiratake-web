<template>
  <NuxtLoadingIndicator :height="2" color="#a83d3d" />
  <TheHeader />
  <NuxtPage />
  <TheFooter />
  <SeoKit />
  <Body
    :class="[
      'bg-slate-100 text-slate-700',
      'dark:bg-slate-900 dark:text-slate-300',
    ]"
  />
</template>
