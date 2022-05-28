// components > AppTimeline

import React from 'react'
import { css } from '@emotion/react'
import AppTimelineItem from './AppTimelineItem'

type TimelineItem = {
  id: string
  title: string
  date: string
  href?: string
  header?: React.ReactNode
  body?: React.ReactNode
}

type Props = {
  items: TimelineItem[]
}

// AppTimeline
const AppTimeline: React.FC<Props> = ({ items }) => {
  // Styles
  const styledTimeline = css`
    list-style: none;
  `

  return (
    <ul css={styledTimeline}>
      {items.map(({ id, title, date, href, header, body }) => (
        <AppTimelineItem
          key={id}
          title={title}
          date={date}
          href={href}
          header={header}
          body={body}
        />
      ))}
    </ul>
  )
}

export default AppTimeline
