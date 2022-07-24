// pages > 404

import { NextPage } from 'next'
import Head from 'next/head'
import { css } from '@emotion/react'
import { LCenter } from '@/components/LCenter'
import { LStack } from '@/components/LStack'
import { config } from '@/utils/config'
import { rem } from '@/utils/style'

// ----------------------------------------
// JSX
// ----------------------------------------

export const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`ページがみつかりません｜${config.name}`}</title>
      </Head>

      <LCenter andText>
        <LStack space="16px">
          <h1 css={headingStyle}>404</h1>
          <p css={textStyle}>
            ページが見つかりませんでした。URLに間違いがないかお確かめください。
          </p>
        </LStack>
      </LCenter>
    </>
  )
}
export default NotFoundPage

// ----------------------------------------
// Style
// ----------------------------------------

const headingStyle = css`
  font-family: sofia-pro, sans-serif;
  font-size: ${rem(80)};
`

const textStyle = css`
  font-size: ${rem(13)};
`
