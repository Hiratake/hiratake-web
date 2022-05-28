// components > ToggleTheme

import React, { useEffect, useState } from 'react'
import { Global, css } from '@emotion/react'
import { AppButton } from '@/components/AppButton'
import { AppIcon } from '@/components/AppIcon'
import { colors } from '@/utils/colors'

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
    <>
      <Global
        styles={css`
          :root {
            --color-text: ${colors.gray700};
            --color-text-muted: ${colors.gray500};
            --color-background: ${colors.white};
            --color-link: ${colors.link};
            --color-tab: ${colors.gray50};
            --color-timeline: ${colors.gray100};

            &[data-theme='dark'] {
              --color-text: ${colors.white};
              --color-text-muted: ${colors.gray100};
              --color-background: ${colors.gray800};
              --color-link: ${colors.linkLighten};
              --color-tab: ${colors.gray700};
              --color-timeline: ${colors.gray300};
            }
          }
        `}
      />
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
    </>
  )
}

export default ToggleTheme
