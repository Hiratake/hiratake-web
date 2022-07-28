// components > LCenter

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutCenterProps = {
  tag?: ElementType
  children?: ReactNode
  max?: CSSProperties['maxWidth']
  gutters?: CSSProperties['paddingRight'] | CSSProperties['paddingLeft']
  intrinsic?: boolean
  andText?: boolean
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LCenter = (props: LayoutCenterProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutCenterProps) => {
  return css`
    box-sizing: content-box;
    max-width: ${props.max || '60ch'};
    padding-right: ${props.gutters};
    padding-left: ${props.gutters};
    margin-right: auto;
    margin-left: auto;

    ${props.intrinsic && intrinsicStyle}
    ${props.andText && andTextStyle}
  `
}

const intrinsicStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const andTextStyle = css`
  text-align: center;
`
