// components > PageContainer

import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'
import { siTwitter, siFacebook, siLine } from 'simple-icons/icons'
import { LCluster } from '@/components/LCluster'
import { LIcon } from '@/components/LIcon'
import { LStack } from '@/components/LStack'
import {
  AppBreadcrumbs,
  AppBreadcrumbsProps,
} from '@/components/AppBreadcrumbs'
import { config } from '@/utils/config'
import { formatDatetime } from '@/utils/datetime'
import { rem } from '@/utils/style'

// ----------------------------------------
// Type
// ----------------------------------------

export type PageContainerProps = {
  children?: ReactNode
  breadcrumbsItems: AppBreadcrumbsProps['items']
  title: string
  description?: string
  tag?: string[]
  createdAt?: string
  updatedAt?: string
  share?: boolean
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const PageContainer = (props: PageContainerProps) => {
  const router = useRouter()

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
                    dateTime={formatDatetime(props.updatedAt, 'YYYY-MM-DD')}
                  >
                    {formatDatetime(props.updatedAt, 'MMMM DD, YYYY')}
                  </time>
                </>
              ) : (
                <>
                  Posted on{' '}
                  <time
                    dateTime={formatDatetime(props.createdAt, 'YYYY-MM-DD')}
                  >
                    {formatDatetime(props.createdAt, 'MMMM DD, YYYY')}
                  </time>
                </>
              )}
            </p>
          )}
          {!!props.tag && !!props.tag.length && (
            <LCluster space="4px">
              {props.tag.map((item, index) => (
                <div key={index} css={tagStyle}>
                  {item}
                </div>
              ))}
            </LCluster>
          )}
        </LStack>
        <div>{props.children}</div>
        {props.share && (
          <LCluster
            tag="footer"
            align="center"
            justify="space-between"
            space="24px"
          >
            <LCluster tag="aside" align="center" space="16px">
              <a
                css={iconStyle}
                href={`https://www.twitter.com/share?url=${encodeURI(
                  `https://${config.domain}${router.asPath}`
                )}&text=${encodeURI(props.title)}`}
                title="share on Twitter"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <LIcon size="24px">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d={siTwitter.path} />
                  </svg>
                </LIcon>
              </a>
              <a
                css={iconStyle}
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                  `https://${config.domain}${router.asPath}`
                )}&t=${encodeURI(props.title)}`}
                title="share on Facebook"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <LIcon size="24px">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d={siFacebook.path} />
                  </svg>
                </LIcon>
              </a>
              <a
                css={iconStyle}
                href={`https://timeline.line.me/social-plugin/share?url=${encodeURI(
                  `https://${config.domain}${router.asPath}`
                )}&text=${encodeURI(props.title)}`}
                title="share on LINE"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <LIcon size="24px">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d={siLine.path} />
                  </svg>
                </LIcon>
              </a>
            </LCluster>
          </LCluster>
        )}
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

const iconStyle = css`
  color: inherit;

  &:hover {
    color: var(--color-text-muted);
  }
`

const tagStyle = css`
  padding: 2px 8px;
  font-size: ${rem(12)};
  border: solid 1px var(--color-text-muted);
  border-radius: 4px;
`
