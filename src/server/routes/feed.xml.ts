// Types
import type { ParsedContent } from '@nuxt/content/types'
import type { BlogArticle } from '@/types'
// Utils
import { serverQueryContent } from '#content/server'
import { Feed } from 'feed'
import { withoutTrailingSlash, withTrailingSlash } from 'ufo'

export default defineEventHandler(async (event) => {
  /** ウェブサイトの情報 */
  // @ts-ignore: Nuxt Site Config 側の問題が解決次第削除
  const site = useSiteConfig(event)
  /** ブログ一覧ページの情報 */
  const blogIndexContent = await serverQueryContent<ParsedContent>(
    event,
    'blog',
  ).findOne()

  /**
   * 末尾のスラッシュの設定を反映したURLを返す
   * @param val URL
   * @returns 末尾のスラッシュの設定を反映したURL
   */
  const useTrailingSlash = (val: string) =>
    site?.trailingSlash ? withTrailingSlash(val) : withoutTrailingSlash(val)

  /** RSSフィード */
  const feed = new Feed({
    title: `${site.name || 'Hiratake Web'} Blog Feed`,
    description: blogIndexContent?.description || '',
    id: site.url,
    link: useTrailingSlash(`${site.url}/blog/`),
    language: site?.defaultLocale || 'ja',
    image: `${site.url}/logo.png`,
    copyright: site?.name || 'Hiratake Web',
  })
  /** ブログの投稿 */
  const articles = await serverQueryContent<BlogArticle>(event, 'blog')
    .where({ _path: { $regex: /^\/blog\/\d{4}\/\d{2}\/\d{2}/ } })
    .sort({ created: -1 })
    .limit(10)
    .find()

  articles
    .filter(
      (article) =>
        article._extension === 'md' &&
        !article._empty &&
        article._path &&
        article.title,
    )
    .forEach((article) => {
      /** 投稿のURL */
      const url = `${site.url}/blog/${withTrailingSlash((article._path || '').replace('/blog', '').split('/').join(''))}`

      feed.addItem({
        title: article.title || '',
        id: url,
        link: url,
        description: article.description.replace(/\r?\n/g, ''),
        content: generateContentFromAst(event, article.body.children, true),
        date: new Date(article?.created ? Date.parse(article.created) : ''),
      })
    })

  return feed.rss2()
})
