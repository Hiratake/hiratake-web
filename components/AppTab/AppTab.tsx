// components > AppTab

import React from 'react'
import { css } from '@emotion/react'
import { colors } from '@/utils/colors'
import { breakpoints } from '@/utils/sizes'

type HeaderItem = {
  label: string
  key: string
}

type Props = {
  /** 子要素 */
  children?: React.ReactNode
  /** 選択中の項目 */
  current: string
  /** ヘッダー項目 */
  headers: HeaderItem[]
  /** 切替時に実行する処理 */
  onChange?: (key: string) => void
}

// AppTab
const AppTab: React.FC<Props> = ({ children, current, headers, onChange }) => {
  // Styles
  const styledTab = css`
    width: 100%;
  `
  const styledTabHeader = css`
    display: flex;
    justify-content: center;
    padding: 0 16px;
    border-bottom: solid 4px ${colors.primary};
    ${breakpoints('sm')} {
      justify-content: flex-start;
    }
  `
  const styledTabHeaderItem = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 112px;
    height: 36px;
    font-family: 'sofia-pro', 'Hiragino Kaku Gothic ProN', 'Yu Gothic',
      sans-serif;
    font-size: 14px;
    font-weight: 700;
    background-color: var(--color-tab);
    border-color: var(--color-tab);
    border-style: solid;
    border-width: 4px 4px 0 4px;
    border-radius: 8px 8px 0 0;
    transition-property: color, background-color, border-color;
    &:not(:first-of-type) {
      margin-left: 4px;
    }
    &::after {
      position: absolute;
      right: 0;
      bottom: -4px;
      left: 0;
      height: 4px;
      content: '';
      background-color: transparent;
    }
  `
  const styledTabHeaderItemCurrent = css`
    background-color: transparent;
    border-color: ${colors.primary};
    &::after {
      background-color: var(--color-background);
    }
  `
  const styledTabBody = css`
    position: relative;
    width: 100%;
    margin-top: 40px;
    ${breakpoints('md')} {
      margin-top: 56px;
    }
  `

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const key = e.currentTarget.getAttribute('data-key')
    if (key) {
      onChange?.(key)
    }
  }
  const HeaderItems = headers.map((item) => (
    <button
      key={item.key}
      css={css`
        ${styledTabHeaderItem}
        ${item.key === current && styledTabHeaderItemCurrent}
      `}
      onClick={handleClick}
      data-key={item.key}
    >
      {item.label}
    </button>
  ))

  return (
    <div css={styledTab}>
      <div css={styledTabHeader}>{HeaderItems}</div>
      <div css={styledTabBody}>{children}</div>
    </div>
  )
}
export default AppTab
