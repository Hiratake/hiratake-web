import type { AppProps } from 'next/app'
import 'ress'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
