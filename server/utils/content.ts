// Types
import type { MinimalNode } from '@nuxt/content'
import type { H3Event } from 'h3'

/**
 * Markdownの本文テキストを生成する
 * @param event イベント
 * @param children Markdownノードの配列
 * @returns Markdownの本文テキスト
 */
export const generateContentFromMinimalNode = (
  event: H3Event,
  children: MinimalNode[],
): string => {
  // @ts-ignore: https://github.com/nuxt/nuxt/issues/29263
  const site = useSiteConfig(event)
  const config = useRuntimeConfig()

  /** 本文のテキスト */
  let content = ''

  for (const node of children) {
    /** 開始タグ */
    let startTag = ''
    /** 終了タグ */
    let endTag = ''

    if (typeof node === 'string') {
      // Text
      content += `${node.trim()}`
    } else {
      // Element
      const [tag, props, ...rest] = node
      if (tag) {
        if (['script', 'style'].includes(tag)) {
          // 何も出力しない
          continue
        } else if (tag === 'img') {
          // 画像
          const imageId = (props?.src as string) || ''
          const src = imageId
            ? `${site.url}/cdn-cgi/imagedelivery/${config.public.cloudflareImageHash}/${imageId}/w=1536`
            : ''
          const alt = (props?.alt as string) || ''
          content += `<${tag} src="${src}" alt="${alt}" />`
          continue
        } else if (tag === 'a') {
          // リンク
          const href = (props?.href as string) || ''
          startTag = `<${tag} href="${href}">`
          endTag = `</${tag}>`
        } else if (tag === 'pre') {
          // コードブロック
          const code =
            (props?.code as string).trim().replace(/\n/g, '&#xA;') || ''
          content += `<${tag}><code>${code}</code></${tag}>`
          continue
        } else if (['hr', 'br'].includes(tag)) {
          // 空要素
          content += `<${tag} />`
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
          ].includes(tag)
        ) {
          startTag = `<${tag}>`
          endTag = `</${tag}>`
        }

        if (rest) {
          content += `${startTag}${generateContentFromMinimalNode(event, rest)}${endTag}`
        }
      }
    }
  }

  return content
}
