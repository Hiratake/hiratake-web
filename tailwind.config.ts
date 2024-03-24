// Types
import type { Config } from 'tailwindcss'
// Theme
import { fontFamily } from 'tailwindcss/defaultTheme'
// Plugins
import TailwindTypographyPlugin from '@tailwindcss/typography'
import TailwindHeadlessUIPlugin from '@headlessui/tailwindcss'

// https://tailwindcss.com/docs/configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: { primary: '#a83d3d', discord: '#5865f2' },
      fontFamily: {
        sans: ['"Noto Sans JP"', ...fontFamily.sans],
        accent: ['Lexend', 'sans-serif'],
      },
      gridTemplateColumns: {
        'fill-0': 'repeat(auto-fill, minmax(0px, 1fr))',
        'fill-1': 'repeat(auto-fill, minmax(0.25rem, 1fr))',
        'fill-2': 'repeat(auto-fill, minmax(0.5rem, 1fr))',
        'fill-3': 'repeat(auto-fill, minmax(0.75rem, 1fr))',
        'fill-4': 'repeat(auto-fill, minmax(1rem, 1fr))',
        'fill-5': 'repeat(auto-fill, minmax(1.25rem, 1fr))',
        'fill-6': 'repeat(auto-fill, minmax(1.5rem, 1fr))',
        'fill-7': 'repeat(auto-fill, minmax(1.75rem, 1fr))',
        'fill-8': 'repeat(auto-fill, minmax(2rem, 1fr))',
        'fill-9': 'repeat(auto-fill, minmax(2.25rem, 1fr))',
        'fill-10': 'repeat(auto-fill, minmax(2.5rem, 1fr))',
        'fill-11': 'repeat(auto-fill, minmax(2.75rem, 1fr))',
        'fill-12': 'repeat(auto-fill, minmax(3rem, 1fr))',
        'fill-14': 'repeat(auto-fill, minmax(3.5rem, 1fr))',
        'fill-16': 'repeat(auto-fill, minmax(4rem, 1fr))',
        'fill-20': 'repeat(auto-fill, minmax(5rem, 1fr))',
        'fill-24': 'repeat(auto-fill, minmax(6rem, 1fr))',
        'fill-28': 'repeat(auto-fill, minmax(7rem, 1fr))',
        'fill-32': 'repeat(auto-fill, minmax(8rem, 1fr))',
        'fill-36': 'repeat(auto-fill, minmax(9rem, 1fr))',
        'fill-40': 'repeat(auto-fill, minmax(10rem, 1fr))',
        'fill-44': 'repeat(auto-fill, minmax(11rem, 1fr))',
        'fill-48': 'repeat(auto-fill, minmax(12rem, 1fr))',
        'fill-52': 'repeat(auto-fill, minmax(13rem, 1fr))',
        'fill-56': 'repeat(auto-fill, minmax(14rem, 1fr))',
        'fill-60': 'repeat(auto-fill, minmax(15rem, 1fr))',
        'fill-64': 'repeat(auto-fill, minmax(16rem, 1fr))',
        'fill-72': 'repeat(auto-fill, minmax(18rem, 1fr))',
        'fill-80': 'repeat(auto-fill, minmax(20rem, 1fr))',
        'fill-96': 'repeat(auto-fill, minmax(24rem, 1fr))',
      },
    },
  },
  plugins: [TailwindTypographyPlugin, TailwindHeadlessUIPlugin],
  darkMode: 'class',
}
