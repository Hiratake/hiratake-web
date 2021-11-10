// components > TheHeader

import React from 'react'
import Link from 'next/link'
import { AppContainer } from '@/components/AppGrid'

// Props
type Props = {}

const TheHeader: React.FC<Props> = () => {
  return (
    <AppContainer tag="header">
      <div>
        <Link href="/">
          <a>Hiratake</a>
        </Link>
      </div>
    </AppContainer>
  )
}

export default TheHeader
