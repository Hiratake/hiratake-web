<script lang="ts" setup>
// Components
import { Switch } from '@headlessui/vue'

const website = useWebsite()
const colorMode = useColorMode()

/** ダークモードが指定されているかどうか */
const isDark = computed<boolean>({
  get: () => colorMode.value === 'dark',
  set: (val) => (colorMode.value = val ? 'dark' : 'light'),
})
</script>

<template>
  <header
    :class="[
      'mx-auto box-content flex max-w-3xl items-center justify-between',
      'px-6 pb-16 pt-10 sm:pt-16',
    ]"
  >
    <SiteLink
      :aria-label="`${website.site.name} homepage`"
      to="/"
      class="w-32 transition-opacity hover:opacity-70"
    >
      <img
        :alt="website.site.name"
        :title="website.site.name"
        class="block dark:hidden"
        src="/logo-light.svg"
        width="162"
        height="40"
      />
      <img
        :alt="website.site.name"
        :title="website.site.name"
        class="hidden dark:block"
        src="/logo-dark.svg"
        width="162"
        height="40"
      />
    </SiteLink>

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
