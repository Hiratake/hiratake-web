export const useWebsite = () => {
  const config = useRuntimeConfig()
  const app = useAppConfig()
  const site = useSiteConfig()

  return computed(() => ({
    /**
     * ウェブサイトのURL
     * @example 'https://hiratake.dev'
     */
    url: site.url,
    /**
     * ウェブサイトの名前
     * @example 'Hiratake Web'
     */
    name: (site.name as string | undefined) || '',
    /**
     * ウェブサイトの概要
     * @example 'ひらたけの個人ウェブサイトです。'
     */
    description: (site.description as string | undefined) || '',
    /**
     * ウェブサイトの言語設定
     * @example 'ja'
     */
    locale: (site.defaultLocale as string | undefined) || '',
    /**
     * ウェブサイトのテーマカラー
     * @example '#a83d3d'
     */
    themeColor: app.themeColor,
    /**
     * ウェブサイトの運営者
     * @example
     * {
     *   name: 'ひらたけ',
     *   url: 'https://hiratake.dev/',
     *   icon: '/authors/hiratake-24x24.webp'
     * }
     */
    owner: app.owner,
    /** ソーシャルメディア */
    socials: {
      /** Bluesky */
      bluesky: {
        /**
         * サービス名
         * @example 'Bluesky'
         */
        name: app.socials.bluesky.name,
        /**
         * ハンドルネーム
         * @example '@hiratake.dev'
         */
        handle: app.socials.bluesky.handle,
        /**
         * URL
         * @example 'https://bsky.app/profile/hiratake.dev'
         */
        url: app.socials.bluesky.url,
      },
      /** GitHub */
      github: {
        /**
         * サービス名
         * @example 'GitHub'
         */
        name: app.socials.github.name,
        /**
         * ハンドルネーム
         * @example '@Hiratake'
         */
        handle: app.socials.github.handle,
        /**
         * URL
         * @example 'https://github.com/Hiratake'
         */
        url: app.socials.github.url,
      },
      /** Discord */
      discord: {
        /**
         * サービス名
         * @example 'Discord'
         */
        name: app.socials.discord.name,
        /**
         * ハンドルネーム
         * @example '@hiratake'
         */
        handle: app.socials.discord.handle,
        /**
         * URL
         * @example 'https://chat.hiratake.dev/'
         */
        url: app.socials.discord.url,
      },
      /** X */
      x: {
        /**
         * サービス名
         * @example 'X'
         */
        name: app.socials.x.name,
        /**
         * ハンドルネーム
         * @example '@Hirotaisou2012'
         */
        handle: app.socials.x.handle,
        /**
         * URL
         * @example 'https://x.com/Hirotaisou2012'
         */
        url: app.socials.x.url,
      },
      /** Misskey */
      misskey: {
        /**
         * サービス名
         * @example 'Misskey'
         */
        name: app.socials.misskey.name,
        /**
         * ハンドルネーム
         * @example '@Hiratake'
         */
        handle: app.socials.misskey.handle,
        /**
         * URL
         * @example 'https://misskey.io/@Hiratake'
         */
        url: app.socials.misskey.url,
      },
      /** Mastodon */
      mastodon: {
        /**
         * サービス名
         * @example 'Mastodon'
         */
        name: app.socials.mastodon.name,
        /**
         * ハンドルネーム
         * @example '@hiratake@mozilla.social'
         */
        handle: app.socials.mastodon.handle,
        /**
         * URL
         * @example 'https://mozilla.social/@hiratake'
         */
        url: app.socials.mastodon.url,
      },
      /** RSS */
      rss: {
        /**
         * サービス名
         * @example 'Hiratake Web Diary RSS Feed'
         */
        name: app.socials.rss.name,
        /**
         * URL
         * @example 'https://hiratake.dev/feed.xml'
         */
        url: app.socials.rss.url,
      },
    },
    /** ヘッダーの情報 */
    header: {
      /**
       * メニューの項目
       * @example []
       */
      menu: app.header.menu,
    },
    /** フッターの情報 */
    footer: {
      /**
       * メニューの項目
       * @example []
       */
      menu: app.footer.menu,
    },
    /** 一覧画面に表示するページあたりの投稿数 */
    itemPerPage: app.itemPerPage,
    /**
     * Google Tag Manager ID
     * @example 'GTM-XXXXXXX'
     */
    gtmId: config.public.gtmId,
    /**
     * Cloudflare Images のアカウントハッシュ
     * @example 'xxxxxxxxxxxxxxxxxxxxxx'
     */
    cloudflareImageHash: config.public.cloudflareImageHash,
  }))
}

/** useWebsite関数の返り値の型 */
export type UseWebsiteReturn = ReturnType<typeof useWebsite>
