// utils > config

export type ThemeColors = {
  text: string
  textMuted: string
  background: string
  link: string
}

export type GoogleTagManagerId = `GTM-${string}`

export type WebsiteConfig = {
  domain: string
  name: string
  description: string
  author: {
    name: string
    bio: string
  }
  colors: {
    primary: string
    light: ThemeColors
    dark: ThemeColors
  }
  googleTagManagerId: `GTM-${string}`
  social: {
    twitter: string
    github: string
    discord: string
  }
}

export const config: WebsiteConfig = {
  domain: 'hiratake.dev',
  name: 'Hiratake Web',
  description: 'マークアップ園児でデザイナーなひらたけのサイト。',
  author: {
    name: 'Hiratake',
    bio: 'Markup and Front-end Engineer, Designer and Cat in Osaka, Japan.',
  },
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
  googleTagManagerId: 'GTM-WF3MQWM',
  social: {
    twitter: 'Hirotaisou2012',
    github: 'Hiratake',
    discord: '221498004505362433',
  },
}
