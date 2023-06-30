<script lang="ts" setup>
// Icons
import { siMisskey, siTwitter } from 'simple-icons'

const { page } = useContent()
const app = useAppConfig()
const route = useRoute()

/** 構造化データマークアップ */
const schema = await useAsyncData('page-schema', () => {
  // パンくずリストの項目を取得
  const items: string[] = page.value._path
    .split('/')
    .filter((item: string) => item)
    .reduce((prev: string[], current: string) => {
      if (prev.length) {
        return [...prev, `${prev[prev.length - 1]}/${current}`]
      } else {
        return [`/${current}`]
      }
    }, [])
  return queryContent()
    .where({ _path: { $in: ['/', ...items] } })
    .only(['_path', 'title'])
    .sort({ _path: 1 })
    .find()
}).then((data) => {
  const items: (
    | ReturnType<typeof defineBreadcrumb>
    | ReturnType<typeof defineWebPage>
  )[] = []
  // パンくずリストの構造化データを追加
  items.push(
    defineBreadcrumb({
      itemListElement: (data.data.value ?? []).map((item) => ({
        name: item.title,
        item: item._path,
      })),
    })
  )
  // ブログ記事一覧ページの場合に CollectionPage の指定を追加
  if (route.path === '/blog') {
    items.push(
      defineWebPage({
        '@type': 'CollectionPage',
      })
    )
  }
  return items
})
useSchemaOrg(schema)

/** 現在のページがトップページかどうか */
const isTop = computed<boolean>(() => route.path === '/')
</script>

<template>
  <main class="mx-auto box-content max-w-3xl px-6">
    <template v-if="isTop">
      <slot />
    </template>

    <template v-else>
      <article class="grid gap-6">
        <header
          v-if="route.path !== '/blog'"
          :class="[
            'grid gap-6 pb-10',
            'border-b border-b-slate-300 dark:border-b-slate-700',
          ]"
        >
          <h1 class="px-1 text-3xl font-bold">{{ page.title }}</h1>
          <dl
            :class="[
              'flex items-start gap-8 rounded-lg px-4 pb-4 pt-5',
              'bg-slate-200 dark:bg-slate-800',
            ]"
          >
            <div v-if="page.created" class="grid gap-1">
              <dt class="text-xs text-slate-500 dark:text-slate-400">
                作成した日
              </dt>
              <dd class="text-sm font-bold">
                <time
                  :datetime="useDateFormat(page.created, 'YYYY-MM-DD').value"
                >
                  {{ useDateFormat(page.created, 'YYYY/MM/DD').value }}
                </time>
              </dd>
            </div>
            <div v-if="page.updated" class="grid gap-1">
              <dt class="text-xs text-slate-500 dark:text-slate-400">
                更新した日
              </dt>
              <dd class="text-sm font-bold">
                <time
                  :datetime="useDateFormat(page.updated, 'YYYY-MM-DD').value"
                >
                  {{ useDateFormat(page.updated, 'YYYY/MM/DD').value }}
                </time>
              </dd>
            </div>
            <div class="grid gap-1">
              <dt class="text-xs text-slate-500 dark:text-slate-400">
                書いたひと
              </dt>
              <dd class="flex items-center gap-1 text-sm font-bold">
                <span>{{ app.author.name }}</span>
                <div class="flex items-center gap-1">
                  <NuxtLink
                    :href="app.author.social.twitter"
                    title="Twitter"
                    class="h-4 w-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="h-full w-full fill-[#1da1f2]"
                    >
                      <path :d="siTwitter.path" />
                    </svg>
                  </NuxtLink>
                  <NuxtLink
                    :href="app.author.social.misskey"
                    title="Misskey"
                    class="h-4 w-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="h-full w-full fill-[#a1ca03]"
                    >
                      <path :d="siMisskey.path" />
                    </svg>
                  </NuxtLink>
                </div>
              </dd>
            </div>
          </dl>
        </header>

        <div class="prose max-w-none text-inherit dark:prose-invert">
          <slot />
        </div>
      </article>
    </template>
  </main>
</template>
