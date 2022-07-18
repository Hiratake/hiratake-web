module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: ['**/*.{jsx,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
  rules: {
    'function-no-unknown': null,
  },
}
