<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const app = useAppConfig()
const site = useSiteConfig()
const year = useDateFormat(new Date(), 'YYYY')
const { copy } = useClipboard({ source: app.website.socials.rss.url })

/** ナビゲーション項目 */
const navigationItems = ref<NavigationMenuItem[]>([
  { label: '日記', to: '/blog/' },
  { label: '運営者情報', to: '/about/' },
  { label: 'お問い合わせ', to: '/contact/' },
  { label: 'プライバシーポリシー', to: '/privacy/' },
])
/** RSSフィードのURLをコピーしたことを通知するツールチップを表示するか */
const isVisibleCopyRssFeedUrlTooltip = ref<boolean>(false)

/** RSSフィードのURLをコピーする */
const copyRssFeedUrl = () => {
  copy()
  isVisibleCopyRssFeedUrlTooltip.value = true
}

// 一定時間経過でツールチップを非表示にする
whenever(
  () => isVisibleCopyRssFeedUrlTooltip.value,
  () =>
    useTimeoutFn(() => {
      isVisibleCopyRssFeedUrlTooltip.value = false
    }, 3000),
)
</script>

<template>
  <UFooter
    :ui="{
      center: 'hidden',
      container:
        'py-0 lg:py-0 sm:px-4 md:px-6 lg:px-6 flex flex-col-reverse md:flex-row-reverse gap-8 w-auto box-content items-start justify-between md:items-center',
      left: 'lg:order-3 mt-0',
      right: 'lg:order-1',
      root: 'mt-20 rounded-t-3xl bg-slate-100 py-20 dark:bg-slate-800',
    }"
  >
    <template #left>
      <div class="flex flex-col gap-5">
        <UNavigationMenu
          :items="navigationItems"
          :ui="{
            link: 'px-0 py-0 text-xs text-slate-600 underline hover:text-slate-600 hover:no-underline focus-visible:no-underline dark:text-white dark:hover:text-white',
            list: 'flex-wrap gap-x-4 gap-y-2 px-1',
          }"
        />

        <div class="flex items-center gap-2">
          <UButton
            :aria-label="`${app.website.socials.bluesky.name}でフォローする`"
            :title="app.website.socials.bluesky.name"
            :to="app.website.socials.bluesky.url"
            color="neutral"
            icon="i-simple-icons-bluesky"
            target="_blank"
            variant="ghost"
          />

          <UButton
            :aria-label="`${app.website.socials.github.name}でフォローする`"
            :title="app.website.socials.github.name"
            :to="app.website.socials.github.url"
            color="neutral"
            icon="i-simple-icons-github"
            target="_blank"
            variant="ghost"
          />

          <UButton
            :aria-label="`${app.website.socials.discord.name}サーバに参加する`"
            :title="app.website.socials.discord.name"
            :to="app.website.socials.discord.url"
            color="neutral"
            icon="i-simple-icons-discord"
            target="_blank"
            variant="ghost"
          />

          <UTooltip
            :open="isVisibleCopyRssFeedUrlTooltip"
            text="URLをコピーしました"
            disabled
          >
            <UButton
              :title="app.website.socials.rss.name"
              aria-label="RSSフィードのURLをコピーする"
              color="neutral"
              icon="i-ph-rss-bold"
              variant="ghost"
              @click="() => copyRssFeedUrl()"
            />
          </UTooltip>
        </div>
      </div>
    </template>

    <template #right>
      <p class="text-xs">&copy; 2014-{{ year }} {{ site.name }}</p>
    </template>
  </UFooter>
</template>
