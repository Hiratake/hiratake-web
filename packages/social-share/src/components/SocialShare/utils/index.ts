// Types
import type { InjectionKey } from 'vue'
import type { Service, ShareFunction } from '../types'

/** シェアするSNSの一覧 */
export const services: {
  [key in Service]: {
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
    endpoint: 'www.twitter.com/share',
    url: 'url',
    text: 'text',
  },
  /** Facebook */
  facebook: {
    endpoint: 'www.facebook.com/sharer/sharer.php',
    url: 'u',
    text: 't',
  },
  /** Mastodon */
  mastodon: {
    endpoint: '/share',
    url: 'url',
    text: 'text',
    instance: true,
  },
  /** Misskey */
  misskey: {
    endpoint: '/share',
    url: 'url',
    text: 'text',
    instance: true,
  },
}

/** インジェクションキー */
export const socialShareInjectionKey: InjectionKey<{
  isInstance: boolean
  share: ShareFunction
}> = Symbol()
