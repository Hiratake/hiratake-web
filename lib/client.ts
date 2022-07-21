// lib > client

import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN || '',
  apiKey: process.env.MICROCMS_APIKEY || '',
})
