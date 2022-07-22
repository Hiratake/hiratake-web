// utils > style

import { css } from '@emotion/react'

/**
 * pxをremに変換する関数
 * @param px px単位のサイズ
 * @returns rem単位のサイズ
 */
export const rem = (px: number): `${number}rem` => {
  return `${px / 16}rem`
}

export const articleStyle = css`
  line-height: 1.75;
  letter-spacing: 0.5pt;

  p {
    &:not(:last-of-type) {
      margin-bottom: 32px;
    }
  }

  h2,
  h3,
  h4 {
    margin-top: 40px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: ${rem(27)};
  }

  h3 {
    font-size: ${rem(20)};
  }

  h4 {
    font-size: ${rem(18)};
  }
`
