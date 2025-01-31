<script lang="ts" setup>
const website = useWebsite()
const { data, error } = await useAsyncData('index', () =>
  queryCollection('home').path('/').first(),
)

if (error.value) {
  throw createError({
    statusCode: 404,
    message: 'ページが見つかりません',
    fatal: true,
  })
}

/** ウェブサイトの名前 */
const name = website.value.name
/** ウェブサイトの概要 */
const description = website.value.description

useSeoMeta({
  title: () => data.value?.title || name,
  description: () => data.value?.description || description,
  ogType: 'website',
})
useSchemaOrg([
  defineBreadcrumb({ itemListElement: [{ name: name, item: '/' }] }),
])
defineOgImage({ url: '/ogp.jpg', width: 1200, height: 630, alt: name })
</script>

<template>
  <main v-if="data" class="main max-w-7xl gap-16 md:gap-20">
    <HomeHero
      :title="data.hero.title"
      :subtitle="data.hero.subtitle"
      :image="data.hero.image"
    />
    <HomeProfile
      :title="data.profile.title"
      :biography="data.profile.biography"
    />
    <HomeBlog :title="data.blog.title" :description="data.blog.description" />
  </main>
</template>
