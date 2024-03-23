// https://nuxt.com/docs/guide/directory-structure/app-config
export default defineAppConfig({
  themeColor: '#a83d3d',
  authors: {
    hiratake: {
      name: 'ひらたけ',
      icon: '/authors/hiratake-24x24.webp',
    },
  },
  list: { perPage: 20 },
  socials: {
    bluesky: {
      name: 'Bluesky',
      url: 'https://bsky.app/profile/hiratake.dev',
    },
    github: {
      name: 'GitHub',
      url: 'https://github.com/Hiratake',
    },
    discord: {
      name: 'Discord',
      url: 'https://chat.hiratake.dev/',
    },
    rss: {
      name: 'RSS',
      url: 'https://hiratake.dev/feed.xml',
    },
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
