// pages > api > clear

import type { NextApiRequest, NextApiResponse } from 'next'

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.clearPreviewData()
    res.writeHead(307, { Location: '/' })
    res.end('Preview mode disabled')
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).json({ message: err.message })
    } else {
      return res.status(401).json({ message: 'Unexpected error' })
    }
  }
}
export default handler
