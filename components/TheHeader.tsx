// components > TheHeader

import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'
import { AppContainer } from '@/components/AppGrid'
import { AppLogo } from '@/components/AppLogo'
import { breakpoints } from '@/utils/sizes'

// Props
type Props = {}

// TheHeader
const TheHeader: React.FC<Props> = () => {
  // Styles
  const styledHeader = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  `
  const styledHeaderLogo = css`
    display: inline-flex;
    width: 120px;
    color: inherit;
    opacity: 1;
    transition-property: opacity;

    &:hover {
      opacity: 0.6;
    }

    ${breakpoints('md')} {
      width: 168px;
    }
  `

  return (
    <AppContainer tag="header">
      <div css={styledHeader}>
        <Link href={process.env.baseDir || '/'} passHref>
          <a css={styledHeaderLogo} title={process.env.baseName}>
            <AppLogo />
          </a>
        </Link>
      </div>
    </AppContainer>
  )
}

export default TheHeader
