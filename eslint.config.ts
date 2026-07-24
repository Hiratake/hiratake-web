// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

// https://eslint.nuxt.com/packages/module
export default withNuxt({
  files: ['**/*.vue'],
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: { void: 'always', normal: 'always', component: 'always' },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
  },
})
