// pages > privacy

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import type { CMSPost } from '@/types/cms'
import { useRouter } from 'next/router'
import { NextSeo, BreadcrumbJsonLd } from 'next-seo'
import { PageContainer } from '@/components/PageContainer'
import { client } from '@/lib/client'
import { config } from '@/utils/config'

export const getStaticProps: GetStaticProps<{
  post: CMSPost
}> = async () => {
  const post = await client.getListDetail({
    endpoint: 'pages',
    contentId: 'privacy',
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
  const currentUrl = `https://${config.domain}${router.pathname}`

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={currentUrl}
        openGraph={{
          type: 'article',
          title: post.title,
          url: currentUrl,
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: post.title,
            item: currentUrl,
          },
        ]}
      />

      <PageContainer
        breadcrumbsItems={[{ label: 'Home', href: '/' }, { label: post.title }]}
        title={post.title}
        updatedAt={post.updatedAt}
      >
        <div dangerouslySetInnerHTML={{ __html: `${post.content}` }} />
      </PageContainer>
    </>
  )
}
export default Page
