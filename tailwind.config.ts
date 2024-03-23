// Types
import type { Config } from 'tailwindcss'
// Plugins
import TailwindHeadlessUIPlugin from '@headlessui/tailwindcss'

// https://tailwindcss.com/docs/configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: { primary: '#a83d3d' },
    },
  },
  plugins: [TailwindHeadlessUIPlugin],
  darkMode: 'class',
}
