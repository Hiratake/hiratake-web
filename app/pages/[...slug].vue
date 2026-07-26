<script lang="ts" setup>
const route = useRoute()
const site = useSiteConfig()
const { data, error } = await useAsyncData(
  pathToUseAsyncDataKey(route.path),
  () => queryCollection('docs').path(route.path).first(),
)
const { data: breadcrumbs, error: breadcrumbsError } = await useAsyncData(
  pathToUseAsyncDataKey(route.path, 'breadcrumbs'),
  () => {
    const items = route.path
      .split('/')
      .filter((item) => item)
      .reduce(
        (prev, current) =>
          prev.length
            ? [...prev, `${prev[prev.length - 1]}/${current}`]
            : [`/${current}`],
        [] as string[],
      )
    return queryCollection('docs')
      .where('path', 'IN', items)
      .select('path', 'title')
      .order('path', 'ASC')
      .all()
  },
)

if (!data.value || error.value || breadcrumbsError.value) {
  throw createError({ status: 404 })
}

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description || site.description,
  ogType: 'website',
  ogImage: '/ogp.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: site.name,
})
useSchemaOrg([
  defineBreadcrumb(
    (breadcrumbs.value
      ? [{ title: site.name, path: '/' }, ...breadcrumbs.value]
      : []
    ).map((item) => ({
      name: item.title,
      item: useTrailingSlash(item.path || ''),
    })),
  ),
])
</script>

<template>
  <UPage v-if="data" as="article" :ui="{ root: 'mt-12 max-w-3xl md:mt-20' }">
    <PageHeader :title="data.title" :updated="data.updated" show-author />

    <UPageBody :ui="{ base: 'mt-14' }">
      <DocumentRenderer :data="data" />
    </UPageBody>
  </UPage>
</template>
