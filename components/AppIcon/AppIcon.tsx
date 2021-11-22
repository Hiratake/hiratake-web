// components > AppIcon

import React from 'react'
import { css } from '@emotion/react'
import { convertNameToHex, validateColor } from '@/utils/colors'

type Props = {
  /** 子要素 */
  children?: React.ReactNode
  /** コンポーネントに適用する色 */
  color?: string
  /** コンポーネントのサイズ */
  size?: number
}

// AppIcon
const AppIcon: React.FC<Props> = ({ children, color, size }) => {
  // Styles
  const styledIcon = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: ${size ? `${size}px` : 'inherit'};
    color: ${!(color && validateColor(color))
      ? 'inherit'
      : convertNameToHex(color)};
    line-height: 1;
    letter-spacing: normal;
    user-select: none;
  `
  const styledIconBody = css`
    position: inherit;
    top: 2px;
    font-size: inherit;
  `

  return (
    <span css={styledIcon}>
      <i css={styledIconBody} className="material-icons">
        {children}
      </i>
    </span>
  )
}

export default AppIcon
