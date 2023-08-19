// Types
import type { InjectionKey, Ref } from 'vue'
import type { Service, ShareFunction } from '../types'

/** シェアするSNSの一覧 */
export const services: {
  [key in Service]: {
    /** サービス名 */
    name: string
    /** Web Intent のエンドポイント */
    endpoint: string
    /** シェアするページのURL */
    url: string
    /** シェアするテキスト */
    text: string
    /** インスタンスドメインの入力が必要かどうか */
    instance?: boolean
  }
} = {
  /** Twitter */
  twitter: {
    name: 'Twitter',
    endpoint: 'twitter.com/intent/tweet',
    url: 'url',
    text: 'text',
  },
  /** X */
  x: {
    name: 'X',
    endpoint: 'x.com/intent/tweet',
    url: 'url',
    text: 'text',
  },
  /** Facebook */
  facebook: {
    name: 'Facebook',
    endpoint: 'www.facebook.com/sharer/sharer.php',
    url: 'u',
    text: 't',
  },
  /** Mastodon */
  mastodon: {
    name: 'Mastodon',
    endpoint: '/share',
    url: 'url',
    text: 'text',
    instance: true,
  },
  /** Misskey */
  misskey: {
    name: 'Misskey',
    endpoint: '/share',
    url: 'url',
    text: 'text',
    instance: true,
  },
}

/** インジェクションキー */
export const socialShareInjectionKey: InjectionKey<{
  isInstance: boolean
  isPanelOpen: Readonly<Ref<boolean>>
  domain: Readonly<Ref<string>>
  share: ShareFunction
  togglePanelOpen: (value?: boolean) => boolean
  updateDomain: (value: string) => string
}> = Symbol()
