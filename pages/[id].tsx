import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { css } from '@emotion/react'
import { AppBreadcrumbs, AppButton, AppIcon } from '@/components'
import { breakpoints } from '@/utils/sizes'
import { getAllPostIds, getPostData } from '@/utils/posts'
import IconGitHub from '@/assets/images/github.svg'

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}

const Post: NextPage<{
  postData: ReturnType<typeof getPostData> extends Promise<infer T> ? T : never
}> = ({ postData }) => {
  // Styles
  const styledPage = css`
    padding: 8px 0 80px;
    ${breakpoints('md')} {
      padding: 40px 0 104px;
    }
  `
  const styledBreadcrumbs = css`
    padding: 0 4px;
  `
  const styledPost = css`
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: auto;
    gap: 48px;
    margin-top: 24px;
    ${breakpoints('md')} {
      gap: 56px;
      margin-top: 40px;
    }
  `
  const styledPostHeader = css`
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: auto;
    gap: 16px;
    ${breakpoints('md')} {
      gap: 24px;
    }
  `
  const styledPostTitle = css`
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    ${breakpoints('md')} {
      font-size: 36px;
    }
  `
  const styledPostMeta = css`
    display: flex;
    gap: 24px;
    align-items: center;
    padding: 0 2px;
    list-style: none;
  `
  const styledPostMetaItem = css`
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 12px;
    color: var(--color-text-muted);
  `
  const styledPostContent = css`
    font-size: 14px;
    line-height: 1.75;
    letter-spacing: 0.5pt;
    & > * ~ * {
      margin-top: 40px;
    }
    a {
      color: var(--color-link);
      &:hover {
        text-decoration: none;
      }
    }
  `
  const styledPostFooter = css`
    display: flex;
    gap: 16px;
    justify-content: flex-start;
  `
  const styledPostEditIcon = css`
    width: 18px;
    fill: currentColor;
  `

  const router = useRouter()
  const articleImage = postData.title
    ? `https://res.cloudinary.com/hiratake/image/upload/c_fit,co_rgb:394147,f_auto,g_north_west,l_text:notosansjp.otf_56:${encodeURI(
        postData.title
      )},q_auto,w_1000,x_128,y_136/post_uakfpm.png`
    : ''
  const issueUrl = `https://github.com/Hiratake/hiratake-web/blob/main/posts/${postData.id}.md`

  return (
    <>
      <Head>
        <title>
          {postData.title}｜{process.env.baseName}
        </title>
        <meta
          name="description"
          content={postData.description || process.env.baseDescription}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`${process.env.baseUrl}${router.asPath}`}
        />
        <meta
          property="og:title"
          content={postData.title || process.env.baseName}
        />
        <meta
          property="og:description"
          content={postData.description || process.env.baseDescription}
        />
        <meta
          property="og:image"
          content={
            articleImage || `${process.env.baseUrl}${process.env.baseImage}`
          }
        />
        <meta
          name="twitter:card"
          content={articleImage ? 'summary_large_image' : 'summary'}
        />
      </Head>

      <div css={styledPage}>
        <div css={styledBreadcrumbs}>
          <AppBreadcrumbs
            items={[
              { label: 'Home', href: '/' },
              {
                label: postData.title,
                href: `${router.asPath}`,
                disabled: true,
              },
            ]}
          />
        </div>
        <article css={styledPost}>
          <header css={styledPostHeader}>
            <h1 css={styledPostTitle}>{postData.title}</h1>
            <ul css={styledPostMeta}>
              <li css={styledPostMetaItem}>
                <AppIcon>today</AppIcon>
                <span>{postData.createdAt}</span>
              </li>
              <li css={styledPostMetaItem}>
                <AppIcon>update</AppIcon>
                <span>{postData.updatedAt}</span>
              </li>
            </ul>
          </header>
          <div
            css={styledPostContent}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
          <footer css={styledPostFooter}>
            <AppButton href={issueUrl} target="_blank" outlined>
              <IconGitHub css={styledPostEditIcon} />
              <span>GitHubで編集を提案</span>
            </AppButton>
          </footer>
        </article>
      </div>
    </>
  )
}

export default Post
