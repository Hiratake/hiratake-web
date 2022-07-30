// pages > blog > [id]

import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import type { CMSBlog } from '@/types/cms'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ErrorPage from 'next/error'
import { ArticleJsonLd, BreadcrumbJsonLd, NextSeo } from 'next-seo'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { css } from '@emotion/react'
import { PageContainer } from '@/components/PageContainer'
import { client } from '@/lib/client'
import { config } from '@/utils/config'
import { articleStyle } from '@/utils/style'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client.getList<CMSBlog>({ endpoint: 'blogs' })
  const paths = posts.contents.map((post) => `/blog/${post.id}`)
  return { paths, fallback: true }
}

const isDraft = (item: any): item is { draftKey: string } => {
  return !!(item?.draftKey && typeof item.draftKey === 'string')
}

export const getStaticProps: GetStaticProps<{
  post: CMSBlog
  preview: boolean
}> = async (context) => {
  try {
    const id = context.params?.id
      ? Array.isArray(context.params.id)
        ? context.params.id.join(',')
        : context.params.id
      : ''
    const draftKey = isDraft(context.previewData)
      ? context.previewData.draftKey
      : ''
    const post = draftKey
      ? await client.getListDetail<CMSBlog>({
          endpoint: 'blogs',
          contentId: id,
          queries: {
            draftKey,
          },
        })
      : await client.getListDetail<CMSBlog>({
          endpoint: 'blogs',
          contentId: id,
        })
    return {
      props: {
        post,
        preview: !!draftKey,
      },
      notFound: !post,
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
  preview,
}) => {
  const router = useRouter()

  if (!post) {
    return <ErrorPage statusCode={404} />
  }

  const currentUrl = `https://${config.domain}${router.asPath}`
  const description = (() => {
    const max: number = 100
    const content = post.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
    return content.length < max ? content : `${content.slice(0, max)}...`
  })()

  dayjs.extend(utc)
  dayjs.extend(timezone)

  return (
    <>
      <NextSeo
        title={post.title}
        description={description}
        canonical={currentUrl}
        openGraph={{
          type: 'article',
          title: post.title,
          url: currentUrl,
          images: [
            {
              url: `https://res.cloudinary.com/hiratake/image/upload/c_fit,co_rgb:394147,f_auto,g_north_west,l_text:notosansjp.otf_56:${encodeURI(
                post.title
              )},q_auto,w_1000,x_128,y_136/post_jfasyj.png`,
            },
          ],
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'ブログ',
            item: `https://${config.domain}/blog`,
          },
          { position: 2, name: post.title, item: currentUrl },
        ]}
      />
      <ArticleJsonLd
        type="Blog"
        url={currentUrl}
        title={post.title}
        images={[]}
        datePublished={dayjs.utc(post.publishedAt).tz('Asia/Tokyo').format()}
        dateModified={dayjs.utc(post.updatedAt).tz('Asia/Tokyo').format()}
        authorName="Hiratake"
        description={description}
      />

      <PageContainer
        breadcrumbsItems={[
          { label: 'Home', href: '/' },
          { label: 'ブログ', href: '/blog' },
          { label: post.title },
        ]}
        title={post.title}
        createdAt={post.publishedAt}
        share
      >
        <div
          css={articleStyle}
          dangerouslySetInnerHTML={{ __html: `${post.content}` }}
        />
      </PageContainer>

      {preview && (
        <div css={previewNotificationStyle}>
          <p>
            現在プレビューモードです。
            <br />
            <Link href="/api/clear">
              <a>解除する</a>
            </Link>
          </p>
        </div>
      )}
    </>
  )
}
export default Page

// ----------------------------------------
// Style
// ----------------------------------------

const previewNotificationStyle = css`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 100;
  padding: 8px;
  background-color: var(--color-background);
  border: solid 1px var(--color-text-muted);
  border-radius: 8px;
  box-shadow: 0 0 4px var(--color-text-muted);
`
