// ESLint
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
    'vue/component-tags-order': [
      'error',
      { order: ['script', 'template', 'style'] },
    ],
  },
}).override('nuxt:typescript', {
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': false,
        'ts-check': false,
      },
    ],
  },
})
