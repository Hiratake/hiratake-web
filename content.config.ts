import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import {
  defineOgImageSchema,
  defineRobotsSchema,
  defineSchemaOrgSchema,
  defineSitemapSchema,
} from '@nuxtjs/seo/content'

// https://content.nuxt.com/docs/collections/define
export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'index.yaml',
      schema: z.object({
        hero: z.object({
          title: z.string(),
          subtitle: z.string(),
          image: z.object({ sm: z.string(), md: z.string(), lg: z.string() }),
        }),
        profile: z.object({
          title: z.string(),
          biography: z.array(z.string()),
        }),
        diary: z.object({ title: z.string(), description: z.string() }),
        schemaOrg: defineSchemaOrgSchema(),
        sitemap: defineSitemapSchema(),
        ogImage: defineOgImageSchema(),
        robots: defineRobotsSchema(),
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
        created: z.date().optional(),
        updated: z.date().optional(),
        author: z.string().optional(),
        schemaOrg: defineSchemaOrgSchema(),
        sitemap: defineSitemapSchema(),
        ogImage: defineOgImageSchema(),
        robots: defineRobotsSchema(),
      }),
    }),

    diary: defineCollection({
      type: 'page',
      source: 'blog/index.yaml',
      schema: z.object({
        schemaOrg: defineSchemaOrgSchema(),
        sitemap: defineSitemapSchema(),
        ogImage: defineOgImageSchema(),
        robots: defineRobotsSchema(),
      }),
    }),

    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        created: z.date().optional(),
        updated: z.date().optional(),
        author: z.string().optional(),
        schemaOrg: defineSchemaOrgSchema(),
        sitemap: defineSitemapSchema(),
        ogImage: defineOgImageSchema(),
        robots: defineRobotsSchema(),
      }),
    }),
  },
})
