// pages > blog > index

import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import { PageContainer } from '@/components/PageContainer'
import { config } from '@/utils/config'

// ----------------------------------------
// JSX
// ----------------------------------------

export const Page: NextPage = () => {
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
      ></PageContainer>
    </>
  )
}
export default Page
