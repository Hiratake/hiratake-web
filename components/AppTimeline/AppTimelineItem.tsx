// components > AppTimelineItem

import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'
import { breakpoints } from '@/utils/sizes'

type Props = {
  title: string
  date: string
  href?: string
  header?: React.ReactNode
  body?: React.ReactNode
}

// AppTimelineItem
const AppTimelineItem: React.FC<Props> = ({
  title,
  date,
  href,
  header,
  body,
}) => {
  // Styles
  const styledTimelineItem = css`
    position: relative;
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-template-columns: 100%;
    gap: 8px;
    padding: 24px 0 24px 40px;
    ${breakpoints('md')} {
      padding-left: 52px;
    }
    &::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 5px;
      display: block;
      width: 1px;
      content: '';
      background-color: var(--color-timeline);
    }
    &::after {
      position: absolute;
      top: 30px;
      left: 0;
      display: block;
      width: 11px;
      height: 11px;
      content: '';
      background-color: var(--color-background);
      border: solid 2px var(--color-timeline);
      border-radius: 50%;
    }
  `
  const styledTimelineItemTitle = css`
    font-size: 18px;
    font-weight: 700;
    color: currentColor;
    &:hover {
      text-decoration: none;
    }
  `

  return (
    <li css={styledTimelineItem}>
      {header}
      {!href ? (
        <div css={styledTimelineItemTitle}>{title}</div>
      ) : href.startsWith('http') ? (
        <a css={styledTimelineItemTitle} href={href} rel="noopener">
          {title}
        </a>
      ) : (
        <Link href={href} passHref>
          <a css={styledTimelineItemTitle}>{title}</a>
        </Link>
      )}
      {body}
    </li>
  )
}

export default AppTimelineItem
