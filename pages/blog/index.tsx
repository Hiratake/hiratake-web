// pages > blog > index

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import type { CMSBlog } from '@/types/cms'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { css } from '@emotion/react'
import { PageContainer } from '@/components/PageContainer'
import { client } from '@/lib/client'
import { config } from '@/utils/config'
import { rem } from '@/utils/style'
import { LStack } from '@/components/LStack'

export const getStaticProps: GetStaticProps<{
  posts: CMSBlog[]
}> = async () => {
  const posts = await client.getList<CMSBlog>({ endpoint: 'blogs' })
  return {
    props: {
      posts: posts.contents,
    },
  }
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const router = useRouter()
  const currentUrl = `https://${config.domain}${router.asPath}`
  const meta = {
    title: 'ブログ',
    description:
      'Hiratake Web に投稿されたブログ記事をご紹介します。Web関係の技術のことや、日常の中の出来事を綴った日記のようなものまで、書きたいなあと思ったことを色々書いています。',
  }

  dayjs.extend(utc)
  dayjs.extend(timezone)

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={currentUrl}
        openGraph={{ type: 'article', title: meta.title, url: currentUrl }}
      />
      <BreadcrumbJsonLd
        itemListElements={[{ position: 1, name: meta.title, item: currentUrl }]}
      />

      <PageContainer
        breadcrumbsItems={[{ label: 'Home', href: '/' }, { label: meta.title }]}
        title={meta.title}
      >
        <ul css={postsContainerStyle}>
          {posts.map((post) => (
            <li key={post.id} css={itemStyle}>
              <div css={itemBodyStyle}>
                <LStack space="8px">
                  <div css={dateStyle}>
                    Posted on{' '}
                    <time
                      dateTime={dayjs
                        .utc(post.publishedAt || post.updatedAt)
                        .tz('Asia/Tokyo')
                        .format('YYYY-MM-DD')}
                    >
                      {dayjs
                        .utc(post.publishedAt || post.updatedAt)
                        .tz('Asia/Tokyo')
                        .format('MMMM DD, YYYY')}
                    </time>
                  </div>
                  <Link href={`/blog/${post.id}`} passHref>
                    <a css={titleStyle}>{post.title}</a>
                  </Link>
                </LStack>
              </div>
            </li>
          ))}
        </ul>
      </PageContainer>
    </>
  )
}
export default Page

// ----------------------------------------
// Style
// ----------------------------------------

const postsContainerStyle = css`
  list-style: none;
`

const itemStyle = css`
  position: relative;
  display: flex;
  gap: 40px;
  padding: 0 16px;

  &::before {
    display: block;
    width: 2px;
    content: '';
    background-color: var(--color-text-muted);
    opacity: 0.2;
  }

  &::after {
    position: absolute;
    top: 28px;
    left: 11px;
    display: block;
    width: 12px;
    height: 12px;
    content: '';
    background-color: var(--color-background);
    border: solid 2px var(--color-text-muted);
    border-radius: 50%;
  }
`

const itemBodyStyle = css`
  padding: 24px 0;
`

const dateStyle = css`
  font-family: sofia-pro, sans-serif;
  font-size: ${rem(13)};
  font-weight: 700;
  color: var(--color-text-muted);
`

const titleStyle = css`
  font-size: ${rem(18)};
  font-weight: 700;
  color: inherit;
`
