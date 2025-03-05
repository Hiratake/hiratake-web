<script lang="ts" setup>
const website = useWebsite()
const route = useRoute()
const { data, error } = await useAsyncData(
  pathToUseAsyncDataKey(route.path),
  () => queryCollection('docs').path(route.path).first(),
)
const { data: breadcrumbs, error: breadcrumbsError } = await useAsyncData(
  pathToUseAsyncDataKey(route.path, 'breadcrumbs'),
  () => {
    const items: string[] = (route.path || '')
      .split('/')
      .filter((item: string) => item)
      .reduce((prev: string[], current: string) => {
        if (prev.length) {
          return [...prev, `${prev[prev.length - 1]}/${current}`]
        } else {
          return [`/${current}`]
        }
      }, [])
    return queryCollection('docs')
      .where('path', 'IN', items)
      .select('path', 'title')
      .order('path', 'ASC')
      .all()
  },
)

if (!data.value || error.value || breadcrumbsError.value) {
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
/** ウェブサイトの運営者 */
const owner = website.value.owner

useSeoMeta({
  title: () => data.value?.title || name,
  description: () => data.value?.description || description,
  ogType: 'website',
})
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: (breadcrumbs.value
      ? [{ title: website.value.name, path: '/' }, ...breadcrumbs.value]
      : []
    ).map((item) => ({
      name: item.title,
      item: useTrailingSlash(item.path || ''),
    })),
  }),
])
defineOgImage({ url: '/ogp.jpg', width: 1200, height: 630, alt: name })
</script>

<template>
  <main v-if="data" class="main mt-12 max-w-3xl md:mt-20">
    <article class="flex flex-col gap-14">
      <PageHeader :title="data.title" :updated="data.updated" :author="owner" />
      <div class="content prose">
        <ContentRenderer :value="data">
          <template #empty>
            <DocumentEmpty />
          </template>
        </ContentRenderer>
      </div>
    </article>
  </main>
</template>
