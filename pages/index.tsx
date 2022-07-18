import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { config } from '@/utils/config'

export const Page: NextPage = () => {
  return (
    <>
      <NextSeo
        description={config.description}
        canonical={`https://${config.domain}/`}
        openGraph={{ url: `https://${config.domain}/` }}
      />

      <div></div>
    </>
  )
}

export default Page
