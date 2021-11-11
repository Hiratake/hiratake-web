// components > ToggleTheme

import React, { useEffect, useState } from 'react'
import { AppButton } from '@/components/AppButton'
import { AppIcon } from '@/components/AppIcon'

// Props
type Props = {}

// ToggleTheme
const ToggleTheme: React.FC<Props> = () => {
  const [activeTheme, setActiveTheme] = useState(
    document.documentElement.dataset.theme || 'light'
  )
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.documentElement.dataset.theme = activeTheme
    window.localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

  const onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setActiveTheme(inactiveTheme)
  }

  return (
    <AppButton
      color={activeTheme === 'light' ? 'white' : 'gray800'}
      label={`Change to ${inactiveTheme} mode`}
      size="large"
      onClick={onClick}
      icon
    >
      <AppIcon size={20}>
        {activeTheme === 'light' ? 'light_mode' : 'dark_mode'}
      </AppIcon>
    </AppButton>
  )
}

export default ToggleTheme
