// pages > contact

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import type { CMSPost } from '@/types/cms'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { PageContainer } from '@/components/PageContainer'
import { client } from '@/lib/client'
import { config } from '@/utils/config'

export const getStaticProps: GetStaticProps<{
  post: CMSPost
}> = async () => {
  const post = await client.getListDetail({
    endpoint: 'pages',
    contentId: 'contact',
  })
  return {
    props: {
      post,
    },
  }
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={`https://${config.domain}${router.pathname}`}
        openGraph={{
          type: 'article',
          url: `https://${config.domain}${router.pathname}`,
        }}
      />

      <PageContainer
        breadcrumbsItems={[{ label: 'Home', href: '/' }, { label: post.title }]}
        title={post.title}
      >
        <div dangerouslySetInnerHTML={{ __html: `${post.content}` }} />
      </PageContainer>
    </>
  )
}
export default Page
