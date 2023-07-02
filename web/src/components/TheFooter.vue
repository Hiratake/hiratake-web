<script lang="ts" setup>
const config = useRuntimeConfig()
const year = useDateFormat(new Date(), 'YYYY')
</script>

<template>
  <footer
    class="mx-auto box-content grid max-w-3xl gap-6 px-6 pb-16 pt-24 text-xs"
  >
    <ul class="flex flex-wrap items-center justify-center gap-6">
      <li>
        <NuxtLink href="/blog" class="underline hover:no-underline">
          ブログ
        </NuxtLink>
      </li>
      <li>
        <NuxtLink href="/privacy" class="underline hover:no-underline">
          プライバシーポリシー
        </NuxtLink>
      </li>
      <li>
        <NuxtLink href="/contact" class="underline hover:no-underline">
          お問い合わせ
        </NuxtLink>
      </li>
    </ul>
    <p class="text-center">
      &copy; 2014-{{ year }} {{ config.public.siteName }}
    </p>
  </footer>
</template>
