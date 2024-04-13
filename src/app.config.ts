// https://nuxt.com/docs/guide/directory-structure/app-config
export default defineAppConfig({
  /** ウェブサイトのテーマカラー */
  themeColor: '#a83d3d',
  /** ウェブサイトの運営者 */
  owner: {
    name: 'ひらたけ',
    url: 'https://hiratake.dev/',
    icon: '/authors/hiratake-24x24.webp',
  },
  /** ソーシャルメディア */
  socials: {
    bluesky: {
      name: 'Bluesky',
      handle: '@hiratake.dev',
      url: 'https://bsky.app/profile/hiratake.dev',
    },
    github: {
      name: 'GitHub',
      handle: '@Hiratake',
      url: 'https://github.com/Hiratake',
    },
    discord: {
      name: 'Discord',
      handle: '@hiratake',
      url: 'https://chat.hiratake.dev/',
    },
    x: {
      name: 'X',
      handle: '@Hirotaisou2012',
      url: 'https://x.com/Hirotaisou2012',
    },
    misskey: {
      name: 'Misskey',
      handle: '@Hiratake',
      url: 'https://misskey.io/@Hiratake',
    },
    mastodon: {
      name: 'Mastodon',
      handle: '@hiratake@mozilla.social',
      url: 'https://mozilla.social/@hiratake',
    },
    rss: {
      name: 'Hiratake Web Blog RSS Feed',
      url: 'https://hiratake.dev/feed.xml',
    },
  },
  /** ヘッダーの情報 */
  header: {
    menu: [
      { title: 'ブログ', url: '/blog/' },
      { title: '運営者情報', url: '/about/' },
      { title: 'お問い合わせ', url: '/contact/' },
    ],
  },
  /** フッターの情報 */
  footer: {
    menu: [
      { title: 'ブログ', url: '/blog/' },
      { title: '運営者情報', url: '/about/' },
      { title: 'お問い合わせ', url: '/contact/' },
      { title: 'プライバシーポリシー', url: '/privacy/' },
    ],
  },
  /** 一覧画面に表示するページあたりの投稿数 */
  itemPerPage: 20,
})
