import type { NextPage } from 'next'
import Head from 'next/head'
import { websiteConfig } from '@/utils/config'

export const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>{websiteConfig.name}</title>
      </Head>

      <div></div>
    </>
  )
}

export default Page
