// components > AppProgress

import { useEffect, useState } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type AppProgressProps = {
  indeterminate?: boolean
  percentage?: number
  size?: number
  stroke?: number
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const AppProgress = ({
  indeterminate = false,
  percentage = 0,
  size = 32,
  stroke = 4,
}: AppProgressProps) => {
  const [radius, setRadius] = useState<number>(0)
  const [circumference, setCircumference] = useState<number>(0)
  const [offset, setOffset] = useState<number>(0)

  useEffect(() => {
    setRadius(size / 2 - stroke)
  }, [size, stroke])

  useEffect(() => {
    setCircumference(radius * 2 * Math.PI)
  }, [radius])

  useEffect(() => {
    setOffset(circumference * (1 - percentage / 100))
  }, [circumference, percentage])

  return (
    <div css={rootStyle}>
      <svg
        css={svgStyle(indeterminate)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
      >
        <circle
          css={circleStyle(indeterminate)}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentcolor"
          strokeWidth={stroke}
          strokeDasharray={indeterminate ? undefined : circumference}
          strokeDashoffset={indeterminate ? undefined : offset}
          fill="transparent"
        />
      </svg>
    </div>
  )
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = css`
  display: inline-flex;

  @keyframes progress-circle-dash {
    0% {
      stroke-dashoffset: calc(80% * 3.14);
    }

    100% {
      stroke-dashoffset: calc(-80% * 3.14);
    }
  }
`

const svgStyle = (indeterminate: boolean) => {
  return css`
    stroke-linecap: round;

    ${indeterminate && animationSvgStyle}

    @keyframes progress-circle-turn {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(1turn);
      }
    }
  `
}

const animationSvgStyle = css`
  animation: progress-circle-turn 1.6s linear infinite;
`

const circleStyle = (indeterminate: boolean) => {
  return css`
    ${indeterminate && animationCircleStyle}

    @keyframes progress-circle-dash {
      0% {
        stroke-dashoffset: calc(80% * 3.14);
      }

      100% {
        stroke-dashoffset: calc(-80% * 3.14);
      }
    }
  `
}

const animationCircleStyle = css`
  stroke-dasharray: calc(80% * 3.14);
  animation: progress-circle-dash 1.2s ease-in-out infinite;
`
