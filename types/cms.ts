// types > cms

import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk'

export type CMSPost = {
  title: string
  content: string
  description?: string
} & MicroCMSContentId &
  MicroCMSDate
