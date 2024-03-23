<script lang="ts" setup>
const { data, error } = await useAsyncData('index', () =>
  queryContent('/').findOne(),
)
const website = useWebsite()

if (error.value) {
  throw createError({
    statusCode: 404,
    message: 'ページが見つかりません',
    fatal: true,
  })
}

/** ウェブサイトの名前 */
const name = website.value.site.name
/** ウェブサイトの概要 */
const description = website.value.site.description

defineOgImage({ url: '/ogp.jpg', width: 1200, height: 630, alt: name })
useSeoMeta({
  title: () => data.value?.title || name,
  description: () => data.value?.description || description,
  ogType: 'website',
})
</script>

<template>
  <main
    v-if="data"
    class="relative z-0 mx-auto box-content max-w-7xl px-4 md:px-6"
  >
    <HomeHero
      :title="data.hero.title"
      :subtitle="data.hero.subtitle"
      :image="data.hero.image"
    />
  </main>
</template>
