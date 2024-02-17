import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export type Article = MarkdownParsedContent & {
  /** 投稿した日 */
  created?: string
  /** 更新した日 */
  updated?: string
}
