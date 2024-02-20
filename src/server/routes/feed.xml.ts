// Types
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Article } from '@/types'
// Libraries
import { serverQueryContent } from '#content/server'
import { Feed } from 'feed'
// Utils
import { withTrailingSlash } from 'ufo'

const siteName = 'Hiratake Web'
const siteUrl = process.env.CF_PAGES_URL || 'https://hiratake.dev'
const siteLocalse = 'ja'

export default defineEventHandler(async (event) => {
  const feed = new Feed({
    title: siteName,
    description:
      'ひらたけのブログです。趣味のことから技術とかの真面目なことまで、書きたいことができたときになんとなく書く、そんな場所です。',
    id: siteUrl,
    link: `${siteUrl}/blog/`,
    language: siteLocalse,
    image: `${siteUrl}/logo.png`,
    copyright: siteName,
  })
  const articles = await serverQueryContent<MarkdownParsedContent>(
    event,
    'blog',
  )
    .where({ _path: { $regex: /^\/blog\/\d{4}\/\d{2}\/\d{2}/ } })
    .sort({ created: -1 })
    .limit(10)
    .find()

  articles
    .filter((article) => article?._extension === 'md' && !article._empty)
    .filter(
      (
        article,
      ): article is Article & {
        _path: Required<Article>['_path']
        title: Required<Article>['title']
      } => Boolean(article._path) && Boolean(article.title),
    )
    .forEach((article) => {
      const url = `${siteUrl}/blog/${withTrailingSlash(article._path.replace('/blog', '').split('/').join(''))}`
      feed.addItem({
        title: article.title,
        id: url,
        link: url,
        description: article.description.replace(/\r?\n/g, ''),
        content: generateContentFromAst(article.body.children, true),
        date: new Date(article.created ? Date.parse(article.created) : ''),
      })
    })

  return feed.rss2()
})
