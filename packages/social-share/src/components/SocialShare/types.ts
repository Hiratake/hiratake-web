/** シェア先サービス */
export type Service = 'twitter' | 'x' | 'facebook' | 'mastodon' | 'misskey'

/** SocialShare コンポーネントの Props */
export type SocialShareProps = {
  /** シェア先サービス */
  service: Service
  /** URL */
  url?: string
  /** テキスト */
  text?: string
}

/** SNSへシェアする関数 */
export type ShareFunction = (
  /** インスタンスのドメイン */
  domain?: string,
) => void
