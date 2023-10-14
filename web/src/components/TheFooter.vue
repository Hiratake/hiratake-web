<script lang="ts" setup>
const website = useWebsite()
const year = useDateFormat(new Date(), 'YYYY')
</script>

<template>
  <footer class="mx-auto box-content grid max-w-3xl gap-6 px-6 py-24 text-xs">
    <ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
      <li>
        <NuxtLink href="/blog/" class="underline hover:no-underline">
          ブログ
        </NuxtLink>
      </li>
      <li>
        <NuxtLink href="/privacy/" class="underline hover:no-underline">
          プライバシーポリシー
        </NuxtLink>
      </li>
      <li>
        <NuxtLink href="/about/" class="underline hover:no-underline">
          運営者情報
        </NuxtLink>
      </li>
      <li>
        <NuxtLink href="/contact/" class="underline hover:no-underline">
          お問い合わせ
        </NuxtLink>
      </li>
    </ul>
    <p class="text-center">&copy; 2014-{{ year }} {{ website.site.name }}</p>
  </footer>
</template>
