// components > AppContainer

import React from 'react'
import { css } from '@emotion/react'
import { convertNameToHex } from '@/utils/colors'
import { breakpoints } from '@/utils/sizes'

// Props
type Props = {
  /** 子要素 */
  children?: React.ReactNode
  /** コンポーネントに適用する色 */
  color?: string
  /** 最大幅の制限を解除するか否か */
  fluid?: boolean
  /** コンポーネントに適用するタグ */
  tag?: React.ElementType
}

// AppContainer
const AppContainer: React.FC<Props> = ({
  children,
  color,
  fluid,
  tag: CustomTag = 'div',
}) => {
  // Styles
  const styledContainer = css`
    width: 100%;
    max-width: ${fluid ? 'none' : '800px'};
    padding: 0 16px;
    margin: auto;
    background-color: ${color ? convertNameToHex(color) : 'transparent'};

    ${breakpoints('md')} {
      padding: 0 24px;
    }
  `

  return <CustomTag css={styledContainer}>{children}</CustomTag>
}

export default AppContainer
