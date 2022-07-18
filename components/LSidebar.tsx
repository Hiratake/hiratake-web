// components > LSidebar

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutSidebarProps = {
  tag?: ElementType
  children?: ReactNode
  side?: 'left' | 'right'
  sideWidth?: CSSProperties['flexBasis']
  contentMin?: CSSProperties['minInlineSize']
  space?: CSSProperties['gap']
  noStretch?: boolean
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LSidebar = (props: LayoutSidebarProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutSidebarProps) => {
  return css`
    display: flex;
    flex-wrap: wrap;
    gap: ${props.space};
    align-items: ${props.noStretch ? 'flex-start' : 'stretch'};

    & > * {
      flex-basis: ${props.sideWidth};
      flex-grow: 1;
    }

    & > ${props.side === 'left' ? ':last-child' : ':first-child'} {
      flex-basis: ${props.contentMin || '50%'};
      flex-grow: 999;
    }
  `
}
