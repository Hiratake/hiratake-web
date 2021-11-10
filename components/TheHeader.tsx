// components > TheHeader

import Link from 'next/link'
import { AppContainer } from '@/components/AppGrid'

const TheHeader = () => {
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
