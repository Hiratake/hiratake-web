import type { NextPage } from 'next'
import Head from 'next/head'
import { config } from '@/utils/config'

export const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>{config.name}</title>
      </Head>

      <div></div>
    </>
  )
}

export default Page
