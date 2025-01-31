// https://content.nuxt.com/docs/collections/define
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        /** 投稿した日 */
        created: z.date().optional(),
        /** 更新した日 */
        updated: z.date().optional(),
        /** 書いたひと */
        author: z.string().optional(),
      }),
    }),
    diary: defineCollection({
      type: 'page',
      source: 'blog/index.yaml',
      schema: z.object({
        /** タイトル */
        title: z.string(),
        /** 概要 */
        description: z.string(),
      }),
    }),
    docs: defineCollection({
      type: 'page',
      source: [
        { include: 'about/index.md' },
        { include: 'contact/index.md' },
        { include: 'privacy/index.md' },
      ],
      schema: z.object({
        /** 投稿した日 */
        created: z.date().optional(),
        /** 更新した日 */
        updated: z.date().optional(),
        /** 書いたひと */
        author: z.string().optional(),
      }),
    }),
    home: defineCollection({
      type: 'page',
      source: 'index.yaml',
      schema: z.object({
        /** タイトル */
        title: z.string(),
        /** 概要 */
        description: z.string(),
        /** ヒーローセクション */
        hero: z.object({
          /** タイトル */
          title: z.string(),
          /** サブタイトル */
          subtitle: z.string(),
          /** 画像 */
          image: z.object({ sm: z.string(), md: z.string(), lg: z.string() }),
        }),
        /** プロフィールセクション */
        profile: z.object({
          /** タイトル */
          title: z.string(),
          /** 紹介文 */
          biography: z.array(z.string()),
        }),
        /** ブログセクション */
        blog: z.object({
          /** タイトル */
          title: z.string(),
          /** 概要 */
          description: z.string(),
        }),
      }),
    }),
  },
})
