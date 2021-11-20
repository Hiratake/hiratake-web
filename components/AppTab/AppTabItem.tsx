// components > AppTabItem

import React from 'react'
import { css } from '@emotion/react'

type Props = {
  /** 子要素 */
  children?: React.ReactNode
  /** 選択中の項目 */
  current: string
  /** キー */
  itemKey: string
}

// AppTabItem
const AppTabItem: React.FC<Props> = ({ children, current, itemKey }) => {
  // Styles
  const sytledTabItem = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition-property: color, background-color, opacity, transform;
    transform: translateY(10px);
  `
  const styledTabItemCurrent = css`
    position: relative;
    opacity: 1;
    transform: translateY(0);
  `

  return (
    <div
      css={css`
        ${sytledTabItem}
        ${itemKey === current && styledTabItemCurrent}
      `}
    >
      {children}
    </div>
  )
}
export default AppTabItem
