// Types
import type { MarkdownParsedContent } from '@nuxt/content/types'
import type { H3Event } from 'h3'

/**
 * Markdownの本文テキストを生成する
 * @param event イベント
 * @param children Markdownノードの配列
 * @param tag HTMLタグを含めるかどうか
 */
export const generateContentFromAst = (
  event: H3Event,
  children: MarkdownParsedContent['body']['children'],
  tag?: boolean,
): string => {
  const config = useRuntimeConfig()
  const site = useSiteConfig(event)

  let text = ''

  for (const node of children) {
    let startTag = ' '
    let endTag = ''

    if (tag && node.type === 'element' && node?.tag) {
      if (
        [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'p',
          'ul',
          'ol',
          'li',
          'blockquate',
          'em',
          'strong',
          'del',
          'pre',
          'code',
        ].includes(node.tag)
      ) {
        // 中身のあるタグ
        if (node.tag === 'code') {
          tag = false
        }
        startTag = `<${node.tag}>`
        endTag = `</${node.tag}>`
      } else if (['hr', 'br'].includes(node.tag)) {
        // 中身のないタグ
        text += `<${node.tag} />`
      } else if (['a'].includes(node.tag)) {
        // リンク
        const href = (node?.props?.href as string) || ''
        startTag = `<${node.tag} href="${href}">`
        endTag = `</${node.tag}>`
      } else if (['img'].includes(node.tag)) {
        // 画像
        const imageId = (node?.props?.src as string) || ''
        const src = imageId
          ? `${site.url}/cdn-cgi/imagedelivery/${config.public.cloudflareImageHash}/${imageId}/w=1536`
          : ''
        const alt = (node?.props?.alt as string) || ''
        text += `<${node.tag} src="${src}" alt="${alt}" />`
      } else if (['style', 'script'].includes(node.tag)) {
        // styleやscript
        continue
      }
    }

    if (node.type === 'text') {
      text += `${(node?.value || '').trim()}`
    }

    if (node?.children) {
      text += `${startTag}${generateContentFromAst(
        event,
        node.children,
        tag ?? false,
      ).trim()}${endTag}`
    }
  }

  return text
}
