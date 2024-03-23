// Types
import type { Config } from 'tailwindcss'
// Theme
import { fontFamily } from 'tailwindcss/defaultTheme'
// Plugins
import TailwindHeadlessUIPlugin from '@headlessui/tailwindcss'

// https://tailwindcss.com/docs/configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: { primary: '#a83d3d' },
      fontFamily: {
        sans: ['"Noto Sans JP"', ...fontFamily.sans],
        accent: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [TailwindHeadlessUIPlugin],
  darkMode: 'class',
}
