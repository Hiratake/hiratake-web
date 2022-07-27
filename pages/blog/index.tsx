// pages > blog > index

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import type { CMSPost } from '@/types/cms'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import { PageContainer } from '@/components/PageContainer'
import { client } from '@/lib/client'
import { config } from '@/utils/config'

export const getStaticProps: GetStaticProps<{
  posts: CMSPost[]
}> = async () => {
  const posts = await client.getList({ endpoint: 'blogs' })
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
  const currentUrl = `https://${config.domain}${router.pathname}`
  const meta = {
    title: 'ブログ',
    description:
      'Hiratake Web に投稿されたブログ記事をご紹介します。Web関係の技術のことや、日常の中の出来事を綴った日記のようなものまで、書きたいなあと思ったことを色々書いています。',
  }

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
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`} passHref>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </PageContainer>
    </>
  )
}
export default Page
