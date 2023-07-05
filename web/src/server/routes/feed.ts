// Types
import type { Article } from '@/types'
// Libraries
import { serverQueryContent } from '#content/server'
import { Feed } from 'feed'

const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const feed = new Feed({
    title: config.public.siteName,
    description:
      'ひらたけのブログです。趣味のことから技術とかの真面目なことまで、書きたいことができたときになんとなく書く、そんな場所です。',
    id: config.public.siteUrl,
    link: `${config.public.siteUrl}/blog`,
    language: config.public.language,
    image: `${config.public.siteUrl}/logo.png`,
    copyright: config.public.siteName,
  })
  const articles = await serverQueryContent(event, 'blog')
    .where({ _dir: { $eq: 'blog' } })
    .sort({ created: -1 })
    .limit(10)
    .find()

  articles
    .filter(
      (
        article,
      ): article is Article & {
        _path: Required<Article>['_path']
        title: Required<Article>['title']
      } => Boolean(article._path) && Boolean(article.title),
    )
    .forEach((article) => {
      const url = `${config.public.siteUrl}${article._path}`
      feed.addItem({
        title: article.title,
        id: url,
        link: url,
        description: article.description.replace(/\r?\n/g, ''),
        date: new Date(article.created ? Date.parse(article.created) : ''),
      })
    })

  return feed.rss2()
})
