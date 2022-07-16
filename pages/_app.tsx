// pages > _app

import type { AppProps } from 'next/app'
import Link from 'next/link'
import { css } from '@emotion/react'
import 'ress'
import { LCenter } from '@/components/LCenter'
import { LCluster } from '@/components/LCluster'
import { LStack } from '@/components/LStack'
import { AppLogo } from '@/components/AppLogo'
import { websiteConfig } from '@/utils/config'

// ----------------------------------------
// JSX
// ----------------------------------------

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <LCenter max="800px" gutters="24px">
      <LStack space="24px">
        <header css={headerStyle}>
          <LCluster justify="space-between" align="center" space="24px">
            <Link href="/" passHref>
              <a css={headerLogoStyle} title={websiteConfig.name}>
                <AppLogo />
              </a>
            </Link>
          </LCluster>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer></footer>
      </LStack>
    </LCenter>
  )
}
export default App

// ----------------------------------------
// Style
// ----------------------------------------

const headerStyle = css`
  padding-top: 24px;
  padding-bottom: 24px;
`

const headerLogoStyle = css`
  width: 40%;
  max-width: 168px;
  color: inherit;
  opacity: 1;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.6;
  }
`
