// pages > api > preview

import type { NextApiRequest, NextApiResponse } from 'next'
import type { CMSPost } from '@/types/cms'
import fetch from 'node-fetch'
import { client } from '@/lib/client'

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (
      req.query.secret !== process.env.MICROCME_SECRET_TOKEN ||
      !req.query.slug
    ) {
      throw new Error('Invalid token')
    }

    const post = await client.getListDetail<CMSPost>({
      endpoint: 'blogs',
      contentId: Array.isArray(req.query.slug)
        ? req.query.slug.join(',')
        : req.query.slug,
      queries: {
        draftKey: Array.isArray(req.query.draftKey)
          ? req.query.draftKey.join(',')
          : req.query.draftKey,
      },
    })

    if (!post) {
      throw new Error('Invalid slug')
    }

    res.setPreviewData({
      slug: post.id,
      draftKey: req.query.draftKey,
    })
    res.writeHead(307, { Location: `/blog/${post.id}` })
    res.end('Preview mode enabled')
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).json({ message: err.message })
    } else {
      return res.status(401).json({ message: 'Unexpected error' })
    }
  }
}
export default handler
