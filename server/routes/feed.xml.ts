// Types
import type { ParsedContent } from '@nuxt/content'
import type { BlogPost } from '@/types'
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
    title: `${site.name || 'Hiratake Web'} Diary Feed`,
    description: blogIndexContent?.description || '',
    id: site.url,
    link: useTrailingSlash(`${site.url}/blog/`),
    language: site?.defaultLocale || 'ja',
    image: `${site.url}/logo.png`,
    copyright: site?.name || 'Hiratake Web',
  })
  /** ブログの投稿 */
  const posts = await serverQueryContent<BlogPost>(event, 'blog')
    .where({ _path: { $regex: /^\/blog\/\d{4}\/\d{2}\/\d{2}/ } })
    .sort({ created: -1 })
    .limit(10)
    .find()

  posts
    .filter(
      (post) =>
        post._extension === 'md' && !post._empty && post._path && post.title,
    )
    .forEach((post) => {
      /** 投稿のURL */
      const url = `${site.url}/blog/${withTrailingSlash((post._path || '').replace('/blog', '').split('/').join(''))}`

      feed.addItem({
        title: post.title || '',
        id: url,
        link: url,
        description: post.description.replace(/\r?\n/g, ''),
        content: generateContentFromAst(event, post.body.children),
        date: new Date(post?.created ? Date.parse(post.created) : ''),
      })
    })

  return feed.rss2()
})
