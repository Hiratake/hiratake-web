<script lang="ts" setup>
// Components
import { Switch } from '@headlessui/vue'

const website = useWebsite()
const colorMode = useColorMode()
const [isVisibleOverlay, toggleOverlay] = useToggle()
const { copy } = useClipboard({ source: website.value.socials.rss.url })

/** ウェブサイトの名前 */
const name = website.value.name
/** ダークモードが指定されているか */
const isDark = computed<boolean>({
  get: () => colorMode.value === 'dark',
  set: (val) => (colorMode.value = val ? 'dark' : 'light'),
})
/** ソーシャルリンク */
const socials = website.value.socials
/** グローバルナビゲーションの項目 */
const menu = website.value.header.menu
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
    class="text-primary relative z-10 mx-auto box-content flex h-11 max-w-7xl justify-between px-4 pt-6 md:h-14 md:px-6 md:pt-8 dark:text-white"
  >
    <NuxtLink
      :title="`${name} トップページ`"
      to="/"
      class="flex w-32 items-center justify-center transition-opacity hover:opacity-70"
    >
      <img
        :alt="`${name} ロゴ`"
        src="/assets/logo-light.svg"
        width="162"
        height="40"
        class="block dark:hidden"
      />
      <img
        :alt="`${name} ロゴ`"
        src="/assets/logo-dark.svg"
        width="162"
        height="40"
        class="hidden dark:block"
      />
    </NuxtLink>

    <button
      class="before:bg-primary after:border-primary relative z-50 aspect-square rounded-full transition-colors before:absolute before:inset-0 before:m-auto before:scale-0 before:rounded-full before:transition-transform after:absolute after:inset-0 after:rounded-full after:border-2 hover:text-white hover:before:scale-100 md:hidden [&>span]:absolute [&>span]:inset-x-0 [&>span]:m-auto [&>span]:h-0.5 [&>span]:bg-current [&>span]:duration-200 [&>span]:ease-in-out"
      @click="() => toggleOverlay()"
    >
      <span class="sr-only">
        ナビゲーションメニューを{{ isVisibleOverlay ? '閉じる' : '開く' }}
      </span>
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
      class="md:border-primary fixed inset-0 z-40 bg-white px-8 pt-20 transition-opacity before:absolute before:inset-0 before:bg-slate-900 md:pointer-events-auto md:relative md:inset-auto md:flex md:items-center md:gap-4 md:rounded-[2rem] md:border-2 md:py-0 md:pr-9 md:pl-6 md:text-inherit md:opacity-100 md:shadow-xl md:transition-none md:before:hidden dark:bg-slate-900 dark:before:bg-black md:dark:shadow-slate-200/10"
    >
      <nav>
        <ul
          class="flex flex-col items-start gap-2 md:flex-row md:items-stretch md:gap-0"
        >
          <li v-for="item in menu" :key="item.url">
            <NuxtLink
              :to="item.url"
              class="after:bg-primary relative flex items-center justify-center px-4 py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:scale-y-100 after:transition-transform hover:after:origin-left hover:after:scale-x-100"
              @click="() => toggleOverlay(false)"
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
          <span class="i-simple-icons-discord size-5" />
        </NuxtLink>
        <button
          :title="socials.rss.name"
          aria-label="RSSフィードのURLをコピーする"
          class="relative flex size-8 items-center justify-center rounded before:absolute before:-z-10 before:size-full before:rounded before:bg-slate-200/50 before:opacity-0 before:transition-opacity hover:before:opacity-100 dark:before:bg-white/20"
          @click="() => rssFeedCopy()"
        >
          <span class="i-ph-rss-bold size-5" />
          <span
            :class="[isVisibleRssFeedCopyTooltip ? 'opacity-100' : 'opacity-0']"
            class="pointer-events-none absolute -top-5 rounded bg-black/70 px-2 py-1 text-xs whitespace-nowrap text-white transition-opacity dark:bg-white/80 dark:text-slate-900"
          >
            URLをコピーしました
          </span>
        </button>
        <Switch
          v-model="isDark"
          aria-label="カラーモードを切り替える"
          class="relative flex size-8 items-center justify-center rounded before:absolute before:-z-10 before:size-full before:rounded before:bg-slate-200/50 before:opacity-0 before:transition-opacity hover:before:opacity-100 dark:before:bg-white/20"
        >
          <span class="i-ph-sun-bold dark:i-ph-moon-bold size-5 dark:size-5" />
        </Switch>
      </div>
    </div>
  </header>
</template>
