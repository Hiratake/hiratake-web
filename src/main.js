import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/css/reset.css'
import '~/assets/css/variables.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, faChevronCircleDown, faSync } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(
  faSun,
  faMoon,
  faChevronCircleDown,
  faSync,
  faClock,
  faTwitter,
  faGithub,
  faDiscord
)

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('FontAwesome', FontAwesomeIcon)

  head.htmlAttrs = { lang: 'ja' }
  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicons/favicon-32x32.png',
  })
  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicons/favicon-16x16.png',
  })
  head.link.push({
    rel: 'apple-touch-icon',
    type: '180x180',
    href: '/favicons/apple-touch-icon.png',
  })
  head.link.push({
    rel: 'manifest',
    href: '/favicons/site.webmanifest',
  })
  head.link.push({
    rel: 'mask-icon',
    href: '/favicons/safari-pinned-tab.svg',
    color: '#a83d3d',
  })
  head.link.push({
    rel: 'shortcut icon',
    href: '/favicons/favicon.ico',
  })
  head.meta.push({
    name: 'msapplication-TileColor',
    content: '#a83d3d',
  })
  head.meta.push({
    name: 'msapplication-config',
    content: '/favicons/browserconfig.xml',
  })
  head.meta.push({
    name: 'theme-color',
    content: '#a83d3d',
  })
}
