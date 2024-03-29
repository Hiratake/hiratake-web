<script lang="ts" setup>
const website = useWebsite()
const year = useDateFormat(new Date(), 'YYYY')
const { copy } = useClipboard({ source: website.value.socials.rss.url })

/** ウェブサイトの名前 */
const name = website.value.name
/** ソーシャルリンク */
const socials = website.value.socials
/** フッターナビゲーションの項目 */
const menu = website.value.footer.menu
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
            <span class="i-simple-icons-bluesky size-5" />
          </NuxtLink>
          <NuxtLink
            :title="socials.github.name"
            :to="socials.github.url"
            aria-label="GitHubでフォローする"
            class="relative flex size-8 items-center justify-center rounded before:absolute before:size-full before:rounded before:bg-current before:opacity-0 before:transition-opacity hover:before:opacity-20"
            target="_blank"
          >
            <span class="i-simple-icons-github size-5" />
          </NuxtLink>
          <NuxtLink
            :title="socials.discord.name"
            :to="socials.discord.url"
            aria-label="Discordサーバに参加する"
            class="relative flex size-8 items-center justify-center rounded before:absolute before:size-full before:rounded before:bg-current before:opacity-0 before:transition-opacity hover:before:opacity-20"
            target="_blank"
          >
            <span class="i-simple-icons-discord size-5" />
          </NuxtLink>
          <button
            :title="socials.rss.name"
            aria-label="RSSフィードのURLをコピーする"
            class="relative flex size-8 items-center justify-center rounded before:absolute before:size-full before:rounded before:bg-current before:opacity-0 before:transition-opacity hover:before:opacity-20"
            @click="() => rssFeedCopy()"
          >
            <span class="i-ph-rss-bold size-5" />
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
