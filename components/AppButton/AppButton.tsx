// components > AppButton

import React from 'react'
import { css } from '@emotion/react'
import {
  colors,
  convertNameToHex,
  getContrastColor,
  validateColor,
} from '@/utils/colors'

type Props = {
  /** 子要素 */
  children?: React.ReactNode
  /** コンポーネントに適用する色 */
  color?: string
  /** リンク先 */
  href?: string
  /** アイコンのみを使用するか否か */
  icon?: boolean
  /** テキストを表示しない場合のラベル */
  label?: string
  /** 枠線を追加するか否か */
  outlined?: boolean
  /** コンポーネントのサイズ */
  size?: 'large' | 'medium' | 'small'
  /** target 属性に適用する内容 */
  target?: string
  /** クリック時に実行する処理 */
  onClick?: React.MouseEventHandler<HTMLElement>
}

// AppButton
const AppButton: React.FC<Props> = ({
  children,
  color,
  href,
  icon,
  label,
  outlined,
  size = 'medium',
  target,
  onClick,
}) => {
  // Styles
  const sizes = {
    large: {
      height: '48px',
      padding: '0 24px',
      fontSize: '18px',
    },
    medium: {
      height: '32px',
      padding: '0 16px',
      fontSize: '12px',
    },
    small: {
      height: '24px',
      padding: '0 16px',
      fontSize: '12px',
    },
  } as const
  const styledButton = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${icon ? sizes[size].height : 'auto'};
    height: ${sizes[size].height};
    padding: ${icon ? 0 : sizes[size].padding};
    appearance: none;
    font: inherit;
    font-weight: 700;
    font-size: ${sizes[size].fontSize};
    color: ${!(color && validateColor(color))
      ? getContrastColor(colors.white)
      : outlined
      ? convertNameToHex(color)
      : getContrastColor(color)};
    text-decoration: none;
    cursor: pointer;
    background-color: ${!(color && validateColor(color)) || outlined
      ? 'transparent'
      : convertNameToHex(color)};
    border-color: ${outlined ? 'currentColor' : 'transparent'};
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
    outline: none;
    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      color: inherit;
      pointer-events: none;
      content: '';
      background-color: currentColor;
      border-radius: inherit;
      opacity: 0;
      transition-property: opacity;
    }
    &:hover {
      &::before {
        opacity: 0.1;
      }
    }
  `
  const styledButtonBody = css`
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    user-select: none;
    border-radius: inherit;
  `

  const CustomTag: React.ElementType = href ? 'a' : 'button'
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    ;(
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e)
  }

  return (
    <CustomTag
      css={styledButton}
      href={href}
      target={target}
      aria-label={label || undefined}
      onClick={handleClick}
    >
      <span css={styledButtonBody}>{children}</span>
    </CustomTag>
  )
}

export default AppButton
