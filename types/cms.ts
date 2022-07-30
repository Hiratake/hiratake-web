// types > cms

import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk'

export type CMSPage = {
  title: string
  content: string
  description: string
} & MicroCMSContentId &
  MicroCMSDate

export type CMSBlog = {
  title: string
  content: string
  tag: string[]
} & MicroCMSContentId &
  MicroCMSDate
