// https://nuxt.com/docs/directory-structure/app/app-config
export default defineAppConfig({
  // Nuxt UI
  ui: {
    colors: { primary: 'primary' },
    icons: {
      copy: 'i-ph-copy',
      copyCheck: 'i-ph-check',
      hash: 'i-ph-hash',
      light: 'i-ph-sun-bold',
      dark: 'i-ph-moon-bold',
    },
    prose: {
      h2: {
        slots: {
          base: 'hover:[&>a>code]:border-primary-700 hover:[&>a>code]:text-primary-700 text-[1.375rem] md:mt-15 md:mb-7.5 md:text-[1.875rem] md:leading-10 hover:[&>a]:underline',
          leading:
            'top-3.5 -ms-5 items-center rounded-none bg-transparent p-0 text-inherit group-hover:text-inherit group-hover:opacity-40 group-focus:text-inherit group-focus:opacity-40 md:flex',
        },
      },
      h3: {
        slots: {
          base: 'hover:[&>a>code]:border-primary-700 hover:[&>a>code]:text-primary-700 text-[1.16rem] md:mt-10 md:mb-3.75 md:text-2xl hover:[&>a]:underline',
          leading:
            'top-2.5 -ms-5 items-center rounded-none bg-transparent p-0 text-inherit group-hover:text-inherit group-hover:opacity-40 group-focus:text-inherit group-focus:opacity-40 md:flex',
        },
      },
      h4: {
        slots: {
          base: 'text-[0.925rem] md:mt-7 md:text-lg hover:[&>a]:underline',
        },
      },
      p: { base: 'my-6 leading-loose text-wrap' },
      strong: { base: 'text-highlighted' },
      em: { base: 'text-highlighted' },
      a: {
        base: 'border-blue-900 font-normal text-blue-900 outline-blue-900/25 transition-none hover:border-transparent dark:border-blue-100 dark:text-blue-100 dark:outline-blue-100/25 [&>code]:outline-blue-900/25 hover:[&>code]:border-blue-900 hover:[&>code]:text-blue-900 focus-visible:[&>code]:border-blue-900 focus-visible:[&>code]:text-blue-900 dark:[&>code]:outline-blue-100/25 dark:hover:[&>code]:border-blue-100 dark:hover:[&>code]:text-blue-100 dark:focus-visible:[&>code]:border-blue-100 dark:focus-visible:[&>code]:text-blue-100',
      },
      ul: { base: 'my-8' },
      ol: { base: 'my-8' },
      li: { base: '[&>ol]:my-0' },
      table: { slots: { root: 'my-10' } },
      img: {
        slots: {
          base: 'my-10 rounded-lg border border-slate-100 bg-slate-200 dark:border-slate-800 dark:bg-slate-800 outline-blue-900/25 focus-visible:no-underline dark:text-blue-100',
        },
      },
      pre: {
        slots: { root: 'code my-10 [&+.code]:-mt-4' },
        variants: { filename: { true: { root: 'my-10' } } },
      },
    },
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
    main: {
      base: 'box-content min-h-[calc(100vh-var(--ui-header-height)-24rem)] px-6 md:min-h-[calc(100vh-var(--ui-header-height)-25rem)]',
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
