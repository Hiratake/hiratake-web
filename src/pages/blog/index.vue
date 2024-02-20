<script lang="ts" setup>
// Types
import type { Article } from '@/types'

const website = useWebsite()

// 記事一覧データの取得
const { data, error } = await useAsyncData('blog-list', () =>
  queryContent<Article>('blog')
    .only(['_path', 'title', 'created'])
    .sort({ created: -1 })
    .find(),
)

// ページが見つからない場合にエラーを出力する
if (error.value) {
  throw createError({
    statusCode: 404,
    message: error.value.message,
    fatal: true,
  })
}

/** 記事データ */
const articles = computed(() =>
  data.value
    ?.filter(
      (
        article,
      ): article is Article & {
        _path: Required<Article>['_path']
        title: Required<Article>['title']
      } => Boolean(article._path) && Boolean(article.title),
    )
    .map((article) => ({
      ...article,
      path: `/blog/${article._path.replace('/blog', '').split('/').join('')}`,
    })),
)

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: website.value.site.name, item: '/' },
      { name: 'ブログ', item: '/blog/' },
    ],
  }),
  defineWebPage({ '@type': 'CollectionPage' }),
])
useSeoMeta({
  title: 'ブログ',
  description:
    'ひらたけのブログです。趣味のことから技術とかの真面目なことまで、書きたいことができたときになんとなく書く、そんな場所です。',
  ogType: 'website',
})
</script>

<template>
  <main class="mx-auto box-content max-w-3xl px-6">
    <div class="grid grid-cols-1 gap-6">
      <ArticleHeader title="ブログ" />
      <div class="prose max-w-none text-inherit dark:prose-invert">
        <div>
          <p>
            趣味のことから技術とかの真面目なことまで、書きたいことができたときになんとなく書くブログです。
          </p>
          <ArticleList :items="articles" />
        </div>
      </div>
      <ArticleFooter title="ブログ" />
    </div>
  </main>
</template>
