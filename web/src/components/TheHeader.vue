<script lang="ts" setup>
// Components
import { Switch } from '@headlessui/vue'

const config = useRuntimeConfig()
const colorMode = useColorMode()

/** ダークモードが指定されているかどうか */
const isDark = computed<boolean>({
  get: () => colorMode.value === 'dark' ?? false,
  set: (val) => (colorMode.value = val ? 'dark' : 'light'),
})
</script>

<template>
  <header
    class="mx-auto box-content flex max-w-3xl items-center justify-between px-6 py-16"
  >
    <NuxtLink
      :aria-label="`${config.public.siteName} homepage`"
      href="/"
      class="w-32 transition-opacity hover:opacity-70"
    >
      <img
        :alt="config.public.siteName"
        :title="config.public.siteName"
        class="block dark:hidden"
        src="/logo-light.svg"
        width="162"
        height="40"
      />
      <img
        :alt="config.public.siteName"
        :title="config.public.siteName"
        class="hidden dark:block"
        src="/logo-dark.svg"
        width="162"
        height="40"
      />
    </NuxtLink>

    <Switch
      v-model="isDark"
      :class="[
        'relative h-6 w-12 cursor-pointer rounded-3xl border',
        'border-slate-300 dark:border-slate-800',
        'bg-slate-200 dark:bg-slate-800',
      ]"
    >
      <span class="sr-only">toggle color mode</span>
      <span
        :class="[
          'absolute inset-y-0 left-2 my-auto aspect-square w-3',
          'pointer-events-none rounded-full bg-slate-800',
          'translate-x-0 dark:translate-x-5',
          'shadow-none dark:shadow-[inset_6px_-2px_0px_0px_#f1f5f9]',
        ]"
        aria-hidden="true"
      />
    </Switch>
  </header>
</template>
