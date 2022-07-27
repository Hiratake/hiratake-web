// pages > _app

import 'ress'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider, useTheme } from 'next-themes'
import { css, Global as GlobalStyle } from '@emotion/react'
import { LCenter } from '@/components/LCenter'
import { LCluster } from '@/components/LCluster'
import { LIcon } from '@/components/LIcon'
import { LStack } from '@/components/LStack'
import { AppButton } from '@/components/AppButton'
import { AppLogo } from '@/components/AppLogo'
import { GoogleTagManager } from '@/components/GoogleTagManager'
import { config } from '@/utils/config'
import { rem } from '@/utils/style'

// ----------------------------------------
// JSX
// ----------------------------------------

export const App = ({ Component, pageProps }: AppProps) => {
  const ThemeToggleButton = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
      setMounted(true)
    }, [])

    if (!mounted) {
      return null
    }

    return (
      <AppButton
        ariaLabel={`change to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        size="large"
        icon
        onClick={() => {
          if (theme === 'dark') {
            setTheme('light')
          } else {
            setTheme('dark')
          }
        }}
      >
        <LIcon size="20px">
          {theme !== 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="M24 34q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Z" />
            </svg>
          )}
        </LIcon>
      </AppButton>
    )
  }

  const currentYear = (() => {
    const date = new Date()
    return date.getFullYear()
  })()

  return (
    <ThemeProvider defaultTheme="system">
      <GlobalStyle styles={globalStyle} />
      <DefaultSeo
        titleTemplate={`%s｜${config.name}`}
        defaultTitle={config.name}
        openGraph={{
          type: 'website',
          locale: 'ja_JP',
          site_name: config.name,
          images: [{ url: `https://${config.domain}/images/og.jpg` }],
        }}
        twitter={{
          site: `@${config.social.twitter}`,
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          { name: 'application-name', content: config.name },
          { name: 'apple-mobile-web-app-title', content: config.name },
          { name: 'msapplication-config', content: '/browserconfig.xml' },
          { name: 'msapplication-TileColor', content: config.colors.primary },
          { name: 'theme-color', content: config.colors.primary },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicons/favicon-32x32.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicons/favicon-16x16.png',
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/favicons/apple-touch-icon.png',
          },
          {
            rel: 'mask-icon',
            href: '/favicons/safari-pinned-tab.svg',
            color: config.colors.primary,
          },
          { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'manifest', href: '/site.webmanifest' },
        ]}
      />
      <GoogleTagManager googleTagManagerId={config.googleTagManagerId} />

      <LCenter max="800px" gutters="24px">
        <header css={headerStyle}>
          <LCluster align="center" justify="space-between" space="24px">
            <Link href="/" passHref>
              <a css={headerLogoStyle} title={config.name}>
                <AppLogo />
              </a>
            </Link>
            <ThemeToggleButton />
          </LCluster>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer css={footerStyle}>
          <LStack space="24px">
            <LCenter max="400px">
              <LCluster align="center" justify="center" space="4px 16px">
                <Link href="/blog" passHref>
                  <a css={footerNavigationStyle}>ブログ</a>
                </Link>
                <Link href="/contact" passHref>
                  <a css={footerNavigationStyle}>お問い合わせ</a>
                </Link>
                <Link href="/privacy" passHref>
                  <a css={footerNavigationStyle}>プライバシーポリシー</a>
                </Link>
              </LCluster>
            </LCenter>
            <p css={footerCopyrightStyle}>
              &copy; 2014-{currentYear} {config.name}
            </p>
          </LStack>
        </footer>
      </LCenter>
    </ThemeProvider>
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
    font-family: 'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic UI', sans-serif;
    font-size: ${rem(14)};
    color: var(--color-text);
    background-color: var(--color-background);
  }

  a {
    color: var(--color-link);

    &:hover {
      text-decoration: none;
    }
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

const footerStyle = css`
  padding-bottom: 24px;
  margin-top: 80px;
`

const footerNavigationStyle = css`
  font-size: ${rem(12)};
  color: inherit;
`

const footerCopyrightStyle = css`
  font-family: sofia-pro, sans-serif;
  font-size: ${rem(12)};
  text-align: center;
`
