import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import { Layout } from '@/layouts'
import { colors } from '@/utils/colors'
import 'ress'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global
        styles={css`
          :root {
            --color-text: ${colors.gray700};
            --color-text-muted: ${colors.gray500};
            --color-background: ${colors.white};
            --color-link: ${colors.link};
            --color-tab: ${colors.gray50};
            --color-timeline: ${colors.gray100};

            &[data-theme='dark'] {
              --color-text: ${colors.white};
              --color-text-muted: ${colors.gray100};
              --color-background: ${colors.gray800};
              --color-link: ${colors.linkLighten};
              --color-tab: ${colors.gray700};
              --color-timeline: ${colors.gray300};
            }
          }
        `}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
