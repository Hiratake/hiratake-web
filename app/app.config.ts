// https://nuxt.com/docs/directory-structure/app/app-config
export default defineAppConfig({
  // Nuxt UI
  ui: {
    colors: { primary: 'primary' },
    icons: { light: 'i-ph-sun-bold', dark: 'i-ph-moon-bold' },
    button: {
      slots: { base: 'cursor-pointer rounded-sm' },
      variants: {
        size: {
          sm: { base: 'gap-2 px-3 py-1.5' },
          md: {
            base: 'gap-2 px-5 text-xs md:px-6 md:py-2',
            trailingIcon: 'mt-0.5 size-4',
          },
        },
        square: { true: 'justify-center' },
        variant: {
          solid: 'rounded-3xl',
          outline:
            'relative rounded-3xl font-normal before:absolute before:inset-0 before:-z-10 before:m-auto before:scale-0 before:rounded-full before:transition-transform after:absolute after:inset-0 after:rounded-[inherit] after:border-2 after:transition-colors hover:before:scale-100 hover:after:border-transparent focus-visible:outline-0 focus-visible:before:scale-100 focus-visible:after:border-transparent active:before:scale-100 active:after:border-transparent',
          soft: 'rounded-3xl',
        },
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'bg-primary-700',
        },
        {
          color: 'primary',
          variant: 'outline',
          class:
            'text-primary-700 before:bg-primary-700 after:border-primary-700 bg-transparent ring-0 hover:bg-transparent hover:text-white focus-visible:text-white focus-visible:outline-0 active:bg-transparent active:text-white',
        },
        {
          color: 'primary',
          variant: 'ghost',
          class:
            'text-primary-700 hover:bg-slate-200/50 active:bg-slate-200/50 dark:text-white dark:hover:bg-white/20',
        },
        {
          color: 'neutral',
          variant: 'outline',
          class:
            'bg-transparent text-slate-600 ring-0 before:bg-slate-600 after:text-slate-600 hover:bg-transparent hover:text-white focus-visible:text-white focus-visible:outline-0 active:bg-transparent active:text-white dark:text-white dark:after:border-white',
        },
        {
          color: 'neutral',
          variant: 'soft',
          class:
            'bg-slate-100 text-slate-600 hover:bg-slate-300 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700',
        },
        {
          color: 'neutral',
          variant: 'ghost',
          class:
            'text-slate-600 hover:bg-slate-200/50 active:bg-slate-200/50 dark:text-white dark:hover:bg-white/20',
        },
        { size: 'md', square: true, class: 'md:p-1.5' },
      ],
    },
    navigationMenu: {
      slots: { link: 'font-bold before:hidden' },
      variants: { orientation: { horizontal: { item: 'py-0' } } },
    },
    page: { slots: { root: 'mx-auto' } },
    pageBody: { base: 'mt-0 flex flex-col space-y-0 pb-0' },
    tooltip: {
      slots: {
        content:
          'bg-black/70 text-white ring-0 dark:bg-white/80 dark:text-slate-900',
      },
    },
  },
  // Hiratake Web
  website: {
    themeColor: '#a83d3d',
    owner: {
      name: 'ひらたけ',
      url: 'https://hiratake.dev/',
      icon: '/authors/hiratake-24x24.webp',
    },
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
      steam: {
        name: 'Steam',
        handle: '@Hirotaisou2012',
        url: 'https://steamcommunity.com/id/Hirotaisou2012/',
      },
      rss: {
        name: 'Hiratake Web Diary RSS Feed',
        url: 'https://hiratake.dev/feed.xml',
      },
    },
    itemPerPage: 20,
  },
})
