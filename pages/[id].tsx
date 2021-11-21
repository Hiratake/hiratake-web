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
  const postData = getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}

const Post: NextPage<{
  postData: ReturnType<typeof getPostData>
}> = ({ postData }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>｜{process.env.baseName}</title>
        <meta name="description" content={process.env.baseDescription} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`${process.env.baseUrl}${router.pathname}`}
        />
        <meta property="og:title" content={process.env.baseName} />
        <meta property="og:description" content={process.env.baseDescription} />
        <meta
          property="og:image"
          content={`${process.env.baseUrl}${process.env.baseImage}`}
        />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div>
        {postData.id}
        <br />
        {postData.title}
        <br />
        {postData.createdAt}
        <br />
        {postData.updatedAt}
      </div>
    </>
  )
}

export default Post
