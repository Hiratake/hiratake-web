// https://eslint.org/docs/latest/use/configure
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['eslint:recommended', '@nuxt/eslint-config', 'prettier'],
  rules: {
    'vue/component-tags-order': [
      'error',
      { order: ['script', 'template', 'style'] },
    ],
  },
}
