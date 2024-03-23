export const useWebsite = () => {
  const app = useAppConfig()
  const site = useSiteConfig()

  return computed(() => ({
    /** ウェブサイトの情報 */
    site: {
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
       * URL末尾にスラッシュを付与するか
       * @example true
       */
      trailingSlash: (site.trailingSlash as boolean | undefined) || false,
    },
  }))
}

export type UseWebsiteReturn = ReturnType<typeof useWebsite>
