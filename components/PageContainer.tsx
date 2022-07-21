// components > PageContainer

import { ReactNode } from 'react'
import { css } from '@emotion/react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { LStack } from '@/components/LStack'
import {
  AppBreadcrumbs,
  AppBreadcrumbsProps,
} from '@/components/AppBreadcrumbs'
import { rem } from '@/utils/style'

// ----------------------------------------
// Type
// ----------------------------------------

export type PageContainerProps = {
  children?: ReactNode
  breadcrumbsItems: AppBreadcrumbsProps['items']
  title: string
  description?: string
  createdAt?: string
  updatedAt?: string
  share?: boolean
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const PageContainer = (props: PageContainerProps) => {
  dayjs.extend(utc)
  dayjs.extend(timezone)

  return (
    <LStack space="48px">
      <AppBreadcrumbs items={props.breadcrumbsItems} />

      <LStack tag="article" space="40px">
        <LStack tag="header" space="16px">
          <h1 css={titleStyle}>{props.title}</h1>
          {props.description && (
            <p css={descriptionStyle}>{props.description}</p>
          )}
          {(props.createdAt || props.updatedAt) && (
            <p css={metaStyle}>
              {props.updatedAt ? (
                <>
                  Last updated on{' '}
                  <time
                    dateTime={dayjs
                      .utc(props.updatedAt)
                      .tz('Asia/Tokyo')
                      .format('YYYY-MM-DD')}
                  >
                    {dayjs
                      .utc(props.updatedAt)
                      .tz('Asia/Tokyo')
                      .format('MMMM DD, YYYY')}
                  </time>
                </>
              ) : (
                <>
                  Posted on{' '}
                  <time
                    dateTime={dayjs
                      .utc(props.createdAt)
                      .tz('Asia/Tokyo')
                      .format('YYYY-MM-DD')}
                  >
                    {dayjs
                      .utc(props.createdAt)
                      .tz('Asia/Tokyo')
                      .format('MMMM DD, YYYY')}
                  </time>
                </>
              )}
            </p>
          )}
        </LStack>
      </LStack>
    </LStack>
  )
}

// ----------------------------------------
// Style
// ----------------------------------------

const titleStyle = css`
  font-size: ${rem(32)};
  line-height: 1.25;
`

const descriptionStyle = css`
  font-size: ${rem(14)};
  color: var(--color-text-muted);
`

const metaStyle = css`
  font-family: sofia-pro, sans-serif;
  font-size: ${rem(14)};
  color: var(--color-text-muted);
`
