<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const app = useAppConfig()
const route = useRoute()
const site = useSiteConfig()
const [open, toggle] = useToggle()
const { copy } = useClipboard({ source: app.website.socials.rss.url })

/** ナビゲーション項目 */
const navigationItems = ref<NavigationMenuItem[]>([
  { label: '日記', to: '/blog/' },
  { label: '運営者情報', to: '/about/' },
  { label: 'お問い合わせ', to: '/contact/' },
])
/** RSSフィードのURLをコピーしたことを通知するツールチップを表示するか */
const isVisibleCopyRssFeedUrlTooltip = reactive({
  header: false,
  footer: false,
})

/** RSSフィードのURLをコピーする */
const copyRssFeedUrl = (val: 'header' | 'footer') => {
  copy()
  if (val === 'header') {
    isVisibleCopyRssFeedUrlTooltip.header = true
  } else {
    isVisibleCopyRssFeedUrlTooltip.footer = true
  }
}

// 一定時間経過でツールチップを非表示にする
whenever(
  () =>
    isVisibleCopyRssFeedUrlTooltip.header ||
    isVisibleCopyRssFeedUrlTooltip.footer,
  () =>
    useTimeoutFn(() => {
      isVisibleCopyRssFeedUrlTooltip.header = false
      isVisibleCopyRssFeedUrlTooltip.footer = false
    }, 3000),
)
// ページ移動時にナビゲーションを閉じる
watch(
  () => route.fullPath,
  () => toggle(false),
)
</script>

<template>
  <UHeader
    :title="`${site.name} トップページ`"
    :ui="{
      center: 'block md:hidden lg:hidden',
      container: 'box-content w-auto px-4 md:px-6 lg:px-6',
      content: 'hidden',
      overlay: 'hidden',
      right: 'h-full flex-none lg:flex-none',
      root: 'text-primary-700 relative box-content h-11 border-0 bg-transparent pt-6 backdrop-blur-none md:h-14 md:pt-8 dark:text-white',
      title:
        'flex w-32 items-center justify-center transition-opacity hover:opacity-70',
      toggle: 'md:hidden',
    }"
  >
    <template #title>
      <img
        :alt="`${site.name}`"
        src="/assets/logo-light.svg"
        width="162"
        height="40"
        class="block dark:hidden"
      />
      <img
        :alt="`${site.name}`"
        src="/assets/logo-dark.svg"
        width="162"
        height="40"
        class="hidden dark:block"
      />
    </template>

    <template #right>
      <div
        class="border-primary-700 hidden h-full items-center gap-4 rounded-4xl border-2 bg-white pr-9 pl-6 shadow-xl md:flex dark:bg-slate-900 dark:shadow-slate-200/10"
      >
        <UNavigationMenu
          :items="navigationItems"
          :ui="{
            link: 'after:bg-primary-700 justify-center px-4 py-2 text-xs text-inherit after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:scale-y-100 after:transition-transform hover:text-inherit hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100',
            list: 'items-stretch',
          }"
        />

        <div class="flex items-center gap-1">
          <UButton
            :aria-label="`${app.website.socials.discord.name} サーバに参加する`"
            :title="app.website.socials.discord.name"
            :to="app.website.socials.discord.url"
            icon="i-simple-icons-discord"
            target="_blank"
            variant="ghost"
          />

          <UTooltip
            :open="isVisibleCopyRssFeedUrlTooltip.header"
            text="URLをコピーしました"
            disabled
          >
            <UButton
              :title="app.website.socials.rss.name"
              aria-label="RSSフィードのURLをコピーする"
              icon="i-ph-rss-bold"
              variant="ghost"
              @click="() => copyRssFeedUrl('header')"
            />
          </UTooltip>

          <UColorModeButton
            aria-label="カラーモードを切り替える"
            color="primary"
            variant="ghost"
          />
        </div>
      </div>
    </template>

    <template #toggle>
      <UButton
        :ui="{
          base: 'z-50 aspect-square w-11 md:hidden dark:text-white [&>span]:absolute [&>span]:inset-x-0 [&>span]:m-auto [&>span]:h-0.5 [&>span]:bg-current [&>span]:duration-200 [&>span]:ease-in-out',
        }"
        variant="outline"
        @click="() => toggle()"
      >
        <span class="sr-only">
          ナビゲーションメニューを{{ open ? '閉じる' : '開く' }}
        </span>
        <span :class="[open ? 'w-0' : 'top-[35%] w-1/2']" />
        <span :class="[open && 'rotate-30']" class="top-1/2 w-1/2" />
        <span :class="[open && '-rotate-30']" class="top-1/2 w-1/2" />
        <span :class="[open ? 'w-0' : 'top-[65%] w-1/2']" />
      </UButton>
    </template>

    <div
      :class="[
        open
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0',
      ]"
      class="fixed inset-0 z-40 px-8 pt-20 text-white transition-opacity before:absolute before:inset-0 before:bg-slate-900 dark:before:bg-black"
    >
      <UNavigationMenu
        :items="navigationItems"
        :ui="{
          link: 'after:bg-primary-700 justify-center px-4 py-2 text-sm text-inherit after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:scale-y-100 after:transition-transform hover:text-inherit hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100',
          list: 'flex flex-col items-start gap-2',
        }"
        orientation="vertical"
      />

      <div class="flex items-center gap-1 px-2.5 py-6">
        <UButton
          :aria-label="`${app.website.socials.discord.name}サーバに参加する`"
          :title="app.website.socials.discord.name"
          :to="app.website.socials.discord.url"
          :ui="{ base: 'text-white' }"
          icon="i-simple-icons-discord"
          target="_blank"
          variant="ghost"
        />

        <UTooltip
          :open="isVisibleCopyRssFeedUrlTooltip.footer"
          text="URLをコピーしました"
          disabled
        >
          <UButton
            :title="app.website.socials.rss.name"
            :ui="{ base: 'text-white' }"
            aria-label="RSSフィードのURLをコピーする"
            icon="i-ph-rss-bold"
            variant="ghost"
            @click="() => copyRssFeedUrl('footer')"
          />
        </UTooltip>

        <UColorModeButton
          :ui="{ base: 'text-white' }"
          aria-label="カラーモードを切り替える"
          variant="ghost"
        />
      </div>
    </div>
  </UHeader>
</template>
