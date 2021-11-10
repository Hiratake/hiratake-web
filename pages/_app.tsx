import type { AppProps } from 'next/app'
import { Layout } from '@/layouts'
import 'ress'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
