// pages > blog > [id]

import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import type { CMSPost } from '@/types/cms'
import { useRouter } from 'next/router'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import { PageContainer } from '@/components/PageContainer'
import { client } from '@/lib/client'
import { config } from '@/utils/config'
import { articleStyle } from '@/utils/style'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client.getList<CMSPost>({ endpoint: 'blogs' })
  const paths = posts.contents.map((post) => `/blog/${post.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ post: CMSPost }> = async (
  context
) => {
  const id = context.params?.id
    ? Array.isArray(context.params.id)
      ? context.params.id.join(',')
      : context.params.id
    : ''
  const post = await client.getListDetail<CMSPost>({
    endpoint: 'blogs',
    contentId: id,
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
  const currentUrl = `https://${config.domain}${router.asPath}`
  const description = (() => {
    const max: number = 100
    const content = post.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
    return content.length < max ? content : `${content.slice(0, max)}...`
  })()

  return (
    <>
      <NextSeo
        title={post.title}
        description={description}
        canonical={currentUrl}
        openGraph={{ type: 'article', title: post.title, url: currentUrl }}
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

      <PageContainer
        breadcrumbsItems={[
          { label: 'Home', href: '/' },
          { label: 'ブログ', href: '/blog' },
          { label: post.title },
        ]}
        title={post.title}
        createdAt={post.createdAt}
        updatedAt={post.updatedAt}
        share
      >
        <div
          css={articleStyle}
          dangerouslySetInnerHTML={{ __html: `${post.content}` }}
        />
      </PageContainer>
    </>
  )
}
export default Page
