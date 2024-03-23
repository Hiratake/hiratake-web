<script lang="ts" setup>
// Icons
import { PhRss } from '@phosphor-icons/vue'
import { siBluesky, siDiscord, siGithub } from 'simple-icons'

const app = useAppConfig()
const website = useWebsite()
const year = useDateFormat(new Date(), 'YYYY')
const { copy } = useClipboard({ source: app.socials.rss.url })

/** ウェブサイトの名前 */
const name = website.value.site.name
/** ソーシャルリンク */
const socials = app.socials
/** フッターナビゲーションの項目 */
const menu = app.footer.menu
/** RSSフィードのURLをコピーしたことを通知するツールチップを表示するか */
const isVisibleRssFeedCopyTooltip = ref<boolean>(false)
/** RSSフィードのURLをコピーする */
const rssFeedCopy = () => {
  copy()
  isVisibleRssFeedCopyTooltip.value = true
}

// 一定時間経過でツールチップを非表示にする
whenever(
  () => isVisibleRssFeedCopyTooltip.value,
  () =>
    useTimeoutFn(() => {
      isVisibleRssFeedCopyTooltip.value = false
    }, 3000),
)
</script>

<template>
  <footer class="mt-20 rounded-t-3xl bg-slate-100 py-20 dark:bg-slate-800">
    <div
      class="mx-auto box-content flex max-w-7xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center md:px-6"
    >
      <div class="flex flex-col gap-5">
        <nav>
          <ul class="flex flex-wrap items-center gap-x-4 gap-y-1.5 px-1">
            <li v-for="item in menu" :key="item.url">
              <NuxtLink :to="item.url">
                <span class="text-xs font-bold underline hover:no-underline">
                  {{ item.title }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-2">
          <NuxtLink
            :title="socials.bluesky.name"
            :to="socials.bluesky.url"
            aria-label="Blueskyでフォローする"
            class="relative flex size-8 items-center justify-center rounded before:absolute before:size-full before:rounded before:bg-current before:opacity-0 before:transition-opacity hover:before:opacity-20"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="size-5 fill-current"
            >
              <path :d="siBluesky.path" />
            </svg>
          </NuxtLink>
          <NuxtLink
            :title="socials.github.name"
            :to="socials.github.url"
            aria-label="GitHubでフォローする"
            class="relative flex size-8 items-center justify-center rounded before:absolute before:size-full before:rounded before:bg-current before:opacity-0 before:transition-opacity hover:before:opacity-20"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="size-5 fill-current"
            >
              <path :d="siGithub.path" />
            </svg>
          </NuxtLink>
          <NuxtLink
            :title="socials.discord.name"
            :to="socials.discord.url"
            aria-label="Discordサーバに参加する"
            class="relative flex size-8 items-center justify-center rounded before:absolute before:size-full before:rounded before:bg-current before:opacity-0 before:transition-opacity hover:before:opacity-20"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="size-5 fill-current"
            >
              <path :d="siDiscord.path" />
            </svg>
          </NuxtLink>
          <button
            :title="socials.rss.name"
            aria-label="RSSフィードのURLをコピーする"
            class="relative flex size-8 items-center justify-center rounded before:absolute before:size-full before:rounded before:bg-current before:opacity-0 before:transition-opacity hover:before:opacity-20"
            @click="() => rssFeedCopy()"
          >
            <PhRss class="size-5" weight="bold" />
            <span
              :class="[
                isVisibleRssFeedCopyTooltip ? 'opacity-100' : 'opacity-0',
              ]"
              class="pointer-events-none absolute -top-5 whitespace-nowrap rounded bg-black/70 px-2 py-1 text-xs text-white transition-opacity dark:bg-white/80 dark:text-slate-900"
            >
              URLをコピーしました
            </span>
          </button>
        </div>
      </div>
      <div class="text-xs">&copy; 2014-{{ year }} {{ name }}</div>
    </div>
  </footer>
</template>
