<script lang="ts" setup>
// Types
import type { SimpleIcon } from 'simple-icons'
import type { SocialShareProps } from '@hiratake/social-share'
// Components
import {
  SocialShare,
  SocialShareButton,
  SocialShareInput,
  SocialSharePanel,
  SocialShareSubmit,
} from '@hiratake/social-share'
// Icons
import { siFacebook, siMastodon, siMisskey, siTwitter } from 'simple-icons'
// Utils
import { socialShareServices } from '@hiratake/social-share'

type SocialShareItemProps = Omit<SocialShareProps, 'service'> & {
  service: Extract<
    SocialShareProps['service'],
    'twitter' | 'facebook' | 'mastodon' | 'misskey'
  >
}

const props = defineProps<SocialShareItemProps>()

/** サービス名 */
const serviceName = computed<string>(
  () => socialShareServices[props.service].name,
)
/** サービスアイコン */
const serviceIcon = computed<SimpleIcon['path']>(() => {
  if (props.service === 'twitter') {
    // Twitter
    return siTwitter.path
  } else if (props.service === 'facebook') {
    // Facebook
    return siFacebook.path
  } else if (props.service === 'mastodon') {
    // Mastodon
    return siMastodon.path
  } else if (props.service === 'misskey') {
    // Misskey
    return siMisskey.path
  } else {
    return ''
  }
})
</script>

<template>
  <SocialShare
    :service="props.service"
    :url="props.url"
    :text="props.text"
    class="relative"
  >
    <SocialShareButton
      :class="[
        'flex h-10 w-10 items-center justify-center p-2',
        'transition-opacity hover:opacity-70',
      ]"
      :title="`${serviceName}でシェア`"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="h-full w-full fill-current text-current"
      >
        <path :d="serviceIcon" />
      </svg>
    </SocialShareButton>

    <Transition
      v-if="props.service === 'mastodon' || props.service === 'misskey'"
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
          'grid w-52 gap-1 rounded-lg p-3',
          'shadow-lg dark:shadow-slate-950/70',
          'bg-white dark:bg-slate-800',
        ]"
      >
        <label :for="`share-${props.service}`" class="select-none text-xs">
          サーバのドメイン：
        </label>
        <div class="flex items-center gap-2">
          <SocialShareInput
            :id="`share-${props.service}`"
            :class="[
              'shrink grow basis-full',
              'w-full rounded px-2 py-1 text-sm outline-none',
              'bg-slate-100 dark:bg-slate-700',
            ]"
            placeholder="example.com"
          />
          <SocialShareSubmit
            class="shrink-0 rounded border border-slate-300 px-2 py-1 text-sm"
          >
            投稿
          </SocialShareSubmit>
        </div>
      </SocialSharePanel>
    </Transition>
  </SocialShare>
</template>
