// pages > contact

import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { PageContainer } from '@/components/PageContainer'
import { config } from '@/utils/config'

// ----------------------------------------
// JSX
// ----------------------------------------

export const Page: NextPage = () => {
  const router = useRouter()
  const meta = {
    title: 'お問い合わせ',
    description: `${config.name} のお問い合わせページです。ウェブサイトの不具合や誤字・脱字のご報告、お仕事のご依頼、その他いろいろのお問い合わせ先をご案内します。`,
  }

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={`https://${config.domain}${router.pathname}`}
        openGraph={{
          type: 'article',
          url: `https://${config.domain}${router.pathname}`,
        }}
      />

      <PageContainer
        breadcrumbsItems={[{ label: 'Home', href: '/' }, { label: meta.title }]}
        title={meta.title}
      ></PageContainer>
    </>
  )
}
export default Page

// ----------------------------------------
// Style
// ----------------------------------------
