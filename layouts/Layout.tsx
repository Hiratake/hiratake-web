// layout > Layout

import React from 'react'
import { AppContainer, TheHeader } from '@/components'

type Props = {
  /** 子要素 */
  children?: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <TheHeader />
      <AppContainer tag="main">{props.children}</AppContainer>
    </>
  )
}

export default Layout
