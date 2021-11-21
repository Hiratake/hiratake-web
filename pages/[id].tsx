import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '@/utils/posts'

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
  const router = useRouter()
  const articleImage = postData.title
    ? `https://res.cloudinary.com/hiratake/image/upload/c_fit,co_rgb:394147,f_auto,g_north_west,l_text:notosansjp.otf_56:${encodeURI(
        postData.title
      )},q_auto,w_1000,x_128,y_136/post_uakfpm.png`
    : ''

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

      <div>
        {postData.id}
        <br />
        {postData.title}
        <br />
        {postData.createdAt}
        <br />
        {postData.updatedAt}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </>
  )
}

export default Post
