// pages > contact

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { LStack } from '@/components/LStack'
import { AppBreadcrumbs } from '@/components/AppBreadcrumbs'
import { ArticleHeader } from '@/components/ArticleHeader'
import { config } from '@/utils/config'

// ----------------------------------------
// JSX
// ----------------------------------------

export const Page: NextPage = () => {
  const meta = {
    title: 'お問い合わせ',
    description: `${config.name} のお問い合わせページです。ウェブサイトの不具合や誤字・脱字のご報告、お仕事のご依頼、その他いろいろのお問い合わせ先をご案内します。`,
  }

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={`https://${config.domain}/contact`}
        openGraph={{
          type: 'article',
          url: `https://${config.domain}/contact`,
        }}
      />

      <LStack space="48px">
        <AppBreadcrumbs
          items={[{ label: 'Home', href: '/' }, { label: meta.title }]}
        />

        <LStack tag="article" space="40px">
          <ArticleHeader title={meta.title} description={meta.description} />
        </LStack>
      </LStack>
    </>
  )
}
export default Page

// ----------------------------------------
// Style
// ----------------------------------------
