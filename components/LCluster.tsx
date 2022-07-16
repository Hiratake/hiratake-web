// components > LCluster

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutClusterProps = {
  tag?: ElementType
  children?: ReactNode
  justify?: CSSProperties['justifyContent']
  align?: CSSProperties['alignItems']
  space?: CSSProperties['gap']
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LCluster = (props: LayoutClusterProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutClusterProps) => {
  return css`
    display: flex;
    flex-wrap: wrap;
    gap: ${props.space};
    align-items: ${props.align || 'flex-start'};
    justify-content: ${props.justify || 'flex-start'};
  `
}
