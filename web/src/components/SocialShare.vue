<script lang="ts" setup>
type SocialShareProps = {
  /** シェア先サービス */
  service: 'twitter' | 'facebook' | 'mastodon' | 'misskey'
  /** URL */
  url?: string
  /** テキスト */
  text?: string
}

const props = withDefaults(defineProps<SocialShareProps>(), {
  url: '',
  text: '',
})

/** シェア先サービス一覧 */
const services: {
  [key in SocialShareProps['service']]: {
    endpoint: string
    url: string
    text: string
    instance?: boolean
  }
} = {
  twitter: {
    endpoint: 'www.twitter.com/share',
    url: 'url',
    text: 'text',
  },
  facebook: {
    endpoint: 'www.facebook.com/sharer/sharer.php',
    url: 'u',
    text: 't',
  },
  mastodon: {
    endpoint: '/share',
    url: 'url',
    text: 'text',
    instance: true,
  },
  misskey: {
    endpoint: '/share',
    url: 'url',
    text: 'text',
    instance: true,
  },
}

/**
 * URLとテキストを指定したSNSへシェアする
 * @param instanceDomain 共有先インスタンスドメイン
 */
const share = (instanceDomain: string = ''): void => {
  const current = {
    endpoint: services[props.service].endpoint,
    url: encodeURI(services[props.service].url),
    text: encodeURI(services[props.service].text),
    instance: !!services[props.service].instance,
  }
  if (!current.instance || (current.instance && instanceDomain)) {
    tryOnMounted(() => {
      window.open(
        `https://${current.instance ? instanceDomain : ''}${current.endpoint}?${
          current.url
        }=${props.url}&${current.text}=${props.text}`,
        '_blank'
      )
    })
  }
}

provide(isInstanceKey, !!services[props.service].instance)
provide(shareKey, share)
</script>

<template>
  <slot />
</template>
