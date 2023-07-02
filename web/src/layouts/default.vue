<script lang="ts" setup>
// Icons
import { siGithub, siMisskey, siTwitter } from 'simple-icons'

const { page } = useContent()
const app = useAppConfig()
const route = useRoute()

/** 現在のページがトップページかどうか */
const isTop = computed<boolean>(() => route.path === '/')
/** 現在のページがブログ記事一覧ページかどうか */
const isBlog = computed<boolean>(() => route.path === '/blog')
</script>

<template>
  <main class="mx-auto box-content max-w-3xl px-6">
    <template v-if="isTop">
      <slot />
    </template>

    <template v-else>
      <component :is="isBlog ? 'div' : 'article'" class="grid gap-6">
        <header
          :class="[
            'grid gap-6 pb-10',
            'border-b border-b-slate-300 dark:border-b-slate-700',
          ]"
        >
          <h1 class="px-1 text-3xl font-bold">{{ page.title }}</h1>
          <dl
            v-if="!isBlog"
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
                  <NuxtLink
                    :href="app.author.social.github"
                    title="GitHub"
                    class="h-4 w-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="h-full w-full fill-[#181717] dark:fill-white"
                    >
                      <path :d="siGithub.path" />
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
      </component>
    </template>
  </main>
</template>
