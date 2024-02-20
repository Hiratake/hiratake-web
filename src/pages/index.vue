<script lang="ts" setup>
const website = useWebsite()

// 記事データの取得
const { data, error } = await useAsyncData('index', () =>
  queryContent('/').findOne(),
)

// ページが見つからない場合にエラーを出力する
if (error.value) {
  throw createError({
    statusCode: 404,
    message: error.value.message,
    fatal: true,
  })
}

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [{ name: website.value.site.name, item: '/' }],
  }),
])
useSeoMeta({
  title: website.value.site.name,
  description: website.value.site.description,
  ogType: 'website',
})
</script>

<template>
  <main v-if="data" class="mx-auto box-content max-w-3xl px-6">
    <ContentRenderer :value="data" />
  </main>
</template>
