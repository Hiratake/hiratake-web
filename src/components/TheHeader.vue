<script lang="ts" setup>
// Components
import { Switch } from '@headlessui/vue'
// Icons
import { PhMoon, PhRss, PhSun } from '@phosphor-icons/vue'
import { siDiscord } from 'simple-icons'

const app = useAppConfig()
const website = useWebsite()
const colorMode = useColorMode()
const [isVisibleOverlay, toggleOverlay] = useToggle()
const { copy } = useClipboard({ source: app.socials.rss.url })

/** ウェブサイトの名前 */
const name = website.value.site.name
/** ダークモードが指定されているか */
const isDark = computed<boolean>({
  get: () => colorMode.value === 'dark',
  set: (val) => (colorMode.value = val ? 'dark' : 'light'),
})
/** ソーシャルリンク */
const socials = app.socials
/** グローバルナビゲーションの項目 */
const menu = app.header.menu
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
  <header
    class="relative z-10 mx-auto box-content flex h-11 max-w-7xl justify-between px-4 pt-6 text-primary dark:text-white md:h-14 md:px-6 md:pt-8"
  >
    <NuxtLink
      :title="`${name} トップページ`"
      to="/"
      class="flex w-32 items-center justify-center transition-opacity hover:opacity-70"
    >
      <img
        :alt="`${name} ロゴ`"
        src="/logo-light.svg"
        width="162"
        height="40"
        class="block dark:hidden"
      />
      <img
        :alt="`${name} ロゴ`"
        src="/logo-dark.svg"
        width="162"
        height="40"
        class="hidden dark:block"
      />
    </NuxtLink>

    <button
      class="relative z-50 aspect-square rounded-full transition-colors before:absolute before:inset-0 before:m-auto before:scale-0 before:rounded-full before:bg-primary before:transition-transform after:absolute after:inset-0 after:rounded-full after:border-2 after:border-primary hover:text-white hover:before:scale-100 md:hidden [&>span]:absolute [&>span]:inset-x-0 [&>span]:m-auto [&>span]:h-0.5 [&>span]:bg-current [&>span]:duration-200 [&>span]:ease-in-out"
      @click="() => toggleOverlay()"
    >
      <span :class="[isVisibleOverlay ? 'w-0' : 'top-[35%] w-1/2']" />
      <span
        :class="[isVisibleOverlay && 'rotate-[30deg]']"
        class="top-1/2 w-1/2"
      />
      <span
        :class="[isVisibleOverlay && '-rotate-[30deg]']"
        class="top-1/2 w-1/2"
      />
      <span :class="[isVisibleOverlay ? 'w-0' : 'top-[65%] w-1/2']" />
    </button>

    <div
      :class="[
        isVisibleOverlay
          ? 'pointer-events-auto text-white opacity-100'
          : 'pointer-events-none opacity-0',
      ]"
      class="fixed inset-0 z-40 bg-white px-8 pt-20 transition-opacity before:absolute before:inset-0 before:bg-slate-900 dark:bg-slate-900 dark:before:bg-black md:pointer-events-auto md:relative md:inset-auto md:flex md:items-center md:gap-4 md:rounded-[2rem] md:border-2 md:border-primary md:py-0 md:pl-6 md:pr-9 md:text-inherit md:opacity-100 md:shadow-xl md:transition-none md:before:hidden md:dark:shadow-slate-200/10"
    >
      <nav>
        <ul
          class="flex flex-col items-start gap-2 md:flex-row md:items-stretch md:gap-0"
        >
          <li v-for="item in menu" :key="item.url">
            <NuxtLink
              :to="item.url"
              class="relative flex items-center justify-center px-4 py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:scale-y-100 after:bg-primary after:transition-transform hover:after:origin-left hover:after:scale-x-100"
            >
              <span class="text-sm font-bold md:text-xs">{{ item.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-1 px-2.5 py-6 md:px-0 md:py-0">
        <NuxtLink
          :title="socials.discord.name"
          :to="socials.discord.url"
          aria-label="Discordサーバに参加する"
          class="relative flex size-8 items-center justify-center rounded before:absolute before:-z-10 before:size-full before:rounded before:bg-slate-200/50 before:opacity-0 before:transition-opacity hover:before:opacity-100 dark:before:bg-white/20"
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
          class="relative flex size-8 items-center justify-center rounded before:absolute before:-z-10 before:size-full before:rounded before:bg-slate-200/50 before:opacity-0 before:transition-opacity hover:before:opacity-100 dark:before:bg-white/20"
          @click="() => rssFeedCopy()"
        >
          <PhRss class="size-5" weight="bold" />
          <span
            :class="[isVisibleRssFeedCopyTooltip ? 'opacity-100' : 'opacity-0']"
            class="pointer-events-none absolute -top-5 whitespace-nowrap rounded bg-black/70 px-2 py-1 text-xs text-white transition-opacity dark:bg-white/80 dark:text-slate-900"
          >
            URLをコピーしました
          </span>
        </button>
        <Switch
          v-model="isDark"
          aria-label="カラーモードを切り替える"
          class="relative flex size-8 items-center justify-center rounded before:absolute before:-z-10 before:size-full before:rounded before:bg-slate-200/50 before:opacity-0 before:transition-opacity hover:before:opacity-100 dark:before:bg-white/20"
        >
          <PhSun class="block size-5 dark:hidden" weight="bold" />
          <PhMoon class="hidden size-5 dark:block" weight="bold" />
        </Switch>
      </div>
    </div>
  </header>
</template>
