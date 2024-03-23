// Types
import type { MarkdownParsedContent } from '@nuxt/content/types'

export type BlogArticle = MarkdownParsedContent & {
  /** 投稿した日 */
  created?: string
  /** 更新した日 */
  updated?: string
  /** 書いたひと */
  author?: string
}
