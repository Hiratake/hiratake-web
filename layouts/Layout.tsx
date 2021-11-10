// layout > Layout

import React from 'react'
import { AppContainer, TheHeader } from '@/components'

// Props
type Props = {
  /** 子要素 */
  children?: React.ReactNode
}

// Layout
const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <TheHeader />
      <AppContainer tag="main">{props.children}</AppContainer>
    </>
  )
}

export default Layout
