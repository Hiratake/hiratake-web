// pages > _app

import type { AppProps } from 'next/app'
import { LCenter } from '@/components/LCenter'

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <LCenter max="800px" gutters="24px">
      <Component {...pageProps} />
    </LCenter>
  )
}

export default MyApp
