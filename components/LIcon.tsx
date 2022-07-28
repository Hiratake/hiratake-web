// components > LIcon

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutIconProps = {
  tag?: ElementType
  children?: ReactNode
  space?: CSSProperties['marginInlineEnd']
  ariaLabel?: string
  size?: CSSProperties['fontSize']
  color?: CSSProperties['color']
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LIcon = (props: LayoutIconProps) => {
  const ComponentTag = props.tag || 'span'
  return (
    <ComponentTag
      css={rootStyle(props)}
      role={props.ariaLabel && 'img'}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </ComponentTag>
  )
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutIconProps) => {
  return css`
    font-size: ${props.size || '0.8em'};
    color: ${props.color || 'currentcolor'};

    & > svg {
      width: ${props.size || '1em'};
      height: ${props.size || '1em'};
      vertical-align: bottom;
      fill: currentcolor;
    }

    ${props.space && withIconStyle(props.space)}
  `
}

const withIconStyle = (space: Required<LayoutIconProps>['space']) => {
  return css`
    display: inline-flex;
    align-items: baseline;

    & > svg {
      margin-inline-end: ${space};
    }
  `
}
