<script lang="ts" setup>
const site = useSiteConfig()
const { data, error } = await useAsyncData('index', () =>
  queryCollection('home').path('/').first(),
)

if (!data.value || error.value) {
  throw createError({ status: 404 })
}

useSeoMeta({
  title: data.value?.title || site.name,
  description: data.value?.description || site.description,
  ogType: 'website',
  ogImage: '/ogp.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: site.name,
})
useSchemaOrg([
  defineBreadcrumb({ itemListElement: [{ name: site.name, item: '/' }] }),
])
</script>

<template>
  <UPage v-if="data" :ui="{ root: 'max-w-(--ui-container)' }">
    <UPageBody :ui="{ base: 'gap-16 md:gap-20' }">
      <HomeHero
        :title="data.hero.title || site.name"
        :subtitle="data.hero.subtitle"
        :image="data.hero.image"
      />
      <HomeProfile
        :title="data.profile.title"
        :biography="data.profile.biography"
      />
      <HomeDiary
        :title="data.diary.title"
        :description="data.diary.description"
      />
    </UPageBody>
  </UPage>
</template>
