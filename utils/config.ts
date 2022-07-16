// utils > config

type ThemeColors = {
  text: string
  textMuted: string
  background: string
  link: string
}

type WebsiteConfig = {
  domain: string
  name: string
  colors: {
    primary: string
    light: ThemeColors
    dark: ThemeColors
  }
}

export const config: WebsiteConfig = {
  domain: 'hiratake.dev',
  name: 'Hiratake Web',
  colors: {
    primary: '#a83d3d',
    light: {
      text: '#394147',
      textMuted: '#6a7175',
      background: '#fff',
      link: '#004ac2',
    },
    dark: {
      text: '#fff',
      textMuted: '#cdd0d1',
      background: '#202a30',
      link: '#5c9bb8',
    },
  },
}
