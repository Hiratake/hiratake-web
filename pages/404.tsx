// pages > 404

import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { css } from '@emotion/react'
import { LCenter } from '@/components/LCenter'
import { LStack } from '@/components/LStack'
import { rem } from '@/utils/style'

// ----------------------------------------
// JSX
// ----------------------------------------

export const NotFoundPage: NextPage = () => {
  return (
    <>
      <NextSeo title="ページがみつかりません" noindex nofollow />

      <LCenter andText>
        <LStack space="16px">
          <h1 css={headingStyle}>404</h1>
          <p css={textStyle}>
            ページがみつかりませんでした。
            <br />
            お手数おかけしますが、URLに間違いがないかお確かめください。
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
