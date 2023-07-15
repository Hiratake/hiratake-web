// https://textlint.github.io/docs/configuring.html
module.exports = {
  rules: {
    'preset-custom': true,
  },
  filters: {
    // https://github.com/textlint/textlint-filter-rule-allowlist
    allowlist: {
      allow: ['/^:.+?\\{.+\\}$/m'],
    },
  },
}
