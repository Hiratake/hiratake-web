import type { MinimarkNode } from '@nuxt/content'
import type { H3Event } from 'h3'
import { withoutTrailingSlash } from 'ufo'
import { getSiteConfig } from '#site-config/server/composables'

/**
 * HTML 本文に安全に埋め込める文字列へ変換する
 * @param value HTML 本文に埋め込む文字列
 * @returns HTML エンティティにエスケープした文字列
 */
const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

/**
 * Markdown の本文テキストを生成する
 * @param event イベント
 * @param children Markdown ノードの配列
 * @returns Markdown の本文テキスト
 */
export const generateContentFromMinimalNode = (
  event: H3Event,
  children: MinimarkNode[],
): string => {
  const site = getSiteConfig(event)
  const config = useRuntimeConfig(event)

  /** 本文のテキスト */
  let content = ''

  for (const node of children) {
    /** 開始タグ */
    let startTag = ''
    /** 終了タグ */
    let endTag = ''

    if (typeof node === 'string') {
      // Text
      content += escapeHtml(node)
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
            ? `${withoutTrailingSlash(site.url)}/cdn-cgi/imagedelivery/${config.public.cloudflareImageHash}/${encodeURIComponent(imageId)}/w=1536`
            : ''
          const alt = (props?.alt as string) || ''
          content += `<${tag} src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" />`
          continue
        } else if (tag === 'a') {
          // リンク
          const href = (props?.href as string) || ''
          startTag = `<${tag} href="${escapeHtml(href)}">`
          endTag = `</${tag}>`
        } else if (tag === 'pre') {
          // コードブロック
          const code = escapeHtml((props?.code as string) || '')
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
            'blockquote',
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
