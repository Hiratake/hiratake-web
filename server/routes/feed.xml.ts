// Utils
import { Feed } from 'feed'
import { withoutTrailingSlash, withTrailingSlash } from 'ufo'

export default defineEventHandler(async (event) => {
  /** ウェブサイトの情報 */
  // @ts-ignore: https://github.com/nuxt/nuxt/issues/29263
  const site = useSiteConfig(event)
  /** ブログ一覧ページの情報 */
  // @ts-ignore: https://github.com/nuxt/nuxt/issues/29263
  const blogIndexContent = await queryCollection(event, 'diary').first()

  /**
   * 末尾のスラッシュの設定を反映したURLを返す
   * @param val URL
   * @returns 末尾のスラッシュの設定を反映したURL
   */
  const useTrailingSlash = (val: string) =>
    site?.trailingSlash ? withTrailingSlash(val) : withoutTrailingSlash(val)

  /** RSSフィード */
  const feed = new Feed({
    title: `${site.name || 'Hiratake Web'} Diary Feed`,
    description: blogIndexContent?.description || '',
    id: site.url,
    link: useTrailingSlash(`${site.url}/blog/`),
    language: site?.defaultLocale || 'ja',
    image: `${site.url}/logo.png`,
    copyright: site?.name || 'Hiratake Web',
  })
  /** ブログの投稿 */
  // @ts-ignore: https://github.com/nuxt/nuxt/issues/29263
  const posts = await queryCollection<'blog'>(event, 'blog')
    .order('created', 'DESC')
    .limit(10)
    .all()

  posts
    .filter((post) => post.path && post.title)
    .forEach((post) => {
      /** 投稿のURL */
      const url = `${site.url}/blog/${withTrailingSlash((post.path || '').replace('/blog', '').split('/').join(''))}`

      feed.addItem({
        title: post.title || '',
        id: url,
        link: url,
        description: post.description.replace(/\r?\n/g, ''),
        // @ts-ignore: https://github.com/nuxt/content/issues/3072
        content: generateContentFromMinimalNode(event, post.body.value),
        date: new Date(post.created || ''),
      })
    })

  return feed.rss2()
})
