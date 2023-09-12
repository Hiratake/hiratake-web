// https://eslint.org/docs/latest/use/configure
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', '@nuxt/eslint-config', 'prettier'],
  rules: {
    'vue/component-tags-order': [
      'error',
      { order: ['script', 'template', 'style'] },
    ],
  },
}
