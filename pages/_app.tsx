// pages > _app

import type { AppProps } from 'next/app'
import 'ress'
import { LCenter } from '@/components/LCenter'
import { LStack } from '@/components/LStack'

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <LCenter max="800px" gutters="24px">
      <LStack space="24px">
        <header></header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer></footer>
      </LStack>
    </LCenter>
  )
}

export default MyApp
