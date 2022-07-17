// pages > _app

import 'ress'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { css, Global } from '@emotion/react'
import { LCenter } from '@/components/LCenter'
import { LCluster } from '@/components/LCluster'
import { LStack } from '@/components/LStack'
import { AppButton } from '@/components/AppButton'
import { AppLogo } from '@/components/AppLogo'
import { config } from '@/utils/config'

// ----------------------------------------
// JSX
// ----------------------------------------

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={globalStyle} />

      <LCenter max="800px" gutters="24px">
        <LStack space="24px">
          <header css={headerStyle}>
            <LCluster justify="space-between" align="center" space="24px">
              <Link href="/" passHref>
                <a css={headerLogoStyle} title={config.name}>
                  <AppLogo />
                </a>
              </Link>
              <AppButton ariaLabel={`change to dark mode`} size="large" icon>
                a
              </AppButton>
            </LCluster>
          </header>
          <main>
            <Component {...pageProps} />
          </main>
          <footer></footer>
        </LStack>
      </LCenter>
    </>
  )
}
export default App

// ----------------------------------------
// Style
// ----------------------------------------

const globalStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    transition-duration: 0.1s;
    transition-property: color, background-color;
  }

  :root {
    --color-primary: ${config.colors.primary};
    --color-text: ${config.colors.light.text};
    --color-text-muted: ${config.colors.light.textMuted};
    --color-background: ${config.colors.light.background};
    --color-link: ${config.colors.light.link};

    &[data-theme='dark'] {
      --color-text: ${config.colors.dark.text};
      --color-text-muted: ${config.colors.dark.textMuted};
      --color-background: ${config.colors.dark.background};
      --color-link: ${config.colors.dark.link};
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: var(--color-text);
    background-color: var(--color-background);
  }
`

const headerStyle = css`
  padding-top: 24px;
  padding-bottom: 24px;
`

const headerLogoStyle = css`
  width: 40%;
  max-width: 168px;
  color: inherit;
  opacity: 1;
  transition-property: opacity;

  &:hover {
    opacity: 0.6;
  }
`
