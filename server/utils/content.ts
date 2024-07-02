// Types
import type { MarkdownParsedContent } from '@nuxt/content'
import type { H3Event } from 'h3'

/**
 * Markdownの本文テキストを生成する
 * @param event イベント
 * @param children Markdownノードの配列
 * @returns Markdownの本文テキスト
 */
export const generateContentFromAst = (
  event: H3Event,
  children: MarkdownParsedContent['body']['children'],
): string => {
  // @ts-ignore: Nuxt Site Config 側の問題が解決次第削除
  const site = useSiteConfig(event)
  const config = useRuntimeConfig()

  /** 本文のテキスト */
  let content = ''

  for (const node of children) {
    /** 開始タグ */
    let startTag = ''
    /** 終了タグ */
    let endTag = ''

    if (node.type === 'text') {
      // Text
      content += `${node.value?.trim()}`
    } else if (node.type === 'element' && node.tag) {
      // Element
      if (['script', 'style'].includes(node.tag)) {
        // 何も出力しない
        continue
      } else if (node.tag === 'img') {
        // 画像
        const imageId = (node.props?.src as string) || ''
        const src = imageId
          ? `${site.url}/cdn-cgi/imagedelivery/${config.public.cloudflareImageHash}/${imageId}/w=1536`
          : ''
        const alt = (node.props?.alt as string) || ''
        content += `<${node.tag} src="${src}" alt="${alt}" />`
        continue
      } else if (node.tag === 'a') {
        // リンク
        const href = (node?.props?.href as string) || ''
        startTag = `<${node.tag} href="${href}">`
        endTag = `</${node.tag}>`
      } else if (node.tag === 'pre') {
        // コードブロック
        const code =
          (node.props?.code as string).trim().replace(/\n/g, '&#xA;') || ''
        content += `<${node.tag}><code>${code}</code></${node.tag}>`
        continue
      } else if (['hr', 'br'].includes(node.tag)) {
        // 空要素
        content += `<${node.tag} />`
        continue
      } else if (
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
          'code',
        ].includes(node.tag)
      ) {
        startTag = `<${node.tag}>`
        endTag = `</${node.tag}>`
      }
    }

    if (node.children) {
      content += `${startTag}${generateContentFromAst(event, node.children)}${endTag}`
    }
  }

  return content
}
