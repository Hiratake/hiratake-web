// components > AppBreadcrumbs

import Link from 'next/link'
import { css } from '@emotion/react'
import { LIcon } from '@/components/LIcon'
import { rem } from '@/utils/style'

// ----------------------------------------
// Type
// ----------------------------------------

export type AppBreadcrumbsProps = {
  items: { label: string; href?: string }[]
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const AppBreadcrumbs = (props: AppBreadcrumbsProps) => {
  return (
    <ol css={rootStyle}>
      {props.items.map((item, index) => (
        <li css={itemStyle} key={index}>
          {index > 0 && (
            <span css={iconStyle}>
              <LIcon size="16px" space="4px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
                </svg>
              </LIcon>
            </span>
          )}

          {item.href ? (
            <Link href={item.href} passHref>
              <a>{item.label}</a>
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  )
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = css`
  font-size: ${rem(12)};
  line-height: ${rem(20)};
  list-style: none;
`

const itemStyle = css`
  display: inline;
`

const iconStyle = css`
  position: relative;
  top: 4px;
  margin-left: 3px;
  vertical-align: bottom;
`
