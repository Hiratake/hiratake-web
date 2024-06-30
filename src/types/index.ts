// Types
import type { MarkdownParsedContent } from '@nuxt/content'

export type BlogPost = MarkdownParsedContent & {
  /** 投稿した日 */
  created?: string
  /** 更新した日 */
  updated?: string
  /** 書いたひと */
  author?: string
}
