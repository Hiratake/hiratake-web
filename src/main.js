// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

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
