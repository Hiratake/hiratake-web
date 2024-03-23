type Author = {
  /** 名前 */
  name: string
  /** URL */
  url: string
  /** アイコン */
  icon: string
}

/** 投稿者のリスト */
const authors: { [key: string]: Author } = {
  hiratake: {
    name: 'ひらたけ',
    url: 'https://hiratake.dev/',
    icon: '/authors/hiratake-24x24.webp',
  },
}

// https://nuxt.com/docs/guide/directory-structure/app-config
export default defineAppConfig({
  authors,
  themeColor: '#a83d3d',
  list: { perPage: 20 },
  socials: {
    bluesky: { name: 'Bluesky', url: 'https://bsky.app/profile/hiratake.dev' },
    github: { name: 'GitHub', url: 'https://github.com/Hiratake' },
    discord: { name: 'Discord', url: 'https://chat.hiratake.dev/' },
    rss: { name: 'RSS', url: 'https://hiratake.dev/feed.xml' },
  },
  header: {
    menu: [
      { title: 'ブログ', url: '/blog/' },
      { title: '運営者情報', url: '/about/' },
      { title: 'お問い合わせ', url: '/contact/' },
    ],
  },
  footer: {
    menu: [
      { title: 'ブログ', url: '/blog/' },
      { title: '運営者情報', url: '/about/' },
      { title: 'お問い合わせ', url: '/contact/' },
      { title: 'プライバシーポリシー', url: '/privacy/' },
    ],
  },
})
