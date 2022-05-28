// components > AppBreadcrumbs

import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'
import { AppIcon } from '@/components/AppIcon'

type Props = {
  items: { disabled?: boolean; href?: string; label: string }[]
}

// AppBreadcrumbs
const AppBreadcrumbs: React.FC<Props> = ({ items }) => {
  // Styles
  const styledBreadcrumbs = css`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    width: 100%;
    font-size: 12px;
    color: inherit;
    list-style: none;
  `
  const styledBreadcrumbsItem = css`
    display: inline-flex;
    gap: inherit;
    align-items: baseline;
    &:last-child {
      font-weight: 700;
    }
  `
  const styledBreadcrumbsLink = css`
    color: inherit;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  `

  const BreadcrumbsItems = items.map((item, index) => (
    <li key={index} css={styledBreadcrumbsItem}>
      {index > 0 && <AppIcon>chevron_right</AppIcon>}
      {!item.disabled && item.href ? (
        <Link href={item.href} passHref>
          <a css={styledBreadcrumbsLink}>{item.label}</a>
        </Link>
      ) : (
        <span>{item.label}</span>
      )}
    </li>
  ))

  return <ol css={styledBreadcrumbs}>{BreadcrumbsItems}</ol>
}

export default AppBreadcrumbs
