// components > AppButton

import { ElementType, MouseEventHandler, ReactNode } from 'react'
import { css } from '@emotion/react'
import { AppProgress } from '@/components/AppProgress'
import { rem } from '@/utils/style'

// ----------------------------------------
// Type
// ----------------------------------------

export type AppButtonProps = {
  children?: ReactNode
  href?: string
  target?: string
  ariaLabel?: string
  size: 'large' | 'medium' | 'small'
  outlined?: boolean
  icon?: boolean
  loading?: boolean
  onClick?: MouseEventHandler<HTMLElement>
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const AppButton = (props: AppButtonProps) => {
  const ComponentTag: ElementType = props.href ? 'a' : 'button'
  return (
    <ComponentTag
      css={rootStyle(props)}
      href={props.href}
      target={props.href && props.target}
      aria-label={props.ariaLabel}
      onClick={props.onClick}
    >
      <span css={contentStyle(!!props.loading)}>{props.children}</span>
      <span css={loaderStyle(!!props.loading)}>
        <AppProgress size={20} stroke={2} indeterminate />
      </span>
    </ComponentTag>
  )
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: AppButtonProps) => {
  const sizes = {
    large: {
      height: '48px',
      padding: '0 24px',
      fontSize: rem(18),
    },
    medium: {
      height: '32px',
      padding: '0 16px',
      fontSize: rem(12),
    },
    small: {
      height: '24px',
      padding: '0 16px',
      fontSize: rem(12),
    },
  } as const

  return css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${props.icon ? sizes[props.size].height : undefined};
    height: ${sizes[props.size].height};
    padding: ${props.icon ? 0 : sizes[props.size].padding};
    font: inherit;
    font-size: ${sizes[props.size].fontSize};
    color: inherit;
    text-decoration: none;
    pointer-events: ${props.loading ? 'none' : undefined};
    border: solid 1px ${props.outlined ? 'currentcolor' : 'transparent'};
    border-radius: 8px;
    outline: none;
    appearance: none;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      color: inherit;
      pointer-events: none;
      content: '';
      background-color: currentcolor;
      border-radius: inherit;
      opacity: 0;
      transition-property: opacity;
    }

    &:hover,
    &:focus {
      &::before {
        opacity: 0.1;
      }
    }
  `
}

const contentStyle = (loading: boolean) => {
  return css`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    user-select: none;
    border-radius: inherit;
    opacity: ${loading ? 0 : 1};
  `
}

const loaderStyle = (loading: boolean) => {
  return css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    opacity: ${loading ? 1 : 0};
  `
}
