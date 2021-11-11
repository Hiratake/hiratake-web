// components > TheFooter

import React from 'react'
import { css } from '@emotion/react'
import { AppContainer } from '@/components/AppGrid'

// Props
type Props = {}

// TheFooter
const TheFooter: React.FC<Props> = () => {
  const currentYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  // Styles
  const styledFooter = css`
    padding: 32px 0;
    font-family: 'sofia-pro', 'Hiragino Kaku Gothic ProN', 'Yu Gothic',
      sans-serif;
    font-size: 14px;
    text-align: center;
  `

  return (
    <AppContainer tag="footer">
      <div css={styledFooter}>
        <p>
          &copy; 2014-{currentYear()} {process.env.baseName}
        </p>
      </div>
    </AppContainer>
  )
}

export default TheFooter
