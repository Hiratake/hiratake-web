import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export type Article = MarkdownParsedContent & {
  /** 作成した日 */
  created?: string
  /** 更新した日 */
  updated?: string
}
