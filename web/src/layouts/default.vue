<script lang="ts" setup>
// Components
import { SocialShare, SocialShareButton, SocialSharePanel } from 'social-share'
// Icons
import {
  siFacebook,
  siGithub,
  siMastodon,
  siMisskey,
  siTwitter,
} from 'simple-icons'

const { page } = useContent()
const config = useRuntimeConfig()
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
      <component
        :is="isBlog ? 'div' : 'article'"
        class="grid grid-cols-1 gap-6"
      >
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
              'flex flex-wrap items-start gap-x-8 gap-y-5 rounded-lg px-4 pb-4 pt-5',
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

        <footer>
          <div class="grid gap-2">
            <div class="text-center text-xs">SNSでこのページをシェアする</div>
            <div class="flex items-center justify-center gap-1">
              <SocialShare
                :url="`${config.public.siteUrl}${$route.path}`"
                :text="`${page.title} - ${config.public.siteName}`"
                service="twitter"
                class="relative"
              >
                <SocialShareButton
                  :class="[
                    'flex h-10 w-10 items-center justify-center p-2',
                    'transition-opacity hover:opacity-70',
                  ]"
                  title="Twitterでシェア"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="h-full w-full fill-current text-current"
                  >
                    <path :d="siTwitter.path" />
                  </svg>
                </SocialShareButton>
              </SocialShare>

              <SocialShare
                :url="`${config.public.siteUrl}${$route.path}`"
                :text="`${page.title} - ${config.public.siteName}`"
                service="facebook"
                class="relative"
              >
                <SocialShareButton
                  :class="[
                    'flex h-10 w-10 items-center justify-center p-2',
                    'transition-opacity hover:opacity-70',
                  ]"
                  title="Facebookでシェア"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="h-full w-full fill-current text-current"
                  >
                    <path :d="siFacebook.path" />
                  </svg>
                </SocialShareButton>
              </SocialShare>

              <SocialShare
                :url="`${config.public.siteUrl}${$route.path}`"
                :text="`${page.title} - ${config.public.siteName}`"
                service="mastodon"
                class="relative"
              >
                <SocialShareButton
                  :class="[
                    'flex h-10 w-10 items-center justify-center p-2',
                    'transition-opacity hover:opacity-70',
                  ]"
                  title="Mastodonでシェア"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="h-full w-full fill-current text-current"
                  >
                    <path :d="siMastodon.path" />
                  </svg>
                </SocialShareButton>

                <Transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <SocialSharePanel
                    :class="[
                      'absolute bottom-12 left-1/2 -translate-x-1/2',
                      'grid w-48 gap-1 rounded-lg p-3',
                      'shadow-lg dark:shadow-slate-950/70',
                      'bg-white dark:bg-slate-800',
                    ]"
                  >
                    <div class="select-none text-xs">サーバのドメイン：</div>
                  </SocialSharePanel>
                </Transition>
              </SocialShare>

              <SocialShare
                :url="`${config.public.siteUrl}${$route.path}`"
                :text="`${page.title} - ${config.public.siteName}`"
                service="misskey"
                class="relative"
              >
                <SocialShareButton
                  :class="[
                    'flex h-10 w-10 items-center justify-center p-2',
                    'transition-opacity hover:opacity-70',
                  ]"
                  title="Misskeyでシェア"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="h-full w-full fill-current text-current"
                  >
                    <path :d="siMisskey.path" />
                  </svg>
                </SocialShareButton>

                <Transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <SocialSharePanel
                    :class="[
                      'absolute bottom-12 left-1/2 -translate-x-1/2',
                      'grid w-48 gap-1 rounded-lg p-3',
                      'shadow-lg dark:shadow-slate-950/70',
                      'bg-white dark:bg-slate-800',
                    ]"
                  >
                    <div class="select-none text-xs">サーバのドメイン：</div>
                  </SocialSharePanel>
                </Transition>
              </SocialShare>
            </div>
          </div>
        </footer>
      </component>
    </template>
  </main>
</template>
